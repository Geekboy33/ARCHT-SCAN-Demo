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
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="flex-grow relative pt-16">
        <div className="w-full min-h-screen">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}