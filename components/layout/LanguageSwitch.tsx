"use client";

import { usePathname } from "vinext/shims/navigation";
import type { Locale } from "../../src/i18n";
import { alternateHref, alternateLocale } from "../../src/config/routes";

type Props = { lang: Locale; compact?: boolean };

export default function LanguageSwitch({ lang, compact = true }: Props) {
  const pathname = usePathname() || "/";
  const target = alternateLocale(lang);
  return (
    <a
      className={compact ? "language-switch" : undefined}
      href={alternateHref(pathname, lang)}
      hrefLang={target}
      lang={target}
      aria-label={target === "es" ? "Ver en español" : "View in English"}
    >
      {compact ? target.toUpperCase() : target === "es" ? "Español" : "English"}
    </a>
  );
}
