import { siteContent } from "@/data/site-content";
import { SectionBackground } from "@/components/sections/section-background";

export function QuoteSection() {
  return (
    <section className="relative flex min-h-screen snap-start items-center overflow-hidden px-4 py-28 text-center md:px-16">
      <SectionBackground
        src={siteContent.quote.background}
        alt=""
        gradient="bg-gradient-to-b from-[#131313]/80 to-[#131313]/95"
        fixed
      />
      <div className="relative mx-auto max-w-3xl">
        <p className="font-display text-3xl uppercase leading-tight text-[#e5e2e1] md:text-[3.2rem]">
          &ldquo;{siteContent.quote.text}&rdquo;
        </p>
      </div>
    </section>
  );
}
