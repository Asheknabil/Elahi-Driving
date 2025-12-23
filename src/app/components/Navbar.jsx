"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMessageCircle, FiUser } from "react-icons/fi";
import "./hamburger.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b px-30 py-[6px]">
      <nav className="relative h-[70px] flex items-center justify-between">

        {/* LEFT LINKS — DESKTOP */}
        <div className="hidden lg:flex gap-8 text-sm text-gray-700">
          {["Home", "Solution", "Benefits", "About Us"].map((item, idx) => (
            <Link
              key={idx}
              href={
                idx === 0
                  ? "/"
                  : "/" + item.toLowerCase().replace(" ", "-")
              }
              className="transition-transform duration-200 hover:scale-[1.07]"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 px-[15px]">
          <h1 className="text-3xl font-bold tracking-wide">ELAHI</h1>
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4 text-gray-700">

          {/* Hover Zoom Icons */}
          <FiMessageCircle
            size={20}
            className="cursor-pointer transition-transform duration-200 hover:scale-[1.2]"
          />

          <FiUser
            size={20}
            className="cursor-pointer transition-transform duration-200 hover:scale-[1.2]"
          />

          {/* Divider */}
          <span className="h-[18px] w-[1px] bg-black opacity-40"></span>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className={`ham-btn no-bg ${open ? "active" : ""}`}
          >
            <i className="bx bx-menu open"></i>
            <i className="bx bx-x close"></i>
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="lg:hidden bg-white border-t px-8 py-6 space-y-4">

          <div className="space-y-3 text-sm">
            {["Home", "Solution", "Benefits", "About Us"].map((item, idx) => (
              <Link
                key={idx}
                href={
                  idx === 0
                    ? "/"
                    : "/" + item.toLowerCase().replace(" ", "-")
                }
                className="block transition-transform duration-200 hover:scale-[1.07]"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex gap-4 pt-2">
            <button className="px-5 py-2 border rounded-md text-sm">
              Login
            </button>
            <button className="px-5 py-2 bg-black text-white rounded-md text-sm">
              Sign Up
            </button>
          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;
