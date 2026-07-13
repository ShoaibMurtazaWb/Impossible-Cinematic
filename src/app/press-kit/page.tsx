import type { Metadata } from "next";
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
      <PressKitViewer documents={documents} />
    </SubpageShell>
  );
}
