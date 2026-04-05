import { MapPin, Calendar, GraduationCap, Mail, Phone, Download } from 'lucide-react';
import resume from '@/assets/AayushArya_Resume.pdf';
import { motion } from 'framer-motion';

export const About = () => {
  const stats = [
    { value: '6+', label: 'Projects', radius: '73% 27% 70% 30% / 30% 56% 44% 70%' },
    { value: '2+', label: 'Years Learning', radius: '30% 70% 42% 58% / 62% 28% 72% 38%' },
    { value: '100+', label: 'LeetCode Problems', radius: '58% 42% 35% 65% / 45% 55% 45% 55%' },
    { value: '6', label: 'Certifications', radius: '42% 58% 60% 40% / 35% 65% 32% 68%' },
  ];

  return (
    <section id="about" className="py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Personal Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring" }}
            className="wobbly-card tape-decoration"
          >
            <h3 className="font-kalam text-2xl font-bold mb-4 text-pencil">
              📋 Personal Info
            </h3>

            <div className="space-y-3 mb-6 break-words">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 flex-shrink-0 flex items-center justify-center border-2 border-pencil bg-postit"
                  style={{ borderRadius: '50%', boxShadow: '2px 2px 0px 0px #2d2d2d' }}
                >
                  <Mail className="h-4 w-4 text-pencil" strokeWidth={2.5} />
                </div>
                <span className="font-hand md:text-lg text-pencil/80">aayush10738@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 flex-shrink-0 flex items-center justify-center border-2 border-pencil bg-postit"
                  style={{ borderRadius: '50%', boxShadow: '2px 2px 0px 0px #2d2d2d' }}
                >
                  <Phone className="h-4 w-4 text-pencil" strokeWidth={2.5} />
                </div>
                <span className="font-hand md:text-lg text-pencil/80">+91 8603128570</span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 flex-shrink-0 flex items-center justify-center border-2 border-pencil bg-postit"
                  style={{ borderRadius: '50%', boxShadow: '2px 2px 0px 0px #2d2d2d' }}
                >
                  <MapPin className="h-4 w-4 text-pencil" strokeWidth={2.5} />
                </div>
                <span className="font-hand md:text-lg text-pencil/80">Patna, Bihar, India</span>
              </div>
            </div>

            <a href={resume} target="_blank" rel="noopener noreferrer" className="btn-sketchy w-full inline-flex items-center justify-center gap-2">
              <Download className="h-5 w-5" strokeWidth={2.5} />
              Download Resume
            </a>
          </motion.div>

          {/* Education Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="wobbly-card-alt tack-decoration"
          >
            <h3 className="font-kalam text-2xl font-bold mb-4 text-pencil">
              🎓 Education
            </h3>

            <div className="space-y-4">
              {/* B.Tech */}
              <div className="border-l-[3px] border-marker-red pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap className="h-5 w-5 text-marker-red flex-shrink-0" strokeWidth={2.5} />
                  <h4 className="font-kalam font-bold text-lg">B.Tech – ECE</h4>
                </div>
                <p className="font-hand text-pencil/70 text-sm md:text-base">Birla Institute of Technology, Mesra</p>
                <p className="font-hand text-pencil/50 text-xs md:text-sm">(Patna Off-Campus)</p>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="h-4 w-4 text-pen-blue" strokeWidth={2.5} />
                  <span className="font-hand text-xs md:text-sm text-pen-blue">2024 – 2028</span>
                </div>
              </div>

              <div className="border-t-2 border-dashed border-pencil/20" />

              {/* 12th */}
              <div className="border-l-[3px] border-pen-blue pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap className="h-5 w-5 text-pen-blue flex-shrink-0" strokeWidth={2.5} />
                  <h4 className="font-kalam font-bold text-lg">Senior Secondary (XII)</h4>
                </div>
                <p className="font-hand text-pencil/70 text-sm md:text-base">D.A.V. Kapil Dev Public School, Ranchi</p>
                <div className="flex items-center gap-3 mt-1">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-pen-blue" strokeWidth={2.5} />
                    <span className="font-hand text-xs md:text-sm text-pen-blue">2023 – 2024</span>
                  </div>
                  <span
                    className="font-kalam font-bold text-sm px-2 py-0.5 bg-postit border-2 border-pencil"
                    style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px', boxShadow: '1px 1px 0px 0px #2d2d2d' }}
                  >
                    91%
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Career Objective */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="postit-card tape-decoration mt-8"
        >
          <h3 className="font-kalam text-2xl font-bold mb-3 text-pencil">
            ✏️ Career Objective
          </h3>
          <p className="font-hand text-base md:text-lg text-pencil/80 leading-relaxed">
            <span className="text-3xl md:text-4xl font-kalam font-bold text-marker-red float-left mr-2 mt-1">M</span>
            otivated full stack developer skilled in building responsive and user-focused web applications.
            Experienced in HTML, CSS, JavaScript, React, and backend technologies like Golang and MongoDB.
            Strong interest in UI/UX, animations, and scalable systems.
            Active participant in hackathons, tech fests, and collaborative development projects.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="organic-stat mx-auto"
              style={{ borderRadius: stat.radius }}
            >
              <span className="text-2xl md:text-3xl font-kalam font-bold text-marker-red">{stat.value}</span>
              <span className="font-hand text-xs md:text-sm text-pencil/60 text-center px-2">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};