import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonialsData = [
  { 
    name: "Sarah Williams", 
    quote: "\"Tripscop completely changed how I plan my trips. The AI suggestions were spot-on and the itinerary builder saved me hours of research!\"",
    rotationClass: "-rotate-[4deg] md:-rotate-[3deg] lg:-rotate-[5deg]"
  },
  { 
    name: "James Anderson", 
    quote: "\"I used to hate tracking prices to find the best deals. Now I let the assistant do everything and just book when it's cheapest. Highly recommended.\"",
    rotationClass: "rotate-0 md:translate-y-4"
  },
  { 
    name: "Emily Davis", 
    quote: "\"The most intuitive travel app I've ever used. Having all my bookings and activities perfectly organized in one single place is a total game changer.\"",
    rotationClass: "rotate-[4deg] md:rotate-[3deg] lg:rotate-[5deg]"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 md:py-36 px-6 md:px-10 bg-transparent w-full overflow-hidden">
      
      {/* Absolute Background Glow Container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-full max-w-[900px] h-[350px] md:h-[450px] pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-r from-orange-200/90 via-pink-200/80 to-peach-200/90 blur-[80px] md:blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-black text-center mb-16 md:mb-24">
          Testimonials
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 lg:gap-10 w-full px-2 sm:px-8 md:px-0">
          {testimonialsData.map((t, i) => (
            <div key={i} className="flex justify-center w-full">
              <TestimonialCard 
                name={t.name} 
                text={t.quote} 
                rotationClass={t.rotationClass} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
