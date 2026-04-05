import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { Github, Linkedin, Code, Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-paper" style={{ backgroundImage: 'radial-gradient(#e5e0d8 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      <Navigation />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      
      {/* Hand-Drawn Footer */}
      <footer className="border-t-[3px] border-pencil py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-kalam text-xl font-bold text-pencil mb-2 wavy-underline">Aayush Arya</h3>
              <p className="font-hand text-pencil/60 mt-3">
                Full Stack Developer building interactive & scalable web experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-kalam text-lg font-bold text-pencil mb-3 wavy-underline">Quick Links</h3>
              <div className="space-y-1 mt-3">
                {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const el = document.getElementById(link.toLowerCase());
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block font-hand text-pencil/60 hover:text-marker-red hover:line-through transition-all duration-100 cursor-pointer"
                  >
                    → {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-kalam text-lg font-bold text-pencil mb-3 wavy-underline">Connect</h3>
              <div className="flex gap-3 mt-3">
                <a href="https://github.com/AayushArya28" target="_blank" rel="noopener noreferrer" className="social-link-sketchy" aria-label="GitHub">
                  <Github className="h-5 w-5" strokeWidth={2.5} />
                </a>
                <a href="https://www.linkedin.com/in/aayusharyaiam" target="_blank" rel="noopener noreferrer" className="social-link-sketchy" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" strokeWidth={2.5} />
                </a>
                <a href="https://leetcode.com/u/aayusharya_i_am/" target="_blank" rel="noopener noreferrer" className="social-link-sketchy" aria-label="LeetCode">
                  <Code className="h-5 w-5" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t-2 border-dashed border-pencil/20 pt-6 text-center">
            <p className="font-hand text-pencil/50 flex items-center justify-center gap-1">
              © 2025 Aayush Arya. Made with <Heart className="h-4 w-4 text-marker-red fill-marker-red inline" /> and lots of ☕
            </p>
            <p className="font-hand text-xs text-pencil/30 mt-1">
              Designed with wobbly borders and handwritten fonts ✏️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
