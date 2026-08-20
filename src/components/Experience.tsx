import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/translations';
import { SceneHeader } from './ui';
import CV from '../assets/img/MORALES_ARIAS_DANIEL_CV.pdf';

interface Role {
  company: string;
  roleKey: string;
  periodKey: string;
  bullets: string[];
  tags: string[];
  present?: boolean;
}

const Experience: React.FC = () => {
  const { t } = useLang();

  const roles: Role[] = [
    {
      company: 'Starken',
      roleKey: 'exp.starken.title',
      periodKey: 'exp.starken.period',
      present: true,
      tags: ['Golang', 'GCP', 'GKE', 'Cloud Run', 'Jira'],
      bullets: [t('exp.starken.1'), t('exp.starken.2'), t('exp.starken.3'), t('exp.starken.4')],
    },
    {
      company: 'VR Group',
      roleKey: 'exp.vrg.title',
      periodKey: 'exp.vrg.period',
      tags: ['Quarkus', 'Panache', 'Spring Boot', 'AWS S3', 'Lambda'],
      bullets: [t('exp.vrg.1'), t('exp.vrg.2'), t('exp.vrg.3')],
    },
    {
      company: 'Zurich Santander',
      roleKey: 'exp.zurich.title',
      periodKey: 'exp.zurich.period',
      tags: ['Spring Boot', 'Spring Cloud', 'GitLab CI', 'Maven'],
      bullets: [t('exp.zurich.1'), t('exp.zurich.2')],
    },
  ];

  const education = [
    {
      name: t('exp.inacap.title'),
      org: t('exp.inacap.org'),
      period: t('exp.inacap.period'),
      bullets: [t('exp.inacap.1')],
    },
    {
      name: t('certs.forge'),
      org: t('certs.forge.meta'),
      period: 'Feb 2024 · Jul 2024',
      bullets: [t('exp.forge.1')],
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="container-site">
        <SceneHeader index="02" label={t('exp.kicker')} />

        <div className="border-t border-line/20">
          {roles.map((job, idx) => (
            <motion.article
              key={`${job.company}-${idx}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group border-b border-line/20 py-8 sm:py-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:items-start"
            >
              <div>
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <span className="font-mono text-xs text-accent">{String(idx + 1).padStart(2, '0')}</span>
                  {job.present && (
                    <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent border border-accent/40 rounded-full px-3 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
                      {t('exp.present')}
                    </span>
                  )}
                </div>
                <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-ink leading-none group-hover:italic transition-all duration-300">
                  {job.company}
                </h3>
                <p className="mt-3 font-mono text-sm text-muted">{t(job.roleKey)}</p>
                <p className="mt-1 font-mono text-xs text-muted/70">{t(job.periodKey)}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] text-ink/70 border border-line/20 rounded-full px-2.5 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-2.5">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm sm:text-base text-ink/80 leading-relaxed flex gap-3">
                    <span className="text-accent mt-0.5 flex-shrink-0">/</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mt-16">
          <p className="kicker mb-8 uppercase">{t('exp.edu')}</p>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 border-t border-line/20 pt-8">
            {education.map((edu) => (
              <div key={edu.name}>
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h4 className="font-display font-bold text-xl sm:text-2xl text-ink">{edu.name}</h4>
                  <span className="font-mono text-xs text-muted whitespace-nowrap">{edu.period}</span>
                </div>
                <p className="text-sm text-accent mb-2">{edu.org}</p>
                <p className="text-sm text-muted leading-relaxed">{edu.bullets[0]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-end">
          <a
            href={CV}
            download="MORALES_ARIAS_DANIEL_CV.pdf"
            className="kicker link-underline hover:text-ink transition-colors duration-300"
          >
            {t('exp.cv')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;