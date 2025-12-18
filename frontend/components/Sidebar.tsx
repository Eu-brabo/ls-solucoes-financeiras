
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { ADDRESS, PHONE, EMAIL } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const sidebarClasses = `
    fixed inset-y-0 left-0 z-50 w-64 bg-[#001a33] text-white transform transition-transform duration-300 ease-in-out
    lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    flex flex-col shadow-2xl
  `;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <aside className={sidebarClasses}>
        <div className="p-8 border-b border-blue-900/50 flex flex-col items-center">
          {/* Logo */}
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 border border-blue-500/30">
            <svg viewBox="0 0 100 100" className="w-10 h-10 fill-blue-400">
              <path d="M20,30 Q50,10 80,30 L80,70 Q50,90 20,70 Z" fill="none" stroke="currentColor" strokeWidth="4" />
              <path d="M35,45 L65,45 M35,55 L55,55" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-widest text-center">LS NEGÓCIOS</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-medium">Soluções Financeiras</p>
        </div>

        {/* Professional Phrases Section */}
        <div className="flex-1 flex flex-col justify-center px-8 text-center space-y-12">
          <div className="animate-fade-in">
            <p className="text-blue-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-3">Valores</p>
            <p className="text-slate-200 text-sm font-medium leading-relaxed">
              "Transparência total e compromisso absoluto com o seu sucesso financeiro."
            </p>
          </div>
          
          <div className="pt-8 border-t border-white/5">
            <p className="text-slate-400 text-xs italic leading-relaxed">
              "A melhor maneira de prever o futuro é criá-lo."
            </p>
            <p className="text-blue-500 text-[10px] font-bold mt-3 uppercase tracking-widest">— Peter Drucker</p>
          </div>
        </div>

        <div className="p-6 bg-blue-950/50 space-y-4">
          <div className="flex items-start gap-3 text-xs text-blue-300">
            <MapPin size={14} className="shrink-0 mt-0.5" />
            <span>{ADDRESS}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-blue-300">
            <Phone size={14} />
            <span>{PHONE}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-blue-300">
            <Mail size={14} />
            <span className="truncate">{EMAIL}</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
