"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { Button, Logo } from "@/components/ui/primitives";

const navButtonClass =
  "shrink-0 whitespace-nowrap !px-[1.25rem] !py-[0.625rem] text-[0.6875rem] leading-none tracking-[0.16em]";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const handleChange = () => {
      if (media.matches) setOpen(false);
    };

    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#131313]/90 backdrop-blur-xl">
      <div className="relative z-20 px-[1rem] py-[0.75rem] lg:px-[2rem] lg:py-[1rem] xl:px-[4rem]">
        <div className="flex min-w-0 items-center justify-between gap-[0.75rem] lg:gap-[1rem] xl:gap-[1.5rem]">
          <a href="#" className="relative z-20 shrink-0" aria-label="IMPOSSIBLE home" onClick={closeMenu}>
            <Logo className="w-[5.75rem] max-w-[5.75rem] lg:w-[7.5rem] lg:max-w-[7.5rem] xl:w-[9.375rem] xl:max-w-[9.375rem]" />
          </a>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-[0.875rem] lg:flex xl:gap-[1.5rem]">
            {siteContent.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-[0.625rem] uppercase tracking-[0.14em] text-[#e5e2e1]/70 hover:text-[#e5e2e1] xl:text-[0.75rem] xl:tracking-[0.18em]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <Button href="#sponsorship" className={`relative z-20 hidden lg:inline-flex ${navButtonClass}`}>
            Join Project
          </Button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="relative z-30 grid h-[2.75rem] w-[2.75rem] shrink-0 cursor-pointer touch-manipulation place-items-center rounded-full border border-white/15 bg-[#131313]/90 text-[#e5e2e1] transition-transform duration-150 active:scale-90 hover:border-[#be0000]/50 hover:bg-white/5 lg:hidden"
          >
            {open ? (
              <X size={20} className="pointer-events-none" aria-hidden />
            ) : (
              <Menu size={20} className="pointer-events-none" aria-hidden />
            )}
          </button>
        </div>
      </div>

      <div
        className={`relative z-10 grid transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "pointer-events-none grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pointer-events-auto border-t border-white/10 bg-[#131313]/98 px-[1rem] pb-[1.5rem] pt-[0.5rem]">
            <div className="flex flex-col gap-[0.25rem]">
              {siteContent.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-lg px-[0.75rem] py-[0.75rem] text-[0.875rem] uppercase tracking-[0.18em] text-[#e5e2e1]/80 transition-colors hover:bg-white/5 hover:text-[#e5e2e1]"
                >
                  {item.label}
                </a>
              ))}
              <Button
                href="#sponsorship"
                onClick={closeMenu}
                className={`mt-[1rem] w-full ${navButtonClass}`}
              >
                Join Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
