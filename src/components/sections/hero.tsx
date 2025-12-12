"use client";

import { Icons } from "@/components/icons";
import { Section } from "@/components/section";
import { easeInOutCubic } from "@/lib/animation";
import { siteConfig } from "@/lib/config";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const { scrollY } = useScroll({
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollY, [0, 300], [50, 0]);

  return (
    <Section id="hero" className="min-h-[100vh] w-full overflow-hidden">
      <main className="mx-auto pt-16 sm:pt-24 md:pt-16 text-center relative px-4">
        <div className="relative">
          <motion.div
            initial={{ scale: 4.5, height: "80vh" }}
            animate={{ scale: 1, height: "15vh" }}
            transition={{
              scale: { delay: 0, duration: 1.8, ease: easeInOutCubic },
              height: { delay: 0, duration: 1.8, ease: easeInOutCubic },
            }}
            className="mb-16 relative z-20 flex items-center justify-center"
            style={{ transformOrigin: "top" }}
          >
            <motion.img
              src="/Favicon-512x512-espeak.png"
              alt="eSpeak Logo"
              className="h-full w-auto object-contain mx-auto"
              style={{ maxHeight: "100%" }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            />
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easeInOutCubic }}
            className="text-5xl sm:text-6xl font-bold mb-4 tracking-tighter text-balance"
          >
            <span className="block">{siteConfig.hero.headlineTop}</span>
            <span className="block">
              {siteConfig.hero.headlineBottomPrefix}{" "}
              <span className={siteConfig.hero.highlightClassName}>
                {siteConfig.hero.headlineHighlight}
              </span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: easeInOutCubic }}
            className="max-w-2xl mx-auto text-xl mb-8 font-medium text-balance"
          >
            {siteConfig.hero.subheadline}
          </motion.p>
          <p className="text-sm text-muted-foreground mb-6">
            {siteConfig.hero.availability}
          </p>
          {/* Botones CTA "Inizia ora" / Download buttons ocultos temporalmente */}
          {/* <div className="flex justify-center mb-16">
            <motion.img
              src="/download-black.svg"
              alt="Download"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="w-40 flex-shrink-0 dark:hidden block"
            />
            <motion.img
              src="/download-white.svg"
              alt="Download"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="w-40 flex-shrink-0 hidden dark:block"
            />
          </div> */}
        </div>
        <div className="flex items-center justify-center h-auto sm:h-[500px] select-none">
          <motion.img
            src="/screenshot02-profilo-victor.png"
            alt="eSpeak App Screenshot"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ y }}
            transition={{ duration: 1, delay: 1 }}
            className="w-auto max-w-[300px] sm:max-w-[400px] h-auto max-h-[500px] object-contain"
          />
        </div>
      </main>
    </Section>
  );
}
