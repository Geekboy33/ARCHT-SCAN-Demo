import React, { createContext, useContext, useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { Button } from './Button';

// Context para el tema
const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

// Provider del tema
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Obtener tema guardado o usar 'dark' por defecto
    const savedTheme = localStorage.getItem('archt-theme');
    return savedTheme || 'dark';
  });

  const [systemTheme, setSystemTheme] = useState('dark');

  // Detectar tema del sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light');

    const handleChange = (e) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Aplicar tema al documento
  useEffect(() => {
    const root = document.documentElement;
    const actualTheme = theme === 'system' ? systemTheme : theme;
    
    root.classList.remove('light', 'dark');
    root.classList.add(actualTheme);
    
    // Guardar preferencia
    localStorage.setItem('archt-theme', theme);
  }, [theme, systemTheme]);

  const toggleTheme = () => {
    setTheme(prev => {
      switch (prev) {
        case 'light':
          return 'dark';
        case 'dark':
          return 'system';
        case 'system':
          return 'light';
        default:
          return 'dark';
      }
    });
  };

  const setThemeMode = (newTheme) => {
    setTheme(newTheme);
  };

  const value = {
    theme,
    systemTheme,
    actualTheme: theme === 'system' ? systemTheme : theme,
    toggleTheme,
    setThemeMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Componente de toggle del tema
export const ThemeToggle = ({ className = "" }) => {
  const { theme, actualTheme, toggleTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4" />;
      case 'dark':
        return <Moon className="w-4 h-4" />;
      case 'system':
        return <Monitor className="w-4 h-4" />;
      default:
        return <Moon className="w-4 h-4" />;
    }
  };

  const getTooltip = () => {
    switch (theme) {
      case 'light':
        return 'Switch to dark mode';
      case 'dark':
        return 'Switch to system theme';
      case 'system':
        return 'Switch to light mode';
      default:
        return 'Toggle theme';
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${className}`}
      title={getTooltip()}
    >
      <div className="relative">
        {getIcon()}
        <div className={`absolute inset-0 transition-opacity duration-300 ${
          actualTheme === 'dark' ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-sm"></div>
        </div>
      </div>
    </Button>
  );
};

// Hook para obtener clases de tema
export const useThemeClasses = () => {
  const { actualTheme } = useTheme();

  return {
    isDark: actualTheme === 'dark',
    isLight: actualTheme === 'light',
    themeClass: actualTheme,
    bgClass: actualTheme === 'dark' ? 'bg-black' : 'bg-white',
    textClass: actualTheme === 'dark' ? 'text-white' : 'text-black',
    borderClass: actualTheme === 'dark' ? 'border-white/10' : 'border-black/10',
  };
};


