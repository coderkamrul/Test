import React from 'react';
import { GiftIcon } from './Icons';
import FadeIn from './FadeIn';

const GetFreeGuide: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6">
        <FadeIn>
            <div className="bg-gray-100 rounded-3xl p-8 md:p-16 max-w-5xl mx-auto relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-200 rounded-full opacity-50 filter blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-200 rounded-full opacity-50 filter blur-2xl"></div>

                <div className="relative z-10 text-center">
                    <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-6">
                        <GiftIcon className="w-10 h-10 text-purple-600" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">Get Your FREE Success Blueprint</h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
                        Join 50,000+ entrepreneurs and get our exclusive guide: "The 7-Figure Digital Business Blueprint" plus weekly insider tips - completely free!
                    </p>

                    <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 mb-4">
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="w-full px-6 py-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition duration-300 text-lg"
                            aria-label="Email Address"
                        />
                        <button 
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex-shrink-0"
                        >
                            Get Free Guide
                        </button>
                    </form>
                    <p className="text-sm text-slate-500">Your email is safe with us. No spam, unsubscribe anytime.</p>
                    
                    <div className="flex justify-center items-center gap-6 mt-8">
                        <div className="bg-white/60 border border-slate-200 px-4 py-2 rounded-lg text-sm text-slate-600 font-medium">50K+ Subscribers</div>
                        <div className="bg-white/60 border border-slate-200 px-4 py-2 rounded-lg text-sm text-slate-600 font-medium">4.9/5 Rating</div>
                        <div className="bg-white/60 border border-slate-200 px-4 py-2 rounded-lg text-sm text-slate-600 font-medium">100% Free</div>
                    </div>
                </div>
            </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default GetFreeGuide;