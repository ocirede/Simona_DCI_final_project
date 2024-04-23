import { useState } from 'react';
import { motion } from 'framer-motion';

const DragComponent = ({ children, constraints }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (event, info) => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <motion.div
      drag
      dragTransition={{ bounceDamping: 0 }}
      dragConstraints={constraints}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
        width: 'fit-content', 
        height: 'fit-content'
      }}
    >
      {children}
    </motion.div>
  );
};

export default DragComponent;


