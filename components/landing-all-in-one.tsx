"use client"

import React from 'react';

export default function LandingAllInOne() {
  return (
    <div className="py-20 px-4 bg-white">
      {/* Header section */}
      <div className="text-center mb-16">
        <div className="text-orange-500 text-sm font-medium mb-4 tracking-wide">FEATURES</div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Your <span className="bg-orange-500 text-white px-3 py-1 rounded-lg">All-in-One</span> Smart Writing Assistant
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          A powerful set of tools to help you write faster, better, and smarter—<br />
          so you can spend less time stuck and more time getting things done.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200">
          Start Now - For Free
        </button>
      </div>

      {/* Features grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Feature 1 - AI Content Detector */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="text-orange-500 text-sm font-medium mb-4 tracking-wide">FEATURE 1</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Content Detector</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Worried your assignment might get flagged as AI?<br />
              Our AI detector helps you make sure your work passes AI detection<br />
              with up to 99.8% accuracy. Try it for free to check, test, and super reliable<br />
              identification of AI-generated content.
            </p>
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center space-x-2">
              <span>Try Now</span>
              <span>→</span>
            </button>
            <div className="mt-6 flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-orange-500 text-sm font-medium">2,534+ Currently using</span>
            </div>
          </div>

          {/* Feature 2 - AI Humanizer & Paraphraser */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="text-orange-500 text-sm font-medium mb-4 tracking-wide">FEATURE 2</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Humanizer & Paraphraser</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Make your AI writing sound 100% human.<br />
              Avoid getting flagged by tools like GPTZero or Turnitin—your content<br />
              will read naturally and pass as fully human-written.
            </p>
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center space-x-2">
              <span>Try Now</span>
              <span>→</span>
            </button>
            <div className="mt-6 flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-orange-500 text-sm font-medium">3,234+ Currently using</span>
            </div>
          </div>

          {/* Feature 3 - AI Content Writer */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="text-orange-500 text-sm font-medium mb-4 tracking-wide">FEATURE 3</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Content Writer</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Stuck on what to write?<br />
              Quickly generate your next essay, article, outline, or project in<br />
              seconds. Our human-like content is top-notch, formal, or<br />
              conversational—whatever tone you need.
            </p>
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center space-x-2">
              <span>Try Now</span>
              <span>→</span>
            </button>
            <div className="mt-6 flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-orange-500 text-sm font-medium">3,234+ Currently using</span>
            </div>
          </div>

          {/* Feature 4 - Quick Export */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="text-orange-500 text-sm font-medium mb-4 tracking-wide">FEATURE 4</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Export</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Done writing? Export instantly.<br />
              Easily download your content in the format you need—Google Docs,<br />
              Microsoft Word, and more.
            </p>
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center space-x-2">
              <span>Try Now</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
