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
      <motion.h2
        className="text-5xl font-bold text-accent z-10 flex items-center relative"
        initial={{ scale: 1 }}
        animate={done ? { scale: [1, 1.4, 0.9, 1] } : {}}
        transition={{ duration: 0.5 }}
      >
        {count}
        <span className="relative">
          +
          {done && (
            <div className="shooting-star absolute -top-4 left-1/2 -translate-x-1/2" />
          )}
        </span>
      </motion.h2>

      {/* Glow */}
      {done && (
        <div className="absolute w-20 h-20 bg-accent/20 blur-2xl rounded-full -z-10 top-4" />
      )}

      <p className="text-light mt-2 text-lg">{label}</p>
    </div>
  );
};

export default CounterStat;
