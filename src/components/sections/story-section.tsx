import { siteContent } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/primitives";
import { StorySlider } from "@/components/sections/story-slider";

export function StorySection() {
  return (
    <section id="story" className="min-h-screen snap-start border-t border-white/5 bg-[#131313] px-4 py-24 md:px-16">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading title={siteContent.story.title} subtitle={siteContent.story.subtitle} />
        <StorySlider />
      </div>
    </section>
  );
}
