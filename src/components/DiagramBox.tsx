import React from 'react';
import { ChevronDown } from 'lucide-react';

interface DiagramBoxProps {
  title: string;
  items: string[];
  isLast?: boolean;
}

export const DiagramBox: React.FC<DiagramBoxProps> = ({ title, items, isLast = false }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[340px] bg-slate-900/90 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.5)] transform transition-all duration-300 hover:scale-102 hover:shadow-[0_0_25px_rgba(255,242,0,0.5)] border-2 border-cyan-500/30 p-6 backdrop-blur-sm backdrop-filter">
        <h3 className="text-[#fff200] text-xl font-bold mb-4 tracking-wide drop-shadow-[0_0_8px_rgba(255,242,0,0.5)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,242,0,0.7)]">{title}</h3>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="text-gray-300 flex items-center group">
              <span className="w-2 h-2 bg-[#fff200] rounded-full mr-3 group-hover:animate-pulse shadow-[0_0_8px_rgba(255,242,0,0.5)]"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      {!isLast && (
        <div className="h-16 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 animate-pulse">
              <div className="w-0.5 h-full mx-auto bg-gradient-to-b from-[#fff200] via-[#fff200]/50 to-transparent shadow-[0_0_8px_rgba(255,242,0,0.5)]"></div>
            </div>
            <ChevronDown className="w-6 h-6 text-[#fff200] relative z-10 animate-bounce drop-shadow-[0_0_8px_rgba(255,242,0,0.7)]" />
          </div>
        </div>
      )}
    </div>
  );
};