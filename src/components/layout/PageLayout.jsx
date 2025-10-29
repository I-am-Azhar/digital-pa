import { useState, useEffect, createContext, useRef } from "react";
import { createPortal } from "react-dom";
import Lenis from "@studio-freight/lenis";

import Navbar from "../Navbar";
import Footer from "../Footer";
import ContactForm from "../ContactForm";
import ScrollProgressIndicator from "../ScrollProgressIndicator";
import TargetCursor from "../animations/TargetCursor";
import PageTransition from "./PageTransition";

// eslint-disable-next-line react-refresh/only-export-components
export const ContactFormContext = createContext(null);
// eslint-disable-next-line react-refresh/only-export-components
export const LenisContext = createContext(null);

const PageLayout = ({ children }) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lenisRef = useRef(null);

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

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <ContactFormContext.Provider value={{ setShowContactForm, showContactForm }}>
      <LenisContext.Provider value={lenisRef.current}>
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
          <PageTransition>
            {!showContactForm && children}
          </PageTransition>
          {!showContactForm && <Footer setShowContactForm={setShowContactForm} />}
          
          {/* ContactForm rendered at document body level */}
          {showContactForm && createPortal(
            <ContactForm onClose={() => setShowContactForm(false)} />,
            document.body
          )}
        </div>
      </LenisContext.Provider>
    </ContactFormContext.Provider>
  );
};

export default PageLayout;
