import { Footer, Navbar } from "@/components/layout/site-chrome";
import { PartnerModalProvider } from "@/components/layout/partner-modal-provider";
import { VideoModalProvider } from "@/components/layout/video-modal-provider";
import { FeaturedSection } from "@/components/sections/featured-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { QuoteSection } from "@/components/sections/quote-section";
import { ResultsSection } from "@/components/sections/results-section";
import { SponsorshipSection } from "@/components/sections/sponsorship-section";
import { StorySection } from "@/components/sections/story-section";
import { TeamSection } from "@/components/sections/team-section";
import { TricoastSection } from "@/components/sections/tricoast-section";

export default function Home() {
  return (
    <PartnerModalProvider>
      <VideoModalProvider>
        <div className="min-h-screen bg-[#131313] text-[#e5e2e1]">
          <Navbar />
          <main className="overflow-x-hidden">
            <HeroSection />
            <PartnersSection />
            <TricoastSection />
            <StorySection />
            <FeaturedSection />
            <QuoteSection />
            <ResultsSection />
            <TeamSection />
            <SponsorshipSection />
            <FinalCtaSection />
          </main>
          <Footer />
        </div>
      </VideoModalProvider>
    </PartnerModalProvider>
  );
}
