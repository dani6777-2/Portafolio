import React, { useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import Chrome from './components/Chrome';
import Loader from './components/Loader';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Faq from './components/Faq';
import Contact from './components/Contact';
import { useLang } from './i18n/translations';

const Footer: React.FC = () => {
  const { t } = useLang();
  return (
    <footer className="border-t border-line/20">
      <div className="container-site py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="kicker">© {new Date().getFullYear()} Daniel Morales — {t('footer.rights')}</p>
        <p className="font-mono text-[11px] text-muted hidden md:block">{t('footer.built')}</p>
        <div className="flex items-center gap-6">
          <span className="font-mono text-[11px] text-muted">{t('contact.location')}</span>
          <span className="font-mono text-[11px] text-accent">v4.0 — go test ./... ✓</span>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(() => {
    try {
      return !sessionStorage.getItem('v4-session');
    } catch {
      return true;
    }
  });

  const finishLoading = () => {
    try {
      sessionStorage.setItem('v4-session', '1');
    } catch {
      /* noop */
    }
    setLoading(false);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-paper text-ink min-h-screen overflow-x-clip">
        <AnimatePresence>{loading && <Loader onFinished={finishLoading} />}</AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: loading ? 0 : 1, y: loading ? 24 : 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Chrome />
          <main>
            <Hero />
            <Manifesto />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Faq />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default App;