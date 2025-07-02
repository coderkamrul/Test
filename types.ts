import React from 'react';

export interface ProductOffer {
  title: string;
  description: string;
  image: string;
  tags: { text: string; bgClass: string; textClass: string }[];
  features: string[];
  link: string;
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeaturePoint {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  stars: number;
  quote: string;
  name: string;
  location: string;
  avatar: string;
  tag: { text: string; };
}