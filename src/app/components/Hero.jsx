"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Performance",
    subtitle: "Toyota Supra",
    img: "/images/hero.png",
    desc: "Experience the thrill of speed with the iconic Toyota Supra, featuring a sleek silver metallic finish and aerodynamic precision."
  },
  {
    title: "Adventure",
    subtitle: "Range Rover Evoque",
    img: "/images/hero2.png",
    desc: "Command the road with the Range Rover Evoque. Its bold orange exterior and off-road capabilities make it the perfect luxury SUV for any terrain."
  },
  {
    title: "Elegance",
    subtitle: "Mazda 6",
    img: "/images/hero3.png",
    desc: "The Mazda 6 combines sophisticated design with dynamic handling, wrapped in a stunning Soul Red Crystal finish for a premium look."
  },
  {
    title: "Modernity",
    subtitle: "Mazda 3",
    img: "/images/hero4.png",
    desc: "A perfect blend of minimalism and technology. The Mazda 3 in Machine Grey offers a refined driving experience for the modern commuter."
  },
  {
    title: "Exotic",
    subtitle: "Porsche 718 Cayman",
    img: "/images/hero6.png",
    desc: "Unleash pure power with the Porsche 718 Cayman. Its vibrant racing yellow color and mid-engine layout deliver an authentic racing feel."
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // অটো স্লাইডার সেটআপ
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="w-full bg-white py-12 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="grid grid-cols-12 items-center min-h-[600px]">
          
          {/* LEFT ROTATED TEXT */}
          <div className="hidden lg:flex col-span-2 justify-center items-center relative h-full">
            <span className="absolute rotate-[-90deg] text-gray-200 text-[150px] xl:text-[180px] font-extrabold tracking-[0.2em] whitespace-nowrap pointer-events-none select-none">
              ELAHI
            </span>
          </div>

          {/* CENTER CONTENT */}
          <div className="col-span-12 lg:col-span-8 flex flex-col items-center text-center z-10">
            <p className="text-sm md:text-base text-gray-400 tracking-widest uppercase">
              Explore the Art of
            </p>

            <div className="h-[100px] flex items-center justify-center">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-[0.2em] uppercase transition-all duration-500">
                {slides[current].title}
              </h1>
            </div>

            {/* IMAGE AREA */}
            <div className="relative w-full h-[300px] md:h-[400px] flex justify-center items-center my-4">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 flex justify-center items-center transition-all duration-700 ease-in-out ${
                    current === idx ? "opacity-100 scale-100 z-20" : "opacity-0 scale-90 z-10"
                  }`}
                >
                  <Image
                    src={slide.img}
                    alt={slide.subtitle}
                    width={700}
                    height={400}
                    priority={idx === 0} // শুধু প্রথম ইমেজটি প্রায়োরিটি পাবে
                    className="object-contain max-h-full"
                  />
                </div>
              ))}
            </div>

            <div className="h-[80px] md:h-[60px] flex items-center">
              <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
                {slides[current].desc}
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-10">
              <button className="bg-red-600 text-white px-8 py-3 text-sm font-bold hover:bg-red-700 transition-all shadow-lg">
                GET STARTED
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-3 text-sm font-bold hover:bg-red-50 transition-all">
                DISCOVER
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - Navigation */}
          <div className="hidden lg:flex col-span-2 h-full items-center justify-center relative">
            <div className="flex flex-col space-y-28">
              {slides.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`relative transition-all duration-300 transform rotate-90 origin-center whitespace-nowrap ${
                    current === idx
                      ? "text-red-600 scale-110 font-bold"
                      : "text-gray-400 hover:text-gray-600 font-medium"
                  }`}
                >
                  <span className="block text-xs uppercase tracking-tighter">{item.title}</span>
                  <span className="block text-[10px] opacity-70">{item.subtitle}</span>
                  {current === idx && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-red-600"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}