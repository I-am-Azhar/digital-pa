import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Grow from "./components/Grow/grow";
import Services from "./components/Services/Services";
import PortfolioSection from "./components/PortfolioSection";
import ThreeDMarquee from "./components/ThreeDMarquee";
import PortfolioIntroSection from "./components/ui/PortfolioIntroSection";
import Footer from "./components/Footer";

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

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
      {!showContactForm && <Navbar setShowContactForm={setShowContactForm} />}
      <HeroSection 
        showContactForm={showContactForm}
        setShowContactForm={setShowContactForm}
      />
      <Grow />
      <Services />
      <PortfolioIntroSection/>
      <PortfolioSection />
      <ThreeDMarquee />
      <Footer />
    </div>
  );
}

export default App;
