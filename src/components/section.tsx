"use client";

import { easeInOutCubic } from "@/lib/animation";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { forwardRef, useRef } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    { id, title, subtitle, description, children, className, align },
    forwardedRef
  ) => {
    const internalRef = useRef<HTMLElement>(null);
    const ref = forwardedRef || internalRef;

    const sectionId = title ? title.toLowerCase().replace(/\s+/g, "-") : id;
    const alignmentClass =
      align === "left"
        ? "text-left"
        : align === "right"
        ? "text-right"
        : "text-center";

    const { scrollYProgress } = useScroll({
      target: ref as React.RefObject<HTMLElement>,
      offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [0, 0, 1], {
      ease: easeInOutCubic,
    });
    const y = useTransform(scrollYProgress, [0, 0.05, 0.1], [30, 30, 0], {
      ease: easeInOutCubic,
    });

    return (
      <section id={id || sectionId} ref={ref}>
        <div className={cn("sm:py-20 py-12", className)}>
          {(title || subtitle || description) && (
            <div className={cn(alignmentClass, "space-y-4 pb-10 mx-auto")}>
              {title && (
                <motion.h2
                  className="text-sm text-primary text-balance font-mono font-semibold tracking-wider uppercase"
                  style={{ opacity, y }}
                >
                  {title}
                </motion.h2>
              )}

              {subtitle && (
                <motion.h3
                  className={cn(
                    // Keep section headings visually consistent across breakpoints:
                    // - Subtitle (main heading): 40px
                    // - Body/description: handled below
                    "mx-0 mt-4 max-w-lg text-balance font-bold sm:max-w-none leading-[1.2] tracking-tighter text-foreground lowercase text-[40px]",
                    align === "center"
                      ? "mx-auto"
                      : align === "right"
                      ? "ml-auto"
                      : ""
                  )}
                  style={{ opacity, y }}
                >
                  {subtitle}
                </motion.h3>
              )}
              {description && (
                <motion.p
                  className={cn(
                    // Section description/body: 20px
                    "mt-6 text-xl leading-8 text-muted-foreground text-balance max-w-2xl",
                    align === "center"
                      ? "mx-auto"
                      : align === "right"
                      ? "ml-auto"
                      : ""
                  )}
                  style={{ opacity, y }}
                >
                  {description}
                </motion.p>
              )}
            </div>
          )}
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
