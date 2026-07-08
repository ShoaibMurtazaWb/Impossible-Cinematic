import { Footer, Navbar } from "@/components/layout/site-chrome";
import { HomeSections } from "@/components/sections/home-sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1]">
      <Navbar />
      <HomeSections />
      <Footer />
    </div>
  );
}
