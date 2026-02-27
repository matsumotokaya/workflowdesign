"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects, Project } from "@/data/profile";
import { useLanguage } from "@/lib/language";
import ScrollReveal from "./ScrollReveal";

function ProjectCard({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const { t, tx } = useLanguage();
  const hasDetail = !!project.detailImages?.length;

  const content = (
    <>
      {/* Image */}
      <div
        className="relative overflow-hidden bg-surface aspect-[16/9]"
      >
        <Image
          src={project.thumbnail}
          alt={t(project.title)}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          sizes={
            index === 0
              ? "(max-width: 768px) 100vw, 1400px"
              : "(max-width: 768px) 100vw, 50vw"
          }
        />

        {/* Subtle overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-black/10"
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* View project indicator */}
        {hasDetail && (
          <motion.div
            className="absolute bottom-6 right-6 flex items-center gap-2 text-[12px] tracking-[0.06em] text-white uppercase"
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 8,
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>{tx("viewProject")}</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path
                d="M1 7h12M8 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        )}
      </div>

      {/* Project Info - Always visible below */}
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[15px] font-medium tracking-[-0.01em]">
            {t(project.title)}
          </h3>
          <p className="mt-1 text-[13px] text-muted">
            {t(project.category)}
          </p>
        </div>
        <span className="mt-0.5 text-[12px] text-muted tabular-nums">
          {project.year}
        </span>
      </div>
    </>
  );

  const sharedProps = {
    className: "group block cursor-pointer",
    onMouseEnter: onHover,
    onMouseLeave: onLeave,
  };

  if (hasDetail) {
    return (
      <Link href={`/work/${project.id}`} {...sharedProps}>
        {content}
      </Link>
    );
  }

  return <div {...sharedProps}>{content}</div>;
}

export default function Work() {
  const { tx } = useLanguage();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="work" className="px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-24">
          <p className="mb-3 text-[12px] tracking-[0.1em] text-muted uppercase">
            {tx("selectedWork")}
          </p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-light tracking-[-0.02em]">
            {tx("projects")}
          </h2>
        </ScrollReveal>

        {/* Project Grid - Asymmetric 2-column */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, i) => (
            <ScrollReveal
              key={project.id}
              delay={i % 2 === 0 ? 0 : 0.1}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <ProjectCard
                project={project}
                index={i}
                isHovered={hoveredId === project.id}
                onHover={() => setHoveredId(project.id)}
                onLeave={() => setHoveredId(null)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
