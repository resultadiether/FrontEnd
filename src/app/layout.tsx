import type { Metadata } from "next";
import "./globals.css";
import Navbar from './components/Navbar';
import { Toaster } from "react-hot-toast"; 
import { AppProvider } from "./Context/AppProvider";

export const metadata: Metadata = {
  title: "Library Management System",
  description: "Gest your library management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Toaster />  
          <Navbar />
        {children}
        </AppProvider>
      </body>
    </html>
  );
}
