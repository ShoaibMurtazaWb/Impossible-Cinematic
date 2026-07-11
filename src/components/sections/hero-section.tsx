"use client";

import { siteContent } from "@/data/site-content";
import { Button, Logo } from "@/components/ui/primitives";
import { usePartnerModal } from "@/components/layout/partner-modal-provider";
import { useVideoModal } from "@/components/layout/video-modal-provider";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

export function HeroSection() {
  const { openPartnerModal } = usePartnerModal();
  const { openVideo } = useVideoModal();
  const prefersReducedMotion = usePrefersReducedMotion();

  const heroVideoItem = {
    title: "Hero Trailer",
    meta: "Background video",
    image: siteContent.hero.poster,
    videoUrl: siteContent.hero.video,
  };

  return (
    <section id="hero" className="relative flex min-h-screen w-full snap-start items-center justify-center overflow-hidden px-4 pb-24 pt-28 md:px-16 md:pt-36">
      <div className="absolute inset-0 film-grain" aria-hidden>
        <video
          className="absolute inset-0 h-full w-full scale-105 object-cover md:scale-110"
          src={siteContent.hero.video}
          poster={siteContent.hero.poster}
          autoPlay={!prefersReducedMotion}
          muted
          loop={!prefersReducedMotion}
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#131313]/80 via-[#131313]/45 to-[#131313]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#131313]/85 via-transparent to-[#131313]/85" />
      </div>
      <div className="relative z-10 flex w-full min-w-0 max-w-4xl flex-col items-center px-2 text-center sm:px-4">
        <div className="w-full min-w-0 px-2">
          <Logo priority className="mx-auto w-full drop-shadow-2xl" />
        </div>
        <div className="mx-auto mt-8 w-full min-w-0 max-w-2xl space-y-3">
          {siteContent.hero.lines.map((line) => (
            <p
              key={line}
              className="text-pretty text-center text-sm leading-relaxed text-[#e7bdb6]/90 sm:text-base md:text-lg lg:whitespace-nowrap"
            >
              {line}
            </p>
          ))}
        </div>
        <div className="mt-10 flex w-full min-w-0 flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row sm:items-center sm:flex-wrap">
          {siteContent.hero.ctas.map((cta) => (
            <Button
              key={cta.label}
              href={cta.label === "Watch Trailer" || cta.label === "Become a Partner" ? undefined : cta.href}
              onClick={
                cta.label === "Watch Trailer"
                  ? () => openVideo(heroVideoItem)
                  : cta.label === "Become a Partner"
                    ? openPartnerModal
                    : undefined
              }
              variant={cta.variant === "secondary" ? "glass" : cta.variant}
            >
              {cta.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
