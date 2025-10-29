import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Particles from "../bg/Particles";
import DecryptedText from "../buttons/shinytxt";
import CounterStat from "../Grow/CounterStat";

const ServiceTestimonials = ({ testimonials, stats }) => {
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
        {/* Stats Section */}
        {stats && stats.length > 0 && (
          <div className="mb-16">
            <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {stats.map((stat, index) => (
                  <CounterStat
                    key={index}
                    target={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Testimonials Section */}
        <motion.div
          ref={headerRef}
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">
            <DecryptedText
              text="Client Success Stories"
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
            What Our Clients Say
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 hover:border-blue-500/50 transition-all h-full">
                <div className="mb-4">
                  <div className="flex text-yellow-400 text-xl mb-2">
                    {"★".repeat(5)}
                  </div>
                </div>
                <p className="text-gray-300 text-base md:text-lg mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="text-white font-semibold text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-blue-400 text-sm mt-1">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
