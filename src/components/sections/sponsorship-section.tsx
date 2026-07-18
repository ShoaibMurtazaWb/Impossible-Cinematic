"use client";

import { siteContent } from "@/data/site-content";
import { Button } from "@/components/ui/primitives";
import { usePartnerModal } from "@/components/layout/partner-modal-provider";
import { BenefitCard } from "@/components/sections/benefit-card";

export function SponsorshipSection() {
  const { openPartnerModal } = usePartnerModal();

  return (
    <section
      id="sponsorship"
      className="flex min-h-screen snap-start items-center border-y border-white/10 bg-[#0e0e0e] px-4 py-24 md:px-16"
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
          <div className="mt-8 flex flex-wrap gap-4">
  <Button onClick={openPartnerModal}>
    {siteContent.partner.cta}
  </Button>

  <Button
    href={siteContent.partner.sponsorshipDeckCta.href}
    variant="glass"
  >
    {siteContent.partner.sponsorshipDeckCta.label}
  </Button>
</div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {siteContent.partner.benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
