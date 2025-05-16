"use client";

import { log } from 'console';
import React, { useState } from 'react';
import { myAppHook } from '../Context/AppProvider';

interface FormData {
  name?: string;
  email: string;
  password: string;
  password_confirmation?: string;
}


const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });


  const {login, register} = myAppHook();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLogin) {
     
      try {
      await login(formData.email, formData.password);
    }catch (error) {
      console.error('Login failed');
   
    }

    } else {
      
      try {
        await register(
          formData.name!,
          formData.email,
          formData.password,
          formData.password_confirmation!
        );
      } catch (error) {
        console.error('Registration failed ${error}');
      }
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/login.page.jpg')" }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-lg shadow-md w-full max-w-md">
        <h3 className="text-2xl font-semibold text-center mb-4">
          {isLogin ? 'Login' : 'Register'}
        </h3>

        <form className="space-y-3 mb-6" onSubmit={handleFormSubmit}>
          {!isLogin && (
            <input
              className="w-full p-3 border border-gray-300 rounded"
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            className="w-full p-3 border border-gray-300 rounded"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 border border-gray-300 rounded"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {!isLogin && (
            <input
              className="w-full p-3 border border-gray-300 rounded"
              name="password_confirmation"
              type="password"
              placeholder="Confirm Password"
              value={formData.password_confirmation}
              onChange={handleChange}
              required
            />
          )}
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
            type="submit"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="text-center text-sm">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span
            className="text-blue-500 cursor-pointer underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Register' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
