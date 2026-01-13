import React from 'react';
import { Quote, Star } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-5"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="flex justify-center gap-1 mb-8">
             {[...Array(5)].map((_, i) => (
               <Star key={i} size={20} className="text-gold" fill="currentColor" />
             ))}
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-12">
            Autoestima é quando o espelho reflete <span className="text-gold">verdade</span>.
          </h2>
          
          <div className="bg-zinc-900/40 p-12 rounded-3xl border border-gold/10 relative backdrop-blur-sm shadow-gold">
            <Quote className="absolute top-6 left-6 text-gold/20 w-16 h-16 -z-10" />
            
            <p className="text-xl md:text-3xl text-zinc-200 font-serif leading-relaxed italic mb-8">
              "No Studio Dias, a técnica é excelente, mas o que me ganha é o olhar deles. Eles não fazem um loiro padrão, eles fazem o <span className="text-white border-b border-gold/50">meu</span> loiro."
            </p>
            
            <div className="w-16 h-px bg-gold/30 mx-auto rounded-full mb-6"></div>
            
            <p className="text-gold font-bold tracking-widest text-xs uppercase opacity-80">
              O Salão 5 Estrelas favorito do Barreiro.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Testimonials;