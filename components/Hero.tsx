import React from 'react';
import { RocketLaunchIcon, CheckIcon, StarIcon, UserGroupIcon, ChartPieIcon } from './Icons';

const StatCard: React.FC<{icon: React.ReactNode, title: string, subtitle: string}> = ({icon, title, subtitle}) => (
    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
        <div className="text-indigo-300">
            {icon}
        </div>
        <div>
            <p className="font-bold text-white text-lg">{title}</p>
            <p className="text-indigo-200 text-sm">{subtitle}</p>
        </div>
    </div>
);

const Hero: React.FC = () => {
  return (
    <section 
        className="gradient-bg relative overflow-hidden"
        style={{
            backgroundImage: 'radial-gradient(ellipse at top, #2563eb, #1e3a8a, #1e1b4b)'
        }}
    >
        {/* Decorative Shapes */}
        <div className="absolute top-10 -left-20 w-40 h-40 bg-white/10 rounded-full filter blur-xl opacity-50"></div>
        <div className="absolute bottom-10 -right-20 w-40 h-40 bg-white/10 rounded-full filter blur-xl opacity-50"></div>
        
      <div className="container mx-auto px-6 py-24 md:py-32 text-center relative z-10">
        <div className="inline-block bg-white/10 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/20 mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Trusted by 50,000+ Successful Entrepreneurs
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4 leading-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Turn Your Dreams Into <br/> <span className="text-yellow-300">Digital Gold</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-indigo-200 mb-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          Discover the exact tools and proven strategies that successful entrepreneurs use to build 6 and 7-figure online businesses from scratch.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
             <a 
              href="#offers" 
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              <RocketLaunchIcon className="w-5 h-5" />
              Start Your Transformation
            </a>
            <div className="flex items-center gap-2 text-indigo-200 font-medium bg-white/10 border border-white/20 px-6 py-4 rounded-full w-full sm:w-auto justify-center">
                <CheckIcon className="w-5 h-5 text-green-400"/>
                <span>30-Day Risk-Free Guarantee</span>
            </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <StatCard icon={<StarIcon className="w-8 h-8"/>} title="4.9/5 Rating" subtitle="From 10K+ Reviews"/>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <StatCard icon={<UserGroupIcon className="w-8 h-8"/>} title="50K+ Users" subtitle="In Our Active Community"/>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                 <StatCard icon={<ChartPieIcon className="w-8 h-8"/>} title="$100M+" subtitle="Generated Revenue"/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;