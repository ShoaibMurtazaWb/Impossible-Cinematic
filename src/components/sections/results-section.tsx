import { siteContent } from "@/data/site-content";
import { GlassCard, SectionHeading } from "@/components/ui/primitives";
import { SectionBackground } from "@/components/sections/section-background";

export function ResultsSection() {
  return (
    <section
      id="results"
      className="relative flex min-h-screen snap-start items-center overflow-hidden border-y border-white/5 px-4 py-24 md:px-16"
    >
      <SectionBackground
        src={siteContent.results.background}
        alt=""
        gradient="bg-gradient-to-b from-[#0e0e0e]/88 to-[#0e0e0e]/96"
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
  );
}
