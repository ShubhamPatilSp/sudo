"use client"

import React, { useState, useEffect } from 'react';
import { Upload, Copy, Download, Star, Users, Zap } from 'lucide-react';

const TypewriterEffect = ({ strings }: { strings: string[] }) => {
  const [currentString, setCurrentString] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentString(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setCurrentIndex(prev => (prev + 1) % strings.length);
        }
      } else {
        if (charIndex < strings[currentIndex].length) {
          setCurrentString(prev => prev + strings[currentIndex][charIndex]);
          setCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, isDeleting, strings]);

  return <span>{currentString}|</span>;
};

export default function LandingHero() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInputText(text);
    setCharacterCount(text.length);
  };

  const handleHumanize = async () => {
    if (!inputText.trim()) return;
    
    setIsProcessing(true);
    setOutputText('');
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simple transformation for demo
    const humanizedText = inputText
      .replace(/\bAI\b/g, 'artificial intelligence')
      .replace(/\bML\b/g, 'machine learning')
      .replace(/\bNLP\b/g, 'natural language processing')
      .replace(/(\w+)ly\b/g, (match, word) => `in a ${word} manner`)
      .replace(/\bvery\b/g, 'extremely')
      .replace(/\bgood\b/g, 'excellent')
      .replace(/\bbad\b/g, 'problematic');
    
    setOutputText(humanizedText);
    setIsProcessing(false);
  };

  const handleTryRandomContent = () => {
    const sampleText = "AI technology has revolutionized many industries. Machine learning algorithms are very good at processing large datasets. Natural language processing systems can understand human language effectively. This technology is rapidly advancing and becoming more sophisticated.";
    setInputText(sampleText);
    setCharacterCount(sampleText.length);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
  };

  const handleExport = () => {
    const blob = new Blob([outputText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'humanized-text.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="bg-orange-500 text-white px-3 py-1 rounded-lg font-bold text-xl">
                SUDO
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-orange-500">Products</a>
              <a href="#" className="text-gray-700 hover:text-orange-500">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-orange-500">About</a>
              <a href="#" className="text-gray-700 hover:text-orange-500">Contact Us</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-orange-500">Log In</button>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Humanize AI Text &<br />
            Outsmart AI Detectors
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Bypass AI detection, humanize papers and transform essays in seconds, all while avoiding detectors like Turnitin and GPTZero
          </p>
          
          {/* Star Rating */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-gray-600">Trusted by 5.4 million+ writers</span>
          </div>

          <button className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors">
            Start Now - For Free →
          </button>
        </div>

        {/* AI Detectors Section */}
        <div className="text-center mb-12">
          <p className="text-gray-700 mb-6">Bypass Popular AI Content detectors your professor uses</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700">GPTZero</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700">OpenAI</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700">Quillbot</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700">Copyleaks</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700">Turnitin</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700">Grammarly</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700">ZeroGPT</span>
            </div>
          </div>
          <div className="mt-6 text-right">
            <span className="text-gray-500 text-sm italic">Try for free and see</span>
            <span className="text-gray-500 text-sm italic block">work result live</span>
            <div className="inline-block text-6xl text-gray-300 rotate-12">✓</div>
          </div>
        </div>

        {/* Main Tool Interface */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-orange-200">
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
            <h2 className="text-xl font-semibold text-gray-800">Waiting for your input...</h2>
            <div className="ml-auto">
              <Zap className="w-6 h-6 text-orange-500 animate-pulse" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">Your Content:</label>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Upload className="w-4 h-4" />
                    <span>Upload File</span>
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    🗑️
                  </button>
                </div>
                <textarea
                  value={inputText}
                  onChange={handleInputChange}
                  placeholder="Paste or write text here"
                  className="w-full h-80 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button
                  onClick={handleTryRandomContent}
                  className="text-blue-600 hover:text-blue-800 underline text-sm"
                >
                  Try with random ChatGPT content
                </button>
              </div>
            </div>

            {/* Output Section */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">Output:</label>
              <div className="h-80 p-4 border border-gray-300 rounded-lg bg-gray-50 relative">
                {isProcessing ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
                    <span className="ml-3 text-gray-600">Processing...</span>
                  </div>
                ) : outputText ? (
                  <div className="h-full overflow-y-auto">
                    <p className="text-gray-800 whitespace-pre-wrap">{outputText}</p>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-400 italic">Your humanized text will be displayed here</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-gray-600">
              <span className="text-orange-500">{characterCount}</span>/5000 Characters
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleHumanize}
                disabled={!inputText.trim() || isProcessing}
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <Zap className="w-4 h-4" />
                <span>Humanize</span>
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                Detect AI Content
              </button>
              <button
                onClick={handleCopy}
                disabled={!outputText}
                className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Copy className="w-4 h-4" />
              </button>
              <button
                onClick={handleExport}
                disabled={!outputText}
                className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}