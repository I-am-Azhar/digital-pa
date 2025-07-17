import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const HeroSection = () => {
  const words = ["Growth", "Presence", "Journey"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("Success");
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setStartTyping(true);
      setDisplayedText("");
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (!startTyping) return;

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
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentWordIndex, startTyping]);

  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 300], [0, 50]);
  const blur = useTransform(scrollY, [0, 300], ["blur(0px)", "blur(3px)"]);

  const iconWrapper =
    "absolute rounded-full p-2 md:p-3 bg-blue-500/10 backdrop-blur-md border border-blue-500/30 shadow-xl glossy-icon pointer-events-none";
  const iconImage = "w-full h-full object-contain";

  return (
    <section className="relative py-10 px-4 md:px-6 overflow-hidden" data-lenis-prevent>
      {/* Icons */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ filter: blur, y: translateY }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 1 }}
          className={`${iconWrapper} top-[150px] md:top-[250px] right-10 md:right-50 w-[50px] h-[50px] md:w-[80px] md:h-[80px] rotate-[10deg]`}
        >
          <img
            src="/bg/icons8-instagram-logo.svg"
            alt="Instagram"
            className={iconImage}
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 1.5 }}
          className={`${iconWrapper} bottom-20 md:top-[290px] right-[200px] md:right-[325px] w-[50px] h-[50px] md:w-[80px] md:h-[80px] rotate-[5deg]`}
        >
          <img
            src="/bg/icons8-facebook.svg"
            alt="Facebook"
            className={iconImage}
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 2 }}
          className={`${iconWrapper} bottom-[90px] md:bottom-[72px] left-[calc(50%+60px)] md:left-[calc(60%+5px)] w-[50px] h-[50px] md:w-[80px] md:h-[80px] rotate-[-5deg]`}
        >
          <img
            src="/bg/icons8-youtube.svg"
            alt="YouTube"
            className={iconImage}
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 2.5 }}
          className={`${iconWrapper} bottom-10 left-20 md:left-125 w-[50px] h-[50px] md:w-[80px] md:h-[80px] rotate-[-10deg]`}
        >
          <img src="/bg/icons8-email.svg" alt="Email" className={iconImage} />
        </motion.div>
      </motion.div>

      <div className="py-10 container mx-auto flex flex-col md:flex-row items-center relative z-10">
        {/* Left Section */}
        <div className="pt-10 md:pt-15 pl-4 md:pl-10 md:w-1/2 mb-8 md:mb-0">
          <div className="flex flex-col md:w-175 items-start space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white select-text">
              Digital
              <span className="text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                Pa
              </span> - Your partner in digital{' '}
              <span className="text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                {displayedText}
                {startTyping && (
                  <span className="animate-pulse select-none">|</span>
                )}
              </span>
            </h1>

            <p className="font-light text-sm md:text-base md:text-xl text-gray-400 max-w-md md:max-w-lg select-text">
              DigitalPA helps you automate tasks, manage your schedule, and
              boost productivity with artificial intelligence.
            </p>

            <button className="px-4 py-1.5 md:px-8 md:py-3 rounded-full bg-blue-600 text-white font-semibold hover:opacity-90 transition-all text-sm md:text-base">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="relative w-full max-w-md">
            <div className="absolute hidden md:block -top-8 -left-8 md:-top-10 md:-left-10 w-24 h-24 md:w-32 md:h-32 bg-blue-400 rounded-full opacity-30" />
            <div className="absolute hidden md:block -bottom-8 -right-8 md:-bottom-10 md:-right-10 w-24 h-24 md:w-32 md:h-32 bg-blue-600 rounded-full opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
