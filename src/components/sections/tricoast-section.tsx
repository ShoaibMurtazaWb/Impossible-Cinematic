"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { Button, GlassCard } from "@/components/ui/primitives";
import { useFocusTrap } from "@/lib/use-focus-trap";

function StatementModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useFocusTrap<HTMLDivElement>(true);

  useEffect(() => {
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#131313]/45 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Matt Cohen IMPOSSIBLE LOI statement"
        tabIndex={-1}
        className="relative flex h-screen w-screen items-center justify-center bg-black/25 outline-none"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close statement"
          className="absolute right-4 top-4 z-10 cursor-pointer rounded-full border border-white/20 bg-black/40 p-2 text-white hover:text-[#ffb4a8]"
        >
          <X size={20} />
        </button>
        <div className="relative h-[94vh] w-[96vw]">
          <Image
            src={siteContent.tricoast.loiStatement}
            alt="Matt Cohen IMPOSSIBLE LOI statement"
            fill
            className="object-contain"
            sizes="96vw"
          />
        </div>
      </div>
    </div>
  );
}

export function TricoastSection() {
  const [showStatement, setShowStatement] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showStatement ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showStatement]);

  return (
    <>
      <section className="flex min-h-screen snap-start items-center bg-[#131313] px-4 py-24 md:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-12 md:items-center">
          <div className="group md:col-span-7">
            <div className="relative h-[620px] overflow-hidden rounded-2xl border border-white/10 transition-transform duration-700 group-hover:scale-[1.02]">
              <Image
                src={siteContent.tricoast.image}
                alt={siteContent.tricoast.title}
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 58vw, 100vw"
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
                onClick={() => setShowStatement(true)}
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
      {showStatement ? <StatementModal onClose={() => setShowStatement(false)} /> : null}
    </>
  );
}
