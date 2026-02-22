import React, { createContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { type Language, type TranslationKey, translations } from '../i18n/translations';

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey | string) => any;
}

export const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem('lang');
      return (savedLang === 'th' || savedLang === 'en') ? savedLang : 'th';
    } catch {
      return 'th';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang);
    } catch (e) {
      console.error('Failed to save language choice', e);
    }
  }, [lang]);

  const t = useCallback((key: TranslationKey | string): any => {
    const keys = key.split('.');
    let result: any = translations;
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        console.warn(`Translation missing for key: ${key}`);
        return key;
      }
    }

    if (result && typeof result === 'object' && lang in result) {
      return result[lang];
    }
    
    if (result && typeof result === 'object' && 'th' in result && Array.isArray(result['th'])) {
      return result[lang];
    }

    return key;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};
