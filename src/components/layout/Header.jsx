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

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-black/80 backdrop-blur-md border-b border-white/5'
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
              {/* Home */}
              <Link
                to="/"
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive('/')
                    ? 'bg-white/10 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                Home
              </Link>

              {/* Protocol with Dropdown */}
              <div className="relative group">
                <Link
                  to="/protocol"
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive('/protocol')
                      ? 'bg-white/10 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  Protocol
                  <ChevronDown className="ml-2 w-4 h-4" />
                </Link>
                
                <div className="absolute top-full left-0 mt-2 w-72 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-2">
                    <Link
                      to="/protocol/architecture"
                      className={`block p-4 rounded-xl transition-all duration-200 ${
                        isActive('/protocol/architecture')
                          ? 'bg-white/10 text-white'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="font-medium text-sm">Architecture</div>
                    </Link>
                    <Link
                      to="/protocol/legalvault"
                      className={`block p-4 rounded-xl transition-all duration-200 ${
                        isActive('/protocol/legalvault')
                          ? 'bg-white/10 text-white'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="font-medium text-sm">LegalVault™</div>
                    </Link>
                    <Link
                      to="/protocol/skylink"
                      className={`block p-4 rounded-xl transition-all duration-200 ${
                        isActive('/protocol/skylink')
                          ? 'bg-white/10 text-white'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="font-medium text-sm">SkyLink Bridge</div>
                    </Link>
                    <Link
                      to="/protocol/mrv-esg"
                      className={`block p-4 rounded-xl transition-all duration-200 ${
                        isActive('/protocol/mrv-esg')
                          ? 'bg-white/10 text-white'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="font-medium text-sm">MRV / ESG</div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Platform with Dropdown */}
              <div className="relative group">
                <Link
                  to="/platform"
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive('/platform')
                      ? 'bg-white/10 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  Platform
                  <ChevronDown className="ml-2 w-4 h-4" />
                </Link>
                
                <div className="absolute top-full left-0 mt-2 w-72 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-2">
                    <Link
                      to="/dashboard"
                      className={`block p-4 rounded-xl transition-all duration-200 ${
                        isActive('/dashboard')
                          ? 'bg-white/10 text-white'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="font-medium text-sm">ARCHT SCAN</div>
                    </Link>
                    <Link
                      to="/platform/dashboards"
                      className={`block p-4 rounded-xl transition-all duration-200 ${
                        isActive('/platform/dashboards')
                          ? 'bg-white/10 text-white'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="font-medium text-sm">Dashboards</div>
                    </Link>
                    <Link
                      to="/platform/indices"
                      className={`block p-4 rounded-xl transition-all duration-200 ${
                        isActive('/platform/indices')
                          ? 'bg-white/10 text-white'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="font-medium text-sm">Indices</div>
                    </Link>
                    <Link
                      to="/platform/data-api"
                      className={`block p-4 rounded-xl transition-all duration-200 ${
                        isActive('/platform/data-api')
                          ? 'bg-white/10 text-white'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="font-medium text-sm">Data & API</div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Assets with Dropdown */}
              <div className="relative group">
                <Link
                  to="/assets"
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive('/assets')
                      ? 'bg-white/10 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  Assets
                  <ChevronDown className="ml-2 w-4 h-4" />
                </Link>
                
                <div className="absolute top-full left-0 mt-2 w-72 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-2">
                    <Link
                      to="/assets/brazil"
                      className={`block p-4 rounded-xl transition-all duration-200 ${
                        isActive('/assets/brazil')
                          ? 'bg-white/10 text-white'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="font-medium text-sm">Brazil Pilot</div>
                    </Link>
                    <Link
                      to="/assets/explorer"
                      className={`block p-4 rounded-xl transition-all duration-200 ${
                        isActive('/assets/explorer')
                          ? 'bg-white/10 text-white'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="font-medium text-sm">Asset Explorer</div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Economics */}
              <Link
                to="/economics"
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive('/economics')
                    ? 'bg-white/10 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                Economics
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive('/contact')
                    ? 'bg-white/10 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                Contact
              </Link>
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
          <div className="lg:hidden border-t border-white/10">
            <div className="bg-black/95 backdrop-blur-xl">
              <div className="px-4 py-4 space-y-2">
                <Link
                  to="/"
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive('/')
                      ? 'bg-white/10 text-white'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Protocol Section */}
                <div>
                  <Link
                    to="/protocol"
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActive('/protocol')
                        ? 'bg-white/10 text-white'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Protocol
                  </Link>
                  <div className="ml-4 mt-2 space-y-1">
                    <Link
                      to="/protocol/architecture"
                      className={`block px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                        isActive('/protocol/architecture')
                          ? 'bg-white/10 text-white'
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Architecture
                    </Link>
                    <Link
                      to="/protocol/legalvault"
                      className={`block px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                        isActive('/protocol/legalvault')
                          ? 'bg-white/10 text-white'
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      LegalVault™
                    </Link>
                    <Link
                      to="/protocol/skylink"
                      className={`block px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                        isActive('/protocol/skylink')
                          ? 'bg-white/10 text-white'
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      SkyLink Bridge
                    </Link>
                    <Link
                      to="/protocol/mrv-esg"
                      className={`block px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                        isActive('/protocol/mrv-esg')
                          ? 'bg-white/10 text-white'
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      MRV / ESG
                    </Link>
                  </div>
                </div>

                {/* Platform Section */}
                <div>
                  <Link
                    to="/platform"
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActive('/platform')
                        ? 'bg-white/10 text-white'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Platform
                  </Link>
                  <div className="ml-4 mt-2 space-y-1">
                    <Link
                      to="/dashboard"
                      className={`block px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                        isActive('/dashboard')
                          ? 'bg-white/10 text-white'
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      ARCHT SCAN
                    </Link>
                    <Link
                      to="/platform/dashboards"
                      className={`block px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                        isActive('/platform/dashboards')
                          ? 'bg-white/10 text-white'
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboards
                    </Link>
                    <Link
                      to="/platform/indices"
                      className={`block px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                        isActive('/platform/indices')
                          ? 'bg-white/10 text-white'
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Indices
                    </Link>
                    <Link
                      to="/platform/data-api"
                      className={`block px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                        isActive('/platform/data-api')
                          ? 'bg-white/10 text-white'
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Data & API
                    </Link>
                  </div>
                </div>

                {/* Assets Section */}
                <div>
                  <Link
                    to="/assets"
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActive('/assets')
                        ? 'bg-white/10 text-white'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Assets
                  </Link>
                  <div className="ml-4 mt-2 space-y-1">
                    <Link
                      to="/assets/brazil"
                      className={`block px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                        isActive('/assets/brazil')
                          ? 'bg-white/10 text-white'
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Brazil Pilot
                    </Link>
                    <Link
                      to="/assets/explorer"
                      className={`block px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                        isActive('/assets/explorer')
                          ? 'bg-white/10 text-white'
                          : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Asset Explorer
                    </Link>
                  </div>
                </div>

                <Link
                  to="/economics"
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive('/economics')
                      ? 'bg-white/10 text-white'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Economics
                </Link>

                <Link
                  to="/contact"
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive('/contact')
                      ? 'bg-white/10 text-white'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                
                <div className="pt-6 pb-4 border-t border-white/10 mt-6">
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