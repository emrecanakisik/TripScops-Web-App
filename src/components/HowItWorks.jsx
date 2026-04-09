import React from 'react';
import StepItem from './StepItem';
import StepArrow from './StepArrow';

import howItWorks1 from '../assets/how-it-works-1.png';
import howItWorks2 from '../assets/how-it-works-2.png';
import howItWorks3 from '../assets/how-it-works-3.png';

const steps = [
  {
    title: "Search your destination",
    description: "Search your destination and AI browses to find the exact customized context you need.",
    image: howItWorks1,
  },
  {
    title: "Get AI-generated plan",
    description: "Get smart intersections to your destination. Receive a fully customized AI-generated itinerary.",
    image: howItWorks2,
  },
  {
    title: "Book everything in one place",
    description: "Book everything: hotels and activities to flights, and top recommendations online. All in one place.",
    image: howItWorks3,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 md:px-10 bg-transparent w-full">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-16">
          How It Works
        </h2>

        {/* Steps container (Flex row for horizontal layout) */}
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-12 md:gap-4 lg:gap-8 xl:gap-12 relative w-full">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Individual Step */}
              <div className="flex-1 w-full cursor-default group transition-transform duration-300 hover:-translate-y-1">
                <StepItem index={index} title={step.title} description={step.description} image={step.image} />
              </div>
              
              {/* Arrow Connector (Hidden on mobile, vertically centered exactly to the Mockup Box of h-56 = 224px) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex flex-shrink-0 mt-[112px] -translate-y-1/2 w-8 lg:w-12 items-center justify-center">
                  <StepArrow />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
