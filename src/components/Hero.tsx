import { ArrowDown, Github, Linkedin, Code, FileText } from 'lucide-react';
import resume from '@/assets/AayushArya_Resume.pdf';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [12, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [-6, -45]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      {/* Parallax Decorative Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="hidden md:block absolute top-32 right-16 w-16 h-16 border-[3px] border-dashed border-marker-red animate-bounce-gentle z-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        style={{ y: y2 }}
        className="hidden md:block absolute top-40 left-12 w-8 h-8 border-2 border-dashed border-pen-blue z-0"
        initial={{ opacity: 0, scale: 0.5, borderRadius: '50%' }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      <motion.div 
        style={{ y: y3, rotate: rotate1 }}
        className="hidden md:block absolute bottom-40 left-20 w-6 h-6 bg-postit border-2 border-pencil z-0" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
      <motion.div 
        style={{ y: y1, rotate: rotate2 }}
        className="hidden md:block absolute top-60 right-40 w-4 h-4 bg-marker-red border-2 border-pencil z-0" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Sticky label */}
            <motion.div 
              initial={{ opacity: 0, y: -20, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="sticky-label mb-6"
            >
              👋 Hello, I'm
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-kalam font-bold mb-4 leading-tight"
            >
              <span className="text-pencil">Aayush</span>{' '}
              <span className="text-marker-red">Arya</span>
              <span className="inline-block animate-wiggle ml-1 text-pen-blue">!</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-hand text-xl md:text-2xl text-pencil/80 mb-2"
            >
              Full Stack Developer
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-hand text-lg text-pencil/60 mb-8 max-w-md leading-relaxed"
            >
              Building Interactive & Scalable Web Experiences. Crafting UI with Motion & Precision.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a href={resume} target="_blank" rel="noopener noreferrer" className="btn-sketchy inline-flex items-center justify-center gap-2">
                <FileText className="h-5 w-5" strokeWidth={2.5} />
                View Resume
              </a>
              <button onClick={scrollToProjects} className="btn-sketchy-secondary inline-flex items-center justify-center gap-2">
                <Code className="h-5 w-5" strokeWidth={2.5} />
                My Projects
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-3 justify-center md:justify-start"
            >
              <a
                href="https://github.com/aayusharyaiam"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-sketchy hover-scale"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" strokeWidth={2.5} />
              </a>
              <a
                href="https://www.linkedin.com/in/aayusharyaiam"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-sketchy hover-scale"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" strokeWidth={2.5} />
              </a>
              <a
                href="https://leetcode.com/u/aayusharya_i_am/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-sketchy hover-scale"
                aria-label="LeetCode"
              >
                <Code className="h-5 w-5" strokeWidth={2.5} />
              </a>
            </motion.div>
          </div>

          {/* Right - Hero Illustration Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center mt-8 md:mt-0"
          >
            {/* Hand-drawn SVG Arrow pointing to CTA (desktop only) - DYNAMIC SKETCH DRAWING */}
            <svg
              className="hidden md:block absolute -left-24 bottom-6 w-32 h-20 text-pencil/50"
              viewBox="0 0 100 60"
              fill="none"
            >
              <motion.path
                d="M5 50 C 20 10, 60 5, 90 25"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5 3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
              />
              <motion.path
                d="M82 18 L90 25 L80 28"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 2.5, ease: "easeOut" }}
              />
            </svg>

            {/* Image frame with corner marks */}
            <div className="relative">
              {/* Corner marks drawn with framer motion */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-[3px] border-l-[3px] border-pencil" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-[3px] border-r-[3px] border-pencil" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-[3px] border-l-[3px] border-pencil" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-[3px] border-r-[3px] border-pencil" />

              <div
                className="w-64 h-72 md:w-72 md:h-80 bg-white border-[3px] border-pencil overflow-hidden"
                style={{
                  borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                  boxShadow: '8px 8px 0px 0px #2d2d2d',
                  transform: 'rotate(2deg)',
                }}
              >
                <div className="w-full h-full bg-paper-muted flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="font-kalam text-xl font-bold text-pencil">Aayush Arya</p>
                  <p className="font-hand text-sm text-pencil/60 mt-1">Full Stack Developer</p>
                  <p className="font-hand text-xs text-pencil/40 mt-1">Patna, Bihar, India 📍</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex justify-center mt-12 md:mt-24"
        >
          <button
            onClick={scrollToContact}
            className="animate-bounce-gentle flex flex-col items-center gap-1 text-pencil/50 hover:text-marker-red transition-colors"
          >
            <span className="font-hand text-sm">scroll down</span>
            <ArrowDown className="h-5 w-5" strokeWidth={2.5} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};