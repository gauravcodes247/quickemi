'use client';

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-indigo-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Desktop Nav */}
        <div className="hidden md:flex justify-between items-center">
          {/* LEFT: Brand */}
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold text-white">
              EMI Calc
            </Link>
          </div>

          {/* CENTER: Calculators */}
          <div className="flex gap-6">
            <Link href="/personal-loan" className="hover:text-blue-300 transition">
              Personal Loan
            </Link>
            <Link href="/car-loan" className="hover:text-blue-300 transition">
              Car Loan
            </Link>
            <Link href="/home-loan" className="hover:text-blue-300 transition">
              Home Loan
            </Link>
            <Link href="/blog" className="text-cyan-400 hover:underline">
              Blog
            </Link>
          </div>

          {/* RIGHT: Pages */}
          <div className="flex gap-6">
            <Link href="/" className="hover:text-blue-300 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-300 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-300 transition">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            EMI Calc
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-3 bg-indigo-800 rounded p-4 space-y-2">
            <Link href="/" className="block hover:text-blue-300">
              Home
            </Link>
            <Link href="/personal-loan" className="block hover:text-blue-300">
              Personal Loan
            </Link>
            <Link href="/car-loan" className="block hover:text-blue-300">
              Car Loan
            </Link>
            <Link href="/home-loan" className="block hover:text-blue-300">
              Home Loan
            </Link>
            <Link href="/about" className="block hover:text-blue-300">
              About
            </Link>
            <Link href="/contact" className="block hover:text-blue-300">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
