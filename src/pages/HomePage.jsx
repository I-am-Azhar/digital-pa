import HeroSection from "../components/HeroSection";
import Grow from "../components/Grow/grow";
import Services from "../components/Services/Services";
import PortfolioSection from "../components/PortfolioSection";
import ThreeDMarquee from "../components/ThreeDMarquee";
import PortfolioIntroSection from "../components/ui/PortfolioIntroSection";

const HomePage = ({ setShowContactForm }) => {
  return (
    <>
      <HeroSection 
        showContactForm={false}
        setShowContactForm={setShowContactForm}
      />
      <Grow />
      <Services />
      <PortfolioIntroSection/>
      <PortfolioSection setShowContactForm={setShowContactForm} />
      <ThreeDMarquee />
    </>
  );
};

export default HomePage;
