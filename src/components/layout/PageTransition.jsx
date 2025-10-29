import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useContext, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LenisContext } from "./PageLayout";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
 一行",
  out: {
    opacity: 0,
    y: -20,
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const PageTransition = ({ children }) => {
  const location = useLocation();
  const lenis = useContext(LenisContext);
  const prevPathname = useRef(location.pathname);

  // Reset scroll IMMEDIATELY when pathname changes, before render
  useEffect(() => {
    // Only reset if pathname actually changed
    if (prevPathname.current !== location.pathname) {
      // Immediately reset scroll position - synchronous
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Reset Lenis scroll position
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
      
      // Update ref
      prevPathname.current = location.pathname;

      // Refresh ScrollTrigger after DOM updates
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }
  }, [location.pathname, lenis]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;

