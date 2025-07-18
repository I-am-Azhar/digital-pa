import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const CounterStat = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  const ref = useRef();
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const duration = 1000;
    const steps = 40;
    const interval = duration / steps;

    setDone(false);
    const counter = setInterval(() => {
      current++;
      setCount(Math.floor((target * current) / steps));
      if (current >= steps) {
        clearInterval(counter);
        setCount(target);
        setDone(true);
      }
    }, interval);
  }, [isInView, target]);

  return (
    <div ref={ref} className="relative flex flex-col items-center">
      <div className="relative">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-blue-500 z-10 flex items-center relative"
          initial={{ scale: 1 }}
          animate={done ? { 
            scale: [1, 1.4, 0.9, 1],
            textShadow: [
              '0 0 0px rgba(59, 130, 246, 0)',
              '0 0 10px rgba(59, 130, 246, 0.8)',
              '0 0 20px rgba(59, 130, 246, 0.5)',
              '0 0 10px rgba(59, 130, 246, 0.3)'
            ]
          } : {}}
          transition={{ duration: 0.5 }}
        >
          {count}
          <span className="relative">
            {done && (
              <span className="shooting-star absolute inset-0" />
            )}
            +
          </span>
        </motion.h2>
      </div>

      <p className="text-white mt-2 text-sm md:text-lg">{label}</p>
    </div>
  );
};

export default CounterStat;