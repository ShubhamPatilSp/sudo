"use client"

import React from 'react';
import { Star, Play } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  website?: string;
  review: string;
  date: string;
  stars?: number;
  isHighlighted?: boolean;
  hasVideo?: boolean;
}

const TestimonialCard = ({ name, role, website, review, date, stars = 5, isHighlighted = false, hasVideo = false }: TestimonialProps) => (
  <div className={`p-6 rounded-2xl ${isHighlighted ? 'bg-orange-500 text-white border-4 border-orange-600' : 'bg-white/90 backdrop-blur-sm'} shadow-lg relative`}>
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold ${isHighlighted ? 'bg-white/20 text-white' : 'bg-blue-500 text-white'}`}>
        {name.split(' ').map(n => n[0]).join('')}
      </div>
      <div className="flex-1">
        <h3 className={`font-semibold text-sm ${isHighlighted ? 'text-white' : 'text-gray-900'}`}>
          {name}
        </h3>
        <p className={`text-xs ${isHighlighted ? 'text-white/80' : 'text-gray-600'}`}>
          {role}
        </p>
        {website && (
          <p className={`text-xs ${isHighlighted ? 'text-white/70' : 'text-orange-500'}`}>
            {website}
          </p>
        )}
      </div>
    </div>

    {/* Star Rating */}
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={16} 
          className={`${i < stars ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`}
        />
      ))}
    </div>

    <div className={`text-sm leading-relaxed ${isHighlighted ? 'text-white' : 'text-gray-700'}`}>
      {review}
    </div>

    {hasVideo && (
      <div className="flex justify-center mt-4">
        <button className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center hover:bg-black/30 transition-colors">
          <Play size={20} className="text-white ml-1" />
        </button>
      </div>
    )}

    <p className={`text-xs mt-4 ${isHighlighted ? 'text-white/60' : 'text-gray-500'}`}>
      {date}
    </p>
  </div>
);

export default function LandingTestimonials() {
  const testimonials = [
    {
      name: "George Angus",
      role: "Digital Publisher",
      review: "I tested 3 competitors and was just about to settle on another when Reword caught my attention this morning.\n\nIt is above and beyond all the other tools. Exactly all the features I have been looking for.\n\nMany competitors are just prompt libraries for ChatGPT. This AI learns well, cross-links articles and most importantly has AI commands in the text editor.",
      date: "Jul 4, 2023",
      stars: 5
    },
    {
      name: "Olivia Sullivan",
      role: "SEO Consultant",
      review: "I write all of my content myself. I was probably the most anti-AI marketer out there.\n\nReword converted me. It was exactly the balance I wanted between my own writing and AI support.",
      date: "Jun 27, 2023",
      stars: 5
    },
    {
      name: "Chris Starkhagen",
      role: "",
      website: "ChrisStarkhagen.com",
      review: "With its remarkable ability to generate unique content by training an AI on a brand's own materials, the outcome is consistently exceptional; ensuring the perfect tone of voice is maintained.",
      date: "Mar 26, 2023",
      stars: 5,
      isHighlighted: true,
      hasVideo: true
    },
    {
      name: "George Angus",
      role: "Digital Publisher",
      review: "I tested 3 competitors and was just about to settle on another when Reword caught my attention this morning.\n\nIt is above and beyond all the other tools. Exactly all the features I have been looking for.\n\nMany competitors are just prompt libraries for ChatGPT. This AI learns well, cross-links articles and most importantly has AI commands in the text editor.",
      date: "Jul 4, 2023",
      stars: 5
    },
    {
      name: "Olivia Sullivan",
      role: "SEO Consultant",
      review: "I write all of my content myself. I was probably the most anti-AI marketer out there.\n\nReword converted me. It was exactly the balance I wanted between my own writing and AI support.",
      date: "Jun 27, 2023",
      stars: 5
    },
    {
      name: "Chris Starkhagen",
      role: "",
      website: "ChrisStarkhagen.com",
      review: "With its remarkable ability to generate unique content by training an AI on a brand's own materials, the outcome is consistently exceptional; ensuring the perfect tone of voice is maintained.",
      date: "Mar 26, 2023",
      stars: 5
    },
    {
      name: "Kel Jones",
      role: "",
      review: "I think I'm in love!",
      date: "Apr 2, 2023",
      stars: 5
    },
    {
      name: "Kel Jones",
      role: "",
      review: "I think I'm in love!",
      date: "Apr 2, 2023",
      stars: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
            Reviews
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Over <span className="text-orange-500">5,000,000+</span> Students and writers use Sudo.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Essays, journals, even viral blogs—Sudo made them all sound human.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            <span className="font-semibold">Professors and AI detectors?</span> Fooled every time.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 shadow-lg">
            Start Now - For Free →
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              website={testimonial.website}
              review={testimonial.review}
              date={testimonial.date}
              stars={testimonial.stars}
              isHighlighted={testimonial.isHighlighted}
              hasVideo={testimonial.hasVideo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
