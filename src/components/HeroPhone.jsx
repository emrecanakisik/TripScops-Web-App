import React from 'react';
import heroImage from '../assets/hero1.webp';

export default function HeroPhone() {
  return (
    <div className="relative w-full max-w-md mx-auto flex justify-center lg:justify-end mt-10 md:mt-0">
      <img 
        src={heroImage} 
        alt="Tripscops App UI Preview" 
        className="w-[320px] sm:w-[380px] md:w-[420px] lg:w-[460px] h-auto object-contain drop-shadow-[0_25px_65px_rgba(0,0,0,0.25)] select-none pointer-events-none"
        draggable="false"
      />
    </div>
  );
}
