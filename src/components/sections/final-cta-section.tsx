"use client";

import { siteContent } from "@/data/site-content";
import { Button } from "@/components/ui/primitives";
import { usePartnerModal } from "@/components/layout/partner-modal-provider";
import { SectionBackground } from "@/components/sections/section-background";

export function FinalCtaSection() {
  const { openPartnerModal } = usePartnerModal();

  return (
    <section className="relative flex min-h-screen snap-start items-center overflow-hidden px-4 py-28 text-center md:px-16">
      <SectionBackground
        src={siteContent.finalCta.background}
        alt=""
        gradient="bg-gradient-to-b from-[#131313]/75 to-[#131313]/95"
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
  );
}
