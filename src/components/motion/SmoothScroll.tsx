import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { setLenis, prefersReducedMotion } from '@/lib/scroll';

/**
 * Wraps the page with Lenis inertia scrolling. framer-motion's useScroll reads
 * window.scrollY, which Lenis updates natively, so scroll-linked animations
 * stay in sync without extra plumbing.
 */
export const SmoothScroll = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.4,
    });
    setLenis(lenis);

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return <>{children}</>;
};
