import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingElement = ({ children, containerWidth, containerHeight }) => {
  const [direction, setDirection] = useState(1); // Initial direction
  const [position, setPosition] = useState({
    x: Math.random() * containerWidth,
    y: Math.random() * containerHeight,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        let newX = prevPosition.x + 200 * direction; // Update x position based on direction
        // If newX exceeds container boundaries, reverse direction
        if (newX < 0 || newX > containerWidth) {
          setDirection((prevDirection) => -prevDirection);
        }
        return { x: newX, y: prevPosition.y };
      });
    }, 1500); // Adjust interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        duration: 2, // Duration of each bounce
        ease: "easeInOut", // Easing function
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;






