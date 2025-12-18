
import React, { useState } from 'react';
import { Send, CalendarCheck, Clock, User, Building2, Phone, Mail, MessageSquare } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataPreferida, setDataPreferida] = useState('');
  const [horario, setHorario] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch("https://ls-backend-jzhi.onrender.com/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        empresa,
        email,
        telefone,
        dataPreferida,
        horario,
        mensagem,
      }),
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar formulário");
    }

    setSubmitted(true);
  } catch (error) {
    alert("Erro ao enviar. Tente novamente.");
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center py-20 bg-blue-50 rounded-3xl border-2 border-dashed border-blue-200">
        <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <CalendarCheck size={40} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Solicitação Enviada!</h3>
        <p className="text-slate-600 mb-8 px-8">
          Recebemos seus dados. Um de nossos especialistas entrará em contato em breve para confirmar o horário da sua consultoria.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-blue-600 font-bold hover:underline"
        >
          Fazer outro agendamento
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Agende uma Reunião</h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Vamos conversar sobre o futuro financeiro da sua empresa?</h3>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Preencha o formulário ao lado com suas informações e preferência de horário. Nossa equipe analisará seu perfil e entrará em contato para uma consultoria personalizada sem custos iniciais.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4 text-slate-700">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <p className="font-bold">Análise em até 24h</p>
              <p className="text-sm text-slate-500">Retornamos seu contato rapidamente.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate-700">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
              <User size={20} />
            </div>
            <div>
              <p className="font-bold">Consultoria Exclusiva</p>
              <p className="text-sm text-slate-500">Atendimento focado na sua necessidade real.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                <User size={14} /> Nome Completo
              </label>
              <input 
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                placeholder="Ex: João Silva"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                <Building2 size={14} /> Empresa
              </label>
              <input 
                required
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                placeholder="Nome da sua empresa"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                <Mail size={14} /> E-mail Profissional
              </label>
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                placeholder="contato@empresa.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                <Phone size={14} /> WhatsApp / Telefone
              </label>
              <input 
                required
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                placeholder="(84) 99999-9999"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                <CalendarCheck size={14} /> Data Preferida
              </label>
              <input 
                type="date"
                required
                value={dataPreferida}
                onChange={(e) => setDataPreferida(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                <Clock size={14} /> Horário
              </label>
              <select 
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-white">
                <option>Manhã (08h - 12h)</option>
                <option>Tarde (14h - 18h)</option>
                <option>Noite (Sob consulta)</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
              <MessageSquare size={14} /> Assunto / Necessidade
            </label>
            <textarea 
              rows={3}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none"
              placeholder="Descreva brevemente como podemos ajudar..."
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-[#001a33] hover:bg-blue-900 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
          >
            {loading ? (
              <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>Solicitar Agendamento <Send size={20} /></>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
