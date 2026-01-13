
import React from 'react';
import { Button } from './ui/Button';
import { WHATSAPP_LINK } from '../constants';
import { MapPin, Instagram, Navigation, Clock, Phone } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-zinc-900 rounded-[3rem] shadow-2xl overflow-hidden border border-gold/10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Coluna de Texto e Info */}
              <div className="p-10 lg:p-20 flex flex-col justify-center bg-gradient-to-br from-black to-zinc-900">
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
                  Sua jornada de <br/>
                  <span className="text-gradient-gold italic">luxo</span> começa aqui.
                </h2>
                
                <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                  Localizado estrategicamente no coração do Barreiro, o Studio Dias oferece o ambiente perfeito para sua transformação.
                </p>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mr-5 transition-all group-hover:bg-gold group-hover:text-black">
                      <Clock size={20} className="text-gold group-hover:text-black" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Atendimento</p>
                      <p className="text-zinc-200 font-medium">Terça a Sábado — 09h às 19h</p>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mr-5 transition-all group-hover:bg-gold group-hover:text-black">
                      <Phone size={20} className="text-gold group-hover:text-black" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Contato Direto</p>
                      <p className="text-zinc-200 font-medium">(31) 99981-2371</p>
                    </div>
                  </div>

                  <a 
                    href="https://instagram.com/studiodias_estetica" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mr-5 transition-all group-hover:bg-gold group-hover:text-black">
                      <Instagram size={20} className="text-gold group-hover:text-black" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Social</p>
                      <p className="text-zinc-200 font-medium group-hover:text-gold transition-colors">@studiodias_estetica</p>
                    </div>
                  </a>
                </div>

                <Button variant="gold" href={WHATSAPP_LINK} isExternal className="!py-5 !px-10 text-lg">
                  Agendar via WhatsApp
                </Button>
              </div>

              {/* Coluna do Mapa Premium */}
              <div className="relative min-h-[500px] lg:min-h-full overflow-hidden group">
                {/* Iframe do Mapa com filtro suave */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.0469145657375!2d-44.0205!3d-19.9725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU4JzIxLjAiUyA0NMKwMDEnMTMuOCJX!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale-[0.3] contrast-[1.1] brightness-[0.8] hover:grayscale-0 transition-all duration-1000"
                  title="Localização Studio Dias - Barreiro"
                ></iframe>

                {/* Overlays de Design */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 border-[12px] border-zinc-900 pointer-events-none"></div>
                
                {/* Card de Endereço Flutuante */}
                <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 lg:right-auto lg:w-80 bg-zinc-950/90 backdrop-blur-xl p-6 rounded-2xl border border-gold/30 shadow-gold group-hover:scale-105 transition-transform duration-500">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gold/20 rounded-lg mr-3">
                      <MapPin size={18} className="text-gold" />
                    </div>
                    <span className="text-gold font-bold text-[10px] uppercase tracking-widest">Localização Privilegiada</span>
                  </div>
                  <p className="text-white font-serif text-lg mb-4">
                    Barreiro, Belo Horizonte <br/>
                    <span className="text-sm font-sans text-zinc-400 font-normal">Minas Gerais — Brasil</span>
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/YourMapLink" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white hover:text-gold transition-colors"
                  >
                    <Navigation size={14} className="mr-2" />
                    Abrir no GPS
                  </a>
                </div>

                {/* Badge de Destaque no topo do mapa */}
                <div className="absolute top-8 right-8 bg-gold text-black px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-tighter shadow-xl">
                  Salão 5 Estrelas
                </div>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
