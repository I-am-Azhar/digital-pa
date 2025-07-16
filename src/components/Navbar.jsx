import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [showLeftLogo, setShowLeftLogo] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [animatingHeight, setAnimatingHeight] = useState(true);
  const [hideNavbar, setHideNavbar] = useState(false); // ✅ NEW

  const content = {
    brand: "DigitalPa ",
    links: [
      { label: "Home", url: "#grow" },
      { label: "Services", url: "#services" },
      { label: "Portfolio", url: "#portfolio" },
      { label: "About Us", url: "#about" },
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

  // ✅ Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      const growSection = document.getElementById("grow");
      if (growSection) {
        const { top } = growSection.getBoundingClientRect();
        setHideNavbar(top <= 0); // hide when scrolled past the top of grow section
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{
        width: 64,
        height: 64,
        borderRadius: 9999,
        padding: 0,
        y: -40,
      }}
      animate={{
        y: hideNavbar ? -100 : 0, // ✅ Slide up when hideNavbar is true
        width: "90%",
        ...(animatingHeight ? { height: 64 } : {}),
        borderRadius: 24,
        padding: "1rem 1.5rem",
      }}
      transition={{
        duration: 1.0,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={!animatingHeight ? { height: "auto" } : {}}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-lg shadow-xl border border-white/10 drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] overflow-hidden text-white"
    >
      <div className="flex justify-between items-center w-full">
        {/* Left: Logo + Brand */}
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

        {/* Center: Nav Links */}
        {showContent && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:flex space-x-8 text-white font-medium"
          >
            {content.links.map((linkObj, idx) => (
              <a
                key={idx}
                href={linkObj.url}
                className="text-sm hover:underline hover:underline-offset-4 hover:decoration-blue-500 transition-all"
              >
                {linkObj.label}
              </a>
            ))}
          </motion.div>
        )}

        {/* Right: CTA Button */}
        {showContent && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:block"
          >
            <button className="px-3 py-1 text-sm rounded-full bg-blue-600 text-white font-base hover:opacity-90 transition-all">
              {content.button}
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
