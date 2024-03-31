import { motion, useAnimation } from "framer-motion";

const SmoothBounceComponent = ({ children }) => {
  const controls = useAnimation();

  const bounceAnimation = {
    scale: [1, 0.9, 1.1, 1],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 0.6, 1],
      ease: "easeInOut"
    }
  };

  const handleOnClick = () => {
    controls.start(bounceAnimation);
  };

  return (
    <motion.div onClick={handleOnClick} animate={controls}>
      {children}
    </motion.div>
  );
};

export default SmoothBounceComponent;
