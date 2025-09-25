import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Protocol', 
      path: '/protocol',
      dropdown: [
        { name: 'Architecture', path: '/protocol/architecture' },
        { name: 'LegalVault™', path: '/protocol/legalvault' },
        { name: 'SkyLink Bridge', path: '/protocol/skylink' },
        { name: 'MRV / ESG', path: '/protocol/mrv-esg' }
      ]
    },
    { 
      name: 'Platform', 
      path: '/platform',
      dropdown: [
        { name: 'ARCHT SCAN', path: '/platform/archt-scan' },
        { name: 'Dashboards', path: '/platform/dashboards' },
        { name: 'Indices', path: '/platform/indices' },
        { name: 'Data & API', path: '/platform/data-api' }
      ]
    },
    { 
      name: 'Assets', 
      path: '/assets',
      dropdown: [
        { name: 'Brazil Pilot', path: '/assets/brazil' },
        { name: 'Asset Explorer', path: '/assets/explorer' }
      ]
    },
    { name: 'Economics', path: '/economics' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-white/[.10] shadow-2xl' 
        : 'bg-black/80 backdrop-blur-md border-b border-white/[.05]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-r from-white to-gray-200 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-105">
                <span className="text-black font-black text-xl">A</span>
              </div>
              <span className="ml-3 text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                ARCHT
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <>
                      <Link
                        to={item.path}
                        className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive(item.path)
                            ? 'bg-white/[.10] text-white shadow-lg'
                            : 'text-gray-300 hover:bg-white/[.05] hover:text-white'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="ml-2 w-4 h-4" />
                      </Link>
                      
                      <div className="absolute top-full left-0 mt-2 w-72 bg-black/95 backdrop-blur-xl border border-white/[.10] rounded-2xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="p-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`block p-4 rounded-xl transition-all duration-200 ${
                                isActive(subItem.path)
                                  ? 'bg-white/[.10] text-white'
                                  : 'text-gray-300 hover:bg-white/[.05] hover:text-white'
                              }`}
                            >
                              <div className="font-medium text-sm">
                                {subItem.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive(item.path)
                          ? 'bg-white/[.10] text-white shadow-lg'
                          : 'text-gray-300 hover:bg-white/[.05] hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="default" asChild>
              <Link to="/onboarding">
                Government Onboarding
              </Link>
            </Button>
            
            <Button size="default" variant="primary" asChild>
              <Link to="/platform">
                Explore Platform
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/[.10]">
            <div className="bg-black/95 backdrop-blur-xl">
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.path}>
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                        isActive(item.path)
                          ? 'bg-white/[.10] text-white'
                          : 'text-gray-300 hover:bg-white/[.05] hover:text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    
                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`block px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                              isActive(subItem.path)
                                ? 'bg-white/[.10] text-white'
                                : 'text-gray-400 hover:bg-white/[.05] hover:text-white'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-6 pb-4 border-t border-white/[.10] mt-6">
                  <div className="space-y-3">
                    <Button variant="outline" size="default" className="w-full" asChild>
                      <Link to="/onboarding" onClick={() => setIsMenuOpen(false)}>
                        Government Onboarding
                      </Link>
                    </Button>
                    <Button size="default" variant="primary" className="w-full" asChild>
                      <Link to="/platform" onClick={() => setIsMenuOpen(false)}>
                        Explore Platform
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}