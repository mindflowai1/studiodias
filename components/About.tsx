
import React from 'react';
import { FadeIn } from './ui/FadeIn';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-zinc-950 border border-white/5 rounded-3xl p-8 md:p-16">
          
          <div className="w-full md:w-1/2">
            <FadeIn>
              <h2 className="font-serif text-4xl text-white mb-8">
                Um espaço 5 estrelas focado na sua melhor versão.
              </h2>
              <p className="text-zinc-400 mb-6 leading-relaxed text-lg">
                O Studio Dias nasceu com o propósito de elevar o padrão de beleza no Barreiro. Somos um salão com alto movimento, reconhecido pela excelência em cada serviço prestado.
              </p>
              <p className="text-zinc-500 mb-10 leading-relaxed">
                Aqui, cada detalhe — do aroma do café à precisão técnica das nossas escovas e pincéis — é pensado para que você se sinta única e saia com a satisfação que só uma equipe 5 estrelas pode proporcionar.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Equipe Especialista",
                  "Mechas de Luxo",
                  "Salão 5 Estrelas",
                  "Referência no Barreiro"
                ].map((tag, idx) => (
                  <span key={idx} className="bg-zinc-900 text-zinc-300 px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase border border-white/5 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="w-full md:w-1/2 relative">
             <FadeIn delay={200} direction="left">
               <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800&h=600" 
                    alt="Equipe Studio Dias em ação" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-[1.5s]" 
                  />
               </div>
               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 rounded-full blur-[40px] -z-10"></div>
             </FadeIn>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
