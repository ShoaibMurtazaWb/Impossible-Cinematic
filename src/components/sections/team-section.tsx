import { siteContent } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/primitives";
import { TeamCard } from "@/components/sections/team-card";

export function TeamSection() {
  return (
    <section id="team" className="flex min-h-screen snap-start items-center bg-[#131313] px-4 py-24 md:px-16">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          title="The Visionaries"
          subtitle="Award-winning talent dedicated to crafting an unprecedented narrative experience."
        />
        <div className="grid w-full gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          {siteContent.team.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
