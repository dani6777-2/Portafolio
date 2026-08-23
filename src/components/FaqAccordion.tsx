import React, { useState } from 'react';
import { faqs, type Lang } from '../i18n/translations';

interface Props {
  lang: Lang;
}

const FaqAccordion: React.FC<Props> = ({ lang }) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-[#3a3a3a]">
      {faqs.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={idx} className="border-b border-[#3a3a3a]">
            <button
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="w-full flex items-baseline gap-4 sm:gap-6 py-5 sm:py-6 text-left group"
            >
              <span className="text-[#00ff41] text-xs hidden sm:block">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="text-[#3a3a3a] text-xs shrink-0">
                {isOpen ? '▼' : '▶'}
              </span>
              <span
                className={`font-bold flex-1 transition-colors duration-200 ${
                  isOpen ? 'text-[#00ff41]' : 'text-[#e0e0e0] group-hover:text-[#00ff41]'
                } text-sm sm:text-xl leading-snug`}
              >
                {item.q[lang]}
              </span>
            </button>
            {isOpen && (
              <div className="overflow-hidden">
                <p className="pl-6 sm:pl-14 pr-4 pb-6 text-[#b0b0b0] leading-relaxed text-sm">
                  <span className="text-[#00ff41] mr-2">→</span>
                  {item.a[lang]}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
