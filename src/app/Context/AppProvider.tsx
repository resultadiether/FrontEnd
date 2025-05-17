'use client';

import { createContext, useContext, useState } from 'react';
import Loader from '@/app/components/Loader';
import axios from 'axios';
import { toast } from 'react-hot-toast'; 
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

interface AppProviderType {
  isloading: boolean;
  authToken: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (
    name: string,
    email: string,
    password: string,
    password_confirmation: string
  ) => Promise<void>;
  logout: () => void;
}

const AppContext = createContext<AppProviderType | undefined>(undefined);

const API_URL = '${process.env.NEXT_PUBLIC_API_URL}';

export const AppProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false); 
  const router = useRouter();

  const login = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        email,
        password,
      });

      if (response.data.status) {
        Cookies.set('AuthToken', response.data.token, { expires: 7 });
        toast.success('Login successful');
        setAuthToken(response.data.token);
        router.push('/Dashboard/User');
      } else {
        toast.error('Login failed');
      }

      console.log('Login response:', response.data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    password_confirmation: string
  ) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        name,
        email,
        password,
        password_confirmation,
      });

      console.log('Registration response:', response.data);
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

 
  const logout = () => {
    setAuthToken(null);
    Cookies.remove('AuthToken');
   
    setShowLogoutModal(true); 
    setIsLoading(false);
  };

  
  const handleCloseModal = () => {
    setShowLogoutModal(false);
    router.push('/Auth');
  };

  return (
    <AppContext.Provider value={{ login, register, isloading, authToken, logout }}>
      {isloading ? <Loader /> : children}

      {/* Logout confirmation modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-auto shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Log out successful</h2>
            <p className="mb-6">You have been logged out successfully.</p>
            <button
              onClick={handleCloseModal}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </AppContext.Provider>
  );
};

export const myAppHook = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('myAppHook must be used within an AppProvider');
  }
  return context;
};
