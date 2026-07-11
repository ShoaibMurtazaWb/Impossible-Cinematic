"use client";

import { useSyncExternalStore } from "react";
import { PartnerLogo } from "@/components/sections/partner-logo";

type Partner = {
  name: string;
  logo?: string;
  logoScale?: number;
};

const logoSlotClassName =
  "group relative h-16 w-[12rem] shrink-0 sm:h-[4.5rem] sm:w-[13rem] lg:h-20 lg:w-[14rem] xl:h-[5.5rem] xl:w-[15rem]";

function subscribeToReducedMotion(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", onStoreChange);
  return () => mediaQuery.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function PartnerMarqueeItem({ partner }: { partner: Partner }) {
  return (
    <div className={logoSlotClassName}>
      <PartnerLogo
        name={partner.name}
        logo={partner.logo}
        logoScale={partner.logoScale}
      />
    </div>
  );
}

export function PartnersMarquee({ partners }: { partners: Partner[] }) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const track = prefersReducedMotion ? partners : [...partners, ...partners];

  return (
    <div
      className={
        prefersReducedMotion
          ? "partners-marquee relative overflow-hidden"
          : "partners-marquee partners-marquee-fade relative overflow-hidden"
      }
    >
        <div
          className={
            prefersReducedMotion
              ? "flex w-full flex-wrap items-center justify-center gap-x-14 gap-y-10 xl:gap-x-16"
              : "partners-marquee-track flex w-max items-center gap-x-14 xl:gap-x-16"
          }
        >
          {track.map((partner, index) => (
            <PartnerMarqueeItem
              key={`${partner.name}-${index}`}
              partner={partner}
            />
          ))}
      </div>
    </div>
  );
}
