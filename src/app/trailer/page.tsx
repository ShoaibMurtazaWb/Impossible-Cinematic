import type { Metadata } from "next";
import { Footer, Navbar } from "@/components/layout/site-chrome";
import { PartnerModalProvider } from "@/components/layout/partner-modal-provider";
import { assets, siteContent } from "@/data/site-content";

export const metadata: Metadata = {
  title: `Trailer | ${siteContent.brand.name}`,
  description:
    "Watch the official IMPOSSIBLE trailer — a cinematic documentary following Colin's pursuit of becoming an MMA champion.",
};

export default function TrailerPage() {
  return (
    <PartnerModalProvider>
      <div className="flex min-h-screen flex-col bg-[#0c0c0c] text-[#e5e2e1]">
        <Navbar />
        <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 py-12 md:px-10 md:py-16">
          <div className="pointer-events-none absolute inset-0 film-grain" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(190,0,0,0.14)_0%,transparent_55%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#0c0c0c_100%)]"
            aria-hidden
          />

          <div className="trailer-stage relative w-full max-w-6xl">
            <header className="mb-8 text-center md:mb-10">
              <p className="text-xs uppercase tracking-[0.28em] text-[#e7bdb6]/65">
                Official Trailer
              </p>
              <h1 className="mt-3 font-display text-4xl uppercase tracking-wide text-[#e5e2e1] md:text-6xl">
                Watch the Trailer
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#e7bdb6]/80 md:text-base">
                Most documentary series tell you what happened. This one is happening
                right now.
              </p>
            </header>

            <div
              className="pointer-events-none absolute -inset-8 top-24 rounded-4xl bg-[radial-gradient(ellipse_at_center,rgba(190,0,0,0.18),transparent_70%)] blur-2xl md:-inset-16 md:top-28"
              aria-hidden
            />
            <div className="relative aspect-video overflow-hidden rounded-xl border border-white/12 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.85)] ring-1 ring-white/5 md:rounded-2xl">
              <video
                src={assets.videos.heroTrailer}
                poster={assets.images.heroPoster}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="h-full w-full object-contain"
                aria-label="IMPOSSIBLE official trailer"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PartnerModalProvider>
  );
}
