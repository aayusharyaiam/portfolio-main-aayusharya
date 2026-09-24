import type Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export const setLenis = (lenis: Lenis | null) => {
  lenisInstance = lenis;
};

export const getLenis = () => lenisInstance;

const NAV_OFFSET = -72;

/** Scroll to a section id, routing through Lenis when it is active. */
export const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: NAV_OFFSET, duration: 1.4 });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY + NAV_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

export const scrollToTop = () => {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { duration: 1.4 });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

/** True when the user prefers reduced motion or is on a coarse pointer (touch). */
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const isFinePointer = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;
