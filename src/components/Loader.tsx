import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/translations';

interface LoaderProps {
  onFinished: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onFinished }) => {
  const { t } = useLang();
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setCount(100);
      const t = setTimeout(() => {
        setLeaving(true);
        onFinished();
      }, 200);
      return () => clearTimeout(t);
    }

    const duration = 1400;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setLeaving(true);
          onFinished();
        }, 350);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onFinished]);

  return (
    <motion.div
      className="fixed inset-0 z-[90] bg-ink text-paper flex flex-col justify-between p-6 sm:p-10"
      initial={{ y: 0 }}
      animate={{ y: leaving ? '-100%' : 0 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex items-start justify-between w-full">
        <p className="font-display font-extrabold text-2xl">DM</p>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-paper/60">
          {t('loader.tag')}
        </p>
      </div>

      <div className="flex items-end justify-between w-full">
        <p className="kicker uppercase tracking-[0.3em] text-paper/50">{t('loader.since')}</p>
        <p className="font-display font-extrabold text-8xl sm:text-[10rem] leading-none tabular-nums text-paper">
          {String(count).padStart(3, '0')}
          <span className="text-accent">%</span>
        </p>
      </div>
    </motion.div>
  );
};

export default Loader;