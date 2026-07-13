import Link from "next/link";
import { siteContent } from "@/data/site-content";
import { Logo } from "@/components/ui/primitives";
import { SocialLinks } from "@/components/ui/social-links";
import { HomeLogoLink } from "@/components/layout/home-logo-link";
import { Navbar } from "@/components/layout/navbar";

export { Navbar };

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0e0e0e] px-4 py-14 md:px-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-8 text-center lg:grid lg:grid-cols-3 lg:items-center lg:text-left">
        <div className="text-center lg:text-left">
          <HomeLogoLink>
            <Logo className="mx-auto w-full max-w-[120px] sm:max-w-[160px] md:max-w-[250px] lg:mx-0 lg:max-w-[220px]" />
          </HomeLogoLink>
          <p className="mt-3 text-sm text-[#e7bdb6]/70">{siteContent.brand.tagline}</p>
          <SocialLinks
            links={siteContent.social}
            label={siteContent.brand.name}
            className="mt-4 justify-center lg:justify-start"
            iconClassName="h-4 w-4"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:flex-nowrap lg:gap-5">
          {siteContent.footerLinks.map((item) => {
            const className =
              "whitespace-nowrap text-xs uppercase tracking-[0.18em] text-[#e7bdb6]/70 hover:text-[#ffb4a8]";
            if (item.href.startsWith("/")) {
              return (
                <Link key={item.label} href={item.href} className={className}>
                  {item.label}
                </Link>
              );
            }
            return (
              <a key={item.label} href={item.href} className={`${className} cursor-pointer`}>
                {item.label}
              </a>
            );
          })}
        </div>
        <p className="text-center text-xs text-[#e5e2e1]/50 lg:text-right">
          © 2026 IMPOSSIBLE DOCUMENTARY. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
