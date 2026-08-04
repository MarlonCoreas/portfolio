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
    if (statusElement && (status === "sent" || status === "error")) {
      statusElement.textContent = status === "sent" ? statusElement.dataset.success : statusElement.dataset.error;
      statusElement.dataset.state = status;
      statusElement.hidden = false;
      window.history.replaceState({}, "", `${window.location.pathname}#contact`);
    }

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

    const contactForm = document.querySelector<HTMLFormElement>("[data-contact-form]");
    const handleSubmit = () => track("contact_submit", { language: document.documentElement.lang });
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
    };
  }, [analyticsId]);

  return null;
}
