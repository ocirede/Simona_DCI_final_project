import { motion } from 'framer-motion';

const MovingText = ({ text }) => {
  const infiniteText = text.repeat(50);

  return (
    <div className="overflow-hidden relative w-full h-16 md:h-24 lg:h-32 xl:h-40">
      <motion.div
        className="absolute whitespace-nowrap"
        animate={{ x: '-2%' }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear'}} 
      >
        <p className="inline-block text-[52px] md:text-xl lg:text-2xl xl:text-3xl font-sans uppercase mt-1">{infiniteText}</p>
      </motion.div>
    </div>
  );
};

export default MovingText;

