import React, { useEffect, useState } from 'react';
import type { Lang } from '../i18n/translations';
import { translations } from '../i18n/translations';

interface Props {
  lang: Lang;
}

const TerminalLoader: React.FC<Props> = ({ lang }) => {
  const t = (key: string) => translations[lang][key] ?? key;
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState<string[]>([]);
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Skip if already shown this session
    try {
      if (sessionStorage.getItem('v6-session')) {
        setDone(true);
        return;
      }
    } catch { /* noop */ }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      try { sessionStorage.setItem('v6-session', '1'); } catch { /* noop */ }
      setDone(true);
      return;
    }

    const bootLines = [
      t('loader.line1'),
      t('loader.line2'),
      t('loader.line3'),
      t('loader.line4'),
    ];

    // Animate progress
    const duration = 1800;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));

      // Show lines at thresholds
      const lineIdx = Math.min(Math.floor(p * bootLines.length), bootLines.length);
      setLines(bootLines.slice(0, lineIdx));

      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setLines(bootLines);
        setTimeout(() => {
          setLeaving(true);
          try { sessionStorage.setItem('v6-session', '1'); } catch { /* noop */ }
          setTimeout(() => setDone(true), 600);
        }, 400);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [lang]);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[90] bg-[#0a0a0a] text-[#00ff41] flex flex-col justify-between p-6 sm:p-10 transition-transform duration-600 ${
        leaving ? '-translate-y-full' : 'translate-y-0'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)' }}
    >
      <div className="flex items-start justify-between w-full">
        <p className="font-bold text-sm">DM://</p>
        <p className="text-xs text-[#3a3a3a]">{t('loader.tag')}</p>
      </div>

      <div className="space-y-2">
        {lines.map((line, i) => (
          <p key={i} className="text-xs sm:text-sm animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
            {line}
          </p>
        ))}

        {/* Progress bar */}
        <div className="mt-4 flex items-center gap-3">
          <div className="flex-1 h-1 bg-[#1a1a1a] relative">
            <div
              className="absolute inset-y-0 left-0 bg-[#00ff41] transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs tabular-nums w-10 text-right">
            {String(progress).padStart(3, ' ')}%
          </span>
        </div>
      </div>

      <div className="flex items-end justify-between w-full">
        <p className="text-[#3a3a3a] text-xs">dmorales@portfolio:~</p>
        <p className="font-extrabold text-6xl sm:text-8xl leading-none tabular-nums">
          {String(progress).padStart(3, '0')}
          <span className="text-[#00d4ff]">%</span>
        </p>
      </div>
    </div>
  );
};

export default TerminalLoader;
