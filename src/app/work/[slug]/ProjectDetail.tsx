"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project, projects } from "@/data/profile";
import { useLanguage } from "@/lib/language";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type Props = {
  project: Project;
};

export default function ProjectDetail({ project }: Props) {
  const { t, tx } = useLanguage();

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-12">
          <Link
            href="/"
            className="text-[13px] font-medium tracking-[0.08em] uppercase"
          >
            Workflow Design
          </Link>
          <div className="flex items-center gap-6">
            <LanguageSwitcher />
            <Link
              href="/#work"
              className="flex items-center gap-2 text-[13px] tracking-[0.04em] text-muted transition-colors hover:text-foreground"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="rotate-180"
              >
                <path
                  d="M1 7h12M8 2l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {tx("back")}
            </Link>
          </div>
        </div>
      </nav>

      {/* Project Header */}
      <header className="px-6 pt-32 pb-16 md:px-12 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-3 text-[12px] tracking-[0.1em] text-muted uppercase">
              {t(project.category)}
            </p>
          </motion.div>

          <motion.h1
            className="mb-8 text-[clamp(32px,5vw,64px)] font-light leading-[1.1] tracking-[-0.02em]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {t(project.title)}
          </motion.h1>

          {/* Project Meta */}
          <motion.div
            className="grid gap-6 border-t border-border pt-8 text-[14px] md:grid-cols-4 md:gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {project.client && (
              <div>
                <p className="mb-1 text-[12px] tracking-[0.06em] text-muted uppercase">
                  {tx("client")}
                </p>
                <div className="flex items-center gap-3">
                  {project.clientLogo && (
                    <Image
                      src={project.clientLogo}
                      alt={project.client}
                      width={24}
                      height={24}
                      className="h-6 w-auto object-contain"
                    />
                  )}
                  <p>{project.client}</p>
                </div>
              </div>
            )}
            {project.role && (
              <div>
                <p className="mb-1 text-[12px] tracking-[0.06em] text-muted uppercase">
                  {tx("role")}
                </p>
                <p>{t(project.role)}</p>
              </div>
            )}
            <div>
              <p className="mb-1 text-[12px] tracking-[0.06em] text-muted uppercase">
                {tx("year")}
              </p>
              <p>{project.year}</p>
            </div>
            <div className="md:col-span-1 lg:col-start-4">
              <p className="mb-1 text-[12px] tracking-[0.06em] text-muted uppercase">
                {tx("overview")}
              </p>
              <p className="leading-[1.7] text-foreground/80">
                {t(project.description)}
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Behance-style Image Stack */}
      <section className="pb-32 md:pb-40">
        <div className="mx-auto max-w-[1400px]">
          {project.detailImages?.map((src, i) => {
            const isVideo = src.endsWith(".mp4");
            const isGif = src.endsWith(".gif");
            return (
              <motion.div
                key={i}
                className="relative w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i === 0 ? 0.3 : 0,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {isVideo ? (
                  <video
                    src={src}
                    className="block w-full h-auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : isGif ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={src}
                    alt={`${t(project.title)} - ${i + 1}`}
                    className="block w-full h-auto"
                  />
                ) : (
                  <Image
                    src={src}
                    alt={`${t(project.title)} - ${i + 1}`}
                    width={1400}
                    height={900}
                    className="block w-full h-auto"
                    sizes="(max-width: 1400px) 100vw, 1400px"
                    quality={90}
                    priority={i < 3}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Next Project Link */}
      {nextProject && (
        <section className="border-t border-border">
          <Link
            href={
              nextProject.detailImages?.length
                ? `/work/${nextProject.id}`
                : "/#work"
            }
            className="group block px-6 py-20 transition-colors hover:bg-foreground/[0.02] md:px-12 md:py-28"
          >
            <div className="mx-auto max-w-[1400px]">
              <p className="mb-3 text-[12px] tracking-[0.1em] text-muted uppercase">
                {tx("nextProject")}
              </p>
              <div className="flex items-end justify-between gap-8">
                <h2 className="text-[clamp(24px,4vw,48px)] font-light tracking-[-0.02em]">
                  {t(nextProject.title)}
                </h2>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-2"
                >
                  <path
                    d="M2 12h20M14 4l8 8-8 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Minimal Footer */}
      <footer className="border-t border-border px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <Link
            href="/"
            className="text-[12px] tracking-[0.04em] text-muted transition-colors hover:text-foreground"
          >
            &copy; Workflow Design
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/#work"
              className="text-[12px] tracking-[0.04em] text-muted transition-colors hover:text-foreground"
            >
              {tx("allProjects")}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </footer>
    </div>
  );
}
