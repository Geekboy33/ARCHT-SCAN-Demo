import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { Button } from './Button';
import { Card, CardContent } from './Card';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸', region: 'Global' },
  { code: 'es', name: 'Español', flag: '🇪🇸', region: 'LATAM' },
  { code: 'pt', name: 'Português', flag: '🇧🇷', region: 'Brazil' },
  { code: 'ar', name: 'العربية', flag: '🇦🇪', region: 'Gulf' }
];

export const LanguageSelector = ({ className = "" }) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
    
    // Guardar preferencia del usuario
    localStorage.setItem('archt-preferred-language', languageCode);
  };

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:bg-white/10"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLanguage.flag}</span>
        <span className="hidden md:inline">{currentLanguage.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 z-50">
            <Card className="bg-black/95 backdrop-blur-xl border border-white/10 shadow-2xl min-w-[200px]">
              <CardContent className="p-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 ${
                      i18n.language === language.code
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{language.flag}</span>
                      <div>
                        <div className="font-medium">{language.name}</div>
                        <div className="text-xs text-gray-500">{language.region}</div>
                      </div>
                    </div>
                    {i18n.language === language.code && (
                      <Check className="w-4 h-4 text-cyan-400" />
                    )}
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};

// Hook para detectar país/región automáticamente
export const useCountryDetection = () => {
  const { i18n } = useTranslation();

  const detectCountryAndLanguage = async () => {
    try {
      // Detectar por IP (usando un servicio gratuito)
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      const countryLanguageMap = {
        'BR': 'pt', // Brasil
        'AR': 'es', // Argentina  
        'CL': 'es', // Chile
        'CO': 'es', // Colombia
        'PE': 'es', // Perú
        'MX': 'es', // México
        'ES': 'es', // España
        'AE': 'ar', // UAE
        'SA': 'ar', // Saudi Arabia
        'QA': 'ar', // Qatar
        'KW': 'ar', // Kuwait
        'BH': 'ar', // Bahrain
        'OM': 'ar', // Oman
        // Por defecto inglés para otros países
      };

      const detectedLanguage = countryLanguageMap[data.country_code] || 'en';
      
      // Solo cambiar si no hay preferencia guardada
      const savedLanguage = localStorage.getItem('archt-preferred-language');
      if (!savedLanguage) {
        i18n.changeLanguage(detectedLanguage);
      }

      return {
        country: data.country_name,
        countryCode: data.country_code,
        detectedLanguage,
        timezone: data.timezone
      };
    } catch (error) {
      console.log('Country detection failed, using default language');
      return null;
    }
  };

  return { detectCountryAndLanguage };
};

// Componente de notificación de idioma
export const LanguageNotification = () => {
  const { i18n } = useTranslation();
  const [showNotification, setShowNotification] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState(null);

  React.useEffect(() => {
    const checkLanguageDetection = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        const countryLanguageMap = {
          'BR': 'pt',
          'AR': 'es', 
          'CL': 'es',
          'AE': 'ar',
          'SA': 'ar'
        };

        const suggested = countryLanguageMap[data.country_code];
        const savedLanguage = localStorage.getItem('archt-preferred-language');
        
        if (suggested && suggested !== i18n.language && !savedLanguage) {
          setDetectedLanguage(suggested);
          setShowNotification(true);
        }
      } catch (error) {
        // Silently fail
      }
    };

    checkLanguageDetection();
  }, [i18n.language]);

  const handleAcceptLanguage = () => {
    i18n.changeLanguage(detectedLanguage);
    localStorage.setItem('archt-preferred-language', detectedLanguage);
    setShowNotification(false);
  };

  const handleDismiss = () => {
    localStorage.setItem('archt-language-notification-dismissed', 'true');
    setShowNotification(false);
  };

  if (!showNotification) return null;

  const languageNames = {
    'pt': 'Português',
    'es': 'Español', 
    'ar': 'العربية'
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="bg-black/95 backdrop-blur-xl border border-cyan-500/30 shadow-2xl">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-white mb-1">
                Language Detected
              </h4>
              <p className="text-xs text-gray-300 mb-3">
                Switch to {languageNames[detectedLanguage]}?
              </p>
              <div className="flex gap-2">
                <Button
                  variant="accent"
                  size="sm"
                  onClick={handleAcceptLanguage}
                  className="text-xs"
                >
                  Switch
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDismiss}
                  className="text-xs"
                >
                  Keep English
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};