"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white py-8 min-h-[65vh]">
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="grid grid-cols-10 items-center h-full">

          {/* LEFT — FULL HEIGHT ROTATED TEXT */}
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

            <h1 className="text-5xl md:text-7xl font-extrabold  my-4 tracking-[0.2em]">
              ELAHI
            </h1>

            {/* IMAGE */}
            <div className="flex justify-center my-8">
              <Image
                src="/images/hero.png"
                alt="Hero Image"
                width={650}
                height={360}
                priority
                className="object-contain"
              />
            </div>

            {/* DESCRIPTION */}
            <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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

          {/* RIGHT — ROTATED FEATURE LIST (STACKED) */}
          <div className="hidden lg:flex col-span-2 h-full items-center justify-center">
            <div className="flex flex-col gap-20 text-gray-500 text-sm text-left">
                <p className="rotate-90">
                Performance <br /> Engine Power
                </p>
                <p className="rotate-90">
                Design <br /> Modern Look
                </p>
                <p className="rotate-90">
                Technology <br /> Smart Systems
                </p>
                <p className="rotate-90">
                Comfort <br /> Luxury Interior
                </p>
                <p className="rotate-90">
                Safety <br /> Advanced Control
                </p>
            </div>
        </div>


        </div>
      </div>
    </section>
  );
}
