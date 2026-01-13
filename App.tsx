import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Treatments from './components/Treatments';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Results from './components/Results';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';

const Footer: React.FC = () => {
  const logoUrl = "https://ptotpfdlgsohxmsrfczs.supabase.co/storage/v1/object/public/bucket/logo%20dias.png";
  
  return (
    <footer className="bg-black border-t border-gold/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-8 group cursor-default">
          <img 
            src={logoUrl} 
            alt="STUDIO DIAS" 
            className="h-20 w-auto invert grayscale opacity-60 group-hover:opacity-100 group-hover:brightness-125 transition-all duration-700" 
          />
          <div className="flex flex-col text-left">
            <span className="font-serif text-2xl font-semibold text-white tracking-tight leading-none group-hover:text-gold transition-colors uppercase">
              Studio <span className="text-gold">Dias</span>
            </span>
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-bold mt-1">Barreiro — Belo Horizonte</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-zinc-500 text-xs uppercase tracking-[0.2em] font-bold">
            <a href="#treatments" className="hover:text-gold transition-colors">Serviços</a>
            <a href="#about" className="hover:text-gold transition-colors">Nosso Salão</a>
            <a href="#process" className="hover:text-gold transition-colors">Metodologia</a>
            <a href="#faq" className="hover:text-gold transition-colors">Dúvidas</a>
        </div>
        <div className="w-16 h-px bg-gold/20 mb-8"></div>
        <p className="text-zinc-700 text-[10px] text-center uppercase tracking-[0.3em] max-w-md leading-loose">
          &copy; {new Date().getFullYear()} Studio Dias — Hair & Care. <br/>
          Belo Horizonte, Barreiro — MG. <br/>
          Experiência <span className="text-gold">Premium</span> em cada detalhe.
        </p>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="font-sans text-zinc-300 bg-black">
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Treatments />
        <Process />
        <Testimonials />
        <Results />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;