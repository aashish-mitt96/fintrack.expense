import AboutSection from "../components/AboutSection";
import ContactUsSection from "../components/ContactSection";
import FaqAndFooter from "../components/FaqSection";
import FeatureSection from "../components/FeatureSection";
import LandingSection from "../components/LandingSection";
import PricingSection from "../components/PricingSection";
import WorkingSection from "../components/WorkingSection";

const HomePage = () => {
  return (
    <>
      <LandingSection/>
      <FeatureSection/>
      <PricingSection/>
      <WorkingSection/>
      <AboutSection/>
      <ContactUsSection/>
      <FaqAndFooter/>
    </>
  );
};

export default HomePage;
