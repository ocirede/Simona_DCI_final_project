import { useState } from 'react';
import { motion } from 'framer-motion';

const DragComponent = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
    console.log('Drag started');
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    console.log('Drag ended');
  };

  return (
    <motion.div
      drag
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        width: 100,
        height: 100,
        background: isDragging ? 'red' : 'blue',
        borderRadius: 10,
        cursor: 'grab',
      }}
    />
  );
};

export default DragComponent;
