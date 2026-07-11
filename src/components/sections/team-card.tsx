import Image from "next/image";
import type { TeamMember } from "@/data/site-content";
import { GlassCard } from "@/components/ui/primitives";

export function TeamCard({ name, role, bio, image, imagePosition = "center" }: TeamMember) {
  return (
    <GlassCard className="group text-center transition-all duration-300 hover:scale-[1.02] hover:border-[#be0000]/50">
      <div className="relative mx-auto mb-5 h-32 w-32 overflow-hidden rounded-full border border-white/10 bg-[#1a1a1a]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="128px"
          className="object-cover transition duration-500 group-hover:scale-105"
          style={{ objectPosition: imagePosition }}
        />
      </div>
      <h3 className="font-display text-[2rem] uppercase text-[#e5e2e1] transition-colors group-hover:text-[#be0000]">
        {name}
      </h3>
      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#ffb4a8]">{role}</p>
      <p className="mt-4 text-sm leading-relaxed text-[#e7bdb6]/85">{bio}</p>
    </GlassCard>
  );
}
