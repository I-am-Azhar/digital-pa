import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { createPortal } from "react-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Grow from "./components/Grow/grow";
import Services from "./components/Services/Services";
import PortfolioSection from "./components/PortfolioSection";
import ThreeDMarquee from "./components/ThreeDMarquee";
import PortfolioIntroSection from "./components/ui/PortfolioIntroSection";
import Footer from "./components/Footer";
import TargetCursor from "./components/animations/TargetCursor";
import ContactForm from "./components/ContactForm";
import ScrollProgressIndicator from "./components/ScrollProgressIndicator";

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#13141f] text-white min-h-screen">
      <ScrollProgressIndicator />
      {!isMobile && !showContactForm && (
        <TargetCursor 
          targetSelector=".cursor-target, button, a, [role='button'], .glare-hover, .service-card"
          spinDuration={2}
          hideDefaultCursor={true}
        />
      )}
      {!showContactForm && <Navbar setShowContactForm={setShowContactForm} />}
      {!showContactForm && (
        <>
          <HeroSection 
            showContactForm={showContactForm}
            setShowContactForm={setShowContactForm}
          />
          <Grow />
          <Services />
          <PortfolioIntroSection/>
          <PortfolioSection setShowContactForm={setShowContactForm} />
          <ThreeDMarquee />
          <Footer setShowContactForm={setShowContactForm} />
        </>
      )}
      
      {/* ContactForm rendered at document body level */}
      {showContactForm && createPortal(
        <ContactForm onClose={() => setShowContactForm(false)} />,
        document.body
      )}
    </div>
  );
}

export default App;
