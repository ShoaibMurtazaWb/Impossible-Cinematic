"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import {
  getScrollBehavior,
  usePrefersReducedMotion,
} from "@/lib/use-prefers-reduced-motion";

export function HomeLogoLink({
  children,
  className = "",
  onNavigate,
}: {
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();

    if (pathname === "/") {
      event.preventDefault();
      const scrollBehavior = getScrollBehavior(prefersReducedMotion);
      const hero = document.getElementById("hero");
      if (hero) {
        hero.scrollIntoView({ behavior: scrollBehavior, block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: scrollBehavior });
      }
    }
  };

  return (
    <Link
      href="/#hero"
      className={className}
      aria-label="IMPOSSIBLE home"
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
