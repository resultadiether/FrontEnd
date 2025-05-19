'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import Loader from '@/app/components/Loader';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

interface UserType {
  name: string;
  email: string;
  role: string;
}

interface AppProviderType {
  isloading: boolean;
  authToken: string | null;
  user: UserType | null;
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

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserType | null>(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // Restore session from cookies
    const token = Cookies.get('AuthToken');
    const name = Cookies.get('UserName');
    const email = Cookies.get('UserEmail');
    const role = Cookies.get('UserRole');

    if (token) {
      setAuthToken(token);
    }

    if (name && email && role) {
      setUser({ name, email, role });
    }
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        email,
        password,
      });

      if (response.data.status) {
        const token = response.data.token;
        const name = response.data.user?.name || 'Unknown';
        const userEmail = response.data.user?.email || email;
        const role = response.data.user?.role || 'user';

        Cookies.set('AuthToken', token, { expires: 7 });
        Cookies.set('UserName', name, { expires: 7 });
        Cookies.set('UserEmail', userEmail, { expires: 7 });
        Cookies.set('UserRole', role, { expires: 7 });

        setAuthToken(token);
        setUser({ name, email: userEmail, role });

        toast.success('Login successful');

        if (role === 'admin') {
          router.push('/Dashboard/Admin');
        } else {
          router.push('/Dashboard/User');
        }
      } else {
        toast.error('Login failed');
      }

      console.log('Login response:', response.data);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Login error');
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
      toast.success('Registration successful');
      router.push('/Auth');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    Cookies.remove('AuthToken');
    Cookies.remove('UserName');
    Cookies.remove('UserEmail');
    Cookies.remove('UserRole');
    setShowLogoutModal(true);
  };

  const handleCloseModal = () => {
    setShowLogoutModal(false);
    router.push('/Auth');
  };

  return (
    <AppContext.Provider
      value={{
        login,
        register,
        isloading,
        authToken,
        logout,
        user,
      }}
    >
      {isloading ? <Loader /> : children}

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-auto shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Logged out</h2>
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
