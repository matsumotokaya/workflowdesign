"use client";

import { profile } from "@/data/profile";
import { useLanguage } from "@/lib/language";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  const { tx } = useLanguage();
  return (
    <footer className="border-t border-border px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-[12px] tracking-[0.04em] text-muted">
          &copy; {profile.studio}
        </p>
        <div className="flex items-center gap-8">
          <a
            href={`mailto:${profile.email}`}
            className="text-[12px] tracking-[0.04em] text-muted transition-colors hover:text-foreground"
          >
            {tx("labelEmail")}
          </a>
          <a
            href={profile.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] tracking-[0.04em] text-muted transition-colors hover:text-foreground"
          >
            {tx("labelFacebook")}
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] tracking-[0.04em] text-muted transition-colors hover:text-foreground"
          >
            {tx("labelLinkedin")}
          </a>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
