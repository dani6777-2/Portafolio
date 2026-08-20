import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/translations';
import { SceneHeader } from './ui';

interface Project {
  index: string;
  nameKey: string;
  roleKey: string;
  descKey: string;
  tagsKey: string;
  metrics: { value: string; labelKey: string }[];
}

const Projects: React.FC = () => {
  const { t } = useLang();

  const projects: Project[] = [
    {
      index: '01',
      nameKey: 'projects.logistics.name',
      roleKey: 'projects.logistics.role',
      descKey: 'projects.logistics.desc',
      tagsKey: 'projects.logistics.tags',
      metrics: [
        { value: '+30%', labelKey: 'projects.logistics.m1' },
        { value: '99.9%', labelKey: 'projects.logistics.m2' },
        { value: '40+', labelKey: 'projects.logistics.m3' },
      ],
    },
    {
      index: '02',
      nameKey: 'projects.insurance.name',
      roleKey: 'projects.insurance.role',
      descKey: 'projects.insurance.desc',
      tagsKey: 'projects.insurance.tags',
      metrics: [
        { value: '+30%', labelKey: 'projects.insurance.m1' },
        { value: '88%', labelKey: 'projects.insurance.m2' },
        { value: '12', labelKey: 'projects.insurance.m3' },
      ],
    },
    {
      index: '03',
      nameKey: 'projects.files.name',
      roleKey: 'projects.files.role',
      descKey: 'projects.files.desc',
      tagsKey: 'projects.files.tags',
      metrics: [
        { value: '+40%', labelKey: 'projects.files.m1' },
        { value: '86%', labelKey: 'projects.files.m2' },
        { value: 'λ', labelKey: 'projects.files.m3' },
      ],
    },
    {
      index: '04',
      nameKey: 'projects.quarkus.name',
      roleKey: 'projects.quarkus.role',
      descKey: 'projects.quarkus.desc',
      tagsKey: 'projects.quarkus.tags',
      metrics: [
        { value: '3.x', labelKey: 'projects.quarkus.m1' },
        { value: '−30%', labelKey: 'projects.quarkus.m2' },
        { value: 'fast', labelKey: 'projects.quarkus.m3' },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container-site">
        <SceneHeader index="03" label={t('projects.kicker')} />
        <p className="-mt-6 mb-10 font-mono text-xs text-muted max-w-xl">{t('projects.subtitle')}</p>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project, idx) => {
            const featured = project.index === '01';
            return (
              <motion.article
                key={project.index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`group border border-line/15 p-6 sm:p-8 bg-paper/60 hover:bg-ink hover:border-ink transition-all duration-300 flex flex-col ${
                  featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className={featured ? 'grid md:grid-cols-[1.15fr_1fr] gap-8 sm:gap-10 items-start' : ''}>
                  <div>
                    <div className="flex items-baseline justify-between mb-5">
                      <span className={`font-mono text-xs text-accent ${featured ? 'text-sm' : ''}`}>{project.index}</span>
                      <span className="flex items-center gap-2">
                        <span className="kicker uppercase">{t(project.roleKey)}</span>
                        <span className="kicker text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                      </span>
                    </div>

                    <h3 className={`font-display font-extrabold text-ink group-hover:text-paper mb-4 transition-colors duration-300 ${
                      featured ? 'text-3xl sm:text-5xl leading-[0.95]' : 'text-2xl sm:text-3xl'
                    }`}>
                      {t(project.nameKey)}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed group-hover:text-paper/70 transition-colors duration-300">
                      {t(project.descKey)}
                    </p>
                  </div>

                  <div className={featured ? 'flex flex-col justify-between gap-6' : ''}>
                    <p className="mt-5 font-mono text-[11px] uppercase tracking-widest text-ink/60 group-hover:text-accent transition-colors duration-300">
                      {t(project.tagsKey)}
                    </p>

                    <div className={`grid grid-cols-3 gap-3 ${featured ? '' : 'mt-6'} pt-5 border-t border-line/15 group-hover:border-paper/20 transition-colors duration-300`}>
                      {project.metrics.map((m) => (
                        <div key={m.labelKey} className="group-hover:text-paper">
                          <p className="font-display font-bold text-lg text-ink group-hover:text-accent transition-colors duration-300 leading-none">
                            {m.value}
                          </p>
                          <p className="text-[10px] uppercase tracking-wide text-muted group-hover:text-paper/50 mt-1.5">
                            {t(m.labelKey)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;