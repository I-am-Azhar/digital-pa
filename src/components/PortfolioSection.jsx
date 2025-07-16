import React from "react";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-transperent text-white px-6 py-16 w-full" data-lenis-prevent>
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <p className="font-sm text-sm text-gray-400  uppercase">Our Latest Projects</p>
        <h2 className="text-4xl font-extrabold text-blue-500">Explore our Portfolio</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore our innovative strategies and creative solutions in digital marketing, branding, and web development each project reflecting our dedication to excellence and driving business success in the digital world.
        </p>
      </div>

      <div className="mt-16 bg-black/40 rounded-2xl p-8 flex flex-col lg:flex-row justify-between gap-8">
        {/* Left Side */}
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl font-semibold">Creative Solutions That Make Impact</h3>
          <p className="text-gray-400">
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
                className="flex items-center gap-2 bg-black/40 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                <span className="text-blue-400">●</span> {service}
              </button>
            ))}
          </div>

          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow">
            View Full Portfolio →
          </button>
        </div>

        {/* Right Side: Placeholder Grid */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-black/30  rounded-xl p-4 space-y-2 "
            >
              <div className="w-12 h-12 rounded-full bg-blue-500"></div>
              <div className="h-3 w-3/4 bg-blue-400 rounded"></div>
              <div className="h-3 w-full bg-gray-600 rounded"></div>
              <div className="h-3 w-5/6 bg-gray-600 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
