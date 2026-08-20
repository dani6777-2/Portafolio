import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/translations';

interface SkillCat {
  labelKey: string;
  dataKey: string;
  level: number;
}

const skills: SkillCat[] = [
  { labelKey: 'skills.backend', dataKey: 'skills.data.backend', level: 92 },
  { labelKey: 'skills.cloud', dataKey: 'skills.data.cloud', level: 88 },
  { labelKey: 'skills.frontend', dataKey: 'skills.data.frontend', level: 85 },
  { labelKey: 'skills.testing', dataKey: 'skills.data.testing', level: 86 },
  { labelKey: 'skills.db', dataKey: 'skills.data.db', level: 80 },
];

const Skills: React.FC = () => {
  const { t } = useLang();
  const softTags = t('skills.soft.items').split('·').map((s) => s.trim());

  return (
    <section id="skills" className="py-20 sm:py-28 bg-ink text-paper">
      <div className="container-site">
        <div className="flex items-baseline justify-between border-b border-paper/20 pb-5 mb-12">
          <p className="kicker text-paper/60">
            <span className="text-accent">04</span> — {t('skills.eyebrow')}
          </p>
          <span className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.22em] text-paper/40">dm©</span>
        </div>

        <div className="space-y-0">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.labelKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="grid gap-3 sm:grid-cols-[220px_1fr_auto] sm:items-center border-b border-paper/15 py-5"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] text-accent">{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-paper">
                  {t(skill.labelKey)}
                </h3>
              </div>

              <div className="h-1.5 bg-paper/15 relative overflow-hidden">
                <motion.span
                  className="absolute inset-y-0 left-0 bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                />
              </div>

              <div className="flex items-center gap-3 sm:justify-end">
                <span className="font-mono text-sm text-accent tabular-nums">{skill.level}%</span>
                <span className="hidden lg:block font-mono text-[11px] text-paper/40 max-w-[260px] truncate">
                  {t(skill.dataKey)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-[1fr_auto] gap-8 items-start">
          <div>
            <p className="kicker text-paper/60 uppercase mb-5">{t('skills.soft')}</p>
            <div className="flex flex-wrap gap-2">
              {softTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-paper/80 border border-paper/20 rounded-full px-3.5 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="font-mono text-xs text-paper/40 max-w-xs text-right lg:pt-1">
            // {t('skills.more')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;