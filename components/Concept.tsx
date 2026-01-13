import React from 'react';
import { Scissors, Sparkles, UserCheck } from 'lucide-react';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';
import { WHATSAPP_LINK } from '../constants';

const Concept: React.FC = () => {
  return (
    <section id="concept" className="py-24 bg-black border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-snug">
                Um salão pensado para mulheres que não abrem mão da <span className="text-gold italic">excelência</span>.
              </h2>
              <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                No Studio Dias, entendemos que seu cabelo é sua <span className="text-white font-bold">coroa</span>. Por isso, abandonamos o conceito de "salão comum" para criar um centro de beleza focado em resultados transformadores e saúde capilar real.
              </p>
              <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
                Nossa equipe é altamente treinada nas últimas tendências internacionais, garantindo que você receba um atendimento técnico impecável em um ambiente de puro relaxamento.
              </p>
              
              <div className="space-y-8 mb-10">
                {[
                  {
                    icon: <UserCheck className="w-6 h-6 text-black" />,
                    title: "Consultoria de Imagem",
                    desc: "Análise técnica que valoriza seus traços e sua beleza real através do visagismo."
                  },
                  {
                    icon: <Sparkles className="w-6 h-6 text-black" />,
                    title: "Produtos Internacionais",
                    desc: "Cuidado de luxo com marcas que são o padrão ouro da cosmética mundial."
                  },
                  {
                    icon: <Scissors className="w-6 h-6 text-black" />,
                    title: "Técnicas Exclusivas",
                    desc: "Mechas e cortes com acabamento refinado e transições perfeitamente naturais."
                  }
                ].map((feature, idx) => (
                  <FadeIn key={idx} delay={idx * 150}>
                    <div className="flex gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center transition-transform group-hover:scale-110">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-white mb-1 group-hover:text-gold transition-colors">{feature.title}</h3>
                        <p className="text-zinc-500">{feature.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <Button variant="outline" href={WHATSAPP_LINK} isExternal className="!border-gold/30 hover:!border-gold hover:!bg-gold hover:!text-black">
                Conhecer a Experiência Studio Dias
              </Button>
            </FadeIn>
          </div>

          {/* Visual Block */}
          <div className="order-1 lg:order-2 relative">
             <div className="grid grid-cols-2 gap-4">
                <FadeIn delay={200} direction="right">
                  <div className="relative group overflow-hidden rounded-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600&h=800" 
                      alt="Processo de mechas premium" 
                      className="mt-12 w-full h-80 object-cover grayscale opacity-80 hover:grayscale-0 hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/30 transition-all rounded-2xl m-2"></div>
                  </div>
                </FadeIn>
                <FadeIn delay={400} direction="up">
                  <div className="relative group overflow-hidden rounded-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=600&h=800" 
                      alt="Finalização de cabelo luxuosa" 
                      className="w-full h-80 object-cover grayscale-50 opacity-90 hover:grayscale-0 hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/30 transition-all rounded-2xl m-2"></div>
                  </div>
                </FadeIn>
             </div>
             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold rounded-full blur-[80px] -z-10 opacity-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Concept;