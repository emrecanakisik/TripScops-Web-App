import React from 'react';
import Navbar from './Navbar';
import HeroContent from './HeroContent';
import HeroPhone from './HeroPhone';

export default function HeroLayout() {
  return (
    <div className="w-full relative min-h-screen">
      {/* Hero Background Gradient Blobs */}
      {/* Sol üstteki buz mavisi aydınlatma */}
      <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] bg-[#CDE6FF] rounded-full blur-[100px] md:blur-[140px] opacity-100 pointer-events-none z-0"></div>
      {/* Sağ taraftaki (telefon arkası) şeftali/turuncu aydınlatma */}
      <div className="absolute top-[5%] right-[-10%] w-[70vw] h-[70vw] max-w-[1000px] max-h-[1000px] bg-[#FFDFCA] rounded-full blur-[100px] md:blur-[140px] opacity-100 pointer-events-none z-0"></div>

      {/* Main Content Container */}
      <div className="max-w-[1400px] mx-auto relative flex flex-col min-h-screen px-6 md:px-12 lg:px-16 z-10">
        <Navbar />
        <div className="flex-1 w-full flex flex-col lg:flex-row items-center sm:items-start lg:items-center justify-between gap-12 lg:gap-24">
          <div className="flex-1 w-full flex justify-end lg:pr-10">
            <HeroContent />
          </div>
          <div className="flex-1 w-full max-lg:pb-24">
            <HeroPhone />
          </div>
        </div>
      </div>
    </div>
  );
}
