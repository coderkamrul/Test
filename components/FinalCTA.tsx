import React from 'react';
import { RocketLaunchIcon, ClockIcon, ShieldCheckIcon, UserGroupIcon } from './Icons';
import FadeIn from './FadeIn';

const FinalCTA: React.FC = () => {
  return (
    <section className="gradient-bg py-20 lg:py-28">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
              Ready to Transform Your Success? 🚀
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-indigo-200 mb-10">
              Don't let another day pass without taking action. Join thousands of successful entrepreneurs who have already transformed their lives with our proven systems.
            </p>
            <a 
              href="#offers"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <RocketLaunchIcon className="w-6 h-6" />
              Start Your Journey Now
            </a>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-indigo-200 mt-8 font-medium">
                <span className="flex items-center gap-2"><ClockIcon className="w-5 h-5"/> Limited Time Offers</span>
                <span className="flex items-center gap-2"><ShieldCheckIcon className="w-5 h-5"/> 30-Day Guarantee</span>
                <span className="flex items-center gap-2"><UserGroupIcon className="w-5 h-5"/> Expert Support</span>
            </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FinalCTA;