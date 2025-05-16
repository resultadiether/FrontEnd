'use client';

import { createContext, useContext, useState } from 'react'
import Loader from '@/app/components/Loader'
import axios from 'axios'
import { toast } from 'react-hot-toast'

interface AppProviderType {
    isloading: boolean,
    login: (email: string, password: string) => Promise<void>,
    register: (name: string, email: string, password: string, password_confirmation: string) => Promise<void>

}

const AppContext = createContext<AppProviderType|undefined>(undefined)

const API_URL = '${process.env.NEXT_PUBLIC_API_URL}'

export const AppProvider = ({ 
    children
}: {
     children: React.ReactNode;
 }) => {

    const [isloading, setIsLoading] = useState<boolean>(false)

    const login = async (email: string, password: string) => {
        setIsLoading(true)

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
                email,
                password
            });

            console.log('Login response:', response.data);
        } catch (error) {

        } finally {
            setIsLoading(false)
        }

    }
    const register = async (name: string, email: string, password: string, password_confirmation: string ) => {
        setIsLoading(true)
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
                name,
                email,
                password,
                password_confirmation
            });

            console.log('Registration response:', response.data);
    } catch (error) {
            console.error('Registration failed:', error);
        } finally {
            setIsLoading(false)

        }
    }

    return (
        <AppContext.Provider value={{ login, register, isloading }}>
            { isloading ? <Loader /> : children }
        </AppContext.Provider>
    )
}

export const myAppHook = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('myAppHook must be used within an AppProvider');
    }

    return context;
};



