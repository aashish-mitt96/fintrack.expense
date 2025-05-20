import AboutSection from "../components/AboutSection";
import ContactUsSection from "../components/ContactSection";
import FaqAndFooter from "../components/FaqSection";
import FeatureSection from "../components/FeatureSection";
import HowItWorks from "../components/HowItWorks";
import LandingSection from "../components/LandingSection";
import PricingSection from "../components/PricingSection";

const HomePage = () => {
  return (
    <>
      <LandingSection/>
      <FeatureSection/>
      <PricingSection/>
      <HowItWorks/>
      <AboutSection/>
      <ContactUsSection/>
      <FaqAndFooter/>
    </>
  );
};

export default HomePage;
