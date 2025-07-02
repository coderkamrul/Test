import React from 'react';
import { ProductOffer } from '../types';
import { CheckIcon, ExternalLinkIcon } from './Icons';

const ProductCard: React.FC<{ offer: ProductOffer }> = ({ offer }) => {
  return (
    <div className="group flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative mb-5">
        <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center">
            {/* Placeholder for an image */}
            <svg className="w-16 h-16 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <div className="absolute top-3 left-3 flex flex-col gap-2">
            {offer.tags.map((tag, i) => (
                <span key={i} className={`text-xs font-bold px-2.5 py-1 rounded-full ${tag.bgClass} ${tag.textClass}`}>
                    {tag.text}
                </span>
            ))}
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{offer.title}</h3>
        <p className="text-slate-600 mb-6">{offer.description}</p>
        
        <ul className="space-y-3 mb-8">
            {offer.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                        <CheckIcon className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-slate-700">{feature}</span>
                </li>
            ))}
        </ul>
        
        <a
            href={offer.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center mt-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg flex items-center justify-center gap-2"
        >
            {offer.ctaText}
            <ExternalLinkIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;