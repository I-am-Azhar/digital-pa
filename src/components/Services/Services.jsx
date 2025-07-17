import React from "react";


  


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

      {/* Section Header */}
      <div className="container mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-2xl font-semibold text-blue-400">What we can do?</h1>
        <p className="font-bold text-xl md:text-2xl text-light/60">Services we can help you with</p>
      </div>

      {/* Cards in 2x2 Grid with Divider */}
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCards.slice(0, 2).map(({ title, image }) => (
            <div
              key={title}
              className="bg-[#0f172a] rounded-2xl shadow-2xl p-10 flex flex-col items-center justify-center transition duration-300 hover:scale-[1.02]"
            >
              <img src={image} alt={title} className="w-24 h-24 object-contain mb-6 invert" />
              <h3 className="text-2xl font-semibold text-blue-500 text-center">{title}</h3>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-[2px] w-32 bg-blue-500 mx-auto rounded-full" />

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCards.slice(2, 4).map(({ title, image }) => (
            <div
              key={title}
              className="bg-[#0f172a] rounded-2xl shadow-2xl p-10 flex flex-col items-center justify-center transition duration-300 hover:scale-[1.02]"
            >
              <img src={image} alt={title} className="w-24 h-24 object-contain mb-6 invert" />
              <h3 className="text-2xl font-semibold text-blue-500 text-center">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
