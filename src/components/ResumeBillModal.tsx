import { X, FileText, Phone, Mail, MapPin, Briefcase, Code2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import resume from '@/assets/AayushArya_Resume.pdf';

interface ResumeBillModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPdf: () => void;
}

const uniqueQuotes = [
  "Fueled by chai ☕ and late-night commits",
  "Turning coffee into clean code since 2024",
  "Full-stack: crafting interactive UI & backend logic",
  "My code compiles on the first try (usually)",
  "Passionate about animations & scalable architecture",
  "Always building, constantly learning 🚀",
  "404: Bugs not found in production"
];

const experiences = [
  { role: "Co-Head Web Developer", company: "Technika'26", year: "2025–Present" },
  { role: "Co-Head Web Developer", company: "Prakrida'26", year: "2025–Present" },
  { role: "Co Web-Dev", company: "IEEE Student Branch", year: "2024–Present" }
];

const skillList = ["Python", "C/C++", "Golang", "JavaScript", "ReactJS", "Node.js", "MongoDB", "Tailwind"];

export const ResumeBillModal = ({ isOpen, onClose, onOpenPdf }: ResumeBillModalProps) => {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<'idle' | 'printing' | 'ready' | 'shredding'>('idle');
  const [quote, setQuote] = useState(uniqueQuotes[0]);
  const [billMeta, setBillMeta] = useState({ id: '', date: '', time: '' });
  const shredTimerRef = useRef<ReturnType<typeof setTimeout>>();

  // Robust Body Scroll Lock
  useLayoutEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      const originalOverflow = document.body.style.overflow;
      const originalPosition = document.body.style.position;
      const originalTop = document.body.style.top;
      const originalWidth = document.body.style.width;

      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.position = originalPosition;
        document.body.style.top = originalTop;
        document.body.style.width = originalWidth;
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const now = new Date();
      const dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
      const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
      const randomCode = Math.random().toString(36).substring(2, 7).toUpperCase();
      const id = `REC-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}-${randomCode}`;

      setBillMeta({ id, date: dateStr, time: timeStr });
      setQuote(uniqueQuotes[Math.floor(Math.random() * uniqueQuotes.length)]);
      setPhase('printing');

      const timer = setTimeout(() => {
        setPhase('ready');
      }, reduced ? 50 : 800);

      return () => clearTimeout(timer);
    } else {
      setPhase('idle');
      clearTimeout(shredTimerRef.current);
    }
  }, [isOpen, reduced]);

  const handleShredAndClose = () => {
    if (phase === 'shredding') return;
    setPhase('shredding');
    shredTimerRef.current = setTimeout(() => {
      onClose();
      setPhase('idle');
    }, reduced ? 50 : 650);
  };

  if (!isOpen && phase === 'idle') return null;

  return (
    <AnimatePresence mode="wait">
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Resume Receipt"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleShredAndClose}
          className="fixed inset-0 bg-pencil/70 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Container */}
        <div className="relative z-10 w-full max-w-[380px] sm:max-w-[420px] my-auto flex flex-col items-center">
          {/* Printer Slot Hardware (Top) */}
          <div className="w-[92%] h-4 bg-[#232323] border-2 border-pencil rounded-t-lg relative z-20 shadow-hard-sm flex items-center justify-center px-4">
            <div className="w-full h-1 bg-black/60 rounded-full overflow-hidden">
              <motion.div
                animate={phase === 'printing' ? { x: ['-100%', '100%'] } : {}}
                transition={{ duration: 0.6, repeat: Infinity, ease: 'linear' }}
                className="w-1/3 h-full bg-marker-red/80"
              />
            </div>
          </div>

          {/* Receipt Body with Print & Shred Animations */}
          <motion.div
            initial={reduced ? { opacity: 0, scale: 0.95 } : { y: -180, scaleY: 0.1, opacity: 0 }}
            animate={
              phase === 'shredding'
                ? {
                    y: [0, 80],
                    scaleY: [1, 0.2],
                    opacity: [1, 0],
                    filter: 'blur(3px)',
                  }
                : {
                    y: 0,
                    scaleY: 1,
                    opacity: 1,
                    filter: 'blur(0px)',
                  }
            }
            transition={
              phase === 'shredding'
                ? { duration: 0.6, ease: [0.36, 0, 0.66, -0.56] }
                : { type: 'spring', damping: 20, stiffness: 180, duration: 0.8 }
            }
            style={{ transformOrigin: 'top center' }}
            className="w-full bg-[#faf8f5] text-pencil border-[3px] border-pencil shadow-hard-lg relative z-10 overflow-hidden"
          >
            {/* Thermal Receipt Texture Overlay */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
              style={{
                backgroundImage: 'radial-gradient(#d6cebe 1px, transparent 1px)',
                backgroundSize: '8px 8px',
              }}
            />

            {/* Close 'X' Button at top-right */}
            <button
              onClick={handleShredAndClose}
              className="absolute top-3 right-3 z-30 w-7 h-7 flex items-center justify-center rounded-full bg-paper border-2 border-pencil hover:bg-marker-red hover:text-white transition-colors cursor-pointer shadow-hard-sm"
              aria-label="Close"
            >
              <X className="w-4 h-4" strokeWidth={2.5} />
            </button>

            {/* Receipt Content Area */}
            <div className="p-5 sm:p-6 font-mono text-xs select-none">
              {/* Header */}
              <div className="text-center pb-3 border-b-2 border-dashed border-pencil/30">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-paper-muted border border-pencil rounded-wobbly-sm mb-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-marker-red" strokeWidth={2.5} />
                  <span className="font-kalam font-bold text-xs uppercase tracking-wider">Developer Bill</span>
                </div>
                <h2 className="font-kalam text-2xl sm:text-3xl font-bold text-pencil tracking-tight">
                  AAYUSH ARYA
                </h2>
                <p className="font-hand text-sm text-pencil/70 font-bold">
                  Full Stack Web Developer
                </p>

                <div className="flex justify-between items-center text-[11px] text-pencil/60 mt-3 pt-2 border-t border-pencil/15 font-hand font-bold">
                  <span>{billMeta.id}</span>
                  <span>{billMeta.date} • {billMeta.time}</span>
                </div>
              </div>

              {/* 2-Column Personal Info Grid */}
              <div className="py-3 border-b-2 border-dashed border-pencil/30">
                <div className="grid grid-cols-2 gap-2 text-[11px] font-hand">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-pencil/90 font-bold">
                      <Phone className="w-3.5 h-3.5 text-pen-blue flex-shrink-0" strokeWidth={2.5} />
                      <span className="truncate">+91 8603128570</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-pencil/90 font-bold">
                      <Mail className="w-3.5 h-3.5 text-marker-red flex-shrink-0" strokeWidth={2.5} />
                      <span className="truncate">aayush10738@gmail.com</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 pl-2 border-l border-dashed border-pencil/20">
                    <div className="flex items-center gap-1.5 text-pencil/90 font-bold">
                      <MapPin className="w-3.5 h-3.5 text-marker-red flex-shrink-0" strokeWidth={2.5} />
                      <span className="truncate">Patna, Bihar, India</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-pencil/90 font-bold">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                      <span className="truncate text-green-700">Open to Work</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience & Roles (Centered) */}
              <div className="py-3 border-b-2 border-dashed border-pencil/30 text-center">
                <p className="font-kalam font-bold text-xs uppercase tracking-widest text-pencil/60 mb-2">
                  ── Experience & Roles ──
                </p>

                <div className="space-y-2 font-hand">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="bg-paper/80 border border-pencil/30 rounded px-2.5 py-1.5">
                      <div className="font-kalam font-bold text-sm text-pencil leading-tight">
                        {idx + 1}. {exp.role}
                      </div>
                      <div className="text-xs text-pencil/70 font-bold flex items-center justify-center gap-1.5 mt-0.5">
                        <span className="text-marker-red font-semibold">@ {exp.company}</span>
                        <span>•</span>
                        <span className="text-pen-blue">{exp.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills Stack */}
              <div className="py-3 border-b-2 border-dashed border-pencil/30 text-center">
                <p className="font-kalam font-bold text-xs uppercase tracking-widest text-pencil/60 mb-2">
                  ── Technical Stack ──
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {skillList.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-paper border border-pencil/40 rounded text-[11px] font-hand font-bold text-pencil shadow-[1px_1px_0px_0px_#2d2d2d]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Unique Random Fun Quote */}
              <div className="py-2.5 text-center font-hand font-bold text-xs text-marker-red border-b-2 border-dashed border-pencil/30 bg-postit/40 -mx-5 sm:-mx-6 px-4">
                ★ {quote} ★
              </div>

              {/* Barcode Section */}
              <div className="pt-3 flex flex-col items-center">
                {/* SVG Barcode */}
                <div className="flex items-center gap-[2px] h-9 py-1 px-3 bg-white border border-pencil/30 rounded">
                  {[2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3, 2, 1].map((w, i) => (
                    <div
                      key={i}
                      className="h-full bg-pencil"
                      style={{ width: `${w * 1.5}px` }}
                    />
                  ))}
                </div>
                <p className="font-mono text-[10px] tracking-widest text-pencil/60 mt-1 font-bold">
                  * THANK YOU FOR VISITING *
                </p>
              </div>
            </div>

            {/* Receipt Sawtooth/Perforated Bottom Edge */}
            <div className="relative w-full h-3 bg-paper flex overflow-hidden border-t border-dashed border-pencil/30">
              <svg className="w-full h-full text-white fill-current" preserveAspectRatio="none" viewBox="0 0 100 10">
                <polygon points="0,0 5,10 10,0 15,10 20,0 25,10 30,0 35,10 40,0 45,10 50,0 55,10 60,0 65,10 70,0 75,10 80,0 85,10 90,0 95,10 100,0 100,10 0,10" />
              </svg>
            </div>
          </motion.div>

          {/* Action Buttons (Presented below receipt) */}
          <AnimatePresence>
            {phase === 'ready' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="w-full mt-4 flex gap-3 z-30"
              >
                <button
                  onClick={handleShredAndClose}
                  className="flex-1 btn-sketchy-secondary inline-flex items-center justify-center gap-2 py-2.5 text-base cursor-pointer"
                >
                  <X className="w-4 h-4 text-marker-red" strokeWidth={2.5} />
                  <span>Shred & Close</span>
                </button>

                <button
                  onClick={() => {
                    onOpenPdf();
                  }}
                  className="flex-1 btn-sketchy inline-flex items-center justify-center gap-2 py-2.5 text-base cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-pen-blue" strokeWidth={2.5} />
                  <span>Open PDF</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Shredder Teeth Effect when shredding */}
          <AnimatePresence>
            {phase === 'shredding' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 40 }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full mt-2 bg-[#1a1a1a] border-2 border-pencil rounded-b-lg flex items-center justify-around px-3 overflow-hidden shadow-hard"
              >
                {[...Array(16)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 0.2, repeat: Infinity, delay: i * 0.02 }}
                    className="w-1.5 h-6 bg-paper border-r border-pencil/40"
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AnimatePresence>
  );
};
