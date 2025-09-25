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
    setIsLoading(true);
    window.scrollTo(0, 0);
    
    // Simular carga de página
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <Spinner size="lg" />
          <p className="text-white mt-4">Loading...</p>
        </div>
      </div>
    );
  }
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