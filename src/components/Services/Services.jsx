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
    <section id="services" className="py-24 px-6">
      {/* Section Header */}
      <div className="container mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-light/90 mb-4">What we can do?</h1>
        <p className="text-xl md:text-2xl text-light/60">Services we can help you with</p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {serviceCards.map(({ title, image }, index) => (
          <div
            key={title}
            className={`transition duration-300 ${
              index % 2 === 0 ? "md:-translate-y-6" : "md:translate-y-6"
            }`}
          >
            {/* Card Container */}
            <div className="bg-soft/10 backdrop-blur-md rounded-3xl p-10 border border-white/10 shadow-lg h-full flex flex-col items-center justify-center">
              {/* Icon */}
              <img
                src={image}
                alt={title}
                className="w-28 h-28 object-contain mb-6"
              />
              {/* Title */}
              <h3 className="text-2xl text-light font-semibold text-center">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
