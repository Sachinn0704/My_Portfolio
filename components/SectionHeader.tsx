
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-20 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">{title}</h2>
      <div className={`h-2 w-20 bg-teal rounded-full mb-6 ${centered ? 'mx-auto' : ''}`} />
      <p className="text-slate-400 max-w-2xl text-xl font-medium italic leading-relaxed">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
