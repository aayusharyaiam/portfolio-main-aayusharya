import { Code2, Database, Layout, Server, DatabaseZap, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export const Skills = () => {
  const customSkills = [
    {
      category: "Frontend",
      icon: <Layout className="h-6 w-6" strokeWidth={2.5} />,
      color: "marker-red",
      items: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES6+)", "ReactJS", "GSAP Animations"]
    },
    {
      category: "Backend",
      icon: <Server className="h-6 w-6" strokeWidth={2.5} />,
      color: "pen-blue",
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
    <section id="skills" className="py-20 px-6 bg-pencil/5 w-full overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute top-1/2 left-0 right-0 h-0 border-b-[3px] border-dashed border-pencil/20 -z-10" />
          <h2 className="section-title bg-paper-muted inline-block px-6 tack-decoration">Technical Skills</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {customSkills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: index === 1 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: index === 1 ? 1 : -1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 300 }}
              className="wobbly-card-alt group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-12 h-12 flex items-center justify-center border-[3px] border-pencil bg-paper"
                  style={{ borderRadius: '73% 27% 70% 30% / 30% 56% 44% 70%', boxShadow: '3px 3px 0px 0px #2d2d2d' }}
                >
                  <div className={`text-${skillGroup.color} group-hover:scale-110 transition-transform`}>
                    {skillGroup.icon}
                  </div>
                </div>
                <h3 className="font-kalam text-2xl font-bold text-pencil">{skillGroup.category}</h3>
              </div>
              
              <ul className="space-y-3 font-hand text-pencil/80 md:text-lg">
                {skillGroup.items.map((item, itemIndex) => (
                  <motion.li 
                    key={itemIndex} 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5, color: '#e63946' }}
                  >
                    <span className={`w-2 h-2 rounded-full border border-pencil bg-${skillGroup.color}`} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certifications Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
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
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              >
                <span className="text-xl">🏆</span>
                <span className="font-hand font-bold text-pencil/90 text-sm md:text-base border-b border-pencil/20 break-words">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};