import React from "react";
import { FlickeringGrid } from "./flickering-grid";
import { GradualSpacing } from "./gradual-spacing";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Particles from "../bg/Particles";

const PortfolioIntroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // triggers every time it comes into view
    threshold: 0.5, // adjust sensitivity
  });

  return (
    <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-lg min-h-[80px] md:min-h-[25px]">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0" style={{ opacity: 0.15 }}>
        <Particles
          particleColors={['#0ea5e9', '#ffffff']}
          particleCount={80}
          particleSpread={6}
          speed={0.06}
          particleBaseSize={40}
          moveParticlesOnHover={true}
          particleHoverFactor={0.4}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-1">
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
