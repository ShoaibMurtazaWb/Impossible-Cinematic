import { siteContent } from "@/data/site-content";
import { PartnersMarquee } from "@/components/sections/partners-marquee";

export function PartnersSection() {
  return (
    <section id="partners" className="snap-start border-y border-white/5 bg-[#0e0e0e] px-4 py-20 sm:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="mb-8 text-center text-[10px] uppercase tracking-[0.2em] text-[#e7bdb6]/80 sm:mb-10 sm:text-xs lg:mb-12">
          Our Partners
        </p>
        <PartnersMarquee partners={siteContent.partners} />
      </div>
    </section>
  );
}
