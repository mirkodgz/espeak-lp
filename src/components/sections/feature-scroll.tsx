"use client";

import { Section } from "@/components/section";
import { easeOutCubic } from "@/lib/animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function FeatureScroll() {
  const phoneRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: phoneRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5], [30, 0], {
    ease: easeOutCubic,
  });

  return (
    <Section
      id="feature-scroll"
      title="Esperienza"
      subtitle="Un'app diversa da tutte le altre"
      titleClassName="pb-4 lg:pb-0"
      className="container px-4 sm:px-10 mx-auto max-w-[1200px]"
    >
      <div className="flex items-center justify-center select-none">
        <motion.img
          ref={phoneRef}
          src="/device-5.webp"
          alt="eSpeak App Screenshot"
          className="w-auto h-auto max-w-[300px] sm:max-w-[400px] object-contain mx-auto"
          style={{ y }}
        />
      </div>
    </Section>
  );
}
