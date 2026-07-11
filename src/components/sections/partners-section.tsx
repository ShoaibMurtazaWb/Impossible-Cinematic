import { siteContent } from "@/data/site-content";
import { PartnerLogo } from "@/components/sections/partner-logo";

export function PartnersSection() {
  return (
    <section id="partners" className="snap-start border-y border-white/5 bg-[#0e0e0e] px-4 py-20 sm:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="mb-8 text-center text-[10px] uppercase tracking-[0.2em] text-[#e7bdb6]/80 sm:mb-10 sm:text-xs lg:mb-12">
          Our Partners
        </p>
        <div className="grid grid-cols-2 place-items-center gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 lg:flex lg:flex-nowrap lg:items-center lg:justify-center lg:gap-x-6 lg:gap-y-0 xl:gap-x-10">
          {siteContent.partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex h-[4.5rem] w-full max-w-[10.5rem] items-center justify-center sm:h-[5rem] sm:max-w-[11.5rem] lg:h-[5.5rem] lg:w-[12.5rem] lg:max-w-[12.5rem] lg:shrink-0 xl:h-[10rem] xl:w-[20rem] xl:max-w-[20rem]"
            >
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/90 px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-md transition-transform duration-300 group-hover:scale-[1.03] sm:rounded-2xl sm:px-4 sm:py-3">
                <PartnerLogo name={partner.name} logo={partner.logo} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
