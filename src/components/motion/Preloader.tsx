import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { getLenis } from '@/lib/scroll';

const SESSION_KEY = 'aa-intro-seen';

/**
 * First-load "sketching" intro: the name is stroke-drawn, a pencil scribbles
 * an underline, then the paper tears away to reveal the site. Shown once per
 * session so returning navigation isn't blocked.
 */
export const Preloader = () => {
  const reduced = useReducedMotion();
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    return sessionStorage.getItem(SESSION_KEY) !== '1';
  });

  useEffect(() => {
    if (!show) return;
    const lenis = getLenis();
    lenis?.stop();
    document.documentElement.style.overflow = 'hidden';
    const t = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, '1');
      setShow(false);
    }, 2600);
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = '';
      lenis?.start();
    };
  }, [show]);

  if (reduced) return null;

  const stroke = {
    fill: 'none',
    stroke: '#2d2d2d',
    strokeWidth: 3,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-paper"
          style={{ backgroundImage: 'radial-gradient(#e5e0d8 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          initial={{ clipPath: 'inset(0 0 0 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
        >
          <motion.div
            className="relative flex flex-col items-center"
            exit={{ y: -60, opacity: 0, transition: { duration: 0.4 } }}
          >
            {/* Torn-paper tag */}
            <motion.div
              className="sticky-label mb-6"
              initial={{ opacity: 0, y: -20, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
            >
              sketching...
            </motion.div>

            {/* Handwritten name, drawn stroke-by-stroke */}
            <motion.h1
              className="font-kalam font-bold text-5xl sm:text-7xl md:text-8xl text-pencil relative"
              style={{ perspective: 800 }}
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } } }}
              aria-label="Aayush Arya"
            >
              {Array.from('Aayush Arya').map((ch, i) => (
                <motion.span
                  key={i}
                  aria-hidden
                  className={ch === ' ' ? 'inline-block w-[0.35em]' : `inline-block ${i > 6 ? 'text-marker-red' : ''}`}
                  style={{ transformOrigin: '50% 100%' }}
                  variants={{
                    hidden: { opacity: 0, y: 40, rotateX: -80, filter: 'blur(6px)' },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      filter: 'blur(0px)',
                      transition: { type: 'spring', stiffness: 320, damping: 20 },
                    },
                  }}
                >
                  {ch}
                </motion.span>
              ))}
            </motion.h1>

            {/* Scribbled underline */}
            <svg viewBox="0 0 400 30" className="w-64 sm:w-96 h-6 -mt-1" aria-hidden>
              <motion.path
                d="M5 18 C 60 6, 120 26, 200 14 S 330 8, 395 16"
                {...stroke}
                stroke="#ff4d4d"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ pathLength: { duration: 0.7, delay: 1.1, ease: 'easeInOut' }, opacity: { duration: 0.1, delay: 1.1 } }}
              />
            </svg>

            {/* Pencil that follows the underline */}
            <motion.div
              className="absolute -bottom-3 text-3xl select-none"
              initial={{ left: '5%', opacity: 0, rotate: -35 }}
              animate={{ left: ['5%', '95%'], opacity: [0, 1, 1, 0], rotate: [-35, -30, -38, -30] }}
              transition={{ duration: 0.7, delay: 1.1, ease: 'easeInOut' }}
              aria-hidden
            >
              ✏️
            </motion.div>

            {/* Tiny loading dots */}
            <motion.p
              className="font-hand text-pencil/50 mt-6 text-sm tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                >
                  •
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Corner registration marks */}
          {['top-6 left-6 border-t-[3px] border-l-[3px]', 'top-6 right-6 border-t-[3px] border-r-[3px]', 'bottom-6 left-6 border-b-[3px] border-l-[3px]', 'bottom-6 right-6 border-b-[3px] border-r-[3px]'].map((c) => (
            <motion.div
              key={c}
              className={`absolute w-8 h-8 border-pencil ${c}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
