import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const words = ["Growth", "Presence", "Journey"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("Success");
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setStartTyping(true);
      setDisplayedText("");
    }, 3000); // Wait 3 seconds before starting typewriter

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
    "absolute rounded-full p-3 bg-blue-500/10 backdrop-blur-md border border-blue-500/30 shadow-xl glossy-icon pointer-events-none";
  const iconImage = "w-full h-full object-contain";

  return (
    <section className="relative py-10 px-6 overflow-hidden">
      {/* Icons */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ filter: blur, y: translateY }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 3 }}
          className={`${iconWrapper} top-[250px] right-50 w-[80px] h-[80px] rotate-[10deg]`}
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
          transition={{ duration: 0.6, ease: "easeInOut", delay: 3.5 }}
          className={`${iconWrapper} top-[290px] right-[325px] w-[80px] h-[80px] rotate-[5deg]`}
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
          transition={{ duration: 0.6, ease: "easeInOut", delay: 4 }}
          className={`${iconWrapper} bottom-65 left-3/5 w-[80px] h-[80px] rotate-[-5deg]`}
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
          transition={{ duration: 0.6, ease: "easeInOut", delay: 4.5 }}
          className={`${iconWrapper} bottom-10 left-125 w-[80px] h-[80px] rotate-[-10deg]`}
        >
          <img
            src="/bg/icons8-email.svg"
            alt="Email"
            className={iconImage}
          />
        </motion.div>
      </motion.div>

      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
        {/* Left Section */}
        <div className="pt-15 pl-10 md:w-1/2 mb-12 md:mb-0">
          <div className="pt-10 flex flex-col md:w-200 items-start space-y-6">
            <h1 className="text-5xl md:text-5xl font-extrabold leading-tight text-white select-text">
              Digital
              <span className="text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">Pa</span>{" "}
              - Your partner in digital{" "}
              <span className="text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                {displayedText}
                {startTyping && <span className="animate-pulse select-none">|</span>}
              </span>
            </h1>

            <p className="font-light !text-base md:text-xl text-gray-400 max-w-lg select-text">
              DigitalPA helps you automate tasks, manage your schedule, and boost productivity with artificial intelligence.
            </p>

            <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:opacity-90 transition-all">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-400 rounded-full opacity-30" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600 rounded-full opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
