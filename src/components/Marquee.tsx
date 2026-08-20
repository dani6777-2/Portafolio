import React from 'react';

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ items, reverse = false, className = '' }) => {
  const row = [...items, ...items];
  return (
    <div
      className={`overflow-hidden py-6 sm:py-8 border-y border-line/20 select-none ${className}`}
      aria-hidden="true"
    >
      <div className={`flex whitespace-nowrap gap-0 ${reverse ? 'animate-marquee-rev' : 'animate-marquee'} mask-fade-x`}>
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display font-bold uppercase text-4xl sm:text-6xl text-ink/90 px-6">{item}</span>
            <span className="text-accent text-2xl sm:text-3xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;