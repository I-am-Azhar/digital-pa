import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Particles from "../bg/Particles";
import DecryptedText from "../buttons/shinytxt";

const ServiceProcess = ({ process }) => {
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

      <div className="container mx-auto max-w-6xl relative z-10">
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
              text="Our Process"
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
            How We Work Together
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-blue-500/30 transform md:-translate-x-1/2 hidden md:block" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {process.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  className={`relative flex items-start md:items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Step Number */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center border-4 border-[#13141f] shadow-lg">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-24 md:ml-0 md:w-5/12 ${
                      isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 hover:border-blue-500/50 transition-all">
                      <h3 className="text-xl md:text-2xl font-bold text-blue-500 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-base md:text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
