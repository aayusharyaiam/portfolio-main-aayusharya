import { Code2, Database, Layout, Server, DatabaseZap, GraduationCap, Folder } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionTitle } from '@/components/motion/SectionTitle';
import { Magnetic } from '@/components/motion/Magnetic';
import { TiltCard } from '@/components/motion/TiltCard';
import { TextReveal } from '@/components/motion/TextReveal';

const COLOR_UTILS = {
  markerRed: 'text-marker-red bg-marker-red/5 border-marker-red/10 group-hover:text-marker-red group-hover:border-marker-red',
  penBlue: 'text-pen-blue bg-pen-blue/5 border-pen-blue/10 group-hover:text-pen-blue group-hover:border-pen-blue',
  pencil: 'text-pencil bg-paper/80 border-pencil/20 group-hover:text-pencil group-hover:border-pencil',
};

export const Skills = () => {
  const reduced = useReducedMotion();

  const customSkills = [
    {
      category: "Frontend",
      icon: <Layout className="h-6 w-6" strokeWidth={2.5} />,
      color: "markerRed",
      items: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES6+)", "ReactJS", "GSAP Animations"]
    },
    {
      category: "Backend",
      icon: <Server className="h-6 w-6" strokeWidth={2.5} />,
      color: "penBlue",
      items: ["Golang", "REST APIs", "Node.js", "Express.js", "C", "C++", "Python"]
    },
    {
      category: "Database & Tools",
      icon: <DatabaseZap className="h-6 w-6" strokeWidth={2.5} />,
      color: "pencil",
      items: ["MongoDB", "MySQL", "Git", "GitHub", "Vite", "Firebase"]
    }
  ];

  const certifications = [
    "Deloitte Australia Cyber Job Simulation",
    "Microsoft Azure Fundamentals",
    "Robotics Simulation Certification",
    "Drone Simulation Certification",
    "Web Dev with CSS & Express",
    "GitHub Graph Certification",
    "DevFest Cloud Track"
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-pencil/5 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionTitle children="Technical Skills" />

        <div className="grid md:grid-cols-3 gap-10 md:gap-6">
          {customSkills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: index === 1 ? -12 : 12 }}
              whileInView={{ opacity: 1, y: 0, rotate: index === 1 ? 6 : -6 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.12, type: 'spring', stiffness: 220 }}
              className="wobbly-card-alt group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 flex items-center justify-center border-[3px] border-pencil bg-paper"
                  style={{ borderRadius: '73% 27% 70% 30% / 30% 56% 44% 70%', boxShadow: '3px 3px 0px 0px #2d2d2d' }}
                >
                  {skillGroup.icon}
                </div>
                <h3 className="font-kalam text-2xl font-bold text-pencil">{skillGroup.category}</h3>
              </div>

              <Magnetic strength={14}>
                <ul className="space-y-3 font-hand text-pencil/80 md:text-lg">
                  {skillGroup.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-center gap-2"
                      whileHover={{ x: 4, transition: { type: 'spring', stiffness: 200 } }}
                    >
                      <span
                        className={`w-2 h-2 rounded-full border border-pencil bg-${skillGroup.color}`}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </Magnetic>
            </motion.div>
          ))}
        </div>

        {/* Certifications Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 wobbly-card tape-decoration bg-postit"
        >
          <div className="flex items-center gap-3 mb-6 border-b-2 border-dashed border-pencil/30 pb-4">
            <GraduationCap className="h-8 w-8 text-pencil" strokeWidth={2.5} />
            <h3 className="font-kalam text-3xl font-bold text-pencil">Certifications & Accolades</h3>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2"
                whileHover={{ scale: 1.06, rotate: index % 2 === 0 ? 3 : -3, transition: { duration: 0.3, type: 'spring' } }}
              >
                <span className="text-xl">🏆</span>
                <span className="font-hand font-bold text-pencil/90 text-sm md:text-base break-words">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};