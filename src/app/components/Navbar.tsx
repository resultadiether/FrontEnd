"use client"
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-white text-2xl font-bold">
          Library Management System
        </Link>

        <button
          className="lg:hidden text-white"
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
          className={`lg:flex lg:items-center lg:w-auto ${isMobileMenuOpen ? "block" : "hidden"} w-full`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 text-white">
            <li>
              <Link href="/dashboard" className="block px-4 py-2 text-lg hover:bg-blue-700 rounded">
                Dashboard
              </Link>
            </li>
            <li>
              <button className="block px-4 py-2 text-lg bg-red-600 hover:bg-red-700 rounded">
                Logout
              </button>
            </li>
            <li>
              <Link href="/" className="block px-4 py-2 text-lg hover:bg-blue-700 rounded">
                Home
              </Link>
            </li>
            <li>
              <Link href="/auth" className="block px-4 py-2 text-lg hover:bg-blue-700 rounded">
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