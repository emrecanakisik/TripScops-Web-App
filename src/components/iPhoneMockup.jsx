import React from 'react';

export default function IPhoneMockup() {
  return (
    <div className="w-[300px] lg:w-[320px] h-[600px] lg:h-[650px] bg-[#1a1a1c] rounded-[50px] p-2.5 shadow-2xl relative border-[1px] border-gray-800">
      <div className="w-full h-full bg-[#fdfdfd] rounded-[40px] overflow-hidden relative">
         {/* Dynamic Island */}
         <div className="absolute top-2 inset-x-0 flex justify-center z-20">
            <div className="w-[100px] h-7 bg-black rounded-full"></div>
         </div>

         {/* Content inside phone */}
         <div className="pt-16 px-5 pb-6 flex flex-col h-full bg-white relative">
            <div className="text-center mb-6">
               <h4 className="font-bold text-lg text-black">Itinerary</h4>
               <p className="text-[11px] text-gray-400 font-medium mt-1">Aug 14 - Aug 21</p>
            </div>

            {/* Example 'Itinerary review' card */}
            <div className="bg-[#f2f5fd] rounded-2xl p-4 mb-5 border border-blue-50/50 shadow-sm relative overflow-hidden">
               <div className="flex justify-between items-center mb-3">
                 <span className="font-bold text-sm text-gray-900">Paris Getaway</span>
                 <span className="text-[10px] bg-white py-1 px-2 rounded-lg font-bold border border-gray-100 text-gray-600 shadow-sm">Review</span>
               </div>
               <div className="w-full h-1.5 bg-gray-200/60 rounded-full mb-2"></div>
               <div className="w-2/3 h-1.5 bg-gray-200/60 rounded-full"></div>
            </div>

            {/* Found better trips card */}
            <div className="bg-[#FFF4E6] rounded-2xl p-4 border border-orange-100 shadow-sm mb-4">
               <div className="flex items-center gap-2 mb-2">
                 <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-orange-100">
                    <span className="text-orange-500 text-xs flex">✨</span>
                 </div>
                 <span className="font-extrabold text-[13px] text-gray-900">Found better trips</span>
               </div>
               <p className="text-[11px] text-gray-600 font-medium mb-4">AI found a cheaper flight on Aug 15.</p>
               <div className="bg-white rounded-[10px] py-2 flex justify-center shadow-sm cursor-pointer border border-gray-50 hover:shadow-md transition-shadow">
                  <span className="text-[11px] font-bold text-gray-800">Update Itinerary</span>
               </div>
            </div>
            
            {/* Map View Bottom Block */}
            <div className="mt-auto bg-[#EBF0FF] w-full h-[150px] rounded-[24px] border border-[#d2dcf5] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#a3b8f5 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                <div className="bg-white px-3 py-1.5 rounded-full shadow-sm text-[11px] font-bold text-blue-500 z-10 border border-blue-100">Map View</div>
            </div>
         </div>
      </div>
    </div>
  );
}
