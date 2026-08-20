import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/translations';
import Marquee from './Marquee';

const Contact: React.FC = () => {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${t('contact.form.name')}: ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:daniel.morales23@outlook.cl?subject=${subject}&body=${body}`;
  };

  const details = [
    { icon: faEnvelope, label: t('contact.email.label'), value: 'daniel.morales23@outlook.cl', href: 'mailto:daniel.morales23@outlook.cl' },
    { icon: faPhone, label: t('contact.phone.label'), value: '+56 9 8130 9352', href: 'tel:+56981309352' },
    { icon: faMapMarkerAlt, label: t('contact.location.label'), value: t('contact.location') },
  ];

  return (
    <section id="contact" className="pt-16 sm:pt-24">
      <Marquee items={t('contact.marquee').split('|').map((s) => s.trim())} />

      <div className="container-site py-20 sm:py-28">
        <div className="flex items-baseline justify-between border-b border-line/20 pb-5 mb-12">
          <p className="kicker">
            <span className="text-accent">07</span> — {t('nav.contact')}
          </p>
          <span className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            {t('contact.response')}
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-ink"
        >
          {t('contact.headline')}
        </motion.h2>
        <p className="mt-6 max-w-2xl text-muted text-base sm:text-lg leading-relaxed">{t('contact.subtitle')}</p>

        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
              {t('contact.status')}
            </motion.div>

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

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="border border-line/20 p-8 sm:p-10 space-y-7"
            data-cursor
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <label className="block">
                <span className="kicker uppercase block mb-2">{t('contact.form.name')}</span>
                <input
                  required
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-line/30 focus:border-accent outline-none py-2 text-ink transition-colors duration-300 placeholder:text-muted/60"
                  placeholder={t('contact.form.name')}
                />
              </label>
              <label className="block">
                <span className="kicker uppercase block mb-2">{t('contact.form.email')}</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-line/30 focus:border-accent outline-none py-2 text-ink transition-colors duration-300 placeholder:text-muted/60"
                  placeholder="tu@email.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="kicker uppercase block mb-2">{t('contact.form.message')}</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-line/30 focus:border-accent outline-none py-2 text-ink transition-colors duration-300 placeholder:text-muted/60 resize-none"
                placeholder={t('contact.form.message')}
              />
            </label>
            <button
              type="submit"
              className="w-full py-4 px-6 bg-ink text-paper hover:bg-accent transition-colors duration-300 font-mono text-xs uppercase tracking-widest"
            >
              {t('contact.form.send')} → 
            </button>
            <p className="text-xs text-muted text-center font-mono">{t('contact.openmail')}</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;