import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const words = ["Success", "Growth", "Presence", "Journey"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const fullWord = words[currentWordIndex];
    let currentChar = 0;

    const typeInterval = setInterval(() => {
      setDisplayedText(fullWord.slice(0, currentChar + 1));
      currentChar++;
      if (currentChar === fullWord.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setDisplayedText("");
        }, 2000); // Wait before switching to next word
      }
    }, 100); // typing speed

    return () => clearInterval(typeInterval);
  }, [currentWordIndex]);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">

        {/* Left Section */}
        <div className="pt-15 pl-10 md:w-1/2 mb-12 md:mb-0">
          {/* Outer scale wrapper (does not affect text selection) */}
          {/* <div className="transform scale-[1.1] md:scale-[1.15]"> */}
          <div className="pl-24 pt-20 flex flex-col items-start space-y-6">

            {/* Heading with typing animation */}
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white select-text">
              Digital
              <span className="text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">Pa</span> - Your partner in digital{" "}
              <span className="text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                {displayedText}
                <span className="animate-pulse select-none">|</span>
              </span>
            </h1>

            {/* Paragraph */}
            <p className="font-light !text-base md:text-xl text-gray-400 max-w-lg select-text">
              DigitalPA helps you automate tasks, manage your schedule, and boost productivity with artificial intelligence.
            </p>

            {/* CTA Button */}
            <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:opacity-90 transition-all">
              Contact Us
            </button>
          </div>
          {/* </div> */}
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Background Circles */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-400 rounded-full opacity-30" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600 rounded-full opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
