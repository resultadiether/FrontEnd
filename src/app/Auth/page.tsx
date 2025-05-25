"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name?: string;
  email: string;
  password: string;
  password_confirmation?: string;
}

const formVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const url = isLogin
        ? 'https://laravel-backend-1qc0.onrender.com/api/login'
        : 'https://laravel-backend-1qc0.onrender.com/api/register';

      const body = isLogin
        ? {
            email: formData.email,
            password: formData.password,
          }
        : {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            password_confirmation: formData.password_confirmation,
          };

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      const data = await res.json();
      console.log('Success:', data);

      // Optional: store token
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
    } catch (error) {
      console.error(`${isLogin ? 'Login' : 'Registration'} failed:`, error);
    }
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center px-4 bg-gray-900 bg-cover bg-center"
      style={{ backgroundImage: "url('/login-bg2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative flex flex-col md:flex-row w-full max-w-4xl rounded-2xl overflow-hidden border border-white/30 z-10">
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src="/bg3.jpg"
            alt="Login Visual"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-10"></div>
        </div>

        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <motion.div
            key={isLogin ? 'login' : 'register'}
            variants={formVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-white/20 backdrop-blur-sm p-8 rounded-lg shadow-md border border-white/30"
          >
            <h3 className="text-3xl font-semibold text-center text-white mb-8">
              {isLogin ? 'Login' : 'Register'}
            </h3>

            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.input
                    key="name"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full p-4 border border-white/50 rounded-lg bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                )}
              </AnimatePresence>

              <input
                className="w-full p-4 border border-white/50 rounded-lg bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                className="w-full p-4 border border-white/50 rounded-lg bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.input
                    key="password_confirmation"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full p-4 border border-white/50 rounded-lg bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    name="password_confirmation"
                    type="password"
                    placeholder="Confirm Password"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    required
                  />
                )}
              </AnimatePresence>

              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold shadow-md transition-colors duration-200"
                type="submit"
              >
                {isLogin ? 'Login' : 'Register'}
              </button>
            </form>

            <p className="text-center text-sm text-white mt-6">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <span
                className="text-blue-300 cursor-pointer underline hover:text-blue-400"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Register' : 'Login'}
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
