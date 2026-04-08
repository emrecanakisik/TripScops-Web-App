import React from 'react';

export default function OverlappingUICardRightBackground() {
  return (
    <div className="w-[260px] bg-white rounded-[28px] p-6 shadow-xl border border-gray-100/50 opacity-95">
      <div className="flex items-center gap-3 mb-6">
         <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
         </div>
         <h4 className="font-extrabold text-gray-900 text-[15px]">Sample itinerary</h4>
      </div>

      <div className="relative pl-5 border-l-[2px] border-gray-100 space-y-7 py-3">
         {/* Day 1 */}
         <div className="relative">
            <div className="absolute w-[14px] h-[14px] bg-white border-[3px] border-orange-400 rounded-full -left-[28px] top-0 shadow-sm"></div>
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">Day 1</span>
            <div className="w-full h-10 mt-3 bg-[#F9FAFB] rounded-xl border border-gray-100 flex items-center px-4">
               <div className="w-1/2 h-1.5 bg-gray-200 rounded-full"></div>
            </div>
         </div>
         {/* Day 2 */}
         <div className="relative">
            <div className="absolute w-[14px] h-[14px] bg-white border-[3px] border-gray-300 rounded-full -left-[28px] top-0 shadow-sm"></div>
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">Day 2</span>
            <div className="w-full h-10 mt-3 bg-[#F9FAFB] rounded-xl border border-gray-100 flex items-center px-4">
               <div className="w-2/3 h-1.5 bg-gray-200 rounded-full"></div>
            </div>
            <div className="w-full h-10 mt-2 bg-[#F9FAFB] rounded-xl border border-gray-100 flex items-center px-4">
               <div className="w-1/3 h-1.5 bg-gray-200 rounded-full"></div>
            </div>
         </div>
      </div>
    </div>
  );
}
