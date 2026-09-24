import { motion, useReducedMotion } from 'framer-motion';
import type { CSSProperties } from 'react';

type DoodleProps = {
  className?: string;
  style?: CSSProperties;
  /** Stroke color (defaults to currentColor). */
  color?: string;
  /** Seconds before the stroke begins drawing. */
  delay?: number;
  /** Draw duration in seconds. */
  duration?: number;
  /** Draw on mount instead of when scrolled into view. */
  onMount?: boolean;
  strokeWidth?: number;
};

const useDraw = (delay: number, duration: number, onMount: boolean) => {
  const reduced = useReducedMotion();
  const initial = reduced ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 };
  const target = { pathLength: 1, opacity: 1 };
  const transition = {
    pathLength: { duration, delay, ease: [0.65, 0, 0.35, 1] as const },
    opacity: { duration: 0.2, delay },
  };
  return onMount
    ? { initial, animate: target, transition }
    : { initial, whileInView: target, viewport: { once: true, margin: '-40px' }, transition };
};

const base = (color?: string, strokeWidth = 2.5) => ({
  fill: 'none',
  stroke: color ?? 'currentColor',
  strokeWidth,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

/** Curved arrow with head. Points right/up by default; rotate via className. */
export const DoodleArrow = ({ className, style, color, delay = 0, duration = 1.2, onMount, strokeWidth }: DoodleProps) => {
  const draw = useDraw(delay, duration, !!onMount);
  return (
    <svg viewBox="0 0 100 60" className={className} style={style} aria-hidden>
      <motion.path d="M5 52 C 22 14, 58 6, 88 26" {...base(color, strokeWidth)} {...draw} />
      <motion.path
        d="M80 16 L89 26 L77 30"
        {...base(color, strokeWidth)}
        {...draw}
        transition={{ ...draw.transition, pathLength: { ...draw.transition.pathLength, delay: delay + duration * 0.85, duration: 0.4 } }}
      />
    </svg>
  );
};

/** Loose hand-drawn circle that doesn't quite close. */
export const DoodleCircle = ({ className, style, color, delay = 0, duration = 1.1, onMount, strokeWidth }: DoodleProps) => {
  const draw = useDraw(delay, duration, !!onMount);
  return (
    <svg viewBox="0 0 120 60" className={className} style={style} aria-hidden>
      <motion.path
        d="M62 8 C 20 6, 4 22, 8 36 C 12 52, 60 58, 92 50 C 116 44, 118 20, 92 12 C 78 8, 66 8, 54 10"
        {...base(color, strokeWidth)}
        {...draw}
      />
    </svg>
  );
};

/** Wobbly underline stroke. */
export const DoodleUnderline = ({ className, style, color, delay = 0, duration = 0.8, onMount, strokeWidth }: DoodleProps) => {
  const draw = useDraw(delay, duration, !!onMount);
  return (
    <svg viewBox="0 0 200 20" preserveAspectRatio="none" className={className} style={style} aria-hidden>
      <motion.path d="M3 12 C 40 6, 80 16, 120 9 S 180 6, 197 11" {...base(color, strokeWidth ?? 3)} {...draw} />
    </svg>
  );
};

/** Five-point sketchy star. */
export const DoodleStar = ({ className, style, color, delay = 0, duration = 0.9, onMount, strokeWidth }: DoodleProps) => {
  const draw = useDraw(delay, duration, !!onMount);
  return (
    <svg viewBox="0 0 60 60" className={className} style={style} aria-hidden>
      <motion.path d="M30 5 L37 23 L56 24 L41 36 L46 55 L30 44 L14 55 L19 36 L4 24 L23 23 Z" {...base(color, strokeWidth)} {...draw} />
    </svg>
  );
};

/** Little sparkle: plus-shaped lines. */
export const DoodleSparkle = ({ className, style, color, delay = 0, duration = 0.6, onMount, strokeWidth }: DoodleProps) => {
  const draw = useDraw(delay, duration, !!onMount);
  return (
    <svg viewBox="0 0 40 40" className={className} style={style} aria-hidden>
      <motion.path d="M20 4 L20 36 M4 20 L36 20 M9 9 L31 31 M31 9 L9 31" {...base(color, strokeWidth)} {...draw} />
    </svg>
  );
};

/** Zig-zag scribble, good as a divider. */
export const DoodleScribble = ({ className, style, color, delay = 0, duration = 1, onMount, strokeWidth }: DoodleProps) => {
  const draw = useDraw(delay, duration, !!onMount);
  return (
    <svg viewBox="0 0 200 30" preserveAspectRatio="none" className={className} style={style} aria-hidden>
      <motion.path d="M2 20 L18 8 L34 22 L50 8 L66 22 L82 8 L98 22 L114 8 L130 22 L146 8 L162 22 L178 8 L198 20" {...base(color, strokeWidth)} {...draw} />
    </svg>
  );
};

/** Spiral squiggle. */
export const DoodleSpiral = ({ className, style, color, delay = 0, duration = 1.3, onMount, strokeWidth }: DoodleProps) => {
  const draw = useDraw(delay, duration, !!onMount);
  return (
    <svg viewBox="0 0 60 60" className={className} style={style} aria-hidden>
      <motion.path
        d="M30 30 C 32 26, 36 28, 35 32 C 34 37, 26 37, 24 31 C 22 24, 32 19, 38 24 C 45 30, 42 42, 32 43 C 20 44, 13 32, 19 22 C 26 11, 44 12, 48 25"
        {...base(color, strokeWidth)}
        {...draw}
      />
    </svg>
  );
};
