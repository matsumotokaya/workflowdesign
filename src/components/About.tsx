"use client";

import Image from "next/image";
import { profile, experiences } from "@/data/profile";
import { useLanguage } from "@/lib/language";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const { t, tx } = useLanguage();

  const services = [
    tx("serviceBrandStrategy"),
    tx("serviceUiUx"),
    tx("serviceWebDev"),
    tx("serviceArtDirection"),
    tx("serviceGraphicDesign"),
    tx("serviceGenerativeAi"),
  ];

  return (
    <section id="about" className="border-t border-border px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-24">
          <p className="mb-3 text-[12px] tracking-[0.1em] text-muted uppercase">
            {tx("about")}
          </p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-light tracking-[-0.02em]">
            {tx("profile")}
          </h2>
        </ScrollReveal>

        <div className="grid gap-16 md:grid-cols-[1fr_1px_1fr] md:gap-12 lg:gap-20">
          {/* Left - Bio */}
          <ScrollReveal>
            <div className="space-y-8">
              <div className="mb-2">
                <Image
                  src="/profile.png"
                  alt={t(profile.name)}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="mb-4 text-[13px] tracking-[0.08em] text-muted uppercase">
                  {tx("biography")}
                </h3>
                <p className="text-[15px] leading-[1.9] text-foreground/80">
                  {t(profile.bio)}
                </p>
                <p className="mt-4 text-[15px] leading-[1.9] text-foreground/80">
                  {tx("bioParagraph2")}
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-[13px] tracking-[0.08em] text-muted uppercase">
                  {tx("details")}
                </h3>
                <dl className="space-y-3 text-[14px]">
                  <div className="flex gap-8">
                    <dt className="w-24 shrink-0 text-muted">{tx("labelLocation")}</dt>
                    <dd>{t(profile.location)}</dd>
                  </div>
                  <div className="flex gap-8">
                    <dt className="w-24 shrink-0 text-muted">{tx("labelEducation")}</dt>
                    <dd>{t(profile.education)}</dd>
                  </div>
                  <div className="flex gap-8">
                    <dt className="w-24 shrink-0 text-muted">{tx("labelOrigin")}</dt>
                    <dd>{t(profile.origin)}</dd>
                  </div>
                  <div className="flex gap-8">
                    <dt className="w-24 shrink-0 text-muted">{tx("labelLanguages")}</dt>
                    <dd className="flex gap-3">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="text-[13px]">🇯🇵</span> {tx("langJa")}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="text-[13px]">🇬🇧</span> {tx("langEn")}
                      </span>
                    </dd>
                  </div>
                  <div className="flex gap-8">
                    <dt className="w-24 shrink-0 text-muted">{tx("labelCertifications")}</dt>
                    <dd className="space-y-1">
                      <p>{tx("cert1")}</p>
                      <p>{tx("cert2")}</p>
                      <p>{tx("cert3")}</p>
                      <p>{tx("cert4")}</p>
                    </dd>
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
                {tx("experience")}
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
                      {t(exp.role)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Services */}
              <h3 className="mb-6 mt-12 text-[13px] tracking-[0.08em] text-muted uppercase">
                {tx("services")}
              </h3>
              <div className="grid grid-cols-2 gap-3 text-[14px]">
                {services.map((service) => (
                  <span key={service} className="text-foreground/70">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Client Logos */}
        <ScrollReveal className="mt-24 border-t border-border pt-16">
          <p className="mb-8 text-[12px] tracking-[0.1em] text-muted uppercase">
            {tx("companies")}
          </p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {[
              { src: "/logos/tabelog.png", alt: "Tabelog" },
              { src: "/logos/kinarino.png", alt: "Kinarino" },
              { src: "/logos/wealthpark.png", alt: "WealthPark" },
              { src: "/logos/misumi.jpg", alt: "MiSUMi" },
              { src: "/logos/crowdbank.jpg", alt: "CrowdBank" },
            ].map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={80}
                height={32}
                className="h-24 w-auto object-contain opacity-40 grayscale"
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
