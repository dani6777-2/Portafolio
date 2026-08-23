import React, { useEffect, useState } from 'react';
import { translations, type Lang } from '../i18n/translations';
import LangToggle from './LangToggle';

interface Props {
  lang: Lang;
}

const navLinks = [
  { href: '#hero', key: 'nav.home' },
  { href: '#about', key: 'nav.about' },
  { href: '#experience', key: 'nav.journey' },
  { href: '#projects', key: 'nav.projects' },
  { href: '#skills', key: 'nav.skills' },
  { href: '#certs', key: 'nav.certs' },
  { href: '#faq', key: 'nav.faq' },
  { href: '#connect', key: 'nav.contact' },
];

const TerminalNav: React.FC<Props> = ({ lang }) => {
  const t = (key: string) => translations[lang][key] ?? key;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMenuOpen(false);
      };
      window.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', onKey);
      };
    }
  }, [menuOpen]);

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-[70]">
        <div
          className="h-full bg-[#00ff41] transition-all duration-150"
          style={{ width: `${scrolled ? '0' : '0'}%` }}
          id="progress-bar"
        />
      </div>

      {/* Scroll to top */}
      {scrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label={t('nav.top')}
          className="fixed bottom-5 right-5 z-[55] w-10 h-10 border border-[#3a3a3a] bg-[#0a0a0a] text-[#00ff41] hover:border-[#00ff41] hover:bg-[#00ff41]/10 transition-colors duration-200 text-sm flex items-center justify-center"
        >
          ↑
        </button>
      )}

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-[55] transition-all duration-300 ${
          scrolled ? 'py-2 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#3a3a3a]/50' : 'py-4'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex items-center justify-between">
          <a href="#hero" className="text-[#00ff41] text-sm font-bold hover:text-[#e0e0e0] transition-colors duration-200">
            DM://
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 6).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#555555] text-xs hover:text-[#00ff41] transition-colors duration-200"
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <LangToggle lang={lang} />
            <button
              onClick={() => setMenuOpen(true)}
              className="text-[#555555] text-xs hover:text-[#00ff41] transition-colors duration-200 border border-[#3a3a3a] px-3 py-1.5 hover:border-[#00ff41]"
            >
              {t('nav.menu')}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-[#0a0a0a] z-[60] flex flex-col justify-center"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setMenuOpen(false)}
            aria-label={t('nav.close')}
            autoFocus
            className="absolute top-5 right-5 text-[#e0e0e0] text-2xl hover:text-[#00ff41] transition-colors duration-200"
          >
            ×
          </button>
          <nav className="max-w-[1200px] mx-auto px-5 sm:px-8 w-full">
            <ul className="divide-y divide-[#3a3a3a]/30">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-baseline gap-4 py-4 sm:py-6"
                  >
                    <span className="text-[#00ff41] text-xs">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-bold text-3xl sm:text-5xl lg:text-6xl text-[#e0e0e0] group-hover:text-[#00ff41] transition-colors duration-200">
                      {t(link.key)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default TerminalNav;
