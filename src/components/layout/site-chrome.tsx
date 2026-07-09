import { siteContent } from "@/data/site-content";
import { Logo } from "@/components/ui/primitives";
import { Navbar } from "@/components/layout/navbar";

export { Navbar };

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0e0e0e] px-4 py-14 md:px-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-8 text-center lg:grid lg:grid-cols-3 lg:items-center lg:text-left">
        <div className="text-center lg:text-left">
          <Logo className="mx-auto w-full max-w-[120px] sm:max-w-[160px] md:max-w-[250px] lg:mx-0 lg:max-w-[220px]" />
          <p className="mt-3 text-sm text-[#e7bdb6]/70">{siteContent.brand.tagline}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:flex-nowrap lg:gap-5">
          {siteContent.footerLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="whitespace-nowrap text-xs uppercase tracking-[0.18em] text-[#e7bdb6]/70 hover:text-[#ffb4a8]"
            >
              {item}
            </a>
          ))}
        </div>
        <p className="text-center text-xs text-[#e5e2e1]/50 lg:text-right">
          © 2026 IMPOSSIBLE DOCUMENTARY. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
