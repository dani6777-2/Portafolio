import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faMapMarkerAlt, faEnvelope, faPhone, faGraduationCap, faLanguage, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { animate, motion, useInView, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { useLang } from '../i18n/translations';
import { SceneHeader } from './ui';
import CV from '../assets/img/MORALES_ARIAS_DANIEL_CV.pdf';
import perfilImg from '../assets/img/perfil.jpg';

const WordReveal: React.FC<{ text: string }> = ({ text }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.6'] });
  const words = text.split(' ');

  return (
    <p ref={ref} className="text-balance">
      {words.map((word, i) => (
        <Word key={`${word}-${i}`} progress={scrollYProgress} start={i / words.length} end={Math.min((i + 1) / words.length, 1)}>
          {word}
        </Word>
      ))}
    </p>
  );
};

const Word: React.FC<{ progress: ReturnType<typeof useScroll>['scrollYProgress']; start: number; end: number; children: React.ReactNode }> = ({ progress, start, end, children }) => {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.28em] inline-block">
      {children}
    </motion.span>
  );
};

const Counter: React.FC<{ value: number; suffix?: string; label: string }> = ({ value, suffix = '', label }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));

  React.useEffect(() => {
    if (inView) {
      const controls = animate(mv, value, { duration: 1.4, ease: [0.22, 1, 0.36, 1] });
      return () => controls.stop();
    }
  }, [inView, mv, value]);

  return (
    <div ref={ref}>
      <p className="font-display font-extrabold text-4xl sm:text-5xl tabular-nums text-ink leading-none">
        <motion.span>{rounded}</motion.span>
        <span className="text-accent">{suffix}</span>
      </p>
      <p className="text-[11px] uppercase tracking-wider text-muted mt-2">{label}</p>
    </div>
  );
};

const dataRows = [
  { icon: faBriefcase, labelKey: 'manifesto.data.role', valueKey: 'hero.role' },
  { icon: faMapMarkerAlt, labelKey: 'manifesto.data.location', value: 'Santiago, Chile' },
  { icon: faEnvelope, labelKey: 'manifesto.data.email', value: 'daniel.morales23@outlook.cl', link: 'mailto:daniel.morales23@outlook.cl' },
  { icon: faPhone, labelKey: 'manifesto.data.phone', value: '+56 9 8130 9352', link: 'tel:+56981309352' },
  { icon: faGraduationCap, labelKey: 'manifesto.data.studies', valueKey: 'manifesto.data.studies.value' },
  { icon: faLanguage, labelKey: 'manifesto.data.langs', valueKey: 'manifesto.data.langs.value' },
];

const Manifesto: React.FC = () => {
  const { t } = useLang();

  const stats = [
    { value: 4, suffix: '+', label: t('hero.stat.years') },
    { value: 3, suffix: '', label: t('hero.stat.companies') },
    { value: 5, suffix: '', label: t('hero.stat.certs') },
    { value: 4, suffix: '', label: t('hero.stat.projects') },
  ];

  return (
    <section id="manifesto" className="py-20 sm:py-28">
      <div className="container-site">
        <SceneHeader index="01" label={t('manifesto.kicker')} />

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
          <div>
            <p className="font-display font-bold text-2xl sm:text-4xl leading-[1.15] text-ink max-w-3xl">
              <WordReveal text={t('manifesto.statement')} />
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <Counter value={stat.value} suffix={stat.suffix} label={stat.label} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="mt-8 max-w-2xl grid sm:grid-cols-2 gap-6"
            >
              <p className="text-muted leading-relaxed">
                {t('manifesto.p1')}
                <a
                  href={CV}
                  download="MORALES_ARIAS_DANIEL_CV.pdf"
                  className="inline-flex items-center gap-2 mt-4 font-mono text-xs uppercase tracking-widest text-accent link-underline"
                >
                  <FontAwesomeIcon icon={faDownload} />
                  {t('manifesto.cta')}
                </a>
              </p>
              <p className="text-muted leading-relaxed">{t('manifesto.p2')}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <div className="border border-line/20 p-6 sm:p-7">
              <div className="flex items-center gap-5 mb-6">
                <img
                  src={perfilImg}
                  alt="Daniel Morales"
                  loading="lazy"
                  decoding="async"
                  className="w-20 h-24 object-cover"
                />
                <div>
                  <h3 className="font-display font-extrabold text-xl text-ink">Daniel Morales</h3>
                  <p className="font-mono text-xs text-muted mt-1">{t('hero.role')}</p>
                  <p className="inline-flex items-center gap-2 mt-3 font-mono text-[10px] uppercase tracking-widest text-accent border border-accent/40 rounded-full px-2.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
                    {t('contact.status')}
                  </p>
                </div>
              </div>

              <dl className="space-y-3.5">
                {dataRows.map((row) => {
                  const value = row.value ?? t(row.valueKey!);
                  return (
                    <div key={row.labelKey} className="flex items-start gap-3 text-sm">
                      <FontAwesomeIcon icon={row.icon} className="w-3.5 text-accent mt-1 flex-shrink-0" />
                      <dt className="text-muted w-28 flex-shrink-0 text-xs uppercase tracking-wide pt-0.5">
                        {t(row.labelKey)}
                      </dt>
                      <dd className="text-ink font-medium">
                        {row.link ? (
                          <a href={row.link} className="link-underline">{value}</a>
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;