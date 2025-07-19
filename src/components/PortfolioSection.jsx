import React from "react";
import { FlickeringGrid } from "./ui/flickering-grid";
import Particles from "./bg/Particles";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-transperent text-white px-6 py-16 w-full relative" data-lenis-prevent>
      {/* Particles Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.5, zIndex: 0 }}>
        <Particles
          particleColors={['#ffffff', '#ffffff', '#f3f4f6']}
          particleCount={120}
          particleSpread={10}
          speed={0.07}
          particleBaseSize={70}
          moveParticlesOnHover={true}
          particleHoverFactor={0.6}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      
      <div className="bg-black/40 rounded-2xl p-8 flex flex-col lg:flex-row justify-between gap-8 relative z-10">
        {/* Left Side */}
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl font-semibold">Creative Solutions That Make Impact</h3>
          <p className="text-gray-400 hidden md:block">
            From digital marketing and social media marketing to web development and online/offline branding, our portfolio highlights a diverse range of projects that reflect our expertise in building impactful digital experiences.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              "Digital Marketing",
              "Social Media Marketing",
              "Branding Offline/Online",
              "Web Development",
            ].map((service, index) => (
              <button
                key={index}
                className="flex items-center gap-2 bg-black/40 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition text-left md:text-center"
              >
                <span className="text-blue-400">●</span> {service}
              </button>
            ))}
          </div>

          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-md shadow text-sm md:text-base">
            View Full Portfolio →
          </button>
        </div>

        {/* Right Side: Placeholder Grid - Hidden on mobile */}
        <div className="flex-1 grid grid-cols-2 gap-4 hidden md:grid">
          {[
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
          ].map(({ title, image }, i) => (
            <div
              key={i}
              className="bg-black/30 md:block rounded-xl p-4 space-y-2 
                        transition-all duration-300 ease-out 
                        hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30
                        group relative overflow-hidden"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/10 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <img src={image} alt={title} className="w-12 h-12 rounded-full object-contain invert" />
              <div className="w-3/4 text-blue-400 text-sm font-medium truncate">
                {title}
              </div>
              <div className="w-full text-gray-400 text-xs truncate">
                {title === "Digital Marketing" && "• SEO & PPC campaigns"}
                {title === "Social Media Marketing" && "• Content strategy & engagement"}
                {title === "Branding Offline/Online" && "• Visual identity & positioning"}
                {title === "Web Development" && "• Responsive & fast websites"}
              </div>
              <div className="w-5/6 text-gray-400 text-xs truncate">
                {title === "Digital Marketing" && "• Analytics & optimization"}
                {title === "Social Media Marketing" && "• Community management"}
                {title === "Branding Offline/Online" && "• Brand guidelines"}
                {title === "Web Development" && "• Modern frameworks"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
