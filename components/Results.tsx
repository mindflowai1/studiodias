import React from 'react';
import { Button } from './ui/Button';
import { WHATSAPP_LINK } from '../constants';
import { CheckCircle } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const Results: React.FC = () => {
  const categories = ["Loiros e Iluminados", "Cortes Modernos", "Saúde do Fio", "Brilho Espelhado"];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden border-y border-gold/10">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                Transformações <span className="text-gold">Memoráveis</span> no Barreiro.
              </h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Nosso Instagram é a prova da nossa paixão. Todos os dias, dezenas de mulheres saem do Studio Dias com a autoestima renovada e fios impecáveis.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {categories.map((cat, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-zinc-900/50 p-4 rounded-xl border border-gold/10 hover:border-gold/30 transition-all group">
                    <CheckCircle className="text-gold w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-zinc-300 group-hover:text-white transition-colors">{cat}</span>
                  </div>
                ))}
              </div>

              <Button href={WHATSAPP_LINK} isExternal variant="gold" className="w-full sm:w-auto !py-5">
                Quero meu horário exclusivo
              </Button>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-4">
               <FadeIn delay={200} direction="up">
                  <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=400&h=500" alt="Cabelo loiro perfeito" className="rounded-2xl brightness-75 hover:brightness-100 hover:shadow-gold transition-all duration-700 w-full h-auto object-cover border border-gold/10" />
               </FadeIn>
               <FadeIn delay={400} direction="up">
                  <img src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=400&h=300" alt="Textura de cabelo saudável" className="rounded-2xl brightness-75 hover:brightness-100 hover:shadow-gold transition-all duration-700 w-full h-auto object-cover border border-gold/10" />
               </FadeIn>
             </div>
             <div className="space-y-4 pt-8">
               <FadeIn delay={300} direction="up">
                  <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=400&h=300" alt="Lavagem capilar premium" className="rounded-2xl brightness-75 hover:brightness-100 hover:shadow-gold transition-all duration-700 w-full h-auto object-cover border border-gold/10" />
               </FadeIn>
               <FadeIn delay={500} direction="up">
                  <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=400&h=500" alt="Finalização Studio Dias" className="rounded-2xl brightness-75 hover:brightness-100 hover:shadow-gold transition-all duration-700 w-full h-auto object-cover border border-gold/10" />
               </FadeIn>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Results;