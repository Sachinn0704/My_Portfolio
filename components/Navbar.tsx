
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Simple section detection
      const sections = ['home', 'about', 'skills', 'projects', 'coding-profiles', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' '));
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Coding Profiles', href: 'https://github.com/SachinBhosagi', isExternal: true },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'glass py-4 shadow-2xl shadow-charcoal/20' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-center items-center relative">
        <a href="#home" className="absolute left-8 text-2xl font-black text-teal tracking-tighter group hidden xl:block">
          SACHIN B<span className="text-white group-hover:text-teal transition-colors">.</span>
        </a>

        {/* Navigation Items - Aligned based on user's image */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              target={link.isExternal ? "_blank" : "_self"}
              className={`text-sm font-semibold tracking-tight transition-all relative pb-2 group ${
                activeSection === link.name ? 'text-white' : 'text-slate-400 hover:text-teal'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-teal transition-all duration-300 ${
                activeSection === link.name ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
          ))}
        </div>

        {/* Right side socials */}
        <div className="absolute right-8 hidden lg:flex items-center gap-6 border-l pl-10 border-white/10">
          <a href="https://github.com/SachinBhosagi" target="_blank" className="text-slate-400 hover:text-white transition-all hover:scale-125">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/SachinBhosagi" target="_blank" className="text-slate-400 hover:text-teal transition-all hover:scale-125">
            <Linkedin size={18} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex justify-between w-full">
           <a href="#home" className="text-2xl font-black text-teal tracking-tighter">SACHIN B.</a>
           <button className="text-white p-3 glass rounded-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass shadow-2xl p-10 flex flex-col gap-8 animate-in slide-in-from-top-4 duration-300">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-black text-white hover:text-teal transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-8 pt-8 border-t border-white/5">
            <a href="https://github.com/SachinBhosagi" target="_blank" className="text-slate-400"><Github size={32} /></a>
            <a href="https://linkedin.com/in/SachinBhosagi" target="_blank" className="text-slate-400"><Linkedin size={32} /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
