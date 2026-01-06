"use client";

import { Play } from 'lucide-react';

export default function Performance() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="try-wrapper mb-16">
            <div className="try-track">
                {Array.from({ length: 10 }).map((_, i) => (
                <span key={i}>TRY NOW • TRY NOW • TRY NOW • TRY NOW •</span>
                ))}
            </div>
        </div>


        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">

            <div className="lg:col-span-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Superior<br />Performance
                </h1>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Experience cutting-edge performance with our revolutionary technology. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
                </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded transition-colors duration-300 shadow-lg">
                    Discover
                </button>
            </div>
        </div>

        <div className="max-w-7xl mx-auto relative rounded-[50px] overflow-hidden shadow-2xl">

            <img 
            src="/images/perp.jpg" 
            alt="Performance Car"
            className="w-full h-64 md:h-80 lg:h-96 object-cover"
            />
            
            <a 
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 z-10"
            >
            <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
            </a>
        </div>

      <style jsx>{`
        .try-wrapper {
            width: 100%;
            height: 140px;
            overflow: hidden;
            display: flex;
            align-items: center;
        }

        .try-track {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite;
        }

        .try-track span {
            font-size: 3.2rem;
            font-weight: 800;
            color: #d1d5db;
            white-space: nowrap;
            padding-right: 3rem;
        }

        @keyframes marquee {
            from {
            transform: translateX(0);
            }
            to {
            transform: translateX(-50%);
            }
        }
        `}</style>

    </section>
  );
}