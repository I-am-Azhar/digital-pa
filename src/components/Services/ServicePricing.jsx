import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Particles from "../bg/Particles";
import DecryptedText from "../buttons/shinytxt";
import GlareHover from "../animations/GlareHover";
import Magnet from "../animations/Magnet";

const ServicePricing = ({ pricing, setShowContactForm }) => {
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
              text="Pricing & Packages"
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
          <p className="font-bold text-2xl md:text-3xl text-white/90 mb-4">
            Choose the Right Plan for You
          </p>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {pricing.approach}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pricing.packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={pkg.popular ? "md:-mt-4 md:mb-4" : ""}
            >
              <GlareHover
                width="100%"
                height="auto"
                background={pkg.popular ? "#1e293b" : "#0f172a"}
                borderRadius="16px"
                borderColor={pkg.popular ? "#3b82f6" : "#1e293b"}
                glareColor="#3b82f6"
                glareOpacity={0.3}
                className={`transition duration-300 hover:scale-[1.02] service-card h-full ${
                  pkg.popular ? "border-2 border-blue-500" : ""
                }`}
              >
                <div className="p-8 flex flex-col h-full">
                  {pkg.popular && (
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold text-blue-500">
                      {pkg.price}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span className="text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Magnet
                    magnetStrength={2}
                    padding={30}
                    wrapperClassName="w-full"
                    innerClassName="w-full"
                  >
                    <button
                      onClick={() => setShowContactForm(true)}
                      className={`w-full py-3 rounded-full font-semibold transition-all cursor-target ${
                        pkg.popular
                          ? "bg-blue-600 text-white hover:opacity-90"
                          : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                      }`}
                    >
                      Get Started
                    </button>
                  </Magnet>
                </div>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePricing;
