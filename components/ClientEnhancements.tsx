"use client";

import { useEffect } from "react";

type Props = {
  analyticsId?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ClientEnhancements({ analyticsId }: Props) {
  useEffect(() => {
    const header = document.querySelector("[data-header]");
    const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 18);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let observer: IntersectionObserver | undefined;

    if (reducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12 }
      );
      revealElements.forEach((element) => observer?.observe(element));
    }

    const spotlightElements = Array.from(document.querySelectorAll<HTMLElement>("[data-spotlight]"));
    const updateSpotlight = (event: PointerEvent) => {
      const element = event.currentTarget as HTMLElement;
      const rect = element.getBoundingClientRect();
      element.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
      element.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    };
    if (!reducedMotion) {
      spotlightElements.forEach((element) => element.addEventListener("pointermove", updateSpotlight));
    }

    const status = new URLSearchParams(window.location.search).get("contact");
    const statusElement = document.querySelector<HTMLElement>("[data-contact-status]");
    const contactForm = document.querySelector<HTMLFormElement>("[data-contact-form]");
    const contactPanel = statusElement?.closest<HTMLElement>(".contact-panel");
    const resetContactButton = statusElement?.querySelector<HTMLButtonElement>("[data-contact-reset]");
    const submitButton = contactForm?.querySelector<HTMLButtonElement>("[data-contact-submit]");
    const submitLabel = submitButton?.querySelector<HTMLElement>("[data-contact-submit-label]");
    const defaultSubmitLabel = submitLabel?.textContent || "";

    type ContactOutcome = { confirmed?: boolean; booking?: boolean };

    const showContactStatus = (state: "sent" | "error", moveToStatus = false, outcome: ContactOutcome = {}) => {
      if (!statusElement) return;

      const isSuccess = state === "sent";
      const kickerElement = statusElement.querySelector<HTMLElement>("[data-contact-result-kicker]");
      const titleElement = statusElement.querySelector<HTMLElement>("[data-contact-result-title]");
      const messageElement = statusElement.querySelector<HTMLElement>("[data-contact-result-message]");
      const iconElement = statusElement.querySelector<HTMLElement>("[data-contact-result-icon]");
      const bookingElement = statusElement.querySelector<HTMLElement>("[data-contact-booking]");

      // Only promise the confirmation email when the server says it went out.
      const successMessage = outcome.confirmed
        ? statusElement.dataset.success || ""
        : statusElement.dataset.successPlain || statusElement.dataset.success || "";

      if (kickerElement) kickerElement.textContent = isSuccess ? statusElement.dataset.successKicker || "" : statusElement.dataset.errorKicker || "";
      if (titleElement) titleElement.textContent = isSuccess ? statusElement.dataset.successTitle || "" : statusElement.dataset.errorTitle || "";
      if (messageElement) messageElement.textContent = isSuccess ? successMessage : statusElement.dataset.error || "";
      if (iconElement) iconElement.textContent = isSuccess ? "✓" : "!";
      bookingElement?.toggleAttribute("hidden", outcome.booking === false);
      statusElement.dataset.state = state;
      statusElement.hidden = false;
      contactForm?.toggleAttribute("hidden", isSuccess);
      contactPanel?.classList.toggle("is-success", isSuccess);
      window.requestAnimationFrame(() => {
        statusElement.focus({ preventScroll: true });
        if (moveToStatus) {
          statusElement.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "center" });
        }
      });
    };

    if (status === "sent" || status === "error") {
      showContactStatus(status);
      window.history.replaceState({}, "", `${window.location.pathname}#contact`);
    }

    const resetContact = () => {
      if (!statusElement || !contactForm) return;
      statusElement.hidden = true;
      delete statusElement.dataset.state;
      statusElement.querySelector<HTMLElement>("[data-contact-booking]")?.removeAttribute("hidden");
      contactForm.hidden = false;
      contactForm.reset();
      contactPanel?.classList.remove("is-success");
      window.history.replaceState({}, "", `${window.location.pathname}#contact`);
      contactForm.querySelector<HTMLInputElement>("input[name='name']")?.focus();
    };
    resetContactButton?.addEventListener("click", resetContact);

    const track = (eventName: string, parameters: Record<string, string> = {}) => {
      window.dispatchEvent(new CustomEvent("portfolio:conversion", { detail: { eventName, ...parameters } }));
      window.gtag?.("event", eventName, parameters);
    };

    const trackedElements = Array.from(document.querySelectorAll<HTMLElement>("[data-track]"));
    const handleTrackedClick = (event: Event) => {
      const element = event.currentTarget as HTMLElement;
      track(element.dataset.track || "interaction", { label: element.dataset.trackLabel || "" });
    };
    trackedElements.forEach((element) => element.addEventListener("click", handleTrackedClick));

    const handleSubmit = async (event: SubmitEvent) => {
      if (!contactForm || !submitButton || !submitLabel) return;

      event.preventDefault();
      submitButton.disabled = true;
      contactForm.setAttribute("aria-busy", "true");
      submitLabel.textContent = submitButton.dataset.sending || defaultSubmitLabel;
      track("contact_submit", { language: document.documentElement.lang });

      try {
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: new FormData(contactForm),
          headers: {
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest"
          }
        });
        const contentType = response.headers.get("content-type") || "";
        const payload = contentType.includes("application/json")
          ? await response.json() as { status?: string; confirmed?: boolean; booking?: boolean }
          : null;
        const result = payload?.status === "sent" && response.ok ? "sent" : "error";

        if (result === "sent") contactForm.reset();
        showContactStatus(result, true, { confirmed: payload?.confirmed, booking: payload?.booking });
        track(result === "sent" ? "contact_success" : "contact_error", {
          language: document.documentElement.lang
        });
      } catch {
        showContactStatus("error", true);
        track("contact_error", { language: document.documentElement.lang });
      } finally {
        submitButton.disabled = false;
        contactForm.removeAttribute("aria-busy");
        submitLabel.textContent = defaultSubmitLabel;
      }
    };
    contactForm?.addEventListener("submit", handleSubmit);

    if (analyticsId && !document.querySelector(`[data-analytics-id="${analyticsId}"]`)) {
      const analyticsScript = document.createElement("script");
      analyticsScript.async = true;
      analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(analyticsId)}`;
      analyticsScript.dataset.analyticsId = analyticsId;
      document.head.appendChild(analyticsScript);
      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
      window.gtag("js", new Date());
      window.gtag("config", analyticsId, { anonymize_ip: true, allow_google_signals: false });
    }

    return () => {
      window.removeEventListener("scroll", updateHeader);
      observer?.disconnect();
      spotlightElements.forEach((element) => element.removeEventListener("pointermove", updateSpotlight));
      trackedElements.forEach((element) => element.removeEventListener("click", handleTrackedClick));
      contactForm?.removeEventListener("submit", handleSubmit);
      resetContactButton?.removeEventListener("click", resetContact);
    };
  }, [analyticsId]);

  return null;
}
