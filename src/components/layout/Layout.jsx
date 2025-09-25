import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout({ children }) {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow relative overflow-y-auto">
        <div className="w-full">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}