import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/translations';
import Marquee from './Marquee';

const Contact: React.FC = () => {
  const { t } = useLang();

  const details = [
    { icon: faEnvelope, label: t('connect.email.label'), value: 'daniel.morales23@outlook.cl', href: 'mailto:daniel.morales23@outlook.cl' },
    { icon: faPhone, label: t('connect.phone.label'), value: '+56 9 8130 9352', href: 'tel:+56981309352' },
    { icon: faMapMarkerAlt, label: t('connect.location.label'), value: t('connect.location') },
  ];

  return (
    <section id="contact" className="pt-16 sm:pt-24">
      <Marquee items={t('connect.marquee').split('|').map((s) => s.trim())} />

      <div className="container-site py-20 sm:py-28">
        <div className="flex items-baseline justify-between border-b border-line/20 pb-5 mb-12">
          <p className="kicker">
            <span className="text-accent">07</span> — {t('nav.contact')}
          </p>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-ink"
        >
          {t('connect.headline')}
        </motion.h2>
        <p className="mt-6 max-w-2xl text-muted text-base sm:text-lg leading-relaxed">{t('connect.subtitle')}</p>

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <ul className="space-y-5">
              {details.map((item) => (
                <li key={item.label} className="flex items-center gap-5">
                  <span className="w-11 h-11 rounded-full border border-line/25 flex items-center justify-center text-ink flex-shrink-0">
                    <FontAwesomeIcon icon={item.icon} className="w-4 text-accent" />
                  </span>
                  <div>
                    <p className="kicker uppercase">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-lg text-ink font-medium link-underline">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg text-ink font-medium">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/daniel-23dma/"
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-full border border-line/30 flex items-center justify-center text-ink hover:bg-ink hover:text-paper hover:border-ink transition-all duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              </a>
              <a
                href="https://github.com/Dani6777/"
                target="_blank"
                rel="me noopener noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 rounded-full border border-line/30 flex items-center justify-center text-ink hover:bg-ink hover:text-paper hover:border-ink transition-all duration-300"
              >
                <FontAwesomeIcon icon={faGithub} className="text-xl" />
              </a>
              <span className="h-12 w-px bg-line/15" />
              <span className="kicker max-w-[220px] hidden sm:block">github.com/Dani6777 · linkedin.com/in/daniel-23dma</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="border border-line/20 p-8 sm:p-10"
          >
            <p className="font-display font-bold text-2xl sm:text-3xl text-ink leading-tight mb-4">
              {t('connect.headline')}
            </p>
            <p className="text-muted leading-relaxed mb-6">
              {t('connect.subtitle')}
            </p>
            <div className="space-y-4">
              <a
                href="mailto:daniel.morales23@outlook.cl"
                className="w-full py-4 px-6 bg-ink text-paper hover:bg-accent transition-colors duration-300 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-3"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                daniel.morales23@outlook.cl
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-23dma/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 border border-line/30 text-ink hover:border-accent hover:text-accent transition-colors duration-300 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-3"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                LinkedIn
              </a>
              <a
                href="https://github.com/Dani6777/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 border border-line/30 text-ink hover:border-accent hover:text-accent transition-colors duration-300 font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-3"
              >
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;