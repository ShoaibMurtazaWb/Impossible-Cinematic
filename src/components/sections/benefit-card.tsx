import { Diamond, Film, Globe, Megaphone } from "lucide-react";
import type { SponsorBenefit } from "@/data/site-content";
import { GlassCard } from "@/components/ui/primitives";

function BenefitIcon({ icon }: { icon: SponsorBenefit["icon"] }) {
  if (icon === "globe") return <Globe size={20} />;
  if (icon === "diamond") return <Diamond size={20} />;
  if (icon === "film") return <Film size={20} />;
  return <Megaphone size={20} />;
}

export function BenefitCard({ title, description, icon }: SponsorBenefit) {
  return (
    <GlassCard className="h-full transition-all duration-300 hover:-translate-y-2 hover:scale-[0.985]">
      <span className="mb-6 inline-flex rounded-full border border-white/20 bg-white/5 p-3 text-[#be0000]">
        <BenefitIcon icon={icon} />
      </span>
      <h3 className="font-display text-3xl uppercase text-[#e5e2e1]">{title}</h3>
      <p className="mt-3 text-[#e7bdb6]/80">{description}</p>
    </GlassCard>
  );
}
