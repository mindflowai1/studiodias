import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../../constants';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] group flex items-center"
      aria-label="Agendar no Studio Dias via WhatsApp"
    >
      {/* Tooltip Label */}
      <span className="mr-3 bg-zinc-900 text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-gold border border-gold/20 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none hidden md:block">
        Agendar Horário
      </span>
      
      {/* Button Circle */}
      <div className="bg-gradient-gold text-black p-4 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:brightness-110 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center">
        <MessageCircle size={28} className="group-hover:rotate-12 transition-transform duration-300" />
      </div>
      
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-gold opacity-20 animate-ping -z-10 group-hover:hidden"></span>
    </a>
  );
};