import React from 'react';
import { ProductOffer, FAQItem, FeaturePoint, Testimonial } from './types';
import { LightningBoltIcon, ShieldCheckIcon, UserGroupIcon, ChartBarIcon, ScaleIcon, ClockIcon, PaperAirplaneIcon, GiftIcon, FireIcon, CheckBadgeIcon, ChartPieIcon, LightBulbIcon } from './components/Icons';

export const FEATURE_POINTS: FeaturePoint[] = [
  {
    icon: <div className="bg-orange-100 rounded-lg p-3"><LightningBoltIcon className="w-6 h-6 text-orange-500" /></div>,
    title: 'Lightning Fast Results',
    description: 'See measurable results within 24-48 hours of implementation with our proven systems.',
  },
  {
    icon: <div className="bg-green-100 rounded-lg p-3"><ShieldCheckIcon className="w-6 h-6 text-green-500" /></div>,
    title: 'Risk-Free Guarantee',
    description: '30-day money-back guarantee on all products. Your success is our priority.',
  },
  {
    icon: <div className="bg-blue-100 rounded-lg p-3"><UserGroupIcon className="w-6 h-6 text-blue-500" /></div>,
    title: 'Expert Community',
    description: 'Join 50,000+ successful entrepreneurs and get support from industry experts.',
  },
  {
    icon: <div className="bg-purple-100 rounded-lg p-3"><PaperAirplaneIcon className="w-6 h-6 text-purple-500" /></div>,
    title: 'Proven Track Record',
    description: 'Tools and strategies used by 6 and 7-figure business owners worldwide.',
  },
    {
    icon: <div className="bg-rose-100 rounded-lg p-3"><ClockIcon className="w-6 h-6 text-rose-500" /></div>,
    title: 'Save Time & Effort',
    description: 'Skip years of trial and error with our battle-tested shortcuts and frameworks.',
  },
  {
    icon: <div className="bg-teal-100 rounded-lg p-3"><ScaleIcon className="w-6 h-6 text-teal-500" /></div>,
    title: 'Scalable Systems',
    description: 'Build systems that grow with your business and generate increasing returns.',
  },
];

export const PRODUCT_OFFERS: ProductOffer[] = [
  {
    title: 'Digital Empire Builder Pro',
    description: 'Complete system to build your online empire from scratch with proven strategies.',
    image: '/placeholder-image.svg',
    tags: [
        { text: 'Limited Time', bgClass: 'bg-red-500', textClass: 'text-white' },
        { text: 'Bestseller', bgClass: 'bg-yellow-400', textClass: 'text-yellow-900' }
    ],
    features: ['Step-by-step video training', 'Done-for-you templates', '24/7 expert support'],
    link: 'https://warriorplus.com/o2/a/l687g7j/r56pqy',
    ctaText: 'Get Instant Access'
  },
  {
    title: 'Traffic Avalanche System',
    description: 'Get unlimited targeted traffic to any offer or website with this proven method.',
    image: '/placeholder-image.svg',
    tags: [
        { text: 'Limited Time', bgClass: 'bg-red-500', textClass: 'text-white' },
        { text: 'Hot Deal', bgClass: 'bg-orange-500', textClass: 'text-white' }
    ],
    features: ['Traffic generation secrets', 'Conversion tracking tools', 'Analytics dashboard'],
    link: 'https://warriorplus.com/o2/a/j1s2mft/0',
    ctaText: 'Get Instant Access'
  },
  {
    title: 'Conversion Maximizer Pro',
    description: 'Double your conversion rates using proven psychology and optimization techniques.',
    image: '/placeholder-image.svg',
    tags: [
        { text: 'Premium', bgClass: 'bg-purple-500', textClass: 'text-white' }
    ],
    features: ['Psychology triggers guide', 'A/B testing framework', 'Optimization checklist'],
    link: 'https://jvz7.com/c/3332575/415009',
    ctaText: 'Get Instant Access'
  },
  {
    title: 'Social Media Dominator',
    description: 'Dominate social media platforms and build a massive engaged following.',
    image: '/placeholder-image.svg',
    tags: [
        { text: 'Limited Time', bgClass: 'bg-red-500', textClass: 'text-white' },
        { text: 'Social', bgClass: 'bg-blue-500', textClass: 'text-white' }
    ],
    features: ['Content creation templates', 'Scheduling automation', 'Growth hacking secrets'],
    link: 'https://jvz6.com/c/3332575/416563',
    ctaText: 'Get Instant Access'
  },
   {
    title: 'Affiliate Marketing Blueprint',
    description: 'Master affiliate marketing with this comprehensive step-by-step system.',
    image: '/placeholder-image.svg',
    tags: [
        { text: 'Limited Time', bgClass: 'bg-red-500', textClass: 'text-white' },
        { text: 'Proven', bgClass: 'bg-green-500', textClass: 'text-white' }
    ],
    features: ['Niche selection guide', 'Product promotion strategies', 'Commission optimization'],
    link: 'https://warriorplus.com/o2/a/l2bfgxd/0',
    ctaText: 'Get Instant Access'
  },
  {
    title: 'Digital Product Creator',
    description: 'Create and launch your own digital products that sell like hotcakes.',
    image: '/placeholder-image.svg',
    tags: [
        { text: 'Complete', bgClass: 'bg-yellow-400', textClass: 'text-yellow-900' }
    ],
    features: ['Product creation framework', 'Launch sequence templates', 'Sales page builders'],
    link: 'https://jvz2.com/c/3332575/415010',
    ctaText: 'Get Instant Access'
  },
];


export const TESTIMONIALS: Testimonial[] = [
  {
    stars: 5,
    quote: "These tools completely transformed my online business. I went from struggling to make $100/month to consistently earning $10K+ monthly. The step-by-step guidance made all the difference!",
    name: 'Sarah Johnson',
    location: 'California, USA',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    tag: { text: '$10K+/month' }
  },
  {
    stars: 5,
    quote: "I was skeptical at first, but the results speak for themselves. My conversion rate doubled overnight, and I'm now generating passive income while I sleep. Best investment I've ever made!",
    name: 'Mike Rodriguez',
    location: 'Texas, USA',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    tag: { text: '2x Conversions' }
  },
  {
    stars: 5,
    quote: "The community support and expert guidance made it so easy. Even as a complete beginner, I was able to launch my first profitable campaign within a week. Absolutely life-changing!",
    name: 'Jennifer Chen',
    location: 'New York, USA',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    tag: { text: 'Profitable in 1 week' }
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How quickly can I expect to see results?',
    answer: 'While results vary, many of our tools are designed for rapid implementation. With our "Lightning Fast Results" systems, many users report seeing measurable progress, such as increased traffic or leads, within the first 24-48 hours.'
  },
  {
    question: 'Do I need any technical experience or special skills?',
    answer: 'Not at all! Our tools are specifically designed to be user-friendly, even for complete beginners. Most products include step-by-step video training, done-for-you templates, and dedicated support to guide you through every process.'
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Absolutely. We stand by the quality of our premium tools. Every product we feature comes with a 30-day, no-questions-asked money-back guarantee. You can invest with complete confidence.'
  },
  {
    question: 'How is this different from other programs out there?',
    answer: 'We focus on proven, battle-tested systems rather than fleeting trends. Our collection is curated based on real-world results, scalability, and long-term value, saving you the time and money of experimenting with unproven methods.'
  },
    {
    question: 'Do you provide ongoing support and training?',
    answer: 'Yes. Community and support are core to our values. When you join, you get access to not only the tools but also an expert community of over 50,000 entrepreneurs and dedicated support teams for each product to ensure you\'re never stuck.'
  },
  {
    question: 'Can I use these tools if I\'m just starting out?',
    answer: 'Definitely. These tools are perfect for entrepreneurs at any stage. If you\'re just starting, our systems provide the foundational blueprint you need to build and scale successfully from day one, helping you avoid common beginner mistakes.'
  }
];