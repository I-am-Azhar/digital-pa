import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [content, setContent] = useState({
    brand: "",
    links: ["", "", "", ""],
    button: "",
  });

  const fullBrand = "DigitalPa";
  const fullLinks = ["Home", "Services", "Portfolio", "About Us"];
  const fullButton = "Get Started";

  useEffect(() => {
    const timer1 = setTimeout(() => setExpanded(true), 500);
    const timer2 = setTimeout(() => setShowTyping(true), 1200);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    if (!showTyping) return;

    let brandIndex = 0;
    let buttonIndex = 0;
    const linkIndexes = [0, 0, 0, 0];

    const interval = setInterval(() => {
      setContent((prev) => {
        const updated = { ...prev };

        if (brandIndex <= fullBrand.length) {
          updated.brand = fullBrand.slice(0, brandIndex);
          brandIndex++;
        }

        if (buttonIndex <= fullButton.length) {
          updated.button = fullButton.slice(0, buttonIndex);
          buttonIndex++;
        }

        for (let i = 0; i < fullLinks.length; i++) {
          if (linkIndexes[i] <= fullLinks[i].length) {
            updated.links[i] = fullLinks[i].slice(0, linkIndexes[i]);
            linkIndexes[i]++;
          }
        }

        if (
          brandIndex > fullBrand.length &&
          buttonIndex > fullButton.length &&
          linkIndexes.every((val, i) => val > fullLinks[i].length)
        ) {
          clearInterval(interval);
        }

        return updated;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [showTyping]);

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
        width: expanded ? "90%" : 64,
        height: expanded ? "auto" : 64,
        borderRadius: expanded ? 24 : 9999,
        padding: expanded ? "0.5rem 1.5rem" : 0,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-lg shadow-xl border border-white/10 drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] overflow-hidden text-white"
    >
      {!expanded ? (
        <div className="w-16 h-16 flex items-center justify-center">
          <img
            src="/images/logo1.png"
            alt="DigitalPA Logo"
            className="h-8 w-8 object-contain"
          />
        </div>
      ) : (
        <div className="flex justify-between items-center w-full">
          {/* Left: Logo + Brand */}
          <div className="flex items-center space-x-3">
            <img
              src="/images/logo1.png"
              alt="DigitalPA Logo"
              className="h-7 w-auto object-contain"
            />
            <span className="text-base font-extrabold text-white">
              {/* Color Pa only when fully typed */}
              {content.brand.startsWith("Digital") && content.brand.length > 7 ? (
                <>
                  {"Digital"}
                  <span className="text-blue-500">
                    {content.brand.slice(7)}
                  </span>
                </>
              ) : (
                content.brand
              )}
            </span>
          </div>

          {/* Center: Nav Links */}
          <div className="hidden md:flex space-x-8 text-white font-medium">
            {content.links.map((link, idx) => (
              <span key={idx} className="text-sm">
                {link}
              </span>
            ))}
          </div>

          {/* Right: CTA Button */}
          <div className="hidden md:block">
            {content.button && (
              <button className="px-3 py-1 text-sm rounded-full bg-blue-600 text-white font-semibold hover:opacity-90 transition-all">
                {content.button}
              </button>
            )}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
