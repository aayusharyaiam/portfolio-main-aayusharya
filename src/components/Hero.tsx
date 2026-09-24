import { ArrowDown, Github, Linkedin, Code, FileText, MapPin, Sparkles } from 'lucide-react';
import resume from '@/assets/AayushArya_Resume.pdf';
import profImage from '@/assets/prof.jpg';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion';
import { useRef, type MouseEvent, useState } from 'react';
import { scrollToId } from '@/lib/scroll';
import { TextReveal } from '@/components/motion/TextReveal';
import { Magnetic } from '@/components/motion/Magnetic';
import { TiltCard } from '@/components/motion/TiltCard';
import { DoodleArrow, DoodleCircle, DoodleSparkle, DoodleStar, DoodleSpiral } from '@/components/motion/Doodles';
import { ResumeBillModal } from '@/components/ResumeBillModal';

const INTRO = 0.9; // seconds to wait for the preloader hand-off

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [showBillModal, setShowBillModal] = useState(false);

  const openBillModal = () => setShowBillModal(true);
  const closeBillModal = () => setShowBillModal(false);
  const handleOpenPdf = () => {
    window.open(resume, '_blank', 'noopener,noreferrer');
    closeBillModal();
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scroll parallax (different depths)
  const yFar = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const yNear = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const rotA = useTransform(scrollYProgress, [0, 1], [12, 70]);
  const rotB = useTransform(scrollYProgress, [0, 1], [-6, -60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const frameRotateX = useTransform(scrollYProgress, [0, 1], [0, 25]);

  // Mouse parallax across the whole hero (3D scene feel)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  const layerFar = { x: useTransform(smx, [-1, 1], [-12, 12]), y: useTransform(smy, [-1, 1], [-8, 8]) };
  const layerMid = { x: useTransform(smx, [-1, 1], [-28, 28]), y: useTransform(smy, [-1, 1], [-18, 18]) };
  const layerNear = { x: useTransform(smx, [-1, 1], [-48, 48]), y: useTransform(smy, [-1, 1], [-30, 30]) };
  const sceneRX = useTransform(smy, [-1, 1], [3, -3]);
  const sceneRY = useTransform(smx, [-1, 1], [-3, 3]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced || !containerRef.current) return;
    const r = containerRef.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: INTRO + delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      ref={containerRef}
      id="home"
      onMouseMove={onMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 px-6"
      style={{ perspective: 1400 }}
    >
      {/* ── Background depth layers ── */}
      {/* Far: faint grid rectangle */}
      <motion.div
        aria-hidden
        style={{ y: yFar, x: layerFar.x }}
        className="hidden md:block absolute -top-10 -right-24 w-[420px] h-[420px] border-[3px] border-dashed border-pencil/10 rounded-wobbly"
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 8 }}
        transition={{ duration: 1.4, delay: INTRO }}
      />
      <motion.div
        aria-hidden
        style={{ y: yMid, x: layerFar.x }}
        className="hidden md:block absolute bottom-10 -left-20 w-72 h-72 border-2 border-dashed border-pen-blue/15 rounded-full"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: INTRO + 0.2 }}
      />

      {/* Mid: shapes */}
      <motion.div
        style={{ y: yMid, x: layerMid.x, rotate: rotA }}
        className="hidden md:block absolute top-32 right-16 w-16 h-16 border-[3px] border-dashed border-marker-red z-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: INTRO }}
      />
      <motion.div
        style={{ y: yNear, x: layerMid.x }}
        className="hidden md:block absolute top-40 left-12 w-8 h-8 border-2 border-dashed border-pen-blue rounded-full z-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: INTRO + 0.2 }}
      />
      <motion.div
        style={{ y: yNear, x: layerNear.x, rotate: rotA }}
        className="hidden md:block absolute bottom-40 left-20 w-6 h-6 bg-postit border-2 border-pencil shadow-hard-sm z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: INTRO + 0.4 }}
      />
      <motion.div
        style={{ y: yFar, x: layerNear.x, rotate: rotB }}
        className="hidden md:block absolute top-60 right-40 w-4 h-4 bg-marker-red border-2 border-pencil z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: INTRO + 0.6 }}
      />

      {/* Doodles */}
      <motion.div style={{ y: yMid, x: layerMid.x }} className="hidden lg:block absolute top-28 left-[18%] w-10 h-10 text-marker-red/70">
        <DoodleStar onMount delay={INTRO + 1.2} />
      </motion.div>
      <motion.div style={{ y: yNear, x: layerNear.x }} className="hidden lg:block absolute bottom-28 right-[14%] w-8 h-8 text-pen-blue/70">
        <DoodleSparkle onMount delay={INTRO + 1.5} />
      </motion.div>
      <motion.div style={{ y: yFar, x: layerFar.x }} className="hidden lg:block absolute top-[55%] right-[6%] w-12 h-12 text-pencil/30">
        <DoodleSpiral onMount delay={INTRO + 1.7} />
      </motion.div>

      {/* ── Foreground content (3D scene) ── */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto w-full"
        style={{
          y: contentY,
          opacity: contentOpacity,
          scale: contentScale,
          rotateX: reduced ? 0 : sceneRX,
          rotateY: reduced ? 0 : sceneRY,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="grid md:grid-cols-2 gap-10 md:gap-6 items-center">
          {/* Left */}
          <div className="text-left" style={{ transformStyle: 'preserve-3d' }}>
            <motion.div
              initial={{ opacity: 0, y: -20, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: INTRO }}
              className="sticky-label mb-6"
              style={{ z: 30 }}
            >
              <motion.span
                className="inline-block origin-[70%_70%]"
                animate={{ rotate: [0, 18, -8, 18, 0] }}
                transition={{ delay: INTRO + 1, duration: 1.2, repeat: Infinity, repeatDelay: 4 }}
              >
                👋
              </motion.span>{' '}
              Hello, I'm
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-kalam font-bold mb-4 leading-[1.05] relative">
              <TextReveal
                text="Aayush"
                mode="chars"
                delay={INTRO + 0.15}
                className="text-pencil"
              />{' '}
              <span className="relative inline-block">
                <TextReveal
                  text="Arya"
                  mode="chars"
                  delay={INTRO + 0.5}
                  className="text-marker-red"
                />
                {/* Circled name doodle */}
                <DoodleCircle
                  onMount
                  delay={INTRO + 1.4}
                  className="absolute -inset-x-4 -inset-y-2 w-[calc(100%+2rem)] h-[calc(100%+1rem)] text-pen-blue/80"
                  strokeWidth={2}
                />
              </span>
              <motion.span
                className="inline-block ml-1 text-pen-blue origin-bottom"
                initial={{ opacity: 0, scale: 0, rotate: -30 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 12, delay: INTRO + 0.9 }}
              >
                <span className="inline-block animate-wiggle">!</span>
              </motion.span>
            </h1>

            <motion.p {...fadeUp(0.7)} className="font-hand text-xl md:text-2xl text-pencil/80 mb-2 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-marker-red" strokeWidth={2.5} />
              <TextReveal text="Full Stack Developer" mode="words" delay={INTRO + 0.8} />
            </motion.p>
            <motion.p {...fadeUp(0.85)} className="font-hand text-lg text-pencil/60 mb-8 max-w-md leading-relaxed">
              Building Interactive & Scalable Web Experiences. Crafting UI with Motion & Precision.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(1)} className="flex flex-col sm:flex-row gap-4 mb-8" style={{ z: 40 }}>
              <Magnetic strength={10}>
                <button
                  onClick={openBillModal}
                  data-cursor="open"
                  className="btn-sketchy inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <FileText className="h-5 w-5" strokeWidth={2.5} />
                  View Resume
                </button>
              </Magnetic>
              <Magnetic strength={10}>
                <button
                  onClick={() => scrollToId('projects')}
                  data-cursor="scroll"
                  className="btn-sketchy-secondary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <Code className="h-5 w-5" strokeWidth={2.5} />
                  My Projects
                </button>
              </Magnetic>
            </motion.div>

            {/* Socials */}
            <motion.div {...fadeUp(1.15)} className="flex gap-3 justify-start items-center">
              {[
                { href: 'https://github.com/aayusharyaiam', label: 'GitHub', Icon: Github },
                { href: 'https://www.linkedin.com/in/aayusharyaiam', label: 'LinkedIn', Icon: Linkedin },
                { href: 'https://leetcode.com/u/aayusharya_i_am/', label: 'LeetCode', Icon: Code },
              ].map(({ href, label, Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0, rotate: -40 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 14, delay: INTRO + 1.2 + i * 0.1 }}
                >
                  <Magnetic strength={12}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link-sketchy"
                      aria-label={label}
                      data-cursor={label}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2.5} />
                    </a>
                  </Magnetic>
                </motion.div>
              ))}
              <div className="hidden lg:block relative w-28 h-16 -ml-2 text-pencil/50">
                <DoodleArrow onMount delay={INTRO + 1.6} className="w-full h-full" />
              </div>
            </motion.div>
          </div>

          {/* Right — 3D photo frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotateY: 40, y: 40 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 16, delay: INTRO + 0.5 }}
            className="relative flex justify-center mt-4 md:mt-0"
            style={{ transformStyle: 'preserve-3d', rotateX: reduced ? 0 : frameRotateX }}
          >
            {/* Floating depth chips around frame */}
            <motion.div
              style={{ x: layerNear.x, y: layerNear.y, z: 80 }}
              className="hidden sm:flex absolute -top-6 -left-6 z-20 items-center gap-2 bg-white border-2 border-pencil px-3 py-1.5 rounded-wobbly shadow-hard font-hand text-sm"
              animate={{ y: [0, -8, 0], rotate: [-4, -6, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 border border-pencil animate-pulse" />
              Open to work
            </motion.div>
            <motion.div
              style={{ x: layerMid.x, y: layerMid.y, z: 60 }}
              className="hidden sm:flex absolute -bottom-5 -right-4 z-20 items-center gap-1.5 bg-postit border-2 border-pencil px-3 py-1.5 rounded-wobbly-alt shadow-hard font-hand text-sm"
              animate={{ y: [0, 8, 0], rotate: [3, 6, 3] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            >
              <MapPin className="h-4 w-4 text-marker-red" strokeWidth={2.5} />
              Patna, India
            </motion.div>
            <motion.div
              style={{ x: layerFar.x, y: layerFar.y, z: 40 }}
              className="hidden md:flex absolute top-1/2 -right-14 z-20 flex-col items-center bg-white border-2 border-pencil px-3 py-2 rounded-wobbly-sm shadow-hard-sm font-kalam"
              animate={{ y: [0, -6, 0], rotate: [8, 11, 8] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            >
              <span className="text-2xl font-bold text-pen-blue leading-none">3+</span>
              <span className="text-[10px] text-pencil/60 font-hand">hackathons</span>
            </motion.div>

            {/* Corner marks */}
            <div className="absolute -top-3 -left-3 w-7 h-7 border-t-[3px] border-l-[3px] border-pencil" style={{ transform: 'translateZ(20px)' }} />
            <div className="absolute -top-3 -right-3 w-7 h-7 border-t-[3px] border-r-[3px] border-pencil" style={{ transform: 'translateZ(20px)' }} />
            <div className="absolute -bottom-3 -left-3 w-7 h-7 border-b-[3px] border-l-[3px] border-pencil" style={{ transform: 'translateZ(20px)' }} />
            <div className="absolute -bottom-3 -right-3 w-7 h-7 border-b-[3px] border-r-[3px] border-pencil" style={{ transform: 'translateZ(20px)' }} />

            <TiltCard
              intensity={14}
              restRotate={2}
              shadowSize={8}
              className="relative"
              style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
            >
              <div
                className="w-64 h-72 md:w-72 md:h-80 bg-white border-[3px] border-pencil overflow-hidden relative"
                style={{ borderRadius: 'inherit' }}
              >
                <img
                  src={profImage}
                  alt="Aayush Arya"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                {/* Scan-line paper texture overlay */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-40"
                  style={{ backgroundImage: 'radial-gradient(#e5e0d8 1px, transparent 1px)', backgroundSize: '6px 6px' }}
                />
                {/* Caption strip */}
                <div className="absolute bottom-0 inset-x-0 bg-paper/95 border-t-2 border-pencil px-4 py-2 flex items-end justify-between">
                  <div>
                    <p className="font-kalam text-lg font-bold text-pencil leading-none">Aayush Arya</p>
                    <p className="font-hand text-xs text-pencil/60">Full Stack Developer</p>
                  </div>
                  <span className="font-hand text-xs text-marker-red rotate-[-6deg]">'26</span>
                </div>
              </div>
            </TiltCard>

            {/* Tape on top of frame */}
            <div
              aria-hidden
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-postit/70 border border-pencil/20 rotate-[-3deg] z-30"
              style={{ transform: 'translateX(-50%) rotate(-3deg) translateZ(40px)' }}
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: INTRO + 2, duration: 1 }}
          className="flex justify-center mt-14 md:mt-20"
        >
          <button
            onClick={() => scrollToId('about')}
            data-cursor="scroll"
            className="flex flex-col items-center gap-1 text-pencil/50 hover:text-marker-red transition-colors group"
          >
            <span className="font-hand text-sm">scroll down</span>
            <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
              <ArrowDown className="h-5 w-5" strokeWidth={2.5} />
            </motion.span>
          </button>
        </motion.div>
      </motion.div>

      <ResumeBillModal
        isOpen={showBillModal}
        onClose={closeBillModal}
        onOpenPdf={handleOpenPdf}
      />
    </section>
  );
};
