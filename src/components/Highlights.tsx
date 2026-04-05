import { Trophy, Code, Link as LinkIcon, ExternalLink, Milestone, CheckCircle2 as CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const Highlights = () => {
  const hackathons = [
    {
      name: "Cybersecurity Hackathon",
      location: "BIT Mesra, Ranchi (30th March)",
      position: "1st Runner-Up",
      project: "SENTINEL — Agentic AI for Prompt Abuse Prevention",
      links: [
        { label: "Frontend Repo", url: "https://github.com/aayusharyaiam/sentinal-ai-frontend" },
        { label: "Backend Repo", url: "https://github.com/aayusharyaiam/sentinel-ai-backend" }
      ],
      problem: "AI systems can be manipulated using only natural language — no hacking required.",
      features: [
        "Intent-aware AI layer (understands meaning, not keywords)",
        "Session-level behavior tracking (detects multi-step attacks)",
        "Autonomous red teaming (AI attacking itself to improve)",
        "Adaptive multi-layer defense system"
      ],
      takeaway: "This experience pushed me beyond development into AI security, system design, and adversarial thinking."
    },
    {
      name: "DevConquest 24-hr Hackathon",
      location: "Technika 2026 (16th–18th Jan)",
      position: "2nd Position",
      project: "SafeTourist - Smart Tourist Safety & Incident Response System",
      repo: "https://github.com/aayusharyaiam/Commit_Chaos-Frontend",
      links: [
        { label: "Live Deployment", url: "https://commit-chaos-frontend.vercel.app/" }
      ],
      problem: "Tourism in remote, high-risk regions faces critical tracking gaps, delayed rescues, and fragmented coordination.",
      features: [
        "KYC Face Verification via face-api.js & Digital Tourist Passports",
        "Real-time safety score visualization & activity feed",
        "Location tracking with geofencing, panic button, and emergency alerts",
        "Built with React (Vite), Tailwind CSS, Firebase, and Context API"
      ],
      takeaway: "We designed a comprehensive, privacy-first ecosystem to address real-world tracking and infrastructure challenges."
    },
    {
      name: "XORDIUM 12-hr Hackathon",
      location: "Organized by Ignite Club",
      position: "2nd Place",
      project: "VerifyAI — AI-driven News Verification Platform",
      repo: "https://github.com/aayusharyaiam/Xordium",
      problem: "A platform designed to help users verify the authenticity of news, analyze source credibility, and visualize trust signals — all powered by artificial intelligence.",
      features: [
        "Built with React 18, Vite, Tailwind CSS, and Lucide React",
        "Fully themed custom UI mapped to Figma design tokens",
        "Custom purple glowing themed scrollbar aligned with brand aesthetics",
        "Subtle purple-to-black gradient backgrounds for enhanced visual depth"
      ],
      takeaway: "\"Clarity builds trust — VerifyAI helps you see the truth through the noise.\""
    }
  ];

  const accomplishments2025 = [
    { title: "Technika 2K26 (Web Team – React)", desc: "Hands-on experience with scalable frontend development and team collaboration." },
    { title: "Smart India Hackathon 2K25", desc: "Cleared the college-level internal round, strengthening ideation, teamwork, and problem-solving." },
    { title: "GDG DevFest Patna", desc: "Exposure to Salesforce, cloud technologies, and industry-driven insights through the GDG Patna community." },
    { title: "GDG Ludhiana", desc: "Practical understanding of AI & Cloud concepts beyond theory." },
    { title: "Xordium Hackathon (Ignite Club)", desc: "Rapid prototyping and building under pressure." },
    { title: "Hacktoberfest 2025", desc: "First structured open-source contributions, learning Git workflows and PR standards." },
    { title: "React + Google Maps API Project", desc: "Real API integration, optimisation, and frontend logic." },
    { title: "Open Source with React & Tailwind", desc: "Cleaner UI systems, reusable components, and design consistency." }
  ];

  return (
    <section id="highlights" className="py-20 px-6 overflow-hidden bg-paper-muted border-y-[3px] border-pencil">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-marker-red">Hackathons & Highlights</h2>
          <p className="font-hand text-xl mt-4 text-pencil/80">2025 — A Year of Growth, Teams, and Real Learning 🚀</p>
        </motion.div>

        {/* Hackathons Grid */}
        <div className="flex flex-col gap-10 mb-20">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border-[3px] border-pencil p-6 sm:p-8 tape-decoration relative"
              style={{
                borderRadius: index % 2 === 0 ? '15px 225px 255px 15px / 255px 15px 225px 15px' : '255px 15px 225px 15px / 15px 225px 15px 255px',
                boxShadow: '6px 6px 0px 0px #2d2d2d'
              }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b-2 border-dashed border-pencil/20">
                <div>
                  <h3 className="font-kalam text-2xl md:text-3xl font-bold text-pencil leading-tight flex items-center gap-2">
                    <Trophy className="h-6 w-6 text-[#FFD700]" strokeWidth={2.5} />
                    {hackathon.name}
                  </h3>
                  <div className="flex items-center gap-2 text-pencil/60 mt-2 font-hand font-bold">
                    <Milestone className="h-4 w-4" />
                    <span>{hackathon.location}</span>
                  </div>
                </div>
                
                <div 
                  className="bg-postit border-2 border-pencil px-4 py-2 font-kalam text-lg font-bold text-marker-red rotate-2"
                  style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px', boxShadow: '2px 2px 0px 0px #2d2d2d' }}
                >
                  {hackathon.position}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-hand font-bold text-xl text-pen-blue mb-2 flex items-center gap-2">
                  <Code className="h-5 w-5" /> 
                  Project: {hackathon.project}
                </h4>
                {hackathon.problem && (
                  <p className="font-hand text-pencil/80 text-lg mb-4 italic border-l-4 border-marker-red pl-3 bg-red-50/50 py-2">
                    " {hackathon.problem} "
                  </p>
                )}
                
                {hackathon.features.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {hackathon.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 font-hand text-lg text-pencil/80">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" strokeWidth={2.5}/>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {hackathon.takeaway && (
                  <div className="mt-4 p-4 border-2 border-dashed border-pen-blue/40 bg-blue-50/30 rounded-lg">
                    <p className="font-hand text-lg font-bold text-pen-blue flex items-start gap-2">
                      <Star className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      {hackathon.takeaway}
                    </p>
                  </div>
                )}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 pt-4">
                {hackathon.repo && (
                   <a
                    href={hackathon.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-hand font-bold hover:text-marker-red text-pencil transition-colors group px-3 py-1 border-2 border-pencil bg-paper"
                    style={{ borderRadius: '15px 225px 255px 15px / 255px 15px 225px 15px' }}
                  >
                    <ExternalLink className="h-4 w-4 group-hover:scale-125 transition-transform" strokeWidth={2.5} />
                    GitHub Repo
                   </a>
                )}
                {hackathon.links?.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-hand font-bold hover:text-pen-blue text-pencil transition-colors group px-3 py-1 border-2 border-pencil bg-paper"
                    style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
                  >
                    <LinkIcon className="h-4 w-4 group-hover:scale-125 transition-transform" strokeWidth={2.5} />
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2025 Accomplishments List */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="wobbly-card-alt tack-decoration bg-white sm:p-10"
        >
           <h3 className="font-kalam text-3xl font-bold mb-8 flex items-center justify-center gap-2 text-pencil border-b-2 border-pencil/20 pb-4">
             <Trophy className="h-8 w-8 text-marker-red" strokeWidth={2.5} />
             Key Highlights from 2025
           </h3>
           <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
             {accomplishments2025.map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="mt-1">
                    <div className="w-8 h-8 rounded-full border-2 border-pencil bg-paper flex items-center justify-center text-pen-blue font-kalam font-bold group-hover:bg-postit transition-colors" style={{ boxShadow: '2px 2px 0px 0px #2d2d2d' }}>
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-kalam text-xl font-bold text-pencil group-hover:text-marker-red transition-colors">{item.title}</h4>
                    <p className="font-hand text-lg text-pencil/70 leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
             ))}
           </div>
        </motion.div>

      </div>
    </section>
  );
};
