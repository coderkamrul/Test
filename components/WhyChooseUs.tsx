import React from 'react';
import { FEATURE_POINTS } from '../constants';
import FadeIn from './FadeIn';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6">
        <FadeIn>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Why Choose Our Premium Tools?</h2>
              <p className="text-slate-600 mt-4 text-lg">Join thousands of successful entrepreneurs who trust our proven systems to scale their businesses.</p>
            </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {FEATURE_POINTS.map((point, index) => (
            <FadeIn key={index} delay={index * 100} className="h-full">
                <div className="bg-gray-50/70 border border-gray-200/80 rounded-2xl p-6 text-center transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 h-full">
                  <div className="inline-block mb-4">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{point.title}</h3>
                  <p className="text-slate-600">{point.description}</p>
                </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;