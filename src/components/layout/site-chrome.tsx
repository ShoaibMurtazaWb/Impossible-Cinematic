import { siteContent } from "@/data/site-content";
import { Logo } from "@/components/ui/primitives";
import { Navbar } from "@/components/layout/navbar";

export { Navbar };

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0e0e0e] px-4 py-14 md:px-16">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-8 md:grid-cols-3">
        <div className="text-center md:text-left">
          <Logo className="mx-auto w-full max-w-[220px] md:mx-0" />
          <p className="mt-3 text-sm text-[#e7bdb6]/70">{siteContent.brand.tagline}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 md:flex-nowrap">
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
        <p className="text-center text-xs text-[#e5e2e1]/50 md:text-right">
          © 2026 IMPOSSIBLE DOCUMENTARY. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
