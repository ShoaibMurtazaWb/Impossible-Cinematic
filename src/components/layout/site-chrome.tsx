import { siteContent } from "@/data/site-content";
import { Button, Logo } from "@/components/ui/primitives";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#131313]/90 px-4 py-4 backdrop-blur-xl md:px-16">
      <div className="flex w-full items-center justify-between gap-4">
        <Logo className="max-w-[120px] md:max-w-[150px]" />
        <div className="hidden items-center gap-6 md:flex">
          {siteContent.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.18em] text-[#e5e2e1]/70 hover:text-[#e5e2e1]"
            >
              {item.label}
            </a>
          ))}
        </div>
        <Button href="#sponsorship" className="hidden md:inline-flex">
          Join Project
        </Button>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0e0e0e] px-4 py-14 md:px-16">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-8 md:grid-cols-3">
        <div className="text-center md:text-left">
          <Logo className="mx-auto max-w-[220px] md:mx-0" />
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
