import React from 'react';

export default function OverlappingUICardLeft() {
  return (
    <div className="w-[280px] bg-white/90 backdrop-blur-2xl rounded-[28px] p-5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-white relative">
      <h4 className="font-extrabold text-gray-900 mb-5 text-[15px]">Your personalized selection</h4>
      
      <div className="flex flex-col gap-4">
         {/* Item 1 */}
         <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
               <div className="w-12 h-12 bg-[#F3F4F6] rounded-xl"></div>
               <div className="flex flex-col justify-center">
                 <span className="text-[13px] font-bold text-gray-900 leading-tight mb-1">Eiffel Tower</span>
                 <span className="text-[11px] text-gray-500 font-medium">Guided Tour</span>
               </div>
            </div>
            <div className="flex flex-col items-end justify-center">
               <span className="font-extrabold text-gray-900 text-sm mb-1.5">$50</span>
               <button className="text-[9px] bg-[#FF7E67] text-white px-2.5 py-1.5 rounded-lg font-bold hover:bg-[#ff6f54] transition-colors shadow-sm">Book Now</button>
            </div>
         </div>

         {/* Item 2 */}
         <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex gap-3 items-center">
               <div className="w-12 h-12 bg-[#F3F4F6] rounded-xl"></div>
               <div className="flex flex-col justify-center">
                 <span className="text-[13px] font-bold text-gray-900 leading-tight mb-1">Louvre Museum</span>
                 <span className="text-[11px] text-gray-500 font-medium">Entry Ticket</span>
               </div>
            </div>
            <div className="flex flex-col items-end justify-center">
               <span className="font-extrabold text-gray-900 text-sm mb-1.5">$35</span>
               <button className="text-[9px] bg-[#FF7E67] text-white px-2.5 py-1.5 rounded-lg font-bold hover:bg-[#ff6f54] transition-colors shadow-sm">Book Now</button>
            </div>
         </div>
      </div>
    </div>
  );
}
