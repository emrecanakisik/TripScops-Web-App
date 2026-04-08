import React from 'react';
import IPhoneMockup from './iPhoneMockup';
import OverlappingUICardLeft from './OverlappingUICard_Left';
import OverlappingUICardRightBackground from './OverlappingUICard_Right_Background';

export default function AssistantVisualColumn() {
  return (
    <div className="relative w-full max-w-[700px] h-[650px] lg:h-[700px] flex items-center justify-center">
       {/* Background right card (z-0) */}
       <div className="absolute right-0 md:right-4 lg:right-8 xl:-right-6 top-[10%] sm:top-[15%] lg:top-[20%] z-0">
         <OverlappingUICardRightBackground />
       </div>
       
       {/* Center iPhone Model (z-10) */}
       <div className="relative z-10 flex">
         <IPhoneMockup />
       </div>

       {/* Front left card (z-20) */}
       <div className="absolute left-0 md:left-4 lg:left-8 xl:-left-6 bottom-[10%] sm:bottom-[15%] lg:bottom-[20%] z-20">
         <OverlappingUICardLeft />
       </div>
    </div>
  );
}
