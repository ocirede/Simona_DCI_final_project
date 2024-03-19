import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const SlideFromLeft = ({ children }) => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({
      x: 0,
      transition: { duration: 1.5, ease: [0.17, 0.67, 0.83, 0.67] } 
    });
  }, []);

  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default SlideFromLeft;
