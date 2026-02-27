"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/language";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleLang = () => setLang(lang === "en" ? "ja" : "en");

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > 50);
    setIsHidden(currentScrollY > lastScrollY && currentScrollY > 100);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        const offset = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <>
      {/* Main Nav Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/90 backdrop-blur-md" : "bg-transparent"
        } ${isHidden && !isOpen ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-12">
          {/* Logo */}
          <a
            href="#"
            className="relative z-[60] text-[13px] font-medium tracking-[0.08em] uppercase"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsOpen(false);
            }}
          >
            Workflow Design
          </a>

          {/* Desktop Nav Links + Lang Toggle */}
          <div className="hidden items-center gap-12 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link-underline relative text-[13px] tracking-[0.04em]"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleLang}
              className="text-[13px] tracking-[0.04em] text-muted transition-colors hover:text-foreground"
            >
              {lang === "en" ? "JA" : "EN"}
            </button>
          </div>

          {/* Mobile: Lang Toggle + Hamburger */}
          <div className="relative z-[60] flex items-center gap-4 md:hidden">
            <button
              onClick={toggleLang}
              className="text-[13px] tracking-[0.04em] text-muted transition-colors hover:text-foreground"
            >
              {lang === "en" ? "JA" : "EN"}
            </button>
            <button
              className="flex h-10 w-10 flex-col items-center justify-center gap-[7px]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <motion.span
                className="block h-[1.5px] w-6 bg-current origin-center"
                animate={
                  isOpen
                    ? { rotate: 45, y: 4.25 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.span
                className="block h-[1.5px] w-6 bg-current origin-center"
                animate={
                  isOpen
                    ? { rotate: -45, y: -4.25 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col justify-center bg-overlay px-6 md:px-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block text-white text-[clamp(36px,8vw,64px)] font-light leading-[1.2] tracking-[-0.02em] transition-opacity hover:opacity-50"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* Overlay Footer */}
            <motion.div
              className="absolute bottom-12 left-6 right-6 flex justify-between text-[12px] text-white/50 tracking-[0.04em] md:left-12 md:right-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span>hello@workflowdesign.net</span>
              <span>@whatif.ep</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
