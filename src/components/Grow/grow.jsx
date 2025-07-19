import React from "react";
import { motion } from "framer-motion";
import CounterStat from "./CounterStat";
import SplitText from "../animations/SplitText";
import Particles from "../bg/Particles";

const Grow = () => {
  return (
    <section
      id="grow"
      data-lenis-prevent
      className="scroll py-16 md:py-28 px-4 md:px-6 flex justify-center items-center relative"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.6, zIndex: 0 }}>
        <Particles
          particleColors={['#ffffff', '#ffffff', '#f3f4f6']}
          particleCount={110}
          particleSpread={9}
          speed={0.07}
          particleBaseSize={65}
          moveParticlesOnHover={true}
          particleHoverFactor={0.5}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      
      <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 md:p-10 max-w-5xl w-full text-center border border-white/10 shadow-lg relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 flex flex-wrap justify-center">
          <SplitText
            text="Let's Grow"
            className="block"
          />
          <SplitText
            text="Together!"
            className="block text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] ml-2"
          />
        </h1>
        <p className="text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto text-base md:text-lg">
          When you choose to work with us, you're not just hiring an agency,
          you're partnering with a team of experts who are invested in your
          success. We believe in building long-term relationships with our
          clients, and that's why we're committed to helping you grow your
          business every step of the way.
        </p>

        <div className="flex flex-row items-center justify-center gap-4 md:grid md:grid-cols-3 md:gap-10 w-full overflow-x-auto pb-2 scrollbar-hide">
          <CounterStat target={50} label="Happy Clients" />
          <CounterStat target={100} label="Projects Completed" />
          <CounterStat target={5} label="Years of Experience" />
        </div>
      </div>
    </section>
  );
};

export default Grow;
