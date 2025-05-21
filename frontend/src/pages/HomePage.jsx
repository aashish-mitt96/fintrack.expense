import LandingSection from "../components/LandingSection";
import FeatureSection from "../components/FeatureSection";
import PricingSection from "../components/PricingSection";
import WorkingSection from "../components/WorkingSection";
import AboutSection from "../components/AboutSection";
import ContactUsSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import LoginPage from "./LoginPage";

const HomePage = () => {
  return (
    <>
      <LandingSection/>
      <FeatureSection/>
      <PricingSection/>
      <WorkingSection/>
      <AboutSection/>
      <ContactUsSection/>
      <FooterSection/>
    </>
  );
};

export default HomePage;
