import { ExternalLink, Github, Code, Search, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export const Projects = () => {
  const projects = [
    {
      title: "Technika'26",
      description: "Official website for Technika'26 annual tech fest at BIT Mesra. Managed design and technical implementation with core team, featuring event listings, registrations, and dynamic content.",
      tags: ["React", "TailwindCSS", "JavaScript", "GSAP"],
      role: "Co-Head Web Developer",
      tagline: "Official Tech Fest Website",
      category: "UI/UX + Scalability",
      repo: "https://github.com/aayusharyaiam/technikna_2K25",
      live: "https://technikna-2-k25.vercel.app/"
    },
    {
      title: "Prakrida'26",
      description: "Developed and managed the official website for Prakrida'26, enhancing user experience through modern UI/UX and seamless performance as the sole web developer.",
      tags: ["React", "Node.js", "Express", "TailwindCSS"],
      role: "Co-Head Web Developer",
      tagline: "Official Sports Fest Website",
      category: "Full Stack",
      repo: "https://github.com/ShiftainAhmad/Prakida_Demon",
      live: "https://prakrida.in/"
    },
    {
      title: "IEEE Student Branch",
      description: "Built and maintained the IEEE Student Branch website for BIT Mesra, improving club visibility and centralizing event resources for students.",
      tags: ["React", "Firebase", "TailwindCSS"],
      role: "Co-Head Web Developer",
      tagline: "Student Chapter Platform",
      category: "Community",
      repo: "https://github.com/aayusharyaiam/IEEE-web",
      live: "https://www.ieeebitp.in/"
    },
    {
      title: "Bharti AI",
      description: "A Gen-AI SaaS platform leveraging multiple LLMs to generate high-quality, plagiarism-free text, code, audio, and visual content, with robust authentication mechanisms.",
      tags: ["React", "Express", "MongoDB", "OpenAI"],
      role: "Full Stack Developer",
      tagline: "Gen-AI Content Platform",
      category: "AI Integration"
    },
    {
      title: "IMPACT'25",
      description: "Web portal for an International Conference attended by global scholars. Designed responsive interfaces to manage event schedules and speaker details.",
      tags: ["React", "TailwindCSS", "Vite"],
      role: "Frontend Developer",
      tagline: "International Conference Portal",
      category: "Frontend",
      repo: "https://github.com/aayusharyaiam/cse_conference",
      live: "https://impact.bitmesra.ac.in/"
    },
    {
      title: "Lifeer",
      description: "Full-stack productivity dashboard allowing users to track habits, manage tasks, and visualize daily goals with customized charts and intuitive UI.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      role: "Full Stack Developer",
      tagline: "Productivity Tracking App",
      category: "Full Stack"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 pl-4 md:pl-8 border-l-2 border-pencil relative">
          {/* Timeline dots */}
          <div className="absolute top-0 bottom-0 left-0 -ml-2 text-pencil opacity-20 hidden md:flex flex-col justify-around">
            <div className="w-3 h-3 rounded-full bg-pencil animate-pulse" />
            <div className="w-3 h-3 rounded-full bg-pencil animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="w-3 h-3 rounded-full bg-pencil animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotate: index % 2 === 0 ? -15 : 15, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, rotate: index % 2 === 0 ? -1 : 2, x: 0 }}
              whileHover={{ scale: 1.02, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="wobbly-card group bg-white tack-decoration transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-kalam text-2xl md:text-3xl font-bold text-pencil leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-hand text-pencil/50 text-sm">{project.tagline}</p>
                </div>
                
                {/* Sticky Label Category */}
                <div 
                  className="bg-postit border-2 border-pencil px-3 py-1 font-hand text-sm font-bold rotate-3 hidden sm:block"
                  style={{ borderRadius: '15px 225px 255px 15px / 255px 15px 225px 15px', boxShadow: '2px 2px 0px 0px #2d2d2d' }}
                >
                  {project.category}
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4 text-pencil/80">
                <Code className="h-4 w-4 text-marker-red" strokeWidth={2.5} />
                <span className="font-hand text-sm font-bold">{project.role}</span>
              </div>

              <p className="font-hand text-pencil/80 text-base md:text-lg mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    whileHover={{ scale: 1.1, rotate: tagIndex % 2 === 0 ? 3 : -3 }}
                    className="font-hand text-xs md:text-sm px-3 py-1 border-2 border-pencil bg-paper-muted"
                    style={{
                      borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex gap-4 pt-4 border-t-2 border-dashed border-pencil/20">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-hand text-marker-red hover:text-pencil transition-colors font-bold group"
                  >
                    <ExternalLink className="h-4 w-4 group-hover:scale-125 transition-transform" strokeWidth={2.5} />
                    Live Demo
                  </a>
                )}
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-hand font-bold hover:text-pen-blue text-pencil transition-colors group"
                  >
                    <Github className="h-4 w-4 group-hover:scale-125 transition-transform" strokeWidth={2.5} />
                    Source
                  </a>
                ) : (
                  <span className="flex items-center gap-2 font-hand font-bold text-pencil/50 group cursor-not-allowed">
                    <Github className="h-4 w-4" strokeWidth={2.5} />
                    Source (Private)
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};