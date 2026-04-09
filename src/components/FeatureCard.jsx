import React from 'react';
import MiniMockupPlaceholder from './MiniMockupPlaceholder';

const iconConfig = {
  0: {
    bg: 'bg-gradient-to-br from-blue-100 to-orange-100',
    icon: (
      <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  1: {
    bg: 'bg-orange-100',
    icon: (
      <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    )
  },
  2: {
    bg: 'bg-gradient-to-br from-blue-100 to-purple-100',
    icon: (
      <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
         <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  }
};

export default function FeatureCard({ title, description, index, active, image }) {
  const config = iconConfig[index] || iconConfig[0];

  return (
    <div className={`flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border ${active ? 'border-orange-200' : 'border-transparent'}`}>
      
      <div className="pt-8 px-8 flex-1">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${config.bg}`}>
          {config.icon}
        </div>
        
        <h3 className="text-xl font-bold text-black mt-6 leading-tight">
          {title}
        </h3>
        
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
          {description}
        </p>
      </div>

      <MiniMockupPlaceholder index={index} image={image} />
    </div>
  );
}
