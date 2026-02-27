"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, LANGS, LANG_LABELS, type Lang } from "@/lib/language";

const LANG_FULL_LABELS: Record<Lang, string> = {
  en: "English",
  ja: "\u65E5\u672C\u8A9E",
  "zh-TW": "\u7E41\u9AD4\u4E2D\u6587",
  "zh-CN": "\u7B80\u4F53\u4E2D\u6587",
  ko: "\uD55C\uAD6D\uC5B4",
};

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-[13px] tracking-[0.04em] text-muted transition-colors hover:text-foreground"
        aria-label="Change language"
      >
        {/* Material Symbols: language (globe) */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="opacity-70"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
        {LANG_LABELS[lang]}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 top-full mt-2 min-w-[140px] overflow-hidden rounded-lg border border-border bg-surface shadow-lg"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
          >
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLang(l);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-[13px] tracking-[0.02em] transition-colors hover:bg-foreground/[0.04] ${
                  l === lang ? "text-foreground font-medium" : "text-muted"
                }`}
              >
                <span>{LANG_FULL_LABELS[l]}</span>
                <span className="text-[11px] text-muted/60">{LANG_LABELS[l]}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
