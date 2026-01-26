"use client";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { useRef } from "react";

interface PricingPlan {
  name: string;
  href: string;
  price: string;
  period: string;
  yearlyPrice: string;
  savings?: string;
  features: string[];
  description: string;
  buttonText: string;
  isPopular: boolean;
  badge?: string;
}

export function Pricing() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacities = [
    useTransform(scrollYProgress, [0, 0.1, 0.3], [0, 0, 1]),
    useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0, 1]),
    useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 0, 1]),
  ];

  const yTransforms = [
    useTransform(scrollYProgress, [0, 0.1, 0.3], [100, 100, 0]),
    useTransform(scrollYProgress, [0, 0.2, 0.4], [100, 100, 0]),
    useTransform(scrollYProgress, [0, 0.3, 0.5], [100, 100, 0]),
  ];

  return (
    <Section
      id="pricing"
      title="Scegli il tuo piano verso la fluenza"
      subtitle="Accedi ora a conversazioni illimitate con Giulia, il tuo tutor AI disponibile 24/7."
      className="container px-10 mx-auto max-w-[var(--max-container-width)] mt-2.5 sm:mt-0"
      titleClassName="pb-4 lg:pb-0"
      ref={ref}
    >
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto py-10 lg:pt-4">
        {(siteConfig.pricing as PricingPlan[]).map((plan, index) => (
          <motion.div
            key={plan.name}
            style={{ opacity: opacities[index] || 1, y: yTransforms[index] || 0 }}
            className={`bg-white p-6 rounded-3xl grid grid-rows-[auto_auto_1fr_auto] border ${plan.isPopular ? 'ring-2 ring-primary border-primary' : 'border-border shadow-sm'}`}
          >
            {plan.badge && (
              <div className="text-xs font-semibold text-primary mb-2 uppercase">{plan.badge}</div>
            )}
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
            <div className="text-4xl font-bold text-primary mb-2">
              {plan.price}
              <span className="text-sm font-normal text-muted-foreground">
                /{plan.period}
              </span>
            </div>
            {plan.yearlyPrice !== plan.price && plan.name !== "Mensile" && (
              <div className="text-xs text-muted-foreground mb-4">
                (Pagamento unico di {plan.yearlyPrice}{plan.savings ? ` - ${plan.savings}` : ''})
              </div>
            )}
            <p className="text-sm text-muted-foreground mb-4">
              {plan.description}
            </p>

            <div className="space-y-3 mb-6">
              {plan.features.map((feature: string, featureIndex: number) => (
                <div key={featureIndex} className="flex items-center">
                  <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <Button
              variant={"cta"}
              size="sm"
              className="rounded-full"
              asChild
            >
              <a href={plan.href} target="_blank" rel="noopener noreferrer">
                {plan.buttonText}
                <ChevronRightIcon className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
