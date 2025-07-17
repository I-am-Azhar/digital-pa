import React from "react";
import { FlickeringGrid } from "./flickering-grid";
import { GradualSpacing } from "./gradual-spacing";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PortfolioIntroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // triggers every time it comes into view
    threshold: 0.5, // adjust sensitivity
  });

  return (
    <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-lg min-h-[80px] md:min-h-[25px]">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          squareSize={4}
          gridGap={6}
          flickerChance={0.3}
          color="#0ea5e9"
          maxOpacity={0.2}
        />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 flex items-center justify-center h-full px-6 py-4 md:py-[1.5rem]"
      >
        {inView && (
          <motion.div
            key={Date.now()} // forces re-animation on every view
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <GradualSpacing
              text="Explore Our Portfolio"
              className="text-2xl md:text-4xl font-extrabold items-center text-blue-500"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PortfolioIntroSection;
