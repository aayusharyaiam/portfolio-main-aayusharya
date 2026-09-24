import { Briefcase, Calendar, Users, Target } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionTitle } from '@/components/motion/SectionTitle';
import { Parallax } from '@/components/motion/Reveal';
import { Magnetic } from '@/components/motion/Magnetic';
import { TiltCard } from '@/components/motion/TiltCard';
import { DoodleCircle, DoodleUnderline, DoodleSparkle, DoodleScribble } from '@/components/motion/Doodles';

export const Experience = () => {
  const reduced = useReducedMotion();

  const experiences = [
    {
      role: 'Co-Head Web Developer',
      company: "Technika'26 (Official Tech Fest)",
      duration: 'Present',
      description: 'Managing the development team for the official tech fest website of BIT Mesra, coordinating with design and content teams to deliver a high-performance web experience.',
      icon: <Users className="h-5 w-5" strokeWidth={2.5} />
    },
    {
      role: 'Co-Head Web Developer',
      company: "Prakrida'26",
      duration: 'Present',
      description: 'Developed and managed the official website for Prakrida\'26, enhancing user experience through modern UI/UX and seamless performance as the sole web developer.',
      icon: <Users className="h-5 w-5" strokeWidth={2.5} />
    },
    {
      role: 'Co Web-Dev',
      company: "IEEE Student Branch",
      duration: 'Present',
      description: 'Leading the Web Development team to build and maintain the official platform for IEEE BIT Mesra Student Branch, ensuring robust architecture and seamless user experience.',
      icon: <Target className="h-5 w-5" strokeWidth={2.5} />
    }
  ];

  const clubs = [
    { name: "IGNITE Club", role: "Member", desc: "Active participation in coding and technical events." },
    { name: "DIVYA BITP", role: "Member", desc: "Participated in operations and events." },
    { name: "IEEE Club", role: "Co Web-Dev", desc: "Active participant in technical activities and events." }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-paper">
      <div className="max-w-7xl mx-auto">
        <SectionTitle children="Experience & Roles" />

        <div className="relative">
          <div className="max-w-3xl mx-auto space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.12, type: 'spring', stiffness: 180 }}
                className="w-full"
              >
                {/* 3D card surface */}
                <TiltCard intensity={8} shadowSize={8} shadowColor="#2d2d2d">
                  <div
                    className="bg-white border-[3px] border-pencil p-6 sm:p-8 relative group"
                    style={{
                      borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                      boxShadow: '4px 4px 0px 0px #2d2d2d',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Header with icon */}
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 flex-shrink-0 bg-paper border-[3px] border-pencil rounded-full shadow-hard-sm flex items-center justify-center">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h3 className="font-kalam text-xl md:text-2xl font-bold text-pencil leading-tight">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-1.5 text-pencil/70 font-hand font-bold text-sm bg-paper-muted border border-pencil px-2.5 py-0.5 rounded-wobbly-sm self-start">
                            <Calendar className="h-3.5 w-3.5 text-pen-blue" strokeWidth={2.5} />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                        <h4 className="font-hand text-lg text-marker-red font-bold mt-1">
                          @ {exp.company}
                        </h4>
                      </div>
                    </div>

                    <div className="border-t-2 border-dashed border-pencil/20 pt-3 mt-2">
                      <p className="font-hand text-pencil/80 md:text-lg leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Floating doodles for flavor */}
          <motion.div className="absolute top-1/4 right-2 w-14 h-14 text-marker-red/60" style={{ perspective: 400 }}>
            <DoodleSparkle delay={0.6} />
            <DoodleScribble delay={1.2} />
          </motion.div>

          {/* Underline + sparkle before clubs */}
          <DoodleUnderline className="absolute bottom-6 left-1/2 -translate-x-1/2 w-96 text-marker-red" delay={0.9} />
          <DoodleSparkle className="absolute bottom-2 right-2 w-8 h-8 text-pen-blue" delay={0.7} />
        </div>

        {/* Clubs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 pt-10 border-t-2 border-dashed border-pencil/20"
        >
          <div className="inline-block tack-decoration bg-paper-muted px-4 rotate-1">
            <h3 className="font-kalam text-2xl font-bold text-pencil">🌟 Clubs and Memberships</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-6">
            {clubs.map((club, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateY: -40, x: -30 }}
                whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08, type: 'spring', stiffness: 160 }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 3 : -3, transition: { type: 'spring', stiffness: 260, damping: 22 } }}
                className="postit-card flex flex-col justify-center"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-kalam font-bold text-xl text-pencil">{club.name}</h4>
                  <span className="font-hand font-bold text-sm bg-paper-muted border border-pencil px-2 py-0.5 rounded-wobbly-sm" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}>
                    {club.role}
                  </span>
                </div>
                <p className="font-hand text-pencil/70 text-sm">{club.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Club-level doodles */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-20 h-20 text-pen-blue/60 rotate-6"
            style={{ perspective: 400 }}
          >
            <DoodleCircle delay={1.3} />
            <DoodleSparkle delay={1.5} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};