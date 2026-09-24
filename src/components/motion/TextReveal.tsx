import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ElementType, ReactNode } from 'react';

type Mode = 'chars' | 'words';

type TextRevealProps = {
  text: string;
  /** Split by characters (handwriting feel) or words. */
  mode?: Mode;
  as?: ElementType;
  className?: string;
  /** Delay before the first unit starts (s). */
  delay?: number;
  /** Stagger between units (s). */
  stagger?: number;
  /** Animate when scrolled into view instead of on mount. */
  inView?: boolean;
  /** Optional per-unit class, e.g. to color a word. Receives unit index. */
  unitClassName?: (unit: string, index: number) => string;
  children?: ReactNode;
};

const unit: Variants = {
  hidden: { opacity: 0, y: '0.6em', rotateX: -90, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 380, damping: 22 },
  },
};

/**
 * Splits text into chars/words and reveals them with a 3D flip-up stagger.
 * Uses aria-label on the wrapper so screen readers get the whole string.
 */
export const TextReveal = ({
  text,
  mode = 'words',
  as: Tag = 'span',
  className = '',
  delay = 0,
  stagger,
  inView = false,
  unitClassName,
}: TextRevealProps) => {
  const reduced = useReducedMotion();
  const units = mode === 'chars' ? Array.from(text) : text.split(' ');
  const step = stagger ?? (mode === 'chars' ? 0.035 : 0.08);

  const container: Variants = {
    hidden: {},
    visible: { transition: { delayChildren: delay, staggerChildren: step } },
  };

  const MotionTag = motion(Tag as 'span');

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      aria-label={text}
      variants={container}
      initial="hidden"
      {...(inView
        ? { whileInView: 'visible', viewport: { once: true, margin: '-60px' } }
        : { animate: 'visible' })}
      style={{ display: 'inline-block', perspective: 600 }}
    >
      {units.map((u, i) => (
        <motion.span
          key={`${u}-${i}`}
          aria-hidden
          variants={unit}
          className={unitClassName?.(u, i) ?? ''}
          style={{
            display: 'inline-block',
            whiteSpace: 'pre',
            transformOrigin: '50% 100%',
            willChange: 'transform, opacity',
          }}
        >
          {u}
          {mode === 'words' && i < units.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </MotionTag>
  );
};
