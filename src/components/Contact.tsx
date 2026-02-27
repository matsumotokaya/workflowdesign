"use client";

import { profile } from "@/data/profile";
import { useLanguage } from "@/lib/language";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const { t, tx } = useLanguage();

  return (
    <section id="contact" className="border-t border-border px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          {/* Left */}
          <ScrollReveal>
            <p className="mb-3 text-[12px] tracking-[0.1em] text-muted uppercase">
              {tx("contact")}
            </p>
            <h2 className="mb-8 text-[clamp(28px,4vw,48px)] font-light tracking-[-0.02em]">
              {tx("contactHeading")}
            </h2>
            <p className="max-w-md text-[15px] leading-[1.8] text-muted">
              {tx("contactDescription")}
            </p>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-10">
              <div>
                <h3 className="mb-3 text-[12px] tracking-[0.08em] text-muted uppercase">
                  {tx("labelEmail")}
                </h3>
                <a
                  href={`mailto:${profile.email}`}
                  className="nav-link-underline relative inline-block text-[18px] tracking-[-0.01em] md:text-[20px]"
                >
                  {profile.email}
                </a>
              </div>

              <div>
                <h3 className="mb-3 text-[12px] tracking-[0.08em] text-muted uppercase">
                  {tx("labelFacebook")}
                </h3>
                <a
                  href={profile.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link-underline relative inline-block text-[18px] tracking-[-0.01em] md:text-[20px]"
                >
                  Facebook
                </a>
              </div>

              <div>
                <h3 className="mb-3 text-[12px] tracking-[0.08em] text-muted uppercase">
                  {tx("labelLinkedin")}
                </h3>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link-underline relative inline-block text-[18px] tracking-[-0.01em] md:text-[20px]"
                >
                  LinkedIn
                </a>
              </div>

              <div>
                <h3 className="mb-3 text-[12px] tracking-[0.08em] text-muted uppercase">
                  {tx("labelLocationContact")}
                </h3>
                <p className="text-[18px] tracking-[-0.01em] md:text-[20px]">
                  {t(profile.location)}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
