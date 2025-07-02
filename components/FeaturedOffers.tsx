import React from 'react';
import { PRODUCT_OFFERS } from '../constants';
import ProductCard from './ProductCard';
import { RocketLaunchIcon } from './Icons';
import FadeIn from './FadeIn';

const FeaturedOffers: React.FC = () => {
  return (
    <section id="offers" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeIn>
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter flex items-center justify-center gap-3">
                  <RocketLaunchIcon className="w-10 h-10 text-purple-600" />
                  Premium Digital Tools Collection
                </h2>
                <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">Hand-picked tools that have generated millions in revenue for our community of successful entrepreneurs.</p>
            </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCT_OFFERS.map((offer, index) => (
            <FadeIn key={index} delay={index * 100} className="h-full">
              <ProductCard offer={offer} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOffers;