import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import GlareHover from "../animations/GlareHover";
import Particles from "../bg/Particles";
import DecryptedText from "../buttons/shinytxt";

const ServiceFeatures = ({ features }) => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, threshold: 0.2 });

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-6">
      {/* Particles Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.4, zIndex: 0 }}>
        <Particles
          particleColors={['#ffffff', '#ffffff', '#f3f4f6']}
          particleCount={100}
          particleSpread={8}
          speed={0.06}
          particleBaseSize={60}
          moveParticlesOnHover={true}
          particleHoverFactor={0.3}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">
            <DecryptedText
              text="What's Included"
              speed={80}
              maxIterations={8}
              sequential={true}
              revealDirection="start"
              useOriginalCharsOnly={true}
              animateOn="view"
              className="text-blue-400"
              encryptedClassName="text-blue-400/30"
            />
          </h2>
          <p className="font-bold text-2xl md:text-3xl text-white/90">
            Comprehensive Features & Services
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlareHover
                width="100%"
                height="auto"
                background="#0f172a"
                borderRadius="16px"
                borderColor="#1e293b"
                glareColor="#3b82f6"
                glareOpacity={0.3}
                className="transition duration-300 hover:scale-[1.02] service-card h-full"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-500 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base flex-grow">
                    {feature.description}
                  </p>
                </div>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
