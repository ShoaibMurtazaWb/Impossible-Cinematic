import type { Metadata } from "next";
import { SubpageShell } from "@/components/layout/subpage-shell";
import { TeamCard } from "@/components/sections/team-card";
import { SectionHeading } from "@/components/ui/primitives";
import { siteContent } from "@/data/site-content";

export const metadata: Metadata = {
  title: "The Visionaries | IMPOSSIBLE",
  description:
    "Meet the award-winning team behind IMPOSSIBLE — the cinematic documentary following Colin's pursuit of becoming an MMA champion.",
};

export default function TeamPage() {
  const { title, subtitle } = siteContent.teamPage;

  return (
    <SubpageShell wide>
      <SectionHeading title={title} subtitle={subtitle} />
      <div className="grid w-full gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
        {siteContent.teamPage.members.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>
    </SubpageShell>
  );
}
