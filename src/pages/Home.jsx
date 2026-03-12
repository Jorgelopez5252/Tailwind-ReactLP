import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { FeatureSection } from "../components/FeatureSection";
import { Workflow } from "../components/WorkFlowSection";
import {Pricing} from  "../components/PricingSection"
import { Testimonials } from "../components/TestimonialSection";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
      </div>
      <main></main>
    </div>
  );
};
