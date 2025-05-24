'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';


export default function Home() {
  const [user, setUser] = useState<{ name: string } | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a] text-white">
      <section
        className="relative w-full min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center text-center px-4 py-20"
        style={{ backgroundImage: "url('/Bg2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 max-w-4xl w-full flex flex-col items-center justify-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/logo.png"
              alt="Library Logo"
              width={90}
              height={90}
              className="mb-6 drop-shadow-xl"
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-5xl font-bold drop-shadow-lg mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to School Library
          </motion.h1>

          {/* User Info */}
          <motion.p
            className="text-lg mt-2 text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {user ? `Hello, ${user.name}!` : 'Loading user...'}
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-xl max-w-xl drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            A modern platform to borrow, track, and enjoy your favorite books anytime.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <Link
              href="/Auth"
              className="bg-blue-600 text-white py-3 px-8 mt-8 inline-block rounded-lg text-lg hover:bg-blue-700 transition duration-200 shadow-lg"
            >
              Login / Register
            </Link>
          </motion.div>

          {/* About Section */}
          <motion.div
            className="bg-[#1e293b] text-white mt-24 p-8 rounded-lg shadow-xl max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4">About Our Library</h2>
            <p className="text-lg text-gray-300">
              At School's Library, we believe knowledge should be accessible to all. 
              Our digital platform allows you to explore a diverse range of genres, 
              reserve titles, and manage your borrowing history — all from the comfort 
              of your home or device.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-auto">
        <p className="mb-0">© {new Date().getFullYear()} School's Library. All rights reserved.</p>
      </footer>
    </div>
  );
}

