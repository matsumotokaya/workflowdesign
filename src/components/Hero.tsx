"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { useLanguage } from "@/lib/language";

export default function Hero() {
  const { t, tx } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20 md:px-12">
      <div className="mx-auto max-w-[1400px] w-full">
        <div className="max-w-4xl">
          {/* Name - sub */}
          <div className="overflow-hidden mb-2">
            <motion.p
              className="text-[13px] tracking-[0.08em] text-muted uppercase"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {profile.name.ja}
            </motion.p>
          </div>

          {/* Name - English (large display) */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              className="text-[clamp(40px,7vw,96px)] font-light leading-[0.95] tracking-[-0.03em]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {profile.name.en}
            </motion.h1>
          </div>

          {/* Divider */}
          <motion.div
            className="mb-8 h-px bg-border"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ transformOrigin: "left" }}
          />

          {/* Title & Bio */}
          <div className="grid gap-8 md:grid-cols-2 md:gap-16">
            <motion.p
              className="text-[15px] font-medium tracking-[0.02em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {t(profile.title)}
            </motion.p>

            <motion.p
              className="text-[15px] leading-[1.8] text-muted"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {t(profile.bio)}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-[11px] tracking-[0.1em] text-muted uppercase">
          {tx("scroll")}
        </span>
        <motion.div
          className="h-8 w-px bg-border"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
