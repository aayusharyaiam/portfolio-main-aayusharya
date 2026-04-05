import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Code, Mail, FileText } from 'lucide-react';
import profImage from '@/assets/prof.jpg';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="h-4 w-4" strokeWidth={2.5} /> },
    { id: 'about', label: 'About', icon: <User className="h-4 w-4" strokeWidth={2.5} /> },
    { id: 'projects', label: 'Projects', icon: <Code className="h-4 w-4" strokeWidth={2.5} /> },
    { id: 'skills', label: 'Skills', icon: <Briefcase className="h-4 w-4" strokeWidth={2.5} /> },
    { id: 'experience', label: 'Experience', icon: <FileText className="h-4 w-4" strokeWidth={2.5} /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="h-4 w-4" strokeWidth={2.5} /> }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map(item => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-paper/95 border-b-2 border-pencil' : 'bg-paper/80'
      }`}
      style={{
        backgroundImage: scrolled ? 'none' : undefined,
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div
              className="w-10 h-10 overflow-hidden border-2 border-pencil"
              style={{ borderRadius: '225px 15px 255px 15px / 15px 255px 15px 225px' }}
            >
              <img src={profImage} alt="Aayush Arya" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-kalam font-bold text-pencil group-hover:text-marker-red transition-colors duration-100">
              Aayush Arya
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-1.5 px-3 py-2 font-hand text-base transition-all duration-100 relative ${
                  activeSection === item.id
                    ? 'text-marker-red font-bold'
                    : 'text-pencil hover:text-marker-red'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span
                    className="absolute bottom-0 left-1 right-1 h-[3px] bg-marker-red"
                    style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center border-2 border-pencil bg-white transition-all duration-100 hover:bg-marker-red hover:text-white"
            style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px', boxShadow: '2px 2px 0px 0px #2d2d2d' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" strokeWidth={2.5} /> : <Menu className="h-5 w-5" strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="md:hidden border-t-2 border-dashed border-pencil/30 bg-paper"
          style={{ backgroundImage: 'radial-gradient(#e5e0d8 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        >
          <nav className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-3 px-4 py-3 font-hand text-lg text-left border-2 transition-all duration-100 ${
                  activeSection === item.id
                    ? 'border-pencil bg-postit text-pencil font-bold'
                    : 'border-transparent text-pencil hover:border-pencil hover:bg-white'
                }`}
                style={{
                  borderRadius: activeSection === item.id ? '255px 15px 225px 15px / 15px 225px 15px 255px' : '8px',
                  boxShadow: activeSection === item.id ? '2px 2px 0px 0px #2d2d2d' : 'none'
                }}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}

            <div className="border-t-2 border-dashed border-pencil/30 mt-2 pt-3">
              <p className="font-hand text-sm text-pencil/60 text-center">
                Full Stack Developer & Tech Enthusiast ✏️
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};