import React from 'react';

export default function StepItem({ index, title, description, image }) {
  return (
    <div className="flex flex-col text-left w-full h-full justify-start">
      {/* Wrapper for badge + image box */}
      <div className="relative">
        {/* Number Badge (Overlap — sits outside overflow-hidden) */}
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#FF7E67] text-white font-extrabold text-xl flex items-center justify-center rounded-[14px] shadow-md z-30">
          {index + 1}
        </div>

        {/* Visual Box */}
        <div className="w-full h-48 md:h-56 bg-[#EBF0FF] rounded-3xl flex items-center justify-center shadow-sm overflow-hidden">
          {/* Step Image */}
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover select-none pointer-events-none" 
              draggable="false"
            />
          ) : (
            <div className="text-gray-400 font-medium text-sm">Image Placeholder</div>
          )}
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
