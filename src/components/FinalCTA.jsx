import React from 'react';

export default function FinalCTA() {
  return (
    <section id="cta" className="py-24 px-6 md:px-10 bg-transparent w-full">
      <div className="max-w-6xl mx-auto">
        
        {/* Banner Container (Image Placeholder) */}
        <div 
          className="relative w-full rounded-[2.5rem] bg-gray-900 bg-cover bg-center overflow-hidden flex flex-col items-center justify-center py-24 px-6 md:px-16 shadow-2xl"
          style={{ backgroundImage: "url('FINAL_CTA_IMAGE_PLACEHOLDER.jpg')" }}
        >
          
          {/* Subtle Dark Overlay (Metinlerin resmi eklediğinizde okunabilir kalması için) */}
          <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none"></div>

          {/* Dotted pattern fallback so there's some texture even when image fails */}
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

          <div className="relative z-10 w-full flex flex-col items-center text-center">
            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 leading-tight max-w-2xl mx-auto tracking-tight drop-shadow-md">
              Your next adventure starts here.
            </h2>
            
            {/* Subtext */}
            <p className="text-blue-100 text-lg md:text-xl font-medium mb-12 max-w-lg mx-auto opacity-90">
              Start planning your trip in under 30 seconds.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white text-black font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all outline-none">
                Download App
              </button>
              
              <button className="w-full sm:w-auto bg-transparent border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all outline-none">
                Learn More
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
