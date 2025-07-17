import React from "react";
import { motion } from "framer-motion";
import CounterStat from "./CounterStat";

const Grow = () => {
  return (
    <section
      id="grow"
      data-lenis-prevent
      className="scroll py-16 md:py-28 px-4 md:px-6 flex justify-center items-center"
    >
      <div className="bg-black/40 backdrop-blur-md rounded-3xl p-6 md:p-10 max-w-5xl w-full text-center border border-white/10 shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
          Let's grow together!
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
