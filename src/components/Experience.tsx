import { Briefcase, Calendar, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export const Experience = () => {
  const experiences = [
    {
      role: 'Subject Matter Expert',
      company: 'Chegg India',
      duration: 'Nov 2022 - Mar 2023',
      description: 'Mentored and solved complex problems in academic subjects, ensuring subject accuracy and maintaining a high quality standard for educational materials.',
      icon: <Briefcase className="h-5 w-5" strokeWidth={2.5} />
    },
    {
      role: 'Co-Head Web Developer',
      company: 'Technika\'26 (Official Tech Fest)',
      duration: 'Present',
      description: 'Managing the development team for the official tech fest website of BIT Mesra, coordinating with design and content teams to deliver a high-performance web experience.',
      icon: <Users className="h-5 w-5" strokeWidth={2.5} />
    },
    {
      role: 'Co-Head Web Developer',
      company: 'IEEE Student Branch',
      duration: 'Present',
      description: 'Leading the Web Development team to build and maintain the official platform for IEEE BIT Mesra Student Branch, ensuring robust architecture and seamless user experience.',
      icon: <Target className="h-5 w-5" strokeWidth={2.5} />
    }
  ];

  const clubs = [
    { name: "IGNITE Club", role: "Member", desc: "Active participation in coding and technical events." },
    { name: "DIVYA BITP", role: "Member", desc: "Participated in operations and events." }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title tracking-widest">Experience & Roles</h2>
        </motion.div>

        <div className="relative">
          {/* Hand-drawn timeline central line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0 border-l-[3px] border-dashed border-pencil/30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                className={`flex flex-col md:flex-row gap-6 md:gap-12 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline node - completely hidden on mobile for better stacking */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-paper border-[3px] border-pencil z-10 items-center justify-center rounded-full" style={{ boxShadow: '2px 2px 0px 0px #2d2d2d' }}>
                  <div className="text-marker-red">
                    {exp.icon}
                  </div>
                </div>

                {/* Content Card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}
                >
                  <div 
                    className="bg-white border-[3px] border-pencil p-6 relative group"
                    style={{ 
                      borderRadius: index % 2 === 0 ? '255px 15px 225px 15px / 15px 225px 15px 255px' : '15px 255px 15px 225px / 255px 15px 225px 15px',
                      boxShadow: '6px 6px 0px 0px #2d2d2d'
                    }}
                  >
                    {/* Speech bubble pointer (desktop) */}
                    <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-pencil ${
                      index % 2 === 0 
                        ? '-left-[10px] border-b-[3px] border-l-[3px] rotate-45' 
                        : '-right-[10px] border-t-[3px] border-r-[3px] rotate-45'
                    }`} />
                    
                    <h3 className="font-kalam text-xl md:text-2xl font-bold text-pencil mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="font-hand text-lg text-marker-red font-bold mb-3">
                      @ {exp.company}
                    </h4>
                    
                    <div className="flex items-center gap-2 mb-4 text-pencil/60 border-b-2 border-dashed border-pencil/20 pb-3">
                      <Calendar className="h-4 w-4" strokeWidth={2.5} />
                      <span className="font-hand text-sm font-bold">{exp.duration}</span>
                    </div>
                    
                    <p className="font-hand text-pencil/80 md:text-lg leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
                
                {/* Empty space for timeline alignment */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Memberships Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 border-t-[3px] border-dashed border-pencil/20 pt-10"
        >
          <div className="inline-block tack-decoration bg-paper-muted px-4 mb-8 rotate-1">
            <h3 className="font-kalam text-2xl font-bold text-pencil">🌟 Memberships</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {clubs.map((club, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -1 : 1 }}
                className="postit-card flex flex-col justify-center"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-kalam font-bold text-xl text-pencil">{club.name}</h4>
                  <span className="font-hand font-bold text-sm bg-paper-muted border border-pencil px-2 py-0.5" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}>
                    {club.role}
                  </span>
                </div>
                <p className="font-hand text-pencil/70 text-sm">{club.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};