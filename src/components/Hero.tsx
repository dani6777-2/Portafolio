import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/translations';
import perfilImg from '../assets/img/perfil.jpg';

const ease = [0.22, 1, 0.36, 1] as const;

const Hero: React.FC = () => {
  const { t } = useLang();

  const stats = [
    { value: 4, suffix: '', label: t('hero.stat.years') },
    { value: 3, suffix: '', label: t('hero.stat.companies') },
    { value: 5, suffix: '', label: t('hero.stat.certs') },
    { value: 4, suffix: '', label: t('hero.stat.projects') },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,rgba(0,0,0,1),transparent_70%)]" aria-hidden="true" />
      <div className="container-site w-full pt-28 pb-14 relative">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink border border-ink/30 rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-ink/60" />
                {t('hero.role')} {t('hero.current')}
              </span>
              <span className="kicker hidden sm:block">{t('hero.kicker')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="font-display font-extrabold leading-[0.85] tracking-[-0.04em] text-ink"
            >
              <span className="block text-[16vw] lg:text-[8.5vw]">{t('hero.big.name')}</span>
              <span className="block text-[16vw] lg:text-[8.5vw] italic text-outline">{t('hero.big.lastname')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 max-w-xl"
            >
              <span className="font-display font-bold text-xl sm:text-2xl text-ink block">{t('hero.role')}</span>
              <span className="font-mono text-xs text-accent block mt-1.5 uppercase tracking-widest">{t('hero.stack')}</span>
              <span className="text-muted block mt-1.5 leading-relaxed">{t('hero.lead')}</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#manifesto"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-ink text-paper hover:bg-accent transition-colors duration-300 font-mono text-xs uppercase tracking-widest"
              >
                <FontAwesomeIcon icon={faArrowDown} />
                {t('hero.scroll')}
              </a>
              <a
                href="mailto:daniel.morales23@outlook.cl"
                className="kicker link-underline hover:text-ink transition-colors duration-300"
              >
                daniel.morales23@outlook.cl
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:justify-self-end"
          >
            <div className="border border-line/20 bg-paper p-6 sm:p-7 max-w-sm">
              <div className="aspect-[4/5] overflow-hidden mb-5">
                <img
                  src={perfilImg}
                  alt="Daniel Morales"
                  fetchpriority="high"
                  decoding="async"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <p className="font-display font-bold text-lg text-ink">Daniel Morales</p>
              <p className="font-mono text-xs text-muted mt-0.5">{t('hero.role')}</p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/daniel-23dma/"
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full border border-line/30 flex items-center justify-center text-ink hover:bg-ink hover:text-paper hover:border-ink transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-base" />
                </a>
                <a
                  href="https://github.com/Dani6777/"
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-full border border-line/30 flex items-center justify-center text-ink hover:bg-ink hover:text-paper hover:border-ink transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-base" />
                </a>
                <span className="ml-auto font-mono text-[10px] text-muted">{t('hero.current')}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-line/15 pt-8"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display font-extrabold text-3xl sm:text-4xl text-ink tabular-nums leading-none">
                {stat.value}
                <span className="text-accent">{stat.suffix}</span>
              </p>
              <p className="text-[11px] uppercase tracking-wider text-muted mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;