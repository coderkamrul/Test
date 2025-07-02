import React from 'react';
import { TESTIMONIALS } from '../constants';
import { StarIcon } from './Icons';
import FadeIn from './FadeIn';

const Testimonials: React.FC = () => {
  return (
    <section className="gradient-bg py-20 lg:py-28">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeIn>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Real Success Stories</h2>
              <p className="text-indigo-200 mt-4 text-lg">See what our community of entrepreneurs are saying about their transformations.</p>
            </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 100} className="h-full">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-white text-lg mb-6 flex-grow">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-white/30" />
                        <div>
                            <p className="font-bold text-white">{testimonial.name}</p>
                            <p className="text-indigo-200 text-sm">{testimonial.location}</p>
                        </div>
                    </div>
                    <span className="bg-green-400/20 text-green-300 text-xs font-bold px-3 py-1.5 rounded-full">{testimonial.tag.text}</span>
                  </div>
                </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;