import React from 'react';
import AssistantTextColumn from './AssistantTextColumn';
import AssistantVisualColumn from './AssistantVisualColumn';

export default function AIAssistantSection() {
  return (
    <section id="ai-assistant-detailed" className="relative w-full py-24 md:py-32 bg-transparent">
      {/* Background Blobs (Premium Edge Radial Effect) */}
      <div className="absolute top-[40%] left-[5%] md:left-[10%] -translate-y-1/2 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-[#CDE6FF] rounded-full blur-[80px] md:blur-[120px] opacity-100 pointer-events-none z-0"></div>
      <div className="absolute top-[60%] right-[-5%] md:right-[5%] -translate-y-1/2 w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] bg-[#FFDFCA] rounded-full blur-[80px] md:blur-[120px] opacity-100 pointer-events-none z-0"></div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center relative z-10 w-full gap-16 lg:gap-4">
        {/* Left text column: 35-40% width */}
        <div className="w-full lg:w-[40%] text-left flex justify-center lg:justify-start">
          <AssistantTextColumn />
        </div>
        
        {/* Right visual column: 60-65% width */}
        <div className="w-full lg:w-[60%] relative flex justify-center lg:justify-end">
          <AssistantVisualColumn />
        </div>
      </div>
    </section>
  );
}
