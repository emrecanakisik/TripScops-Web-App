import React from 'react';
import FeatureCard from './FeatureCard';

import features1 from '../assets/features-1.png';
import features2 from '../assets/features-2.png';
import features3 from '../assets/features-3.png';

const featuresData = [
  {
    title: "AI Trip Suggestions",
    description: "Create complete itineraries with real-time recommendations tailored to your style.",
    active: true,
    image: features1,
  },
  {
    title: "Real-time Flight Tracking",
    description: "Monitor your flights seamlessly with up-to-the-minute updates and notifications.",
    active: false,
    image: features2,
  },
  {
    title: "Booking Management",
    description: "Keep all your reservations, tickets, and plans organized in one single place.",
    active: false,
    image: features3,
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 px-6 md:px-10 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard 
              key={index}
              index={index}
              title={feature.title}
              description={feature.description}
              active={feature.active}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
