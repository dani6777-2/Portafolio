import React from 'react';
import type { Lang } from '../i18n/translations';

interface Props {
  lang: Lang;
}

const LangToggle: React.FC<Props> = ({ lang: initialLang }) => {
  const [currentLang, setCurrentLang] = React.useState<Lang>(initialLang);

  const handleSwitch = (code: Lang) => {
    setCurrentLang(code);
    localStorage.setItem('lang', code);
    // Reload to re-render all Astro static content with new lang
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-0.5 text-xs">
      {(['es', 'en'] as const).map((code) => (
        <button
          key={code}
          onClick={() => handleSwitch(code)}
          aria-pressed={currentLang === code}
          aria-label={code === 'es' ? 'Cambiar a español' : 'Switch to English'}
          className={`px-2 py-1 uppercase tracking-widest transition-colors duration-200 border ${
            currentLang === code
              ? 'text-[#00ff41] border-[#00ff41] bg-[#00ff41]/10'
              : 'text-[#555555] border-transparent hover:text-[#e0e0e0]'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

export default LangToggle;
