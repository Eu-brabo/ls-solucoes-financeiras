
import React from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Portfólio de Soluções</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Como podemos ajudar seu negócio?</h3>
        <p className="text-slate-600 max-w-2xl mx-auto">Oferecemos um ecossistema financeiro completo para estruturar o crescimento da sua empresa com segurança e eficiência.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => {
          const IconComponent = (Icons as any)[service.icon] || Icons.LayoutGrid;
          return (
            <div 
              key={service.id} 
              className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-40 mb-6 overflow-hidden rounded-xl">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <IconComponent size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
