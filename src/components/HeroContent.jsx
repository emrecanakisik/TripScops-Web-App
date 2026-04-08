import React from 'react';

function AppStoreButtonPlaceholder() {
  return (
    <a href="#appstore" className="bg-black text-white flex items-center gap-3 px-6 py-3 rounded-xl hover:scale-105 transition-transform shadow-lg">
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
      </svg>
      <div className="text-left">
        <div className="text-[10px] font-medium leading-none opacity-90 mb-0.5">Download on the</div>
        <div className="text-base font-semibold leading-none">App Store</div>
      </div>
    </a>
  );
}

export default function HeroContent() {
  return (
    <div className="flex flex-col items-start w-full">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black leading-[1.05] tracking-tight mb-6 mt-12 md:mt-24 lg:mt-32">
        Plan smarter.<br />Travel better.
      </h1>
      <p className="text-xl md:text-[22px] text-gray-600 max-w-lg leading-relaxed mb-10">
        Create complete travel plans in seconds with AI — from discovery to booking.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-16 w-full sm:w-auto">
        <AppStoreButtonPlaceholder />
        
        <a href="#video" className="flex items-center gap-3 group text-black font-semibold text-lg hover:opacity-80 transition-opacity">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-105 transition-transform">
            <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5V19L19 12L8 5Z" />
            </svg>
          </div>
          See how it works
        </a>
      </div>

      <div className="flex items-center gap-2.5 text-black font-medium pb-24 md:pb-32 lg:pb-40">
        <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="text-sm">Trusted by 10,000+ travelers</span>
      </div>
    </div>
  );
}
