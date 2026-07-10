/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Diamond, Film, Globe, Megaphone, Play, X } from "lucide-react";
import {
  siteContent,
  type SponsorBenefit,
  type TeamMember,
  type VideoItem,
} from "@/data/site-content";
import { Button, GlassCard, Logo, SectionHeading } from "@/components/ui/primitives";
import { usePartnerModal } from "@/components/layout/partner-modal-provider";

function VideoCard({
  item,
  onPlay,
}: {
  item: VideoItem;
  onPlay: (item: VideoItem) => void;
}) {
  return (
    <article
      className="group min-w-[85vw] snap-center cursor-pointer transition-transform duration-500 hover:scale-[1.015] md:min-w-[600px]"
      onClick={() => onPlay(item)}
    >
      <div className="relative mb-6 h-[410px] overflow-hidden rounded-xl border border-white/10 bg-[#ffffff06]">
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url("${item.image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/45 transition-colors group-hover:bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid h-20 w-20 place-items-center rounded-full border border-white/30 bg-black/45 text-[#be0000] backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-[#be0000]">
            <Play size={32} fill="currentColor" />
          </div>
        </div>
      </div>
      <h3 className="font-display text-3xl uppercase text-[#e5e2e1] transition-colors group-hover:text-[#be0000]">
        {item.title}
      </h3>
      <p className="mt-1 text-sm text-[#e7bdb6]/80">{item.meta}</p>
    </article>
  );
}

function TeamCard({ name, role, bio, image, imagePosition = "center" }: TeamMember) {
  return (
    <GlassCard className="group text-center transition-all duration-300 hover:scale-[1.02] hover:border-[#be0000]/50">
      <div className="mx-auto mb-5 h-32 w-32 overflow-hidden rounded-full border border-white/10 bg-[#1a1a1a]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          style={{ objectPosition: imagePosition }}
        />
      </div>
      <h3 className="font-display text-[2rem] uppercase text-[#e5e2e1] transition-colors group-hover:text-[#be0000]">
        {name}
      </h3>
      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#ffb4a8]">{role}</p>
      <p className="mt-4 text-sm leading-relaxed text-[#e7bdb6]/85">{bio}</p>
    </GlassCard>
  );
}

function BenefitIcon({ icon }: { icon: SponsorBenefit["icon"] }) {
  if (icon === "globe") return <Globe size={20} />;
  if (icon === "diamond") return <Diamond size={20} />;
  if (icon === "film") return <Film size={20} />;
  return <Megaphone size={20} />;
}

function BenefitCard({ title, description, icon }: SponsorBenefit) {
  return (
    <GlassCard className="h-full transition-all duration-300 hover:-translate-y-2 hover:scale-[0.985]">
      <span className="mb-6 inline-flex rounded-full border border-white/20 bg-white/5 p-3 text-[#be0000]">
        <BenefitIcon icon={icon} />
      </span>
      <h3 className="font-display text-3xl uppercase text-[#e5e2e1]">{title}</h3>
      <p className="mt-3 text-[#e7bdb6]/80">{description}</p>
    </GlassCard>
  );
}

function StorySlider() {
  const slides = siteContent.story.slides;
  const viewportRef = useRef<HTMLDivElement>(null);
  const holdTimeoutRef = useRef<number | null>(null);
  const holdIntervalRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const dragActiveRef = useRef(false);

  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const clearHold = useCallback(() => {
    if (holdTimeoutRef.current) window.clearTimeout(holdTimeoutRef.current);
    if (holdIntervalRef.current) window.clearInterval(holdIntervalRef.current);
    holdTimeoutRef.current = null;
    holdIntervalRef.current = null;
  }, []);

  const goPrev = useCallback(() => {
    setIndex((value) => (value === 0 ? slides.length - 1 : value - 1));
  }, [slides.length]);

  const goNext = useCallback(() => {
    setIndex((value) => (value === slides.length - 1 ? 0 : value + 1));
  }, [slides.length]);

  const startHold = (direction: "prev" | "next") => {
    clearHold();
    const step = direction === "prev" ? goPrev : goNext;
    step();
    holdTimeoutRef.current = window.setTimeout(() => {
      holdIntervalRef.current = window.setInterval(step, 380);
    }, 280);
  };

  useEffect(() => () => clearHold(), [clearHold]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragActiveRef.current = true;
    dragStartXRef.current = event.clientX;
    setIsDragging(true);
    viewportRef.current?.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragActiveRef.current || !viewportRef.current) return;
    const width = viewportRef.current.offsetWidth || 1;
    const delta = event.clientX - dragStartXRef.current;
    setDragOffset((delta / width) * 100);
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragActiveRef.current) return;
    dragActiveRef.current = false;
    setIsDragging(false);

    if (dragOffset <= -12) goNext();
    else if (dragOffset >= 12) goPrev();

    setDragOffset(0);
    try {
      viewportRef.current?.releasePointerCapture(event.pointerId);
    } catch {
      // ignore release errors when capture was already lost
    }
  };

  return (
    <div className="relative mx-auto max-w-5xl">
      <div
        ref={viewportRef}
        className="relative aspect-[16/10] cursor-grab overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e0e] active:cursor-grabbing touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div
          className={`flex h-full w-full ${isDragging ? "" : "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"}`}
          style={{
            transform: `translateX(calc(-${index * 100}% + ${dragOffset}%))`,
          }}
        >
          {slides.map((slide) => (
            <div key={slide.image} className="relative h-full w-full shrink-0 grow-0 basis-full">
              <img
                src={slide.image}
                alt={slide.caption}
                className="pointer-events-none h-full w-full object-cover select-none"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 font-display text-2xl uppercase text-white md:text-4xl">
                {slide.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          type="button"
          aria-label="Previous slide"
          onPointerDown={(event) => {
            event.preventDefault();
            startHold("prev");
          }}
          onPointerUp={clearHold}
          onPointerLeave={clearHold}
          onPointerCancel={clearHold}
          className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-white/15 text-[#e5e2e1] transition-transform duration-150 active:scale-90 hover:border-[#be0000]/50 hover:bg-white/5"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Go to slide ${slideIndex + 1}`}
              onClick={() => setIndex(slideIndex)}
              className={`h-2.5 cursor-pointer rounded-full transition-all duration-150 active:scale-90 ${slideIndex === index ? "w-8 bg-[#be0000]" : "w-2.5 bg-white/25 hover:bg-white/50"
                }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next slide"
          onPointerDown={(event) => {
            event.preventDefault();
            startHold("next");
          }}
          onPointerUp={clearHold}
          onPointerLeave={clearHold}
          onPointerCancel={clearHold}
          className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-white/15 text-[#e5e2e1] transition-transform duration-150 active:scale-90 hover:border-[#be0000]/50 hover:bg-white/5"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
}

export function HomeSections() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [showStatementImage, setShowStatementImage] = useState(false);
  const { openPartnerModal } = usePartnerModal();
  const featuredSliderRef = useRef<HTMLDivElement>(null);
  const heroVideoItem: VideoItem = {
    title: "Hero Trailer",
    meta: "Background video",
    image: siteContent.hero.poster,
    videoUrl: siteContent.hero.video,
  };

  const scrollFeatured = (direction: "prev" | "next") => {
    const slider = featuredSliderRef.current;
    if (!slider) return;
    const amount = Math.max(slider.clientWidth * 0.8, 420);
    slider.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!activeVideo && !showStatementImage) return undefined;
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
        setShowStatementImage(false);
      }
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [activeVideo, showStatementImage]);

  return (
    <main className="overflow-x-hidden">
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 pb-24 pt-28 md:px-16 md:pt-36">
        <div
          className="absolute inset-0 cursor-pointer film-grain"
          onClick={() => setActiveVideo(heroVideoItem)}
          aria-hidden
        >
          <video
            className="absolute inset-0 h-full w-full scale-105 object-cover md:scale-110"
            src={siteContent.hero.video}
            poster={siteContent.hero.poster}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#131313]/80 via-[#131313]/45 to-[#131313]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#131313]/85 via-transparent to-[#131313]/85" />
        </div>
        <div className="relative z-10 flex w-full min-w-0 max-w-4xl flex-col items-center px-2 text-center sm:px-4">
          <div className="w-full min-w-0 px-2">
            <Logo className="mx-auto w-full drop-shadow-2xl" />
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
                    ? () => setActiveVideo(heroVideoItem)
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

      <section id="partners" className="border-y border-white/5 bg-[#0e0e0e] px-4 py-20 sm:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-8 text-center text-[10px] uppercase tracking-[0.2em] text-[#e7bdb6]/80 sm:mb-10 sm:text-xs lg:mb-12">
            Our Partners
          </p>
          <div className="grid grid-cols-2 place-items-center gap-x-6 gap-y-10 sm:gap-x-10 sm:gap-y-12 lg:flex lg:flex-wrap lg:justify-center lg:gap-x-16 lg:gap-y-10 xl:gap-x-24">
            {siteContent.partners.map((partner) => (
              <div
                key={partner.name}
                className="group flex h-[3.5rem] w-full max-w-[10rem] items-center justify-center sm:h-[4rem] sm:max-w-[11rem] lg:h-[10.5rem] lg:max-w-[12rem]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                  onError={(event) => {
                    const target = event.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling;
                    if (fallback instanceof HTMLElement) fallback.style.display = "block";
                  }}
                />
                <span
                  className="hidden whitespace-nowrap text-center text-sm font-bold uppercase tracking-tight text-[#e5e2e1]/55 sm:text-base lg:text-lg"
                  aria-hidden
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex min-h-screen items-center bg-[#131313] px-4 py-24 md:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-12 md:items-center">
          <div className="group md:col-span-7">
            <div className="h-[620px] overflow-hidden rounded-2xl border border-white/10 transition-transform duration-700 group-hover:scale-[1.02]">
              <img
                src={siteContent.tricoast.image}
                alt={siteContent.tricoast.title}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="relative z-10 md:col-span-5 md:-ml-16">
            <GlassCard className="p-10 md:p-12">
              <h2 className="font-display text-5xl text-[#e5e2e1]">{siteContent.tricoast.title}</h2>
              <div className="mb-6 mt-5 h-[2px] w-12 bg-[#be0000]" />
              <p className="mt-4 text-[#e7bdb6]/85">{siteContent.tricoast.body}</p>
              <Button
                className="mt-8 text-xs uppercase tracking-[0.2em]"
                variant="link"
                onClick={() => setShowStatementImage(true)}
                rightIcon={
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                }
              >
                Read Full Statement
              </Button>
            </GlassCard>
          </div>
        </div>
      </section>

      <section id="story" className="min-h-screen border-t border-white/5 bg-[#131313] px-4 py-24 md:px-16">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading title={siteContent.story.title} subtitle={siteContent.story.subtitle} />
          <StorySlider />
        </div>
      </section>

      <section id="featured" className="min-h-screen border-y border-white/5 bg-[#0e0e0e] px-4 py-24 md:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-4xl uppercase text-[#e5e2e1] md:text-5xl">Featured Content</h2>
              <p className="mt-2 text-[#e7bdb6]/80">Instagram posts and early cuts from the journey.</p>
            </div>
            <div className="flex shrink-0 items-center justify-center gap-3 sm:justify-end">
              <button
                type="button"
                aria-label="Previous featured"
                onClick={() => scrollFeatured("prev")}
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/15 text-[#e5e2e1] transition-transform duration-150 active:scale-90 hover:border-[#be0000]/50 hover:bg-white/5 md:h-12 md:w-12"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                aria-label="Next featured"
                onClick={() => scrollFeatured("next")}
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-white/15 text-[#e5e2e1] transition-transform duration-150 active:scale-90 hover:border-[#be0000]/50 hover:bg-white/5 md:h-12 md:w-12"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
          <div
            ref={featuredSliderRef}
            className="scrollbar-hidden flex snap-x snap-mandatory gap-8 overflow-x-auto pb-4"
          >
            {siteContent.featured.map((item) => (
              <VideoCard key={item.title} item={item} onPlay={setActiveVideo} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-screen items-center overflow-hidden px-4 py-28 text-center md:px-16">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(19,19,19,.8), rgba(19,19,19,.95)), url("${siteContent.quote.background}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="relative mx-auto max-w-3xl">
          <p className="font-display text-3xl uppercase leading-tight text-[#e5e2e1] md:text-[3.2rem]">
            &ldquo;{siteContent.quote.text}&rdquo;
          </p>
        </div>
      </section>

      <section
        id="results"
        className="relative flex min-h-screen items-center overflow-hidden border-y border-white/5 px-4 py-24 md:px-16"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(14,14,14,.88), rgba(14,14,14,.96)), url("${siteContent.results.background}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-[1440px]">
          <SectionHeading title={siteContent.results.title} subtitle={siteContent.results.subtitle} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteContent.results.stats.map((stat) => (
              <GlassCard key={stat.label} className="text-center">
                <p className="font-display text-5xl text-[#be0000] md:text-6xl">{stat.value}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#e5e2e1]">{stat.label}</p>
                <p className="mt-4 text-sm text-[#e7bdb6]/80">{stat.detail}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="flex min-h-screen items-center bg-[#131313] px-4 py-24 md:px-16">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            title="The Visionaries"
            subtitle="Award-winning talent dedicated to crafting an unprecedented narrative experience."
          />
          <div className="grid w-full gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
            {siteContent.team.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="sponsorship"
        className="flex min-h-screen items-center border-y border-white/10 bg-[#0e0e0e] px-4 py-24 md:px-16"
      >
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="max-w-md font-display text-6xl uppercase tracking-normal leading-normal text-[#e5e2e1] md:text-8xl">
              {siteContent.partner.title}
            </h2>
            <p className="mt-6 text-lg text-[#e5e2e1]">{siteContent.partner.intro}</p>
            <div className="mt-5 space-y-4 text-[#e7bdb6]/80">
              {siteContent.partner.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Button className="mt-8" onClick={openPartnerModal}>
              {siteContent.partner.cta}
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {siteContent.partner.benefits.map((benefit) => (
              <BenefitCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-screen items-center overflow-hidden px-4 py-28 text-center md:px-16">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(19,19,19,.75), rgba(19,19,19,.95)), url("${siteContent.finalCta.background}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="font-display text-6xl font-semibold uppercase tracking-normal leading-normal text-[#e5e2e1] md:text-8xl">
            {siteContent.finalCta.title}
          </h2>
          <Button className="mt-8 px-10 py-4" onClick={openPartnerModal}>
            {siteContent.finalCta.cta}
          </Button>
        </div>
      </section>

      {activeVideo ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl border border-white/20 bg-[#131313]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute right-3 top-3 z-10 cursor-pointer rounded-full border border-white/20 bg-black/40 p-2 text-white hover:text-[#ffb4a8]"
            >
              <X size={20} />
            </button>
            <video src={activeVideo.videoUrl} controls autoPlay className="h-auto w-full rounded-2xl" />
          </div>
        </div>
      ) : null}

      {showStatementImage ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#131313]/45 backdrop-blur-md"
          onClick={() => setShowStatementImage(false)}
        >
          <div
            className="relative flex h-screen w-screen items-center justify-center bg-black/25"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowStatementImage(false)}
              className="absolute right-4 top-4 z-10 cursor-pointer rounded-full border border-white/20 bg-black/40 p-2 text-white hover:text-[#ffb4a8]"
            >
              <X size={20} />
            </button>
            <img
              src="/images/matt cohen impossible LOI_image.jpg"
              alt="Matt Cohen IMPOSSIBLE LOI statement"
              className="max-h-[94vh] max-w-[96vw] object-contain"
            />
          </div>
        </div>
      ) : null}
    </main>
  );
}
