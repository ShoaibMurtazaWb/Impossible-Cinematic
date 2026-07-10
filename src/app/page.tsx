import { Footer, Navbar } from "@/components/layout/site-chrome";
import { PartnerModalProvider } from "@/components/layout/partner-modal-provider";
import { HomeSections } from "@/components/sections/home-sections";

export default function Home() {
  return (
    <PartnerModalProvider>
      <div className="min-h-screen bg-[#131313] text-[#e5e2e1]">
        <Navbar />
        <HomeSections />
        <Footer />
      </div>
    </PartnerModalProvider>
  );
}
