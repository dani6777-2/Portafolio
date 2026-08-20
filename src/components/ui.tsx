import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/translations';

export const LangToggle: React.FC = () => {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center gap-1 font-mono text-xs">
      {(['es', 'en'] as const).map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          aria-label={code === 'es' ? 'Cambiar a español' : 'Switch to English'}
          className={`px-2 py-1 uppercase tracking-widest transition-colors duration-300 ${
            lang === code ? 'text-ink border-b-2 border-accent' : 'text-muted hover:text-ink'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

interface SceneHeaderProps {
  index: string;
  label: string;
}

export const SceneHeader: React.FC<SceneHeaderProps> = ({ index, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6 }}
    className="flex items-baseline justify-between border-b border-line/20 pb-5 mb-12 sm:mb-16"
  >
    <p className="kicker">
      <span className="text-accent">{index}</span> — {label}
    </p>
    <span className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.22em] text-muted">dm©</span>
  </motion.div>
);

export const Monogram: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span className={`font-display font-extrabold tracking-tight text-ink ${className}`}>
    DM<span className="text-accent">©</span>
  </span>
);