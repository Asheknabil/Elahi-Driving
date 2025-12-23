"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  // --- SLIDER DATA ---
  const slides = [
    {
      title: "Performance",
      subtitle: "Engine Power",
      img: "/images/hero.png",
      desc:
        "Experience unmatched performance with powerful engine dynamics designed for smooth and fast driving.",
    },
    {
      title: "Design",
      subtitle: "Modern Look",
      img: "/images/hero.png",
      desc:
        "Aesthetic, minimal, and modern design elements crafted to perfection for a premium feel.",
    },
    {
      title: "Technology",
      subtitle: "Smart Systems",
      img: "/images/hero.png",
      desc:
        "Equipped with intelligent technology systems to make your experience smarter and easier.",
    },
    {
      title: "Comfort",
      subtitle: "Luxury Interior",
      img: "/images/hero.png",
      desc:
        "Premium comfort with luxurious interior features to make every ride relaxing.",
    },
    {
      title: "Safety",
      subtitle: "Advanced Control",
      img: "/images/hero.png",
      desc:
        "Advanced safety and control features to keep every journey secure and confident.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // --- AUTO SLIDE ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500); // 3.5 sec

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-8 min-h-[5vh]">
      <div className="max-w-9xl mx-auto px-4 h-full">
        <div className="grid grid-cols-10 items-center h-full">

          {/* LEFT ROTATED TEXT  */}
          <div className="hidden lg:flex col-span-2 h-full items-center justify-center">
            <span className="rotate-[-90deg] text-gray-300 text-[180px] font-extrabold tracking-[0.5em] leading-none">
              ELAHI
            </span>
          </div>

          {/* CENTER CONTENT */}
          <div className="col-span-10 lg:col-span-6 text-center">

            <p className="text-sm md:text-base text-gray-500 tracking-wide">
              Explore the Art of
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold my-4 tracking-[0.2em]">
              {slides[current].title}
            </h1>

            {/* IMAGE */}
            <div className="flex justify-center my-8 transition-all duration-500">
              <Image
                key={current}
                src={slides[current].img}
                alt="Hero"
                width={650}
                height={360}
                priority
                className="object-contain"
              />
            </div>

            {/* DESCRIPTION */}
            <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed transition-all duration-300">
              {slides[current].desc}
            </p>

            {/* BUTTONS */}
            <div className="flex justify-center gap-4 mt-8">
              <button className="bg-red-600 text-white px-6 py-3 text-sm md:text-base font-medium hover:bg-red-700 transition">
                Get Started
              </button>

              <button className="border border-red-600 text-red-600 px-6 py-3 text-sm md:text-base font-medium hover:bg-red-50 transition">
                Discover
              </button>
            </div>
          </div>

          {/* RIGHT SIDE — ROTATED BUTTON LIST */}
          <div className="hidden lg:flex col-span-2 h-full items-center justify-center">
            <div className="flex flex-col gap-10 text-gray-500 text-sm text-left">

              {slides.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`rotate-90 cursor-pointer transition font-medium ${
                    current === idx
                      ? "text-red-600 font-bold"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {item.title} <br /> {item.subtitle}
                </button>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
