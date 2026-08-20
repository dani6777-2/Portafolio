import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanguageProvider, translations } from './i18n/translations'

function langInit(): 'es' | 'en' {
  const saved = localStorage.getItem('lang');
  if (saved === 'es' || saved === 'en') return saved;
  const browser = navigator.language.split('-')[0];
  return browser === 'es' ? 'es' : 'en';
}

const lang = langInit();
if (!localStorage.getItem('lang')) {
  localStorage.setItem('lang', lang);
}

document.documentElement.lang = lang;
document.title = translations[lang]['nav.title'];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)