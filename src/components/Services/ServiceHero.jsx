import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Particles from "../bg/Particles";
import Magnet from "../animations/Magnet";
import { useMediaQuery } from "react-responsive";

// Service-specific typing words
const serviceWords = {
  "digital-marketing": ["Growth", "Presence", "Success"],
  "social-media-marketing": ["Engagement", "Community", "Reach"],
  "branding": ["Identity", "Story", "Legacy"],
  "web-development": ["Experience", "Performance", "Innovation"]
};

// Service-specific floating icons (Icons8 SVG/PNG paths)
const serviceIcons = {
  "digital-marketing": [
    { src: "https://img.icons8.com/ios-filled/100/ffffff/search.png", alt: "SEO", position: "top-[150px] md:top-[250px] right-10 md:right-50", rotate: "10deg" },
    { src: "https://img.icons8.com/ios-filled/100/ffffff/analytics.png", alt: "Analytics", position: "bottom-20 md:top-[290px] right-[200px] md:right-[325px]", rotate: "5deg" },
    { src: "https://img.icons8.com/ios-filled/100/ffffff/online-advertising.png", alt: "PPC", position: "bottom-[90px] md:bottom-[72px] left-[calc(50%+60px)] md:left-[calc(60%+5px)]", rotate: "-5deg" },
    { src: "/bg/icons8-email.svg", alt: "Email Marketing", position: "bottom-10 left-20 md:left-125", rotate: "-10deg" }
  ],
  "social-media-marketing": [
    { src: "/bg/icons8-instagram-logo.svg", alt: "Instagram", position: "top-[150px] md:top-[250px] right-10 md:right-50", rotate: "10deg" },
    { src: "/bg/icons8-facebook.svg", alt: "Facebook", position: "bottom-20 md:top-[290px] right-[200px] md:right-[325px]", rotate: "5deg" },
    { src: "/bg/icons8-youtube.svg", alt: "YouTube", position: "bottom-[90px] md:bottom-[72px] left-[calc(50%+60px)] md:left-[calc(60%+5px)]", rotate: "-5deg" },
    { src: "https://img.icons8.com/ios-filled/100/ffffff/twitter.png", alt: "Twitter", position: "bottom-10 left-20 md:left-125", rotate: "-10deg" }
  ],
  "branding": [
    { src: "https://img.icons8.com/ios-filled/100/ffffff/logo.png", alt: "Logo Design", position: "top-[150px] md:top-[250px] right-10 md:right-50", rotate: "10deg" },
    { src: "https://img.icons8.com/ios-filled/100/ffffff/paint-palette.png", alt: "Color Palette", position: "bottom-20 md:top-[290px] right-[200px] md:right-[325px]", rotate: "5deg" },
    { src: "https://img.icons8.com/ios-filled/100/ffffff/paintbrush.png", alt: "Design", position: "bottom-[90px] md:bottom-[72px] left-[calc(50%+60px)] md:left-[calc(60%+5px)]", rotate: "-5deg" },
    { src: "https://img.icons8.com/ios-filled/100/ffffff/design.png", alt: "Brand Identity", position: "bottom-10 left-20 md:left-125", rotate: "-10deg" }
  ],
  "web-development": [
    { src: "https://img.icons8.com/ios-filled/100/ffffff/source-code.png", alt: "Code", position: "top-[150px] md:top-[250px] right-10 md:right-50", rotate: "10deg" },
    { src: "https://img.icons8.com/ios-filled/100/ffffff/responsive-design.png", alt: "Responsive", position: "bottom-20 md:top-[290px] right-[200px] md:right-[325px]", rotate: "5deg" },
    { src: "https://img.icons8.com/ios-filled/100/ffffff/speed.png", alt: "Performance", position: "bottom-[90px] md:bottom-[72px] left-[calc(50%+60px)] md:left-[calc(60%+5px)]", rotate: "-5deg" },
    { src: "https://img.icons8.com/ios-filled/100/ffffff/internet.png", alt: "Web", position: "bottom-10 left-20 md:left-125", rotate: "-10deg" }
  ]
};

const ServiceHero = ({ service, setShowContactForm }) => {
  const words = serviceWords[service.slug] || ["Growth", "Presence", "Success"];
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(words[0] || "Success");
  const [startTyping, setStartTyping] = useState(false);

  const floatingIcons = serviceIcons[service.slug] || serviceIcons["digital-marketing"];

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
  }, [currentWordIndex, startTyping, words]);

  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 300], [0, 50]);
  const blur = useTransform(scrollY, [0, 300], ["blur(0px)", "blur(3px)"]);

  const iconWrapper =
    "absolute rounded-full p-2 md:p-3 bg-blue-500/10 backdrop-blur-md border border-blue-500/30 shadow-xl glossy-icon pointer-events-none";
  const iconImage = "w-full h-full object-contain";

  return (
    <section className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.6, zIndex: 0 }}>
        <Particles
          particleColors={['#ffffff', '#ffffff', '#f3f4f6']}
          particleCount={120}
          particleSpread={10}
          speed={0.07}
          particleBaseSize={70}
          moveParticlesOnHover={true}
          particleHoverFactor={0.5}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Floating Service Icons */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ filter: blur, y: translateY }}
      >
        {floatingIcons.map((icon, index) => {
          const delays = [0, 0.3, 0.6, 0.9];
          const desktopDelays = [1, 1.5, 2, 2.5];
          return (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeInOut", 
                delay: isMobile ? delays[index] : desktopDelays[index]
              }}
              className={`${iconWrapper} ${icon.position} w-[50px] h-[50px] md:w-[80px] md:h-[80px]`}
              style={{ transform: `rotate(${icon.rotate})` }}
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className={iconImage}
                onError={(e) => {
                  // Fallback for broken images
                  e.target.style.display = 'none';
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center">
          {/* Content */}
          <div className="w-full text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white select-text mb-4">
                {service.title.split(' ').map((word, index, array) => (
                  <span key={index}>
                    {word === 'Marketing' ? (
                      <span className="text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                    {index < array.length - 1 && ' '}
                  </span>
                ))}
              </h1>
              <p className="font-light text-xs md:text-sm text-gray-400 max-w-md md:max-w-lg select-text mb-8 mx-auto">
                {service.description}
              </p>
              <Magnet
                magnetStrength={3}
                padding={50}
                wrapperClassName="inline-block"
                innerClassName="inline-block"
              >
                <button
                  onClick={() => setShowContactForm(true)}
                  className="px-6 py-2 md:px-8 md:py-3 rounded-full bg-blue-600 text-white font-semibold hover:opacity-90 transition-all cursor-target text-sm md:text-lg"
                >
                  Get Started
                </button>
              </Magnet>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
