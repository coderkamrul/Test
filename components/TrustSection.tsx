import React from 'react';

const CheckBadgeIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const ShieldCheckIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917l9-4.5 9 4.5A12.02 12.02 0 0018.618 8.016z" />
  </svg>
);

const TrustSection: React.FC = () => {
  const trustPoints = [
    'Used by thousands of successful marketers daily.',
    'Extremely affordable & beginner-friendly options.',
    'Proven to increase leads, sales, and conversions.',
    'Constantly updated to stay ahead of the curve.'
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Why Trust These Tools?</h2>
        <p className="text-slate-400 text-lg mb-10">We've sifted through the noise to bring you offers that genuinely deliver results. These aren't just random tools; they are battle-tested solutions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left mb-12">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckBadgeIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <span className="text-slate-300 text-lg">{point}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
          <div className="flex items-center gap-3 bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg">
              <ShieldCheckIcon className="w-6 h-6 text-blue-500" />
              <span className="text-sm font-medium text-slate-300">Verified Vendors</span>
          </div>
           <div className="flex items-center gap-3 bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg">
              <ShieldCheckIcon className="w-6 h-6 text-blue-500" />
              <span className="text-sm font-medium text-slate-300">Secure Instant Access</span>
          </div>
           <div className="flex items-center gap-3 bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg">
              <ShieldCheckIcon className="w-6 h-6 text-blue-500" />
              <span className="text-sm font-medium text-slate-300">30-Day Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
