import { useState } from 'react';
import { motion } from 'framer-motion';

const DragComponent = ({ children, constraints }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <motion.div
      drag
      dragConstraints={constraints}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        cursor: 'grab',
        width: 'fit-content', 
        height: 'fit-content'
      }}
    >
      {children}
    </motion.div>
  );
};

export default DragComponent;

