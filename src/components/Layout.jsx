import HeroLayout from "./HeroLayout";
import SocialProof from "./SocialProof";
import Features from "./Features";
import AIAssistantSection from "./AIAssistantSection";
import Testimonials from "./Testimonials";
import HowItWorks from "./HowItWorks";
import BuilderStory from "./BuilderStory";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6F3FF] via-[#FFFFFF] to-[#FBE5D6] overflow-x-hidden">
      <main>
        <HeroLayout />
        {/* <SocialProof /> */}
        <Features />
        <AIAssistantSection />
        {/* <Testimonials /> */}
        <HowItWorks />
        <FinalCTA />
        <BuilderStory />
      </main>
      <Footer />
    </div>
  );
}
