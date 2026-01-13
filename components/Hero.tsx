import React from 'react';
import { MapPin, ArrowRight, Star } from 'lucide-react';
import { Button } from './ui/Button';
import { WHATSAPP_LINK } from '../constants';
import { FadeIn } from './ui/FadeIn';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-32 overflow-hidden bg-surface">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-bl from-gold/10 to-transparent -z-10 opacity-70"></div>
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Conteúdo de Texto */}
          <div className="lg:col-span-6 relative z-10">
            <FadeIn>
              <div className="inline-flex items-center space-x-2 bg-zinc-900/80 backdrop-blur-md text-gold px-4 py-2 rounded-full mb-8 border border-gold/20 shadow-gold">
                <div className="flex text-gold mr-2">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em]">O Salão 5 Estrelas do Barreiro</span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl text-white leading-[1] mb-8">
                A Arte de ser <br />
                <span className="italic text-gradient-gold font-normal">Inesquecível.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-zinc-400 mb-10 leading-relaxed max-w-xl">
                Especialistas em mechas de luxo e visagismo. Transformamos cabelos em <span className="text-white font-bold">obras de arte</span> com o padrão de excelência que você merece.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-12">
                {[
                  "Loiros e Iluminados de Elite",
                  "Cronograma Capilar Premium",
                  "Experiência 5 Estrelas BH",
                  "Consultoria de Imagem Personalizada"
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-zinc-300 group">
                    <div className="w-6 h-6 rounded-full bg-zinc-900 border border-gold/30 flex items-center justify-center mr-3 group-hover:bg-gold transition-all duration-300">
                      <ArrowRight size={14} className="text-gold group-hover:text-black transition-colors" />
                    </div>
                    <span className="text-sm font-medium tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Button variant="gold" href={WHATSAPP_LINK} isExternal className="!px-12 !py-5 text-lg">
                  Agendar Transformação
                </Button>
                <Button variant="secondary" href="#treatments" className="!bg-transparent border-zinc-800 hover:border-gold hover:text-gold !px-10">
                  Ver Serviços
                </Button>
              </div>

              <div className="flex items-center text-zinc-500 text-sm">
                <div className="w-8 h-px bg-gold/40 mr-3"></div>
                <MapPin size={16} className="text-gold mr-2" />
                <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-zinc-400">Referência em Belo Horizonte</span>
              </div>
            </FadeIn>
          </div>

          {/* Área da Imagem de Alto Impacto */}
          <div className="lg:col-span-6 relative">
            <FadeIn direction="right" delay={300}>
              <div className="relative group">
                {/* Moldura Decorativa Dourada */}
                <div className="absolute -inset-4 border border-gold/10 rounded-[3rem] -z-10 group-hover:border-gold/20 transition-colors duration-700"></div>
                
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(212,175,55,0.15)] aspect-[4/5] lg:h-[700px] border border-gold/20">
                  <img 
                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=90&w=1000&h=1200" 
                    alt="Modelo com cabelo de luxo Studio Dias"
                    className="w-full h-full object-cover brightness-[0.85] contrast-[1.1] hover:scale-105 transition-transform duration-[2s] ease-out"
                  />
                  {/* Overlay de Gradiente Dramático */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Badge de Destaque Flutuante */}
                  <div className="absolute bottom-10 left-10 right-10 p-8 rounded-3xl bg-black/60 backdrop-blur-xl border border-gold/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gold font-bold text-xs uppercase tracking-widest mb-1">Qualidade Ouro</p>
                        <p className="text-2xl font-serif text-white">Mechas de Luxo</p>
                      </div>
                      <div className="h-12 w-px bg-gold/20 mx-4"></div>
                      <div className="text-right">
                        <p className="text-white font-bold text-xl">5.0</p>
                        <div className="flex text-gold">
                          <Star size={10} fill="currentColor" />
                          <Star size={10} fill="currentColor" />
                          <Star size={10} fill="currentColor" />
                          <Star size={10} fill="currentColor" />
                          <Star size={10} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Elementos Orbitais */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
        .shadow-gold {
          box-shadow: 0 0 30px rgba(212, 175, 55, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Hero;