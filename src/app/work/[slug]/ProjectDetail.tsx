"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project, projects } from "@/data/profile";

type Props = {
  project: Project;
};

export default function ProjectDetail({ project }: Props) {
  // Find next project for navigation
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
            Back
          </Link>
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
              {project.category.ja}
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
            {project.title.ja}
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
                  Client
                </p>
                <p>{project.client}</p>
              </div>
            )}
            {project.role && (
              <div>
                <p className="mb-1 text-[12px] tracking-[0.06em] text-muted uppercase">
                  Role
                </p>
                <p>{project.role.ja}</p>
              </div>
            )}
            <div>
              <p className="mb-1 text-[12px] tracking-[0.06em] text-muted uppercase">
                Year
              </p>
              <p>{project.year}</p>
            </div>
            <div className="md:col-span-1 lg:col-start-4">
              <p className="mb-1 text-[12px] tracking-[0.06em] text-muted uppercase">
                Overview
              </p>
              <p className="leading-[1.7] text-foreground/80">
                {project.description.ja}
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Behance-style Image Stack */}
      <section className="pb-32 md:pb-40">
        <div className="mx-auto max-w-[1400px]">
          {project.detailImages?.map((src, i) => (
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
              <Image
                src={src}
                alt={`${project.title.ja} - ${i + 1}`}
                width={1400}
                height={900}
                className="block w-full h-auto"
                sizes="(max-width: 1400px) 100vw, 1400px"
                quality={90}
                priority={i < 3}
              />
            </motion.div>
          ))}
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
                Next Project
              </p>
              <div className="flex items-end justify-between gap-8">
                <h2 className="text-[clamp(24px,4vw,48px)] font-light tracking-[-0.02em]">
                  {nextProject.title.ja}
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
            &copy; {new Date().getFullYear()} Workflow Design
          </Link>
          <Link
            href="/#work"
            className="text-[12px] tracking-[0.04em] text-muted transition-colors hover:text-foreground"
          >
            All Projects
          </Link>
        </div>
      </footer>
    </div>
  );
}
