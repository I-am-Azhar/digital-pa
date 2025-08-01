import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const Navbar = ({ setShowContactForm, showContactForm }) => {
  const [expanded, setExpanded] = useState(false);
  const [showLeftLogo, setShowLeftLogo] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [animatingHeight, setAnimatingHeight] = useState(true);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const content = {
    brand: "DigitalPa ",
    links: [
      { label: "Home", url: "#grow" },
      { label: "Services", url: "#services" },
      { label: "Portfolio", url: "#portfolio" },
      { label: "Contact", url: "" },
    ],
    button: "Get Started",
  };

  useEffect(() => {
    const timer1 = setTimeout(() => setExpanded(true), 100);
    const timer2 = setTimeout(() => setShowLeftLogo(true), 1000);
    const timer3 = setTimeout(() => setShowContent(true), 1050);
    const timer4 = setTimeout(() => setAnimatingHeight(false), 1100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const handleScroll = ({ scroll }) => {
      const growSection = document.getElementById("grow");
      if (growSection) {
        const { top } = growSection.getBoundingClientRect();
        setHideNavbar(top <= 0);
      }
    };

    lenis.on('scroll', handleScroll);
    
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.off('scroll', handleScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      {!showContactForm && (
        <motion.nav
          initial={{
            width: 64,
            height: 64,
            borderRadius: 9999,
            padding: 0,
            y: -40,
          }}
          animate={{
            y: hideNavbar ? -100 : 0,
            width: "90%",
            ...(animatingHeight ? { height: 64 } : {}),
            borderRadius: 24,
            padding: "1rem 1.5rem",
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
          }}
          transition={{
            duration: 1.0,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={!animatingHeight ? { height: "auto" } : {}}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-lg shadow-xl border border-white/10 drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] overflow-hidden text-white hidden md:block"
        >
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center space-x-3">
            {showLeftLogo && (
              <motion.img
                initial={{ y: -20, opacity: 0 }}
                animate={showContent ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1 }}
                src="/images/logo1.png"
                alt="DigitalPA Logo"
                className="h-7 w-auto object-contain"
              />
            )}
            {showContent && (
              <motion.span
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-base font-semibold tracking-widest text-white"
              >
                Digital<span className="text-blue-500">Pa</span>
              </motion.span>
            )}
          </div>

          {showContent && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex space-x-8 text-white font-medium"
            >
              {content.links.map((linkObj, idx) => (
                <a
                  key={idx}
                  href={linkObj.url}
                  onClick={(e) => {
                    if (linkObj.label === "Contact") {
                      e.preventDefault();
                      setShowContactForm(true);
                    }
                  }}
                  className="text-sm hover:underline hover:underline-offset-4 hover:decoration-blue-500 transition-all cursor-target"
                >
                  {linkObj.label}
                </a>
              ))}
            </motion.div>
          )}

          {showContent && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <button 
                onClick={() => setShowContactForm(true)}
                className="px-3 py-1 text-sm rounded-full bg-blue-600 text-white font-base hover:opacity-90 transition-all cursor-target"
              >
                {content.button}
              </button>
            </motion.div>
          )}
        </div>
      </motion.nav>
        )}

      {/* Mobile Navbar */}
      {!showContactForm && (
          <motion.div
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden"
            initial={{ 
              width: "90%",
              height: 48,
              borderRadius: 24,
              y: 0
            }}
            animate={{
              y: hideNavbar ? -100 : 0,
              width: hideNavbar ? 48 : "90%",
              height: hideNavbar ? 48 : 48,
              borderRadius: hideNavbar ? 9999 : 24,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
            transition={{
              duration: 0.8,
              ease: [0.32, 0.72, 0, 1],
            }}
          >
        <motion.div
          className={`w-full h-full ${hideNavbar ? 'rounded-full' : 'rounded-2xl'} bg-white/5 backdrop-blur-lg shadow-xl border border-white/10 flex items-center justify-center cursor-target`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {hideNavbar ? (
            <img
              src="/images/logo1.png"
              alt="DigitalPA Logo"
              className="h-7 w-7 object-contain"
            />
          ) : (
            <div className="flex items-center justify-between w-full px-4">
              <div className="flex items-center gap-2">
                <img
                  src="/images/logo1.png"
                  alt="DigitalPA Logo"
                  className="h-7 w-7 object-contain"
                />
                <span className="text-base font-semibold text-white tracking-wider">
                  Digital<span className="text-blue-500">Pa</span>
                </span>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-blue-600 text-white font-semibold hover:opacity-90 transition-all text-sm cursor-target">
                Menu
              </div>
            </div>
          )}
        </motion.div>

        <AnimatePresence>
          {isMobileMenuOpen && !hideNavbar && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 right-0 w-48 bg-white/10 backdrop-blur-lg rounded-lg shadow-xl border border-white/10 overflow-hidden"
            >
              <div className="flex flex-col py-2">
                {content.links.map((linkObj, idx) => (
                  <a
                    key={idx}
                    href={linkObj.url}
                    onClick={(e) => {
                      if (linkObj.label === "Contact") {
                        e.preventDefault();
                        setShowContactForm(true);
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 text-white hover:bg-white/10 transition-all text-sm cursor-target"
                  >
                    {linkObj.label}
                  </a>
                ))}
                <button 
                  onClick={() => {
                    setShowContactForm(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="mx-4 mt-2 py-1 text-sm rounded-full bg-blue-600 text-white font-base hover:opacity-90 transition-all cursor-target"
                >
                  {content.button}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
        )}
    </>
  );
};

export default Navbar;
