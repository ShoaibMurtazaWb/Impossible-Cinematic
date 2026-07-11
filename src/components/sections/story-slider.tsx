"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

export function StorySlider() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const slides = siteContent.story.slides;
  const sliderId = useId();
  const viewportRef = useRef<HTMLDivElement>(null);
  const holdTimeoutRef = useRef<number | null>(null);
  const holdIntervalRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const dragActiveRef = useRef(false);

  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const slideId = (slideIndex: number) => `${sliderId}-slide-${slideIndex}`;

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
    if (prefersReducedMotion) return;
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

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={siteContent.story.title}
      className="relative mx-auto max-w-5xl"
    >
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {index + 1} of {slides.length}: {slides[index].caption}
      </p>
      <div
        ref={viewportRef}
        tabIndex={0}
        aria-label="Story slides"
        onKeyDown={onKeyDown}
        className="relative aspect-[16/10] cursor-grab overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e0e] active:cursor-grabbing touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div
          className={`flex h-full w-full ${isDragging || prefersReducedMotion ? "" : "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"}`}
          style={{
            transform: `translateX(calc(-${index * 100}% + ${dragOffset}%))`,
          }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={slide.image}
              id={slideId(slideIndex)}
              role="group"
              aria-roledescription="slide"
              aria-label={`${slideIndex + 1} of ${slides.length}`}
              aria-hidden={slideIndex !== index}
              className="relative h-full w-full shrink-0 grow-0 basis-full"
            >
              <Image
                src={slide.image}
                alt={slide.caption}
                fill
                className="pointer-events-none object-cover select-none"
                sizes="(min-width: 1024px) 1024px, 100vw"
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

        <div className="flex items-center gap-2" role="group" aria-label="Slide navigation">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Go to slide ${slideIndex + 1}: ${slide.caption}`}
              aria-controls={slideId(slideIndex)}
              aria-current={slideIndex === index ? "true" : undefined}
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
