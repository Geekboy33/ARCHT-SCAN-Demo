import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Spinner } from '../ui/Loading';

export function Layout({ children }) {
  const location = useLocation();
  const [isLoading, setIsLoading] = React.useState(false);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="w-full min-h-[calc(100vh-4rem)]">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}