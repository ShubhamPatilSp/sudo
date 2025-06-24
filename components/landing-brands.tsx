import React from 'react';
import { Star } from 'lucide-react';

export default function SUDOCompleteSection() {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 py-16">
      {/* Trusted by Universities Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-12">
            Trusted by 3,000+ Universities and businesses across the world
          </h3>
          
          {/* University Logos */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center mb-16">
            {/* University of Florida */}
            <div className="flex flex-col items-center">
              <div className="text-gray-400 text-sm font-light mb-1">UNIVERSITY OF</div>
              <div className="text-gray-600 text-2xl font-bold">FLORIDA</div>
            </div>
            
            {/* Georgia Tech */}
            <div className="flex items-center space-x-2">
              <div className="text-yellow-600 text-3xl font-bold">GT</div>
              <div>
                <div className="text-gray-700 text-sm font-bold">Georgia Institute</div>
                <div className="text-gray-700 text-sm font-bold">of Technology</div>
              </div>
            </div>
            
            {/* Syracuse */}
            <div className="flex items-center space-x-2">
              <div className="bg-orange-600 text-white w-10 h-10 rounded flex items-center justify-center text-xl font-bold">S</div>
              <div>
                <div className="text-orange-600 text-lg font-bold">Syracuse</div>
                <div className="text-gray-600 text-sm">University</div>
              </div>
            </div>
            
            {/* Georgia Tech (second) */}
            <div className="flex items-center space-x-2">
              <div className="text-yellow-600 text-3xl font-bold">GT</div>
              <div>
                <div className="text-gray-700 text-sm font-bold">Georgia Institute</div>
                <div className="text-gray-700 text-sm font-bold">of Technology</div>
              </div>
            </div>
            
            {/* UCLA */}
            <div className="text-blue-600 text-3xl font-bold">UCLA</div>
            
            {/* Texas */}
            <div className="flex items-center space-x-2">
              <div className="bg-orange-600 text-white w-8 h-8 flex items-center justify-center text-sm font-bold">UT</div>
              <div>
                <div className="text-orange-600 text-lg font-bold">TEXAS</div>
                <div className="text-gray-600 text-xs">The University of Texas at Austin</div>
              </div>
            </div>
          </div>
          
          {/* Ratings Section */}
          <div className="flex justify-center items-center space-x-12">
            {/* Trustpilot Rating */}
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 text-white w-8 h-8 flex items-center justify-center">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500">★</span>
                  <span className="font-bold text-gray-800">4.5</span>
                  <span className="text-gray-600">156</span>
                </div>
                <div className="text-sm text-gray-600">Rating by Trustpilot</div>
              </div>
            </div>
            
            {/* Google Rating */}
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                G
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500">★</span>
                  <span className="font-bold text-gray-800">4.8</span>
                  <span className="text-gray-600">591</span>
                </div>
                <div className="text-sm text-gray-600">on Google Review</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* ChatGPT Assignment Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-3xl p-12 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-8 left-8">
            <div className="text-orange-500 text-2xl">✨</div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Used ChatGPT to write<br />
                your assignment ?
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Your professor might catch it—unless you humanize it first.<br />
                Use our tool to make it sound real and pass AI checks. Get full marks<br />
                without stress.
              </p>
              <button className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors">
                Start Now - For Free →
              </button>
            </div>
            
            {/* Right Content - Topic Cluster and Document Preview */}
            <div className="relative">
              {/* Document Preview */}
              <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500 text-sm">Updated 1 hour ago</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Insights on the impacts of<br />
                  Yoga on your health
                </h3>
                <div className="flex space-x-4">
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-center">
                    <div className="text-sm text-gray-600">Ideas</div>
                    <div className="text-2xl font-bold">8</div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-center">
                    <div className="text-sm text-gray-600">Articles</div>
                    <div className="text-2xl font-bold">5</div>
                  </div>
                </div>
              </div>
              
              {/* Topic Cluster */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-800">Topic cluster</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">The Scientific Evidence: How Yoga Impacts Physical Health</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Live</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Unraveling the Connection Between Yoga and Mental Well-being</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Draft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Yoga Across the Lifespan: From Childhood to Seniors</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Draft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Yoga and Chronic Conditions: A Holistic Approach to Health</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Idea</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Yoga for Peak Dwellers: Combating the Health Risks of Sedentary Lifestyles</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Idea</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}