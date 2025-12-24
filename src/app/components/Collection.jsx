'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function CollectionSlider() {

  const [currentIndex, setCurrentIndex] = useState(1);


  const collections = [
    {
      id: 1,
      title: "Luxury Sedans",
      image: "/public/images/collect1.png",
      description: "Experience unparalleled comfort and sophistication in our luxury sedan collection.",
    },
    {
      id: 2,
      title: "Powerful SUVs",
      image: "/public/images/collect2.png",
      description: "Dominate any terrain with our powerful and versatile SUV lineup.",
    },
    {
      id: 3,
      title: "Exquisite Coupes",
      image: "/public/images/collect3.png",
      description: "Turn heads with our sleek and performance-oriented coupe models.",
    },
    {
      id: 4,
      title: "Electric Vehicles",
      image: "/public/images/collect4.png",
      description: "Embrace the future with our eco-friendly and high-tech electric vehicles.",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? collections.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === collections.length - 1 ? 0 : prev + 1));
  };

  const getVisibleCards = () => {
    const cards = [];
    const totalCards = collections.length;
    
    // Calculate which cards to show (always show 3 cards)
    for (let i = -1; i <= 1; i++) {
      let index = currentIndex + i;
      if (index < 0) index = totalCards + index;
      if (index >= totalCards) index = index % totalCards;
      cards.push(collections[index]);
    }
    
    return cards;
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-12 relative overflow-hidden">
      {/* Main content container */}
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 md:mb-24">
          <div className="mb-8 md:mb-0">
            {/* Round background text */}
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full blur-md opacity-80"></div>
              <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-full px-8 py-4 border border-gray-800">
                <h1 className="text-3xl md:text-4xl font-light tracking-wider">
                  Explore Our Collection
                </h1>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex space-x-4">
            <button 
              onClick={handlePrevious}
              className="p-3 rounded-full border border-gray-700 hover:border-gray-500 transition-colors"
              aria-label="Previous collection"
            >
              <ChevronLeft size={24} className="text-gray-300" />
            </button>
            <button 
              onClick={handleNext}
              className="p-3 rounded-full border border-gray-700 hover:border-gray-500 transition-colors"
              aria-label="Next collection"
            >
              <ChevronRight size={24} className="text-gray-300" />
            </button>
          </div>
        </div>

        {/* Main content - Image and Cards */}
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
          {/* Left side - Main Image */}
          <div className="w-full lg:w-2/3 relative">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
              
              {/* Main image */}
              <Image
                src="/images/collect(1).png"
                alt={collections[currentIndex].title}
                fill
                className="object-cover transition-transform duration-500"
                priority
              />
              
              {/* Image overlay content */}
              <div className="absolute bottom-8 left-8 z-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {collections[currentIndex].title}
                </h2>
                <p className="text-gray-300 max-w-md">
                  {collections[currentIndex].description}
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Cards Slider */}
          <div className="w-full lg:w-1/3 relative">
            {/* Vertical "Collection" text */}
            <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 rotate-90 origin-center">
              <span className="text-7xl font-bold tracking-widest text-gray-800 opacity-80">
                COLLECTION
              </span>
            </div>

            {/* Cards Container */}
            <div className="relative h-[500px]">
              {getVisibleCards().map((card, index) => {
                const isSelected = index === 1; // Middle card is selected
                
                return (
                  <div
                    key={card.id}
                    className={`absolute transition-all duration-500 w-full ${
                      index === 0 
                        ? 'left-0 top-0 scale-90 opacity-60 z-10' 
                        : index === 1 
                        ? 'left-0 top-1/2 transform -translate-y-1/2 scale-100 opacity-100 z-20'
                        : 'left-0 top-full transform -translate-y-full scale-90 opacity-60 z-10'
                    }`}
                  >
                    <div className={`p-6 rounded-2xl transition-all duration-500 ${
                      isSelected 
                        ? 'bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 shadow-2xl' 
                        : 'bg-gray-900/50 border border-gray-800 shadow-lg'
                    }`}>
                      <div className="mb-4">
                        <div className={`w-12 h-1 mb-2 transition-all duration-500 ${
                          isSelected ? 'bg-white' : 'bg-gray-600'
                        }`}></div>
                        <h3 className={`text-2xl font-semibold transition-all duration-500 ${
                          isSelected ? 'text-white' : 'text-gray-400'
                        }`}>
                          {card.title}
                        </h3>
                      </div>
                      <p className={`transition-all duration-500 ${
                        isSelected ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        {card.description}
                      </p>
                      
                      {isSelected && (
                        <button className="mt-6 px-6 py-2 border border-gray-600 rounded-full hover:border-white transition-colors text-sm">
                          Explore More
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile indicators */}
            <div className="flex justify-center mt-8 lg:hidden">
              {collections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`mx-1 w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-white w-6' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to collection ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}