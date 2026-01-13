import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../constants';
import { FadeIn } from './ui/FadeIn';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-serif text-4xl text-white">Dúvidas Frequentes</h2>
            <div className="w-12 h-1 bg-white mx-auto mt-6 opacity-20"></div>
          </FadeIn>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div 
                className={`border border-white/5 rounded-2xl transition-all duration-500 ${openIndex === index ? 'bg-zinc-900 border-white/10 shadow-2xl scale-[1.02]' : 'bg-transparent hover:border-white/20'}`}
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggle(index)}
                >
                  <span className={`font-semibold text-lg ${openIndex === index ? 'text-white' : 'text-zinc-400'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="text-white" />
                  ) : (
                    <ChevronDown className="text-zinc-600" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-zinc-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;