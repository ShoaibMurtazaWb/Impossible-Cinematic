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

type PressKitPageProps = {
  searchParams: Promise<{
    tab?: string;
  }>;
};

export default async function PressKitPage({
  searchParams,
}: PressKitPageProps) {
  const { title, subtitle, documents } = siteContent.pressKit;

  const params = await searchParams;

  const firstId = documents[0]?.id ?? "";

  const activeId =
    params.tab && documents.some((doc) => doc.id === params.tab)
      ? params.tab
      : firstId;

  return (
    <SubpageShell wide>
      <SectionHeading title={title} subtitle={subtitle} />

      <PressKitViewer
        documents={documents}
        activeId={activeId}
      />
    </SubpageShell>
  );
}