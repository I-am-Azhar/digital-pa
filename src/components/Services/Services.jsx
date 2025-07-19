import React from "react";
import GlareHover from "../animations/GlareHover";
import Particles from "../bg/Particles";

const serviceCards = [
  {
    title: "Digital Marketing",
    image: "/icons/digital-marketing.png",
  },
  {
    title: "Social Media Marketing",
    image: "/icons/social-media.png",
  },
  {
    title: "Branding Offline/Online",
    image: "/icons/branding.png",
  },
  {
    title: "Web Development",
    image: "/icons/web-development.png",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative scroll-mt-24 pb-24 px-6">
      {/* Particles Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.5, zIndex: 0 }}>
        <Particles
          particleColors={['#ffffff', '#ffffff', '#f3f4f6']}
          particleCount={150}
          particleSpread={12}
          speed={0.08}
          particleBaseSize={60}
          moveParticlesOnHover={true}
          particleHoverFactor={0.3}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Section Header */}
      <div className="container mx-auto text-center mb-16 relative z-10">
        <h1 className="text-xl md:text-2xl font-semibold text-blue-400">What we can do?</h1>
        <p className="font-bold text-2xl md:text-3xl text-light/60">Services we can help you with</p>
      </div>

      {/* Cards in 2x2 Grid with Divider */}
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-12 relative z-10">
        {/* Top Row */}
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {serviceCards.slice(0, 2).map(({ title, image }) => (
            <GlareHover
              key={title}
              width="100%"
              height="auto"
              background="#0f172a"
              borderRadius="16px"
              borderColor="#1e293b"
              glareColor="#3b82f6"
              glareOpacity={0.3}
              className="transition duration-300 hover:scale-[1.02] service-card"
            >
              <div className="p-10 flex flex-col items-center justify-center">
                <img src={image} alt={title} className="w-16 h-16 md:w-24 md:h-24 object-contain mb-6 invert" />
                <h3 className="text-md font-semibold text-blue-500 text-center">{title}</h3>
              </div>
            </GlareHover>
          ))}
        </div>

        {/* Divider */}
        <div className="h-[2px] w-32 bg-blue-500 mx-auto rounded-full" />

        {/* Bottom Row */}
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {serviceCards.slice(2, 4).map(({ title, image }) => (
            <GlareHover
              key={title}
              width="100%"
              height="auto"
              background="#0f172a"
              borderRadius="16px"
              borderColor="#1e293b"
              glareColor="#3b82f6"
              glareOpacity={0.3}
              className="transition duration-300 hover:scale-[1.02] service-card"
            >
              <div className="p-10 flex flex-col items-center justify-center">
                <img src={image} alt={title} className="w-16 h-16 md:w-24 md:h-24 object-contain mb-6 invert" />
                <h3 className="text-md font-semibold text-blue-500 text-center">{title}</h3>
              </div>
            </GlareHover>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
