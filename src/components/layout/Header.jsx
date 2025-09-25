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
  const location = useLocation();

  // Cerrar dropdowns cuando cambie la ruta
  useEffect(() => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Manejar tecla de búsqueda
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
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
        { name: 'Dashboards', path: '/platform/dashboards' },
        { name: 'Indices', path: '/platform/indices' },
        { name: 'Data & API', path: '/platform/data-api' }
      ]
    },
    { 
      name: 'Assets', 
      path: '/assets',
      dropdown: [
        { name: 'Brazil Pilot', path: '/assets/brazil' }
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
    <header className="bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={handleLinkClick}>
              <div className="w-8 h-8 bg-gradient-to-r from-white to-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">A</span>
              </div>
              <span className="ml-2 text-xl font-bold text-white">ARCHT</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div>
                      <button
                        className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                          isActive(item.path)
                            ? 'bg-white/10 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                        onClick={() => handleDropdownToggle(item.name)}
                      >
                        <div className="flex items-center justify-between">
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </div>
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 space-y-1 mt-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`block px-3 py-1 rounded-md text-sm transition-colors ${
                                isActive(subItem.path)
                                  ? 'bg-white/10 text-white'
                                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                              }`}
                              onClick={handleLinkClick}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.path)
                          ? 'bg-white/10 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
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

          {/* CTA Buttons */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {/* Botones de acción */}
              <div className="flex items-center space-x-2">
                {/* Búsqueda */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <Search className="w-4 h-4" />
                  <span className="text-sm">Search</span>
                  <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-xs font-medium text-gray-400 bg-gray-800 border border-gray-700 rounded">
                    ⌘K
                  </kbd>
                </Button>

                {/* Notificaciones */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <NotificationBadge />
                </Button>

                {/* Toggle de tema */}
                <ThemeToggle />
              </div>

              <Button variant="outline" size="sm" asChild>
                <Link to="/onboarding" onClick={handleLinkClick}>Government Onboarding</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/platform" onClick={handleLinkClick}>Explore Platform</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Botones móviles */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <Search className="w-4 h-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <NotificationBadge />
            </Button>

            <ThemeToggle />

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.dropdown ? (
                  <div>
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                        isActive(item.path)
                          ? 'bg-white/10 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                      onClick={() => handleDropdownToggle(item.name)}
                    >
                      <div className="flex items-center justify-between">
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </div>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="ml-4 space-y-1 mt-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`block px-3 py-1 rounded-md text-sm transition-colors ${
                              isActive(subItem.path)
                                ? 'bg-white/10 text-white'
                                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                            }`}
                            onClick={handleLinkClick}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive(item.path)
                        ? 'bg-white/10 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/onboarding" onClick={handleLinkClick}>Government Onboarding</Link>
                </Button>
                <Button size="sm" className="w-full" asChild>
                  <Link to="/platform" onClick={handleLinkClick}>Explore Platform</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Search Modal */}
      <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}