import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin marker-red progress line fixed at the very top of the viewport. */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[60] h-[4px] origin-left bg-marker-red"
      style={{
        scaleX,
        borderRadius: '0 255px 255px 0 / 0 15px 15px 0',
        boxShadow: '0 2px 0 0 #2d2d2d',
      }}
    />
  );
};
