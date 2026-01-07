"use client";

import { Play } from 'lucide-react';

export default function Performance() {
  return (
    <section className="bg-white pb-16 -pt-28 px-4 md:px-8 lg:px-16">
        <div className="wrapper">
            <div className="track">
                {Array.from({ length: 8 }).map((_, i) => (
                <span key={i}>• TRY NOW • TRY NOW • TRY NOW</span>
                ))}
            </div>
        </div>


        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">

            <div className="lg:col-span-7">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Superior<br/>Performance
                </h1>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Experience cutting-edge performance with our revolutionary technology. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
                </p>
            </div>

            <div className="lg:col-span-5 flex lg:mt-56 justify-center lg:justify-end">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded transition-colors duration-300 shadow-lg">
                    Discover
                </button>
            </div>
        </div>

        <div className="max-w-7xl mx-auto relative rounded-[100px] overflow-hidden shadow-2xl">

            <img src="/images/perp.jpg" alt="Performance Car" className="w-full h-64 md:h-80 lg:h-96 object-cover" />
            
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute lg:left-48 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-96 lg:h-96 w-16 h-16 md:w-20 md:h-20 bg-red-700/70 hover:bg-red-700 rounded-[100px] flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 z-10"
            >
            <Play className="lg:w-14 lg:h-14 md:w-10 md:h-10 text-white fill-white ml-1" />
            </a>
        </div>

      <style jsx>{`
        .wrapper {
            width: 100%;
            height: 140px;
            overflow: hidden;
            display: flex;
            align-items: center;
        }

        .track {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite;
        }

        .track span {
            font-size: 3.2rem;
            font-weight: 900;
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