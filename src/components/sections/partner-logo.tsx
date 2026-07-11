"use client";

import Image from "next/image";

export function PartnerLogo({
  name,
  logo,
}: {
  name: string;
  logo?: string;
}) {
  if (!logo) {
    return (
      <span className="relative z-10 px-1 text-center text-[10px] font-bold uppercase leading-tight tracking-tight text-[#131313]/60 sm:text-xs">
        {name}
      </span>
    );
  }

  return (
    <>
      <Image
        src={logo}
        alt=""
        aria-hidden
        fill
        className="pointer-events-none scale-125 object-contain opacity-30 blur-lg"
        sizes="320px"
      />
      <Image
        src={logo}
        alt={name}
        fill
        className="z-10 object-contain"
        sizes="320px"
        onError={(event) => {
          const target = event.currentTarget;
          target.style.display = "none";
          const blurred = target.previousElementSibling;
          if (blurred instanceof HTMLElement) blurred.style.display = "none";
          const fallback = target.nextElementSibling;
          if (fallback instanceof HTMLElement) fallback.style.display = "block";
        }}
      />
      <span
        className="relative z-10 hidden px-1 text-center text-[10px] font-bold uppercase leading-tight tracking-tight text-[#131313]/70 sm:text-xs"
        aria-hidden
      >
        {name}
      </span>
    </>
  );
}
