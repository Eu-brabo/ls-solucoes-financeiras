
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#001a33] overflow-hidden">
      {/* Background with AI/Finance vibe */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
          alt="AI Network Finance" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001a33] via-[#001a33]/90 to-[#001a33]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Especialistas em Antecipação & Crédito
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-10">
          Impulsione sua <span className="text-blue-500">Liquidez</span> com Inteligência Estratégica.
        </h1>
        
        <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
          Soluções completas de antecipação de recebíveis, capital de giro e gestão de frota. Transformamos seus ativos em fôlego financeiro para sua empresa crescer sem limites.
        </p>
        
        <div className="flex justify-center mb-16">
          <button 
            onClick={scrollToServices}
            className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-xl shadow-blue-600/20"
          >
            Nossos Serviços <ArrowRight size={22} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto border-t border-white/5 pt-12">
          <div className="flex flex-col items-center gap-2 text-slate-400 text-sm">
            <CheckCircle2 size={20} className="text-blue-500" />
            Taxas Competitivas
          </div>
          <div className="flex flex-col items-center gap-2 text-slate-400 text-sm">
            <CheckCircle2 size={20} className="text-blue-500" />
            Análise Rápida
          </div>
          <div className="flex flex-col items-center gap-2 text-slate-400 text-sm">
            <CheckCircle2 size={20} className="text-blue-500" />
            Atendimento Digital
          </div>
          <div className="flex flex-col items-center gap-2 text-slate-400 text-sm">
            <CheckCircle2 size={20} className="text-blue-500" />
            Foco no Resultado
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
