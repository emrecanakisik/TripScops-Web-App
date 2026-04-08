import React from 'react';

export default function MiniMockupPlaceholder({ index }) {
  return (
    <div className="w-full h-44 sm:h-52 mt-8 bg-gray-50 border-t border-gray-100 flex items-center justify-center relative">
      <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium text-sm">
        UI Mockup {index + 1}
      </div>
    </div>
  );
}
