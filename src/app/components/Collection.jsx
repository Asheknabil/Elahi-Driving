'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function CollectionSlider() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const [isAnimating, setIsAnimating] = useState(false);
  const [step, setStep] = useState(0);



const collections = [
  {
    id: 1,
    title: "Luxury Sedans",
    image: "/images/collect1.png",
    description: "Experience unparalleled comfort and sophistication in our luxury sedan collection.",
  },
  {
    id: 2,
    title: "Powerful SUVs",
    image: "/images/collect22.png",
    description: "Dominate any terrain with our powerful and versatile SUV lineup.",
  },
  {
    id: 3,
    title: "Exquisite Coupes",
    image: "/images/collect6.png",
    description: "Turn heads with our sleek and performance-oriented coupe models.",
  },
  {
    id: 4,
    title: "Electric Vehicles",
    image: "/images/collect5.png",
    description: "Embrace the future with our eco-friendly and high-tech electric vehicles.",
  },
  {
    id: 5,
    title: "Sports Cars",
    image: "/images/collect8.png",
    description: "Feel the adrenaline rush with our high-performance sports car collection.",
  },
  {
    id: 6,
    title: "Hybrid Models",
    image: "/images/collect7.png",
    description: "Experience the perfect blend of efficiency and power with our hybrid vehicles.",
  },
  {
    id: 7,
    title: "Convertibles",
    image: "/images/collect9.png",
    description: "Enjoy the open road with our stunning convertible car collection.",
  },
];


const handlePrevious = () => {
  setDirection(-1);
  setCurrentIndex((prev) => (prev === 0 ? collections.length - 1 : prev - 1));
};

const handleNext = () => {
  if (isAnimating) return;

  setIsAnimating(true);
  setStep(1);

  setTimeout(() => {
    setStep(2);
  }, 200);

  setTimeout(() => {
    setStep(3);
  }, 400);

  setTimeout(() => {
    setCurrentIndex((prev) =>
      prev === collections.length - 1 ? 0 : prev + 1
    );
    setStep(0);
    setIsAnimating(false);
  }, 650);
};

const getCardStyle = (position) => {
  if (step === 0) return '';

  if (step === 1 && position === 0)
    return 'translate-x-[-120%] opacity-0';

  if (step === 2 && position === 1)
    return 'translate-x-[-110%]';

  if (step === 3 && position === 2)
    return 'translate-x-[-110%]';

  return '';
};


  const getVisibleCards = () => {
    const cards = [];
    const totalCards = collections.length;
    
    if (totalCards === 0) return [];
    
    const centerIndex = currentIndex % totalCards;
    const leftIndex = (currentIndex - 1 + totalCards) % totalCards;
    const rightIndex = (currentIndex + 1) % totalCards;
    
    cards.push({ ...collections[leftIndex], position: -1 });
    cards.push({ ...collections[centerIndex], position: 0 });
    cards.push({ ...collections[rightIndex], position: 1 });
    
    return cards;
  };

  return (
    <div className="bg-black text-white p-8 md:p-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto py-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
          <div className="mb-8 md:mb-0 ml-72">
            
            <div className="relative inline-block">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">
                <span className="bg-red-600 rounded-full px-20 py-20 -mr-9 inline-block"></span>
                <span className="absolute whitespace-nowrap mt-14 -ml-12">Explore Our Collection</span>
              </h1>
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

        <div className="relative flex flex-col items-center gap-8">
          <div className="w-full max-w-3xl mx-auto relative overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
              {collections.map((collection) => (
                <div key={collection.id} className="w-full flex-shrink-0">
                  <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
                    
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    
                    <div className="absolute bottom-8 left-8 z-20">
                      <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {collection.title}
                      </h2>
                      <p className="text-gray-300 max-w-md">
                        {collection.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full relative">
            <div className="hidden lg:block absolute ml-[880px] -mt-56 font-sans origin-center" style={{ transform: 'rotate(90deg) scaleY(2.5)' }}>
              <span className="text-8xl font-extrabold tracking-widest text-[110px] text-gray-300 opacity-30">
                COLLECTION
              </span>
            </div>

            <div className="relative h-[300px] flex items-center justify-center">
              {getVisibleCards().map((card) => {
                const isSelected = card.position === 0;
                
                return (
                  <div
                    key={`${card.id}-${card.position}`}
                    className={`absolute w-80 transition-all duration-300 ease-in-out
                      ${card.position === -1
                        ? 'left-[10%] scale-90 opacity-60 z-10'
                        : card.position === 0
                        ? 'left-1/2 -translate-x-1/2 scale-100 opacity-100 z-20'
                        : 'right-[10%] scale-90 opacity-60 z-10'
                      }
                      ${getCardStyle(card.position)}
                    `}
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

    </div>
  );
}