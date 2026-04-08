import React from 'react';

export default function StepItem({ index, title, description }) {
  return (
    <div className="flex flex-col text-left w-full h-full justify-start">
      {/* Visual Box with Mockup Placeholder */}
      <div className="relative w-full h-48 md:h-56 bg-[#EBF0FF] rounded-3xl flex items-center justify-center shadow-sm">
        
        {/* Number Badge (Overlap) */}
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#FF7E67] text-white font-extrabold text-xl flex items-center justify-center rounded-[14px] shadow-md z-20">
          {index + 1}
        </div>

        {/* Mockup internal text */}
        <div className="text-gray-400 font-medium text-sm">
          Image Placeholder
        </div>
      </div>

      {/* Text Details */}
      <h3 className="text-xl md:text-2xl font-bold mt-8 text-black leading-tight">
        {title}
      </h3>
      <p className="text-gray-600 text-base leading-relaxed mt-3 pr-2">
        {description}
      </p>
    </div>
  );
}
