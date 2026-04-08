import React from 'react';
import Navbar from './Navbar';
import HeroContent from './HeroContent';
import HeroPhone from './HeroPhone';

export default function HeroLayout() {
  return (
    <div className="w-full bg-transparent">
      <div className="max-w-[1400px] mx-auto relative overflow-hidden flex flex-col min-h-screen px-6 md:px-12 lg:px-16">
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
