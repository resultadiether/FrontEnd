"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-20 px-6 py-4">
      <div className="flex items-center justify-between text-white">
        <Link href="/" className="text-2xl font-bold">
          Library Management System
        </Link>

        <button
          className="lg:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`lg:flex lg:items-center lg:w-auto ${isMobileMenuOpen ? "block" : "hidden"} w-full lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0 text-white">
            <li>
              <Link href="/dashboard" className="block px-4 py-2 text-lg hover:underline">
                Dashboard
              </Link>
            </li>
            <li>
              <button className="block px-4 py-2 text-lg bg-red-600 hover:bg-red-700 rounded">
                Logout
              </button>
            </li>
            <li>
              <Link href="/" className="block px-4 py-2 text-lg hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Auth" className="block px-4 py-2 text-lg hover:underline">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
