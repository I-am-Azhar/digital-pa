import React from "react";

const HeroSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        
        {/* Left Section */}
        <div className="pt-15 pl-10 md:w-1/2 mb-12 md:mb-0">

          {/* ✅ Merged text + paragraph + button block with scale control */}
          <div className="pl-5 pt-5 flex flex-col items-start space-y-6 transform scale-100 md:scale-105">
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-light">
              Digital<span className="gradient-text">Pa</span> - Your partner in digital <span className="gradient-text">Success</span>
            </h1>

            {/* Paragraph */}
            <p className="text-lg md:text-xl text-light/40 max-w-lg">
              DigitalPA helps you automate tasks, manage your schedule, and boost productivity with artificial intelligence.
            </p>

            {/* CTA Button */}
            <button className="px-8 py-3 rounded-full gradient-bg text-white font-medium hover:opacity-90 transition-all">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Background Circles */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent rounded-full opacity-30" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary rounded-full opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
