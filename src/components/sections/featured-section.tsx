"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { VideoCard } from "@/components/sections/video-card";
import {
  getScrollBehavior,
  usePrefersReducedMotion,
} from "@/lib/use-prefers-reduced-motion";

export function FeaturedSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollFeatured = (direction: "prev" | "next") => {
    const slider = sliderRef.current;
    if (!slider) return;
    const amount = Math.max(slider.clientWidth * 0.8, 420);
    slider.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: getScrollBehavior(prefersReducedMotion),
    });
  };

  return (
    <section id="featured" className="min-h-screen snap-start border-y border-white/5 bg-[#0e0e0e] px-4 py-24 md:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-4xl uppercase text-[#e5e2e1] md:text-5xl">Featured Content</h2>
            <p className="mt-2 text-[#e7bdb6]/80">Social media and early cuts from the journey.</p>
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
          ref={sliderRef}
          className="scrollbar-hidden flex snap-x snap-mandatory gap-8 overflow-x-auto pb-4"
        >
          {siteContent.featured.map((item) => (
            <VideoCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
