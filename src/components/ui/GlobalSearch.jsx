import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, Clock, TrendingUp, Globe, FileText, Users } from 'lucide-react';
import { Button } from './Button';
import { Card, CardContent } from './Card';
import { getAllAssets } from '../../data/assets';

export const GlobalSearch = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  // Cargar historial de búsquedas
  useEffect(() => {
    const saved = localStorage.getItem('archt-search-history');
    if (saved) {
      setSearchHistory(JSON.parse(saved));
      setRecentSearches(JSON.parse(saved).slice(0, 5));
    }
  }, []);

  // Enfocar input cuando se abre
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Datos de búsqueda
  const searchData = useMemo(() => {
    const assets = getAllAssets();
    const pages = [
      { id: 'home', title: 'Home', description: 'Main dashboard', path: '/', icon: Globe },
      { id: 'dashboard', title: 'ARCHT SCAN', description: 'Asset monitoring dashboard', path: '/dashboard', icon: TrendingUp },
      { id: 'protocol', title: 'Protocol', description: 'Core protocol information', path: '/protocol', icon: FileText },
      { id: 'platform', title: 'Platform', description: 'Platform features and tools', path: '/platform', icon: Users },
      { id: 'assets', title: 'Assets', description: 'Tokenized assets catalog', path: '/assets', icon: TrendingUp },
      { id: 'economics', title: 'Economics', description: 'Tokenomics and revenue model', path: '/economics', icon: TrendingUp },
    ];

    return { assets, pages };
  }, []);

  // Filtrar resultados
  const filteredResults = useMemo(() => {
    if (!query.trim()) return { assets: [], pages: [] };

    const lowerQuery = query.toLowerCase();
    
    const filteredAssets = searchData.assets.filter(asset =>
      asset.name.toLowerCase().includes(lowerQuery) ||
      asset.symbol.toLowerCase().includes(lowerQuery) ||
      asset.category.toLowerCase().includes(lowerQuery)
    ).slice(0, 8);

    const filteredPages = searchData.pages.filter(page =>
      page.title.toLowerCase().includes(lowerQuery) ||
      page.description.toLowerCase().includes(lowerQuery)
    ).slice(0, 4);

    return { assets: filteredAssets, pages: filteredPages };
  }, [query, searchData]);

  // Manejar búsqueda
  const handleSearch = (searchQuery) => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    
    // Agregar al historial
    const newHistory = [searchQuery, ...searchHistory.filter(s => s !== searchQuery)].slice(0, 10);
    setSearchHistory(newHistory);
    setRecentSearches(newHistory.slice(0, 5));
    localStorage.setItem('archt-search-history', JSON.stringify(newHistory));

    // Simular búsqueda
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 500);
  };

  // Limpiar historial
  const clearHistory = () => {
    setSearchHistory([]);
    setRecentSearches([]);
    localStorage.removeItem('archt-search-history');
  };

  // Manejar tecla Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(query);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="flex items-start justify-center pt-20 px-4">
        <div className="w-full max-w-2xl">
          {/* Barra de búsqueda */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Search assets, pages, or anything..."
              className="w-full h-14 pl-12 pr-12 bg-black/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all duration-200"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2"
            >
              <X className="w-4 h-4 text-gray-400" />
            </Button>
          </div>

          {/* Resultados */}
          <div className="mt-4 max-h-96 overflow-y-auto">
            {query.trim() ? (
              <div className="space-y-4">
                {/* Páginas */}
                {filteredResults.pages.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 mb-2 px-2">Pages</h3>
                    <div className="space-y-1">
                      {filteredResults.pages.map((page) => (
                        <Card
                          key={page.id}
                          className="bg-black/30 border border-white/10 hover:bg-black/50 transition-all duration-200 cursor-pointer"
                          onClick={() => {
                            window.location.href = page.path;
                            onClose();
                          }}
                        >
                          <CardContent className="p-3">
                            <div className="flex items-center space-x-3">
                              <page.icon className="w-4 h-4 text-white" />
                              <div>
                                <h4 className="text-sm font-semibold text-white">{page.title}</h4>
                                <p className="text-xs text-gray-400">{page.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Assets */}
                {filteredResults.assets.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 mb-2 px-2">Assets</h3>
                    <div className="space-y-1">
                      {filteredResults.assets.map((asset) => (
                        <Card
                          key={asset.symbol}
                          className="bg-black/30 border border-white/10 hover:bg-black/50 transition-all duration-200 cursor-pointer"
                          onClick={() => {
                            window.location.href = `/assets?search=${asset.symbol}`;
                            onClose();
                          }}
                        >
                          <CardContent className="p-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center">
                                  <span className="text-black font-bold text-xs">{asset.symbol}</span>
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-white">{asset.name}</h4>
                                  <p className="text-xs text-gray-400">{asset.category}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-xs text-gray-400">{asset.symbol}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sin resultados */}
                {filteredResults.pages.length === 0 && filteredResults.assets.length === 0 && (
                  <div className="text-center py-8">
                    <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">No results found for "{query}"</p>
                  </div>
                )}
              </div>
            ) : (
              /* Búsquedas recientes */
              <div>
                <div className="flex items-center justify-between mb-4 px-2">
                  <h3 className="text-sm font-semibold text-gray-400">Recent Searches</h3>
                  {recentSearches.length > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearHistory}
                      className="text-xs text-gray-500 hover:text-white"
                    >
                      Clear
                    </Button>
                  )}
                </div>
                
                {recentSearches.length > 0 ? (
                  <div className="space-y-1">
                    {recentSearches.map((search, index) => (
                      <Card
                        key={index}
                        className="bg-black/30 border border-white/10 hover:bg-black/50 transition-all duration-200 cursor-pointer"
                        onClick={() => {
                          setQuery(search);
                          handleSearch(search);
                        }}
                      >
                        <CardContent className="p-3">
                          <div className="flex items-center space-x-3">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-300">{search}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">Start typing to search...</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


