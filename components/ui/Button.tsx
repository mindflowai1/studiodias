import React from 'react';
import { WHATSAPP_LINK } from '../../constants';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  className?: string;
  onClick?: () => void;
  href?: string;
  isExternal?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  href,
  isExternal = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 transform hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-white text-black hover:bg-zinc-200 shadow-xl",
    secondary: "bg-zinc-900 text-white border border-zinc-800 hover:border-zinc-600 shadow-sm",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black",
    gold: "bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:brightness-110"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : ""}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export const WhatsAppButton: React.FC<{text?: string, className?: string}> = ({ text = "Agendar pelo WhatsApp", className = "" }) => (
  <Button href={WHATSAPP_LINK} isExternal variant="gold" className={className}>
    <span className="mr-2">💬</span> {text}
  </Button>
);