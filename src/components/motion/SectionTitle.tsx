import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { TextReveal } from './TextReveal';
import { DoodleUnderline, DoodleSparkle } from './Doodles';

type SectionTitleProps = {
  children: string;
  /** Small handwritten kicker above the title. */
  kicker?: string;
  /** Extra decoration (e.g. icon) rendered right of the title. */
  trailing?: ReactNode;
  className?: string;
  color?: string;
};

/** Section heading with word-reveal, sketched underline and a sparkle. */
export const SectionTitle = ({ children, kicker, trailing, className = '', color }: SectionTitleProps) => (
  <div className={`text-center mb-14 ${className}`}>
    {kicker && (
      <motion.span
        initial={{ opacity: 0, y: 10, rotate: -6 }}
        whileInView={{ opacity: 1, y: 0, rotate: -2 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="sticky-label mb-4"
      >
        {kicker}
      </motion.span>
    )}
    <h2 className="relative inline-block text-4xl md:text-5xl font-kalam font-bold text-pencil leading-tight">
      <TextReveal text={children} mode="words" inView className={color} />
      {trailing}
      <DoodleUnderline
        className="absolute -bottom-3 left-0 w-full h-4 text-marker-red"
        delay={0.35}
      />
      <DoodleSparkle
        className="absolute -top-5 -right-8 w-7 h-7 text-pen-blue hidden sm:block"
        delay={0.7}
      />
    </h2>
  </div>
);
