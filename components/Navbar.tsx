import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Salão', href: '#concept' },
    { name: 'Serviços', href: '#treatments' },
    { name: 'Metodologia', href: '#process' },
    { name: 'Sobre', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  const logoUrl = "https://ptotpfdlgsohxmsrfczs.supabase.co/storage/v1/object/public/bucket/logo%20dias.png";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-lg border-b border-gold/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3 md:gap-4 group">
              <img 
                src={logoUrl} 
                alt="STUDIO DIAS" 
                className={`w-auto transition-all duration-500 group-hover:scale-105 ${isScrolled ? 'h-10 grayscale invert brightness-150' : 'h-16 invert brightness-125'}`} 
              />
              <div className={`flex flex-col transition-all duration-300 ${isScrolled ? 'opacity-90 scale-95' : 'opacity-100'}`}>
                <span className="font-serif text-xl md:text-2xl font-semibold text-white tracking-tight leading-none uppercase">
                  Studio <span className="text-gold">Dias</span>
                </span>
                <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mt-1">Barreiro — Belo Horizonte</span>
              </div>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${isScrolled ? 'text-zinc-400' : 'text-zinc-300'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="bg-gradient-to-r from-gold-dark to-gold text-black px-6 py-2 rounded-full text-sm font-bold hover:brightness-110 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            >
              Agendar Horário
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gold transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-gold/10 absolute w-full shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-zinc-300 hover:text-gold hover:bg-zinc-900"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              className="block w-full text-center mt-4 px-3 py-4 rounded-md text-base font-bold bg-gradient-gold text-black"
            >
              Agendar Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;