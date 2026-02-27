"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, TranslationKey } from "@/data/translations";

export type Lang = "en" | "ja" | "zh-TW" | "zh-CN" | "ko";

export const LANGS: Lang[] = ["en", "ja", "zh-TW", "zh-CN", "ko"];

export const LANG_LABELS: Record<Lang, string> = {
  en: "EN",
  ja: "JA",
  "zh-TW": "\u7E41\u4E2D",
  "zh-CN": "\u7B80\u4E2D",
  ko: "\uD55C",
};

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (obj: Record<string, string>) => string;
  tx: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && LANGS.includes(saved)) {
      setLangState(saved);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("lang", lang);
      document.documentElement.lang = lang;
    }
  }, [lang, mounted]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
  };

  const t = (obj: Record<string, string>) => obj[lang] ?? obj["en"] ?? "";
  const tx = (key: TranslationKey) => translations[lang]?.[key] ?? translations["en"][key];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tx }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
