import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Icons = () => {
  const { scrollY } = useScroll();

  const translateY = useTransform(scrollY, [0, 300], [0, 50]);
  const blur = useTransform(scrollY, [0, 300], ["blur(0px)", "blur(3px)"]);

  const iconWrapper = "absolute rounded-full p-3 bg-blue-500/10 backdrop-blur-md border border-blue-500/30 shadow-xl glossy-icon pointer-events-none";
  const iconImage = "w-full h-full object-contain";

  return (
    <motion.div
      className="absolute inset-0 z-10"
      style={{ filter: blur, y: translateY }}
    >
      {/* Instagram */}
      <div className={`${iconWrapper} top-[280px] right-20 w-[140px] h-[140px] rotate-[10deg]`}>
        <img src="/bg/icons8-instagram-logo.svg" alt="Facebook" className={iconImage}  />
      </div>

      {/* Facebook */}
      <div className={`${iconWrapper} top-[400px] right-[400px] w-[120px] h-[120px] rotate-[5deg]`}>
        <img src="/bg/icons8-facebook.svg" alt="Instagram" className={iconImage} />
      </div>

      {/* YouTube */}
      <div className={`${iconWrapper} bottom-5 left-1/5 w-[120px] h-[120px] rotate-[-5deg]`}>
        <img src="/bg/icons8-youtube.svg" alt="YouTube" className={iconImage} />
      </div>

      {/* Email */}
      <div className={`${iconWrapper} bottom-12 left-12 w-[100px] h-[100px] rotate-[-10deg]`}>
        <img src="/bg/icons8-email.svg" alt="Email" className={iconImage} />
      </div>
    </motion.div>
  );
};

export default Icons;
