import React from 'react';

const StickyCTA: React.FC = () => {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm p-4 border-t border-slate-700 shadow-lg z-50">
            <a 
              href="#offers"
              className="w-full block text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300"
            >
              Explore All Offers
            </a>
        </div>
    );
};

export default StickyCTA;