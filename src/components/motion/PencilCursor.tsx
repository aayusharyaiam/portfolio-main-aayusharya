import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { isFinePointer } from '@/lib/scroll';

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, [data-cursor]';

/**
 * Hand-drawn cursor: a pencil-dot that follows the pointer instantly and a
 * lagging sketchy ring that grows over interactive elements. Desktop only.
 */
export const PencilCursor = () => {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 320, damping: 26, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 320, damping: 26, mass: 0.5 });

  useEffect(() => {
    if (reduced || !isFinePointer()) return;
    setEnabled(true);
    document.documentElement.classList.add('has-pencil-cursor');

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as Element | null)?.closest(INTERACTIVE) as HTMLElement | null;
      setHovering(!!target);
      setLabel(target?.dataset.cursor ?? null);
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => {
      x.set(-100);
      y.set(-100);
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.addEventListener('mouseleave', leave);
    return () => {
      document.documentElement.classList.remove('has-pencil-cursor');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.removeEventListener('mouseleave', leave);
    };
  }, [reduced, x, y]);

  if (!enabled) return null;

  const ringSize = hovering ? 56 : 34;

  return (
    <>
      {/* Lagging sketchy ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[90] flex items-center justify-center"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="border-2 border-pencil bg-postit/40"
          animate={{
            width: ringSize,
            height: ringSize,
            scale: pressed ? 0.8 : 1,
            rotate: hovering ? 8 : -4,
            borderRadius: hovering
              ? '255px 15px 225px 15px / 15px 225px 15px 255px'
              : '15px 225px 15px 255px / 255px 15px 225px 15px',
            backgroundColor: hovering ? 'rgba(255, 77, 77, 0.15)' : 'rgba(255, 249, 196, 0.35)',
          }}
          transition={{ type: 'spring', stiffness: 380, damping: 22 }}
          style={{ mixBlendMode: 'multiply' }}
        />
        {label && (
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -bottom-7 whitespace-nowrap font-kalam text-xs font-bold text-pencil bg-postit border-2 border-pencil px-2 py-0.5 rounded-wobbly-sm shadow-hard-sm"
          >
            {label}
          </motion.span>
        )}
      </motion.div>

      {/* Instant pencil dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[91]"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full bg-marker-red border-2 border-pencil"
          animate={{ width: pressed ? 6 : 10, height: pressed ? 6 : 10 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      </motion.div>
    </>
  );
};
