import React from 'react';
import aiAssistantImage from '../assets/ai-assistant-detailed.png';

export default function AssistantVisualColumn() {
  return (
    <div className="relative w-full max-w-[700px] flex items-center justify-center">
      <img
        src={aiAssistantImage}
        alt="Tripscops AI Assistant - Itinerary management with overlapping UI cards"
        className="w-full max-w-[600px] lg:max-w-[700px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] select-none pointer-events-none"
        draggable="false"
      />
    </div>
  );
}
