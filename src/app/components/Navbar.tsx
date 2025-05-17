"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "./Loader";
import { myAppHook } from "../Context/AppProvider";

const Navbar = () => {
  const { logout: handleLogout, authToken } = myAppHook();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigateWithLoader = (path: string) => {
    setIsLoading(true);
    setTimeout(() => {
      router.push(path);
      setIsLoading(false);
    }, 500);
  };

  function handleButtonLogout(event: React.MouseEvent<HTMLButtonElement>): void {
    handleLogout();
  }

  return (
    <>
      {isLoading && <Loader />}

      <nav className="absolute top-0 left-0 w-full z-20 px-6 py-4 bg-indigo-900 bg-opacity-80 backdrop-blur-md">
        <div className="flex items-center justify-between text-white">
          {/* Logo / Title */}
          <button
            onClick={() => navigateWithLoader("/")}
            className="text-2xl font-bold hover:text-indigo-300 transition"
          >
            Library Management System
          </button>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6 text-indigo-300"
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

          {/* Menu Items */}
          <div
            className={`lg:flex lg:items-center ${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full lg:w-auto mt-4 lg:mt-0`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-4 gap-2 text-white">
              {authToken ? (
                <>
                  <li>
                    <button
                      onClick={() => navigateWithLoader("/dashboard")}
                      className="px-5 py-2 text-lg font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 transition duration-200 shadow-md"
                    >
                      Dashboard
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleButtonLogout}
                      className="px-5 py-2 text-lg font-medium rounded-lg bg-red-500 hover:bg-red-600 transition duration-200 shadow-md"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <button
                      onClick={() => navigateWithLoader("/")}
                      className="px-5 py-2 text-lg font-medium rounded-lg bg-white text-indigo-900 hover:bg-indigo-100 transition duration-200 shadow-md"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigateWithLoader("/Auth")}
                      className="px-5 py-2 text-lg font-medium rounded-lg bg-green-500 hover:bg-green-600 transition duration-200 shadow-md"
                    >
                      Login
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
