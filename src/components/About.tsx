"use client";

import { profile, experiences } from "@/data/profile";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-24">
          <p className="mb-3 text-[12px] tracking-[0.1em] text-muted uppercase">
            About
          </p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-light tracking-[-0.02em]">
            プロフィール
          </h2>
        </ScrollReveal>

        <div className="grid gap-16 md:grid-cols-[1fr_1px_1fr] md:gap-12 lg:gap-20">
          {/* Left - Bio */}
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-[13px] tracking-[0.08em] text-muted uppercase">
                  Biography
                </h3>
                <p className="text-[15px] leading-[1.9] text-foreground/80">
                  {profile.bio.ja}
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-[13px] tracking-[0.08em] text-muted uppercase">
                  Details
                </h3>
                <dl className="space-y-3 text-[14px]">
                  <div className="flex gap-8">
                    <dt className="w-24 shrink-0 text-muted">所在地</dt>
                    <dd>{profile.location.ja}</dd>
                  </div>
                  <div className="flex gap-8">
                    <dt className="w-24 shrink-0 text-muted">学歴</dt>
                    <dd>{profile.education.ja}</dd>
                  </div>
                  <div className="flex gap-8">
                    <dt className="w-24 shrink-0 text-muted">出身</dt>
                    <dd>{profile.origin.ja}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </ScrollReveal>

          {/* Divider */}
          <div className="hidden bg-border md:block" />

          {/* Right - Experience */}
          <ScrollReveal delay={0.1}>
            <div>
              <h3 className="mb-6 text-[13px] tracking-[0.08em] text-muted uppercase">
                Experience
              </h3>
              <ul className="space-y-0">
                {experiences.map((exp, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between border-b border-border py-5 transition-colors first:border-t hover:bg-foreground/[0.02]"
                  >
                    <span className="text-[15px] font-medium">
                      {exp.company}
                    </span>
                    <span className="text-[13px] text-muted">
                      {exp.role.ja}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Services */}
              <h3 className="mb-6 mt-12 text-[13px] tracking-[0.08em] text-muted uppercase">
                Services
              </h3>
              <div className="grid grid-cols-2 gap-3 text-[14px]">
                {[
                  "ブランド戦略",
                  "UI/UXデザイン",
                  "ウェブ開発",
                  "アートディレクション",
                  "グラフィックデザイン",
                  "生成AI",
                ].map((service) => (
                  <span key={service} className="text-foreground/70">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
