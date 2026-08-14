import React from 'react';
import logoImg from '../assets/images/logo.jpg';

interface LogoProps {
  className?: string;
  imgClassName?: string;
  variant?: 'light' | 'dark'; // 'light' for light headers, 'dark' for dark backgrounds
}

export const Logo: React.FC<LogoProps> = ({ className = '', imgClassName = '', variant = 'light' }) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoImg}
        alt="Elite Car Care"
        className={`h-14 sm:h-16 md:h-[68px] w-auto object-contain transition-all duration-200 ${
          variant === 'dark'
            ? 'bg-white/95 p-1 rounded-lg shadow-xs border border-camel-400/30'
            : 'rounded-md'
        } ${imgClassName}`}
      />
    </div>
  );
};


