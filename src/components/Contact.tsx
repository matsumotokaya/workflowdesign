"use client";

import { profile } from "@/data/profile";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          {/* Left */}
          <ScrollReveal>
            <p className="mb-3 text-[12px] tracking-[0.1em] text-muted uppercase">
              Contact
            </p>
            <h2 className="mb-8 text-[clamp(28px,4vw,48px)] font-light tracking-[-0.02em]">
              お仕事のご相談
            </h2>
            <p className="max-w-md text-[15px] leading-[1.8] text-muted">
              ブランディング、UI/UXデザイン、ウェブ開発など、
              プロジェクトについてお気軽にご連絡ください。
            </p>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-10">
              <div>
                <h3 className="mb-3 text-[12px] tracking-[0.08em] text-muted uppercase">
                  Email
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
                  Instagram
                </h3>
                <a
                  href={profile.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link-underline relative inline-block text-[18px] tracking-[-0.01em] md:text-[20px]"
                >
                  {profile.social.instagramHandle}
                </a>
              </div>

              <div>
                <h3 className="mb-3 text-[12px] tracking-[0.08em] text-muted uppercase">
                  Location
                </h3>
                <p className="text-[18px] tracking-[-0.01em] md:text-[20px]">
                  {profile.location.ja}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
