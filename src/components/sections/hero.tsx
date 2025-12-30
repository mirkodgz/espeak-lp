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
    <Section id="hero" className="h-auto pb-20 md:pb-32 w-full overflow-hidden">
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
              src="/espeak-logotipo-600px-height.png"
              alt="eSpeak Logo"
              className="h-full w-auto max-w-[65%] md:max-w-none object-contain mx-auto"
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
            className="text-4xl sm:text-6xl lg:text-[50px] font-bold mb-4 tracking-tighter text-balance"
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
        <div className="flex items-center justify-center h-auto min-h-[500px] select-none">
          <motion.img
            src="/screenshot02-profilo-victor.png"
            alt="eSpeak App Screenshot"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ y }}
            transition={{ duration: 1, delay: 1 }}
            className="w-auto max-w-[300px] sm:max-w-[400px] h-auto max-h-[500px] object-contain hidden"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ y }}
            transition={{ duration: 1, delay: 1 }}
            className="w-full max-w-[350px] md:max-w-[450px] relative z-10 shadow-2xl rounded-[8px] overflow-hidden border-4 border-gray-900/10 dark:border-gray-100/10"
          >
            <div
              style={{
                position: "relative",
                paddingTop: "120.31602708803612%",
              }}
            >
              <iframe
                src="https://customer-cps5jrevd1ex7gds.cloudflarestream.com/87300be31ba4fbcd2c1bdd0980dd1505/iframe"
                loading="lazy"
                style={{
                  border: "none",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen={true}
              ></iframe>
            </div>
          </motion.div>
        </div>
      </main>
    </Section>
  );
}
