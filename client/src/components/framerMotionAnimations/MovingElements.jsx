import { motion } from 'framer-motion';

const BouncingSVG = () => {
  return (
    <div style={{ width: '500px', height: '500px', position: 'relative', overflow: 'hidden' }}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        drag
        style={{ position: 'absolute' }}
      >
        <motion.circle
          cx="50"
          cy="50"
          r="50"
          fill="blue"
        />
      </motion.svg>
    </div>
  );
};

export default BouncingSVG;



