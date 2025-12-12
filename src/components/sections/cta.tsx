/* eslint-disable @next/next/no-img-element */
import Marquee from "@/components/ui/marquee";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight, HeartHandshake } from "lucide-react";

const reviews = [
  {
    name: "Maria",
    username: "@maria",
    body: "Finalmente riesco a conversare senza ansia! espeak è incredibile.",
    img: "https://avatar.vercel.sh/maria",
  },
  {
    name: "Luca",
    username: "@luca",
    body: "Ho migliorato più in 2 mesi che in 2 anni di corsi tradizionali!",
    img: "https://avatar.vercel.sh/luca",
  },
  {
    name: "Sophie",
    username: "@sophie",
    body: "Mi ha dato la sicurezza per affrontare colloqui in inglese. Fantastico!",
    img: "https://avatar.vercel.sh/sophie",
  },
  {
    name: "Emma",
    username: "@emma",
    body: "Ho superato il blocco e ora converso tranquillamente. Consigliatissima!",
    img: "https://avatar.vercel.sh/emma",
  },
  {
    name: "Andrea",
    username: "@andrea",
    body: "Ogni conversazione è diversa e interessante. Non è solo esercizi!",
    img: "https://avatar.vercel.sh/andrea",
  },
  {
    name: "Sarah",
    username: "@sarah",
    body: "Le situazioni reali sono fantastiche! Utile per la vita quotidiana.",
    img: "https://avatar.vercel.sh/sarah",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function CTA() {
  return (
    <section id="cta">
      <div className="py-14">
        <div className="container flex w-full flex-col items-center justify-center p-4 mx-auto max-w-[var(--max-container-width)]">
          <div className="relative flex w-full max-w-[1000px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border p-10 py-14">
            <div className="absolute rotate-[35deg]">
              <Marquee pauseOnHover className="[--duration:20s]" repeat={3}>
                {firstRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s]"
                repeat={3}
              >
                {secondRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee pauseOnHover className="[--duration:20s]" repeat={3}>
                {firstRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s]"
                repeat={3}
              >
                {secondRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee pauseOnHover className="[--duration:20s]" repeat={3}>
                {firstRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s]"
                repeat={3}
              >
                {secondRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
            </div>
            <div className="z-10 mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32">
              <HeartHandshake className="mx-auto size-16 text-black dark:text-white lg:size-24" />
            </div>
            <div className="z-10 mt-4 flex flex-col items-center text-center text-black dark:text-white">
              <h1 className="text-3xl font-bold lg:text-4xl">
                Pronto a portare il tuo inglese al livello successivo?
              </h1>
              <p className="mt-2">
                Parla inglese con sicurezza. Parla inglese come si vive.
              </p>
              <a
                href="/"
                className={cn(
                  buttonVariants({
                    size: "lg",
                    variant: "cta",
                  }),
                  "group mt-4 rounded-[2rem] px-6"
                )}
              >
                Inizia ora con espeak
                <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
              </a>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-white to-70% dark:to-black" />
          </div>
        </div>
      </div>
    </section>
  );
}
