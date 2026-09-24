import { useRef, type ReactNode, type MouseEvent, type CSSProperties } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
  type HTMLMotionProps,
} from 'framer-motion';

type TiltCardProps = Omit<HTMLMotionProps<'div'>, 'children' | 'style'> & {
  children: ReactNode;
  /** Max rotation in degrees. */
  intensity?: number;
  /** Resting rotation around Z (keeps the hand-placed look). */
  restRotate?: number;
  /** Show a moving highlight sweep on hover. */
  glare?: boolean;
  /** Hard shadow color; shadow moves opposite the tilt for depth. */
  shadowColor?: string;
  shadowSize?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Perspective card that tilts toward the cursor and lifts on hover.
 * Children with `data-depth="N"` (e.g. 20) are pushed forward in Z for a
 * layered/parallax feel inside the card.
 */
export const TiltCard = ({
  children,
  intensity = 12,
  restRotate = 0,
  glare = true,
  shadowColor = '#2d2d2d',
  shadowSize = 4,
  className = '',
  style,
  ...rest
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const mx = useMotionValue(0); // -0.5 .. 0.5
  const my = useMotionValue(0);
  const hover = useMotionValue(0);

  const spring = { stiffness: 220, damping: 18, mass: 0.6 };
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [intensity, -intensity]), spring);
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-intensity, intensity]), spring);
  const lift = useSpring(useTransform(hover, [0, 1], [0, 18]), spring);
  const scale = useSpring(useTransform(hover, [0, 1], [1, 1.02]), spring);

  const shadowX = useSpring(useTransform(mx, [-0.5, 0.5], [shadowSize + 6, shadowSize - 2]), spring);
  const shadowY = useSpring(useTransform(my, [-0.5, 0.5], [shadowSize + 6, shadowSize - 2]), spring);
  const boxShadow = useMotionTemplate`${shadowX}px ${shadowY}px 0px 0px ${shadowColor}`;

  const glareX = useTransform(mx, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(my, [-0.5, 0.5], [0, 100]);
  const glareOpacity = useSpring(useTransform(hover, [0, 1], [0, 0.35]), spring);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.9), rgba(255,255,255,0) 60%)`;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onEnter = () => !reduced && hover.set(1);
  const onLeave = () => {
    mx.set(0);
    my.set(0);
    hover.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className={className}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        style={{
          rotateX: reduced ? 0 : rx,
          rotateY: reduced ? 0 : ry,
          z: lift,
          scale,
          rotate: restRotate,
          boxShadow,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          position: 'relative',
          ...style,
        }}
        {...rest}
      >
        {children}
        {glare && !reduced && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: glareBg,
              opacity: glareOpacity,
              borderRadius: 'inherit',
              mixBlendMode: 'soft-light',
            }}
          />
        )}
      </motion.div>
    </div>
  );
};
