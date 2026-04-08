import React from 'react';

export default function AssistantTextColumn() {
  return (
    <div className="flex flex-col max-w-md lg:max-w-lg xl:max-w-xl text-left">
      <h2 className="text-5xl lg:text-6xl font-extrabold text-black mb-10 leading-[1.1] tracking-tight">
        Your personal<br/>AI travel assistant
      </h2>
      <ul className="flex flex-col gap-y-6">
        {[
          'Personalized recommendations',
          'Live price tracking',
          'Smart itinerary builder'
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-4 text-xl text-gray-700 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300 flex-shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
