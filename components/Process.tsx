import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { FadeIn } from './ui/FadeIn';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              A jornada para o seu cabelo dos sonhos.
            </h2>
            <p className="text-gold font-bold tracking-widest text-xs uppercase">
              Metodologia Studio Dias Hair & Care
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gold/10 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {PROCESS_STEPS.map((step, index) => (
              <FadeIn key={index} delay={index * 200} className="relative z-10">
                <div className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-zinc-900 border border-gold/30 text-gold font-serif text-xl font-bold flex items-center justify-center mb-6 shadow-gold transition-all duration-500 group-hover:bg-gradient-gold group-hover:text-black group-hover:scale-110">
                    {step.number}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-zinc-100 mb-3 group-hover:text-white">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <FadeIn delay={600}>
            <p className="text-lg font-serif italic text-zinc-600">
              "Aqui, a beleza técnica e a saúde dos fios são tratadas como <span className="text-gold">patrimônio</span>."
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Process;