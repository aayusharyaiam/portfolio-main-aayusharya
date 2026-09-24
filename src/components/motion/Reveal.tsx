import { useRef, type ReactNode, type CSSProperties } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'flip' | 'zoom';

type RevealProps = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  /** Resting rotation so cards still look hand-placed. */
  rotate?: number;
  once?: boolean;
};

const from = (d: Direction) => {
  switch (d) {
    case 'up': return { y: 60, rotateX: 12 };
    case 'down': return { y: -60, rotateX: -12 };
    case 'left': return { x: -70, rotateY: -14 };
    case 'right': return { x: 70, rotateY: 14 };
    case 'flip': return { rotateX: -85, y: 30 };
    case 'zoom': return { scale: 0.85, rotateZ: -3 };
  }
};

/** Scroll-triggered 3D entrance. */
export const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className = '',
  style,
  rotate = 0,
  once = true,
}: RevealProps) => {
  const reduced = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, ...from(direction), rotate },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      rotate,
      transition: { duration, delay, type: 'spring', stiffness: 90, damping: 16 },
    },
  };

  if (reduced) return <div className={className} style={style}>{children}</div>;

  return (
    <div style={{ perspective: 1200 }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-60px' }}
        style={{ transformStyle: 'preserve-3d', willChange: 'transform, opacity', ...style }}
      >
        {children}
      </motion.div>
    </div>
  );
};

type DepthSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

/**
 * Wraps a section so the whole block subtly recedes (scale + tilt) as it
 * enters and leaves the viewport, giving a "pages on a desk" 3D feel.
 */
export const DepthSection = ({ children, className = '', id }: DepthSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.94, 1, 1, 0.96]);
  const rotateX = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [6, 0, 0, -5]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.35, 1, 1, 0.5]);

  return (
    <div ref={ref} id={id} className={className} style={{ perspective: 1600 }}>
      <motion.div
        style={
          reduced
            ? undefined
            : { scale, rotateX, opacity, transformOrigin: '50% 50%', willChange: 'transform, opacity' }
        }
      >
        {children}
      </motion.div>
    </div>
  );
};

/** Element that drifts vertically with scroll (parallax). speed>0 moves slower than page. */
export const Parallax = ({
  children,
  speed = 0.2,
  className = '',
  style,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
  style?: CSSProperties;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -200, speed * 200]);
  return (
    <motion.div ref={ref} className={className} style={{ y: reduced ? 0 : y, ...style }}>
      {children}
    </motion.div>
  );
};
