import React from 'react';

function AvatarPlaceholder() {
  return <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 border-2 border-white shadow-sm overflow-hidden"></div>;
}

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-1 mt-6">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-[18px] h-[18px] text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCard({ name, text, rotationClass }) {
  return (
    <div 
      className={`bg-white/95 backdrop-blur-sm rounded-[2rem] p-8 shadow-2xl relative z-10 w-full min-h-[250px]
        flex flex-col items-start cursor-pointer border border-white/60
        ${rotationClass} 
        hover:rotate-0 hover:-translate-y-4 hover:shadow-[0_45px_80px_-20px_rgba(0,0,0,0.2)] hover:z-20
        transition-all duration-500 ease-out will-change-transform
      `}
    >
      <AvatarPlaceholder />
      <h4 className="font-extrabold text-black text-lg mt-5 leading-tight">{name}</h4>
      <p className="text-gray-600 text-[14px] mt-3 leading-relaxed flex-grow">
        {text}
      </p>
      <StarRating count={5} />
    </div>
  );
}
