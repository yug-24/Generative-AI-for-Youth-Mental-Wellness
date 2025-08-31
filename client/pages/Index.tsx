import Navbar from "@/components/sahara/Navbar";
import Footer from "@/components/sahara/Footer";
import HeroSection from "@/components/sahara/HeroSection";
import FeaturesSection from "@/components/sahara/FeaturesSection";
import MissionSection from "@/components/sahara/MissionSection";

export default function Index() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <MissionSection />
      </main>
      <Footer />
    </div>
  );
}
