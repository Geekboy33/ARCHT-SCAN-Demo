import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Bell } from 'lucide-react';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeSystem';
import { NotificationBadge } from '../ui/NotificationSystem';
import { GlobalSearch } from '../ui/GlobalSearch';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Professional scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Professional keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setActiveDropdown(null);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Protocol', 
      path: '/protocol',
      dropdown: [
        { name: 'Architecture', path: '/protocol/architecture', description: '6-layer sovereign infrastructure' },
        { name: 'LegalVault™', path: '/protocol/legalvault', description: 'Compliance & certification' },
        { name: 'SkyLink Bridge', path: '/protocol/skylink', description: 'Cross-chain interoperability' },
        { name: 'MRV / ESG', path: '/protocol/mrv-esg', description: 'Environmental monitoring' }
      ]
    },
    { 
      name: 'Platform', 
      path: '/platform',
      dropdown: [
        { name: 'ARCHT SCAN', path: '/platform/archt-scan', description: 'Advanced asset monitoring' },
        { name: 'Dashboards', path: '/platform/dashboards', description: 'Professional analytics' },
        { name: 'Indices', path: '/platform/indices', description: 'Market indices tracking' },
        { name: 'Data & API', path: '/platform/data-api', description: 'Enterprise data access' }
      ]
    },
    { 
      name: 'Assets', 
      path: '/assets',
      dropdown: [
        { name: 'Brazil Pilot', path: '/assets/brazil', description: 'Sovereign pilot program' },
        { name: 'Asset Explorer', path: '/assets/explorer', description: 'Global asset catalog' }
      ]
    },
    { name: 'Economics', path: '/economics' },
    { name: 'Governance', path: '/governance' },
    { name: 'Onboarding', path: '/onboarding' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Risk & Security', path: '/risk' },
    { name: 'Impact', path: '/impact' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const handleDropdownToggle = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-professional' 
        : 'bg-black/80 backdrop-blur-md border-b border-white/5'
    }`}>
      <div className="container-professional">
        <div className="flex justify-between items-center h-20">
          {/* Professional Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group" onClick={handleLinkClick}>
              <div className="w-10 h-10 bg-gradient-to-r from-white to-gray-200 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-105">
                <span className="text-black font-black text-xl">A</span>
              </div>
              <span className="ml-3 text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                ARCHT
              </span>
            </Link>
          </div>

          {/* Professional Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-2">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive(item.path)
                            ? 'bg-white/10 text-white shadow-professional'
                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        }`}
                        onClick={() => handleDropdownToggle(item.name)}
                      >
                        {item.name}
                        <ChevronDown className={`ml-2 w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-floating z-50 overflow-hidden">
                          <div className="p-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className={`block p-4 rounded-xl transition-all duration-200 group ${
                                  isActive(subItem.path)
                                    ? 'bg-white/10 text-white'
                                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                }`}
                                onClick={handleLinkClick}
                              >
                                <div className="font-medium text-sm mb-1 group-hover:text-cyan-300 transition-colors">
                                  {subItem.name}
                                </div>
                                <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                                  {subItem.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive(item.path)
                          ? 'bg-white/10 text-white shadow-professional'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Professional Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {/* Professional Search */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 group"
              >
                <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">Search</span>
                <kbd className="hidden xl:inline-flex items-center px-2 py-1 text-xs font-medium text-gray-500 bg-white/5 border border-white/10 rounded-lg">
                  ⌘K
                </kbd>
              </Button>

              {/* Professional Notifications */}
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <NotificationBadge />
              </Button>

              <ThemeToggle />
            </div>

            <div className="w-px h-8 bg-white/10"></div>

            <Button variant="outline" size="default" asChild elevation="base">
              <Link to="/onboarding" onClick={handleLinkClick}>
                Government Onboarding
              </Link>
            </Button>
            
            <Button size="default" variant="primary" asChild elevation="elevated">
              <Link to="/platform" onClick={handleLinkClick}>
                Explore Platform
              </Link>
            </Button>
          </div>

          {/* Professional Mobile Controls */}
          <div className="lg:hidden flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <Search className="w-4 h-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon-sm"
              className="text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <NotificationBadge />
            </Button>

            <ThemeToggle />

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Professional Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-white/10">
          <div className="bg-black/95 backdrop-blur-xl">
            <div className="container-padding py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.dropdown ? (
                    <div>
                      <button
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                          isActive(item.path)
                            ? 'bg-white/10 text-white'
                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        }`}
                        onClick={() => handleDropdownToggle(item.name)}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`block px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                                isActive(subItem.path)
                                  ? 'bg-white/10 text-white'
                                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
                              }`}
                              onClick={handleLinkClick}
                            >
                              <div className="font-medium">{subItem.name}</div>
                              <div className="text-xs text-gray-500 mt-1">{subItem.description}</div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                        isActive(item.path)
                          ? 'bg-white/10 text-white'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-6 pb-4 border-t border-white/10 mt-6">
                <div className="space-y-3">
                  <Button variant="outline" size="default" className="w-full" asChild>
                    <Link to="/onboarding" onClick={handleLinkClick}>
                      Government Onboarding
                    </Link>
                  </Button>
                  <Button size="default" variant="primary" className="w-full" asChild>
                    <Link to="/platform" onClick={handleLinkClick}>
                      Explore Platform
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Professional Global Search */}
      <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}