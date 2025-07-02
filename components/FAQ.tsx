import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { FAQItem } from '../types';
import { ChevronDownIcon } from './Icons';
import FadeIn from './FadeIn';

const FaqItemComponent: React.FC<{ item: FAQItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border border-slate-200 rounded-2xl bg-white transition-all duration-300">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center p-6 text-left"
                aria-expanded={isOpen}
            >
                <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-purple-600' : 'text-slate-800'}`}>{item.question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                   <ChevronDownIcon className="h-6 w-6 text-slate-500" />
                </span>
            </button>
            <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <p className="text-slate-600 px-6 pb-6">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
};


const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Frequently Asked Questions 🤔</h2>
               <p className="text-slate-600 mt-4 text-lg">Everything you need to know about our premium tools and services.</p>
            </div>
        </FadeIn>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <FadeIn key={index} delay={index * 100}>
                <FaqItemComponent
                  item={item}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;