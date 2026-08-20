import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { useLang } from '../i18n/translations';
import { LangToggle, Monogram } from './ui';

const menuLinks = [
  { href: '#hero', key: 'nav.home' },
  { href: '#manifesto', key: 'nav.about' },
  { href: '#experience', key: 'nav.journey' },
  { href: '#projects', key: 'nav.projects' },
  { href: '#skills', key: 'nav.skills' },
  { href: '#certs', key: 'nav.certs' },
  { href: '#faq', key: 'faq.title' },
  { href: '#contact', key: 'nav.contact' },
];

const ProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-accent origin-left z-[70]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
};

const customCursorEnabled = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const hoveringRef = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!customCursorEnabled) return;
    setEnabled(true);
    document.body.classList.add('cursor-live');

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      const target = (e.target as HTMLElement).closest('a, button, select, [data-cursor]');
      const next = !!target;
      if (next !== hoveringRef.current) {
        hoveringRef.current = next;
        setHovering(next);
      }
    };

    const loop = () => {
      ring.x += (mouse.x - ring.x) * 0.16;
      ring.y += (mouse.y - ring.y) * 0.16;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mouse.x - 3}px, ${mouse.y - 3}px)`;
      if (ringRef.current) {
        const s = hoveringRef.current ? 2.4 : 1;
        ringRef.current.style.transform = `translate(${ring.x - 18}px, ${ring.y - 18}px) scale(${s})`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      document.body.classList.remove('cursor-live');
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="fixed top-0 left-0 z-[80] w-1.5 h-1.5 rounded-full bg-accent pointer-events-none" />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[79] w-9 h-9 rounded-full border border-ink/50 pointer-events-none transition-[border-color] duration-300"
        style={{ borderColor: hovering ? '#FF3B00' : 'rgba(17,17,16,0.4)' }}
      />
    </>
  );
};

const MenuOverlay: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const { t } = useLang();

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 bg-paper z-[60] flex flex-col justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={t('nav.menu')}
        >
          <button
            onClick={onClose}
            aria-label={t('nav.close')}
            autoFocus
            className="absolute top-6 right-6 font-display font-bold text-3xl text-ink hover:text-accent transition-colors duration-300"
          >
            ×
          </button>
          <nav className="container-site">
            <ul className="divide-y divide-line/15">
              {menuLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
                >
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="group flex items-baseline gap-5 py-5 sm:py-7"
                  >
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    <span className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl text-ink group-hover:text-accent group-hover:italic transition-all duration-300">
                      {t(link.key)}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const StatusStrip: React.FC = () => {
  const { t } = useLang();
  return (
    <div className="fixed bottom-5 left-6 z-[55] hidden md:flex items-center gap-2.5">
      <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
      <span className="kicker !tracking-[0.12em]">{t('contact.status')}</span>
    </div>
  );
};

const Chrome: React.FC = () => {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 40));
    return () => unsub();
  }, [scrollY]);

  useEffect(() => {
    const ids = menuLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ProgressBar />
      <CustomCursor />
      <StatusStrip />

      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label={t('nav.top')}
            className="fixed bottom-6 right-6 z-[55] w-11 h-11 rounded-full bg-ink text-paper hover:bg-accent hover:-translate-y-0.5 transition-colors duration-300 font-display font-bold text-xl"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>

      <header
        className={`fixed top-0 left-0 right-0 z-[55] transition-all duration-500 ${
          scrolled ? 'py-3 bg-paper/90 backdrop-blur-md' : 'py-6'
        }`}
      >
        <div className="container-site flex items-center justify-between">
          <a href="#hero" className="link-underline" data-cursor>
            <Monogram className="text-xl" />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {menuLinks.slice(0, 6).map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === link.href.slice(1) ? 'true' : undefined}
                className={`kicker link-underline transition-colors duration-300 ${
                  active === link.href.slice(1) ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <LangToggle />
            <button
              onClick={() => setMenuOpen(true)}
              className="kicker link-underline hover:text-ink transition-colors duration-300 lg:hidden"
            >
              {t('nav.menu')}
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border border-ink bg-ink text-paper hover:bg-accent hover:border-accent transition-colors duration-300 font-mono text-xs uppercase tracking-widest"
            >
              {t('nav.menu')}
            </button>
          </div>
        </div>
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Chrome;