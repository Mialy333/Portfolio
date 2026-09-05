import { createContext, useEffect, useMemo, useState } from "react";
import { CONTENT } from "./content";

const STORAGE_KEY = "portfolio-lang";
const DEFAULT_LANG = "fr";
const SUPPORTED = ["fr", "en"];

export const LanguageContext = createContext(null);

function readStoredLang() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
  } catch {
    /* localStorage indisponible (SSR, mode privé) : on retombe sur le défaut */
  }
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((prev) => (prev === "fr" ? "en" : "fr")),
      // Raccourci vers le bloc de contenu de la langue courante.
      t: CONTENT[lang],
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}
