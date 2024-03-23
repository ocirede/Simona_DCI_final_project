import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollAnimationComponent = ({ children }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const bottomViewport = scrolled + windowHeight;
      const fadeInStart = documentHeight - windowHeight * 0.5;
      const fadeOutStart = documentHeight - windowHeight * 0.8;

      if (bottomViewport > fadeInStart && bottomViewport < fadeOutStart) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeInOut"
          }
        });
      } else {
        controls.start({
          opacity: 0,
          y: 50,
          transition: {
            duration: 0.5,
            ease: "easeInOut"
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationComponent;




