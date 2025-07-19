import { motion } from "framer-motion";
import React from "react";
import Particles from "./bg/Particles";

// ✅ Define images directly here
const images = [
  { src: "/img/img1.jpg", alt: "Image 1" },
  { src: "/img/img2.png", alt: "Image 2" },
  { src: "/img/img3.png", alt: "Image 3" },
  { src: "/img/img4.png", alt: "Image 4" },
  { src: "/img/img5.jpg", alt: "Image 5" },
  { src: "/img/img6.png", alt: "Image 6" },
  { src: "/img/img7.png", alt: "Image 7" },
  { src: "/img/img8.jpg", alt: "Image 8" },
  { src: "/img/img1 - Copy.jpg", alt: "Image 9" },
  { src: "/img/img2 - Copy.png", alt: "Image 10" },
  { src: "/img/img3 - Copy.png", alt: "Image 11" },
  { src: "/img/img4 - Copy.png", alt: "Image 12" },
  { src: "/img/img5 - Copy.jpg", alt: "Image 13" },
  { src: "/img/img6 - Copy.png", alt: "Image 14" },
  { src: "/img/img7 - Copy.png", alt: "Image 15" },
  { src: "/img/img8 - Copy.jpg", alt: "Image 16" },
];

const ThreeDMarquee = ({ className = "", onImageClick }) => {
  const columns = 3;
  const rows = 4;
  const groupSize = Math.ceil(images.length / columns);
  const imageGroups = Array.from({ length: columns }, (_, index) =>
    images.slice(index * groupSize, (index + 1) * groupSize)
  );

  const handleImageClick = (image, globalIndex) => {
    if (onImageClick) {
      onImageClick(image, globalIndex);
    } else if (image.href) {
      window.open(image.href, image.target || "_self");
    }
  };

  return (
    <section
      className={`w-full pb-10 flex justify-center ${className} relative`}
      data-lenis-prevent
    >
      {/* Particles Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.4, zIndex: 0 }}>
        <Particles
          particleColors={['#ffffff', '#ffffff', '#e5e7eb']}
          particleCount={90}
          particleSpread={8}
          speed={0.06}
          particleBaseSize={50}
          moveParticlesOnHover={true}
          particleHoverFactor={0.4}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      
      {/* 🛠️ Bounded container with max size */}
      <div className="bg-black/40 rounded-3xl shadow-2xl p-4 overflow-hidden w-[95vw] max-w-[2000px] max-h-[550px] sm:max-h-[550px] md:max-h-[750px] relative z-10">
        <div className="flex w-full h-full justify-center items-center overflow-hidden">
            <div
              className="relative grid origin-center grid-cols-3 place-items-center will-change-transform [transform-style:preserve-3d] [transform:rotateX(55deg)_rotateZ(45deg)] 
                         scale-180 gap-[110px] sm:scale-110 sm:gap-[40px] md:scale-150 md:gap-[80px] lg:gap-[120px]"
            >
            {imageGroups.map((group, colIdx) => (
              <motion.div
                key={`column-${colIdx}`}
                animate={{ y: [0, colIdx % 2 === 0 ? 100 : -100, 0] }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex flex-col gap-[40px] md:gap-[40px] sm:gap-[40px]"
              >
                {group.slice(0, rows).map((image, imgIdx) => {
                  const globalIndex = colIdx * groupSize + imgIdx;
                  const isClickable = image.href || onImageClick;

                  return (
                      <div
                      key={`img-${globalIndex}`}
                      className="relative w-[150px] h-[150px] md:w-[250px] md:h-[250px] sm:w-[150px] sm:h-[150px]"
                    >
                      <motion.img
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        src={image.src}
                        alt={image.alt}
                        onClick={() => handleImageClick(image, globalIndex)}
                        className={`w-full h-full object-cover rounded-lg ring ring-gray-300/30 dark:ring-gray-800/50 shadow-xl hover:shadow-2xl hover:shadow-blue-glow transition-shadow duration-300 ${
                          isClickable ? "cursor-pointer" : ""
                        }`}
                      />
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDMarquee;