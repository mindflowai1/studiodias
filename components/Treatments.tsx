import React from 'react';
import { TREATMENTS, WHATSAPP_LINK } from '../constants';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';

const Treatments: React.FC = () => {
  return (
    <section id="treatments" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Tratamentos que o Studio Dias domina — com protocolo personalizado.
            </h2>
            <p className="text-zinc-500 text-lg">
              Cada tratamento é indicado após avaliação detalhada. Em muitos casos, a combinação inteligente de técnicas gera resultados mais naturais, duradouros e sofisticados.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {TREATMENTS.map((treatment, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div 
                className="group bg-zinc-950 rounded-2xl p-8 border border-white/5 hover:border-white/20 shadow-soft transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-xl font-semibold text-zinc-100 mb-3 group-hover:text-white transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed text-sm">
                    {treatment.description}
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Protocolo Exclusivo</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="text-center">
          <FadeIn delay={400}>
            <Button href={WHATSAPP_LINK} isExternal variant="primary">
              Escolher o tratamento ideal
            </Button>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default Treatments;