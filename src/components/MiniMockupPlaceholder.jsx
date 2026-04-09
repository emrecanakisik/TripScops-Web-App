import React from 'react';

export default function MiniMockupPlaceholder({ index, image }) {
  return (
    <div className="w-full h-44 sm:h-52 mt-8 bg-gray-50 border-t border-gray-100 flex items-center justify-center relative overflow-hidden">
      {image ? (
        <img 
          src={image} 
          alt={`Feature mockup ${index + 1}`} 
          className="w-full h-full object-cover select-none pointer-events-none" 
          draggable="false"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium text-sm">
          UI Mockup {index + 1}
        </div>
      )}
    </div>
  );
}
