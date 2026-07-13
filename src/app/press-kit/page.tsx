import type { Metadata } from "next";
import { Suspense } from "react";
import { SubpageShell } from "@/components/layout/subpage-shell";
import { PressKitViewer } from "@/components/sections/press-kit-viewer";
import { SectionHeading } from "@/components/ui/primitives";
import { siteContent } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Press Kit | IMPOSSIBLE",
  description:
    "View the IMPOSSIBLE documentary media kit and sponsorship deck — press-ready resources for partners and media.",
};

export default function PressKitPage() {
  const { title, subtitle, documents } = siteContent.pressKit;

  return (
    <SubpageShell wide>
      <SectionHeading title={title} subtitle={subtitle} />
      <Suspense fallback={<div className="h-[min(78vh,880px)] w-full rounded-xl border border-white/10 bg-[#0a0a0a]" />}>
        <PressKitViewer documents={documents} />
      </Suspense>
    </SubpageShell>
  );
}
