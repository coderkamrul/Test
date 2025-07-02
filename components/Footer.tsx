import React from 'react';
import { GlobeAltIcon, UserGroupIcon, LightBulbIcon } from './Icons';
import FadeIn from './FadeIn';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
        <FadeIn>
          <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4">
                    <h3 className="text-2xl font-bold text-white mb-4">Digital Success Hub</h3>
                    <p className="text-slate-400 mb-6 pr-4">Empowering entrepreneurs worldwide with premium digital tools and proven strategies for online success. Join our community of 50,000+ successful business owners.</p>
                    <div className="space-y-3">
                        <p className="flex items-center gap-3"><UserGroupIcon className="w-5 h-5 text-indigo-400"/> 50,000+ Happy Customers</p>
                        <p className="flex items-center gap-3"><GlobeAltIcon className="w-5 h-5 text-indigo-400"/> Available Worldwide</p>
                        <p className="flex items-center gap-3"><LightBulbIcon className="w-5 h-5 text-indigo-400"/> Industry Leading Results</p>
                    </div>
                </div>
                <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="font-bold text-white text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#offers" className="hover:text-white transition-colors">Premium Tools</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg mb-4">Support</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-slate-500">
                <div className="space-y-3">
                    <p><strong>Affiliate Disclosure:</strong> This website contains affiliate links. We may earn a commission when you make a purchase through these links at no additional cost to you. We only recommend products and services we genuinely believe in.</p>
                    <p><strong>Disclaimer:</strong> Individual results may vary. Past performance does not guarantee future results. Please do your own research and due diligence before making any investment or business decisions.</p>
                    <p><strong>Earnings Disclaimer:</strong> The income examples shown are exceptional results and not typical. Your results will depend on your own effort, dedication, and market conditions.</p>
                </div>
                <p className="mt-8 text-center">
                  &copy; {new Date().getFullYear()} Digital Success Hub. All rights reserved.
                </p>
            </div>
          </div>
        </FadeIn>
    </footer>
  );
};

export default Footer;