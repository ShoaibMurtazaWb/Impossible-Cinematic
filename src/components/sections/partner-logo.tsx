"use client";

import Image from "next/image";

export function PartnerLogo({
  name,
  logo,
  logoScale = 1,
}: {
  name: string;
  logo?: string;
  logoScale?: number;
}) {
  if (!logo) {
    return (
      <span className="relative z-10 px-1 text-center text-[10px] font-bold uppercase leading-tight tracking-tight text-[#e5e2e1]/60 sm:text-xs">
        {name}
      </span>
    );
  }

  return (
    <>
      <Image
        src={logo}
        alt={name}
        fill
        unoptimized
        className="object-contain object-center grayscale opacity-70 transition-[opacity,filter] duration-300 group-hover:opacity-100"
        style={{ transform: logoScale === 1 ? undefined : `scale(${logoScale})` }}
        sizes="(max-width: 1024px) 10rem, 12rem"
        onError={(event) => {
          const target = event.currentTarget;
          target.style.display = "none";
          const fallback = target.nextElementSibling;
          if (fallback instanceof HTMLElement) fallback.style.display = "block";
        }}
      />
      <span
        className="relative z-10 hidden px-1 text-center text-[10px] font-bold uppercase leading-tight tracking-tight text-[#e5e2e1]/70 sm:text-xs"
        aria-hidden
      >
        {name}
      </span>
    </>
  );
}
