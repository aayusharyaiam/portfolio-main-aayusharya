import { Trophy, Code, Link as LinkIcon, ExternalLink, Milestone, CheckCircle2 as CheckCircle, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionTitle } from '@/components/motion/SectionTitle';
import { Magnetic } from '@/components/motion/Magnetic';

export const Highlights = () => {
  const reduced = useReducedMotion();

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
      takeaway: "Clarity builds trust — VerifyAI helps you see the truth through the noise."
    }
  ];

  return (
    <section id="highlights" className="py-24 px-6 bg-paper-muted">
      <div className="max-w-6xl mx-auto">
        <SectionTitle children="Hackathons & Highlights" />

        {/* Outer Single Page / Elliptical Capsule Container (~60vw on large screens) */}
        <div className="w-full max-w-4xl lg:w-[62vw] mx-auto">
          <div
            className="bg-[#faf8f5] border-[3px] border-pencil p-6 sm:p-9 md:p-12 shadow-hard-lg relative"
            style={{ borderRadius: '64px 64px 64px 64px' }}
          >
            {/* Page Header Strip / Ellipse Apex Badge */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-6 mb-6 border-b-2 border-dashed border-pencil/30 text-center sm:text-left">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-marker-red border border-pencil" />
                <span className="w-3 h-3 rounded-full bg-[#ffc107] border border-pencil" />
                <span className="w-3 h-3 rounded-full bg-green-500 border border-pencil" />
                <span className="font-kalam font-bold text-lg text-pencil ml-2">
                  🏆 Hackathon Log (3 Entries)
                </span>
              </div>
              <span className="font-hand font-bold text-sm text-pencil/70 bg-paper px-4 py-1 border border-pencil rounded-full shadow-hard-sm">
                Single Sheet • 3 Projects
              </span>
            </div>

            {/* 3 Divided Sub-Boxes matching the Elliptical Contour */}
            <div className="space-y-6">
              {hackathons.map((hackathon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border-2 border-pencil p-5 sm:p-7 shadow-hard-sm hover:shadow-hard transition-all relative group"
                  style={{
                    borderRadius: index === 0
                      ? '36px 36px 16px 16px'
                      : index === 1
                      ? '18px 18px 18px 18px'
                      : '16px 16px 36px 36px',
                  }}
                >
                  {/* Segment Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 pb-3 border-b border-dashed border-pencil/20">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-hand font-bold text-xs bg-paper-muted border border-pencil px-2.5 py-0.5 rounded-full text-pencil">
                          Part {index + 1} of 3
                        </span>
                        <h3 className="font-kalam text-xl sm:text-2xl font-bold text-pencil leading-tight">
                          {hackathon.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1.5 text-pencil/60 mt-1 font-hand font-bold text-sm">
                        <Milestone className="h-4 w-4 text-pen-blue flex-shrink-0" />
                        <span>{hackathon.location}</span>
                      </div>
                    </div>

                    <div
                      className="bg-postit border-2 border-pencil px-3 py-1 font-kalam text-sm sm:text-base font-bold text-marker-red rotate-1 self-start sm:self-auto shadow-hard-sm"
                      style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
                    >
                      🏆 {hackathon.position}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="mb-4">
                    <h4 className="font-hand font-bold text-lg text-pen-blue mb-2 flex items-center gap-2">
                      <Code className="h-4 w-4 flex-shrink-0" />
                      <span>Project: {hackathon.project}</span>
                    </h4>

                    {hackathon.problem && (
                      <p className="font-hand text-pencil/80 text-base mb-3 italic bg-paper-muted/50 border-l-[3px] border-marker-red pl-3 py-1 rounded-r">
                        "{hackathon.problem}"
                      </p>
                    )}

                    {hackathon.features.length > 0 && (
                      <ul className="grid sm:grid-cols-2 gap-2 my-3">
                        {hackathon.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 font-hand text-sm sm:text-base text-pencil/85">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {hackathon.takeaway && (
                      <div className="mt-3 p-3 border border-dashed border-pen-blue/40 bg-blue-50/40 rounded-xl">
                        <p className="font-hand text-sm sm:text-base font-bold text-pen-blue">
                          💡 {hackathon.takeaway}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {hackathon.repo && (
                      <Magnetic strength={8}>
                        <a
                          href={hackathon.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 font-hand font-bold hover:text-marker-red text-pencil text-sm transition-colors px-3 py-1 border-2 border-pencil bg-paper rounded-wobbly-sm shadow-hard-sm"
                        >
                          <ExternalLink className="h-3.5 w-3.5" strokeWidth={2.5} />
                          GitHub Repo
                        </a>
                      </Magnetic>
                    )}
                    {hackathon.links?.map((link, idx) => (
                      <Magnetic strength={8} key={idx}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 font-hand font-bold hover:text-pen-blue text-pencil text-sm transition-colors px-3 py-1 border-2 border-pencil bg-paper rounded-wobbly-sm shadow-hard-sm"
                        >
                          <LinkIcon className="h-3.5 w-3.5" strokeWidth={2.5} />
                          {link.label}
                        </a>
                      </Magnetic>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 2025 Accomplishments List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 w-full max-w-4xl lg:w-[62vw] mx-auto wobbly-card-alt tack-decoration bg-white sm:p-10 relative"
        >
          <h3 className="font-kalam text-2xl sm:text-3xl font-bold mb-8 flex items-center justify-center gap-2 text-pencil border-b-2 border-pencil/20 pb-4">
            <Trophy className="h-7 w-7 text-marker-red" strokeWidth={2.5} />
            Key Highlights from 2025
          </h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: "Technika 2K26 (Web Team – React)", desc: "Hands-on experience with scalable frontend development and team collaboration." },
              { title: "Smart India Hackathon 2K25", desc: "Cleared the college-level internal round, strengthening ideation, teamwork, and problem-solving." },
              { title: "GDG DevFest Patna", desc: "Exposure to Salesforce, cloud technologies, and industry-driven insights through the GDG Patna community." },
              { title: "GDG Ludhiana", desc: "Practical understanding of AI & Cloud concepts beyond theory." },
              { title: "Xordium Hackathon (Ignite Club)", desc: "Rapid prototyping and building under pressure." },
              { title: "Hacktoberfest 2025", desc: "First structured open-source contributions, learning Git workflows and PR standards." },
              { title: "React + Google Maps API Project", desc: "Real API integration, optimisation, and frontend logic." },
              { title: "Open Source with React & Tailwind", desc: "Cleaner UI systems, reusable components, and design consistency." }
            ].map((item, index) => (
              <div key={index} className="flex gap-3.5 group">
                <div className="mt-1">
                  <div
                    className="w-7 h-7 rounded-full border-2 border-pencil bg-paper flex items-center justify-center text-pen-blue font-kalam font-bold text-sm group-hover:bg-postit transition-colors"
                    style={{ boxShadow: '2px 2px 0px 0px #2d2d2d' }}
                  >
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h4 className="font-kalam text-lg sm:text-xl font-bold text-pencil group-hover:text-marker-red transition-colors">{item.title}</h4>
                  <p className="font-hand text-base sm:text-lg text-pencil/70 leading-relaxed mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
