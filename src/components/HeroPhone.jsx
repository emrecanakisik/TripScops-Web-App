import React from 'react';

export default function HeroPhone() {
  return (
    <div className="relative w-full max-w-md mx-auto flex justify-center lg:justify-end mt-10 md:mt-0">
      {/* Container with rotate and 3d effect */}
      <div className="relative w-[280px] h-[580px] sm:w-[320px] sm:h-[650px] md:w-[360px] md:h-[720px] bg-white rounded-[3rem] shadow-[0_25px_65px_-5px_rgba(0,0,0,0.3)] -rotate-[8deg] border-[12px] border-white overflow-hidden transform hover:-rotate-[4deg] transition-transform duration-500 z-10">
        
        {/* Placeholder for the actual image. Added src="" for user to fill later. */}
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <p className="text-gray-400 font-medium">Image Placeholder</p>
        </div>

        <img 
          src="" 
          alt="App UI mockup" 
          className="absolute inset-0 w-full h-full object-cover z-10 hidden" 
          id="hero-phone-image"
        />

        {/* Dynamic Island Notch */}
        <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-20 mt-2">
          <div className="w-24 bg-black h-7 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
