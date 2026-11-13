import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('nidnipa_lang');
      return saved === 'en' ? 'en' : 'th';
    } catch {
      return 'th';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('nidnipa_lang', lang);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'th' ? 'en' : 'th'));
  };

  const isEn = lang === 'en';

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, isEn }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
