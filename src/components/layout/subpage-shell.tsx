import Link from "next/link";
import { Footer, Navbar } from "@/components/layout/site-chrome";
import { PartnerModalProvider } from "@/components/layout/partner-modal-provider";
import type { ReactNode } from "react";

export function SubpageShell({
  title,
  children,
  wide = false,
}: {
  title?: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <PartnerModalProvider>
      <div className="min-h-screen bg-[#131313] text-[#e5e2e1]">
        <Navbar />
        <main
          className={`mx-auto px-4 pb-16 pt-10 md:px-8 md:pb-20 md:pt-12 ${
            wide ? "max-w-[1440px]" : "max-w-3xl"
          }`}
        >
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.18em] text-[#e7bdb6]/70 transition-colors hover:text-[#ffb4a8]"
          >
            ← Back to home
          </Link>
          {title ? (
            <h1 className="mt-4 font-display text-4xl uppercase text-[#e5e2e1] md:text-5xl">
              {title}
            </h1>
          ) : null}
          <div className={title ? "mt-8" : "mt-4"}>{children}</div>
        </main>
        <Footer />
      </div>
    </PartnerModalProvider>
  );
}
