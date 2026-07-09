import type { ReactNode } from "react";
import { siteContent } from "@/data/site-content";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "glass" | "link";
  className?: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  onClick?: () => void;
};

const buttonBase =
  "group inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] transition-all duration-300 hover:scale-95";

const buttonVariants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "rounded-full border border-[#be0000] bg-[#be0000] text-[#ffcac2] shadow-[0_10px_35px_rgba(190,0,0,0.22)] hover:bg-[#ffb4a8] hover:text-[#690000] hover:shadow-[0_14px_40px_rgba(190,0,0,0.32)]",
  glass:
    "rounded-full border border-white/20 bg-white/5 text-[#e5e2e1] backdrop-blur-md hover:bg-white/12",
  link: "px-0 py-0 text-[#be0000] hover:scale-100 hover:text-white",
};

export function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
  leftIcon,
  rightIcon,
  onClick,
}: ButtonProps) {
  return (
    <a href={href} onClick={onClick} className={`${buttonBase} ${buttonVariants[variant]} ${className}`}>
      {leftIcon}
      {children}
      {rightIcon}
    </a>
  );
}

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-16 text-center">
      <h2 className="font-display text-4xl uppercase tracking-wide text-[#e5e2e1] md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-6 text-base text-[#e7bdb6]/80">{subtitle}</p>
      ) : null}
    </div>
  );
}

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-[#e2e2e2]/10 bg-[#ffffff08] p-6 backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={siteContent.brand.logo}
      alt={`${siteContent.brand.name} logo`}
      className={`block h-auto max-w-full min-w-0 object-contain ${className}`}
    />
  );
}
