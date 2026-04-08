import React from 'react';

const stats = [
  { value: "10K+", label: "Travelers" },
  { value: "50K+", label: "Trips Planned" },
  { value: "4.8", label: "App Store Rating", hasStar: true },
  { value: "120+", label: "Destinations" },
];

function StarIcon() {
  return (
    <svg className="w-7 h-7 md:w-9 md:h-9 ml-2 text-black fill-current mb-1" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-16 md:py-24 bg-transparent w-full">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-black mb-12">
          Social Proof
        </h2>

        {/* Stats Row */}
        <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-between gap-y-12 md:gap-y-0 md:divide-x divide-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="w-1/2 md:w-1/4 flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-none">
                  {stat.value}
                </span>
                {stat.hasStar && <StarIcon />}
              </div>
              <span className="text-sm md:text-[15px] text-gray-500 font-medium mt-3">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
