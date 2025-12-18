
import React from 'react';
import { FULL_COMPANY_NAME, ADDRESS, PHONE, EMAIL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001a33] text-white pt-16 pb-8 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
             <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold">LS</div>
             <span className="font-bold tracking-tight text-xl">LS NEGÓCIOS</span>
          </div>
          <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
            Sua parceira estratégica em soluções financeiras para alavancar negócios em todo o Brasil.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end text-sm text-slate-400 space-y-2 text-center md:text-right">
          <p>{ADDRESS}</p>
          <p>{PHONE} | {EMAIL}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-white/10 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} {FULL_COMPANY_NAME}. Todos os direitos reservados.</p>
        <p className="mt-2">Transparência e Confiança em cada operação.</p>
      </div>
    </footer>
  );
};

export default Footer;
