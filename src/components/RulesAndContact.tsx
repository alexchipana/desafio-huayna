import React, { useState } from 'react';
import { ShieldCheck, CheckSquare, Square, MessageCircle, HelpCircle, ChevronDown, ChevronUp, ExternalLink, Phone } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export const RulesAndContact: React.FC = () => {
  // Checklist state for mandatory gear
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({
    0: true,
    1: true,
    2: true,
  });

  const toggleCheck = (idx: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const totalChecked = Object.values(checkedItems).filter(Boolean).length;
  const isReady = totalChecked === EVENT_DATA.mandatoryGear.length;

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Cómo funciona el transporte y entrega de equipaje a la meta (Drop-Bag)?',
      a: 'En la partida de Patamanta (06:00 AM a 07:15 AM) cada ciclista entrega una mochila o bolso debidamente etiquetado con su número de dorsal. La organización traslada estos bultos en camión cerrado directamente a la zona de meta en Alto Milluni para que los atletas tengan ropa térmica seca e invernal inmediatamente al cruzar el arco.',
    },
    {
      q: '¿Cómo se organiza el retorno vehicular desde Alto Milluni hacia La Paz y El Alto?',
      a: 'La organización ha dispuesto minibuses de retorno para los corredores y camiones plataforma acolchados para el traslado seguro de las bicicletas desde Alto Milluni hacia la Ceja de El Alto y el centro de La Paz a partir de las 13:00 hasta las 18:00.',
    },
    {
      q: '¿Qué sucede si un corredor presenta síntomas severos de Mal Agudo de Montaña (MAM)?',
      a: 'La 2da Compañía de Bomberos Voluntarios Santa Bárbara cuenta con puestos de oxigenoterapia en Churiaque y en el abra a 5.029m. En caso de requerirlo, el corredor es estabilizado con flujo de oxígeno medicinal y evacuado de inmediato en ambulancia 4x4 hacia cotas inferiores.',
    },
    {
      q: '¿Cuáles son los canales oficiales para el pago de la inscripción?',
      a: 'Se puede abonar vía escaneo de código QR Simple a través de cualquier banca digital boliviana (Banco Unión, BCP, Banco Bisa, etc.), adquiriendo entradas en Jalo.com.bo, o mediante la plataforma internacional RunSignUp / BikeSignUp para corredores del exterior.',
    },
    {
      q: '¿Se permite el uso de bicicletas eléctricas (E-MTB / Pedelec)?',
      a: 'Para la edición 2026, las categorías competitivas oficiales son exclusivamente de tracción humana. La categoría Aficionados/Open admite E-MTBs bajo modalidad participativa de exhibición con cronometraje diferenciado.',
    },
  ];

  return (
    <section id="reglamento" className="py-16 sm:py-20 bg-[#0d121c] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Title */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Normativa, Equipamiento Obligatorio & Canales de Soporte
          </div>
          <h2 className="font-['Barlow_Condensed'] text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            Reglamento Técnico & Contacto Oficial
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            La alta montaña no admite descuidos. Revisa la lista de verificación obligatoria para la inspección técnica previa en el parque cerrado de Patamanta y comunícate directamente con los coordinadores del club.
          </p>
        </div>

        {/* 2-Column Grid: Mandatory Gear Checklist + Direct Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Mandatory Gear Interactive Checklist */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-lg p-5 sm:p-7 space-y-5 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                  Inspección Previa en Parque Cerrado
                </span>
                <h3 className="text-lg font-bold text-white">
                  Lista de Equipamiento Obligatorio
                </h3>
              </div>
              <div className="text-xs font-['JetBrains_Mono']">
                Estado:{' '}
                <span className={isReady ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
                  {totalChecked}/{EVENT_DATA.mandatoryGear.length} Verificados
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              Marca cada elemento para asegurarte de que tu mochila y bicicleta cumplen con las exigencias reglamentarias de seguridad:
            </p>

            <div className="space-y-2.5">
              {EVENT_DATA.mandatoryGear.map((gear, idx) => {
                const isChecked = !!checkedItems[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleCheck(idx)}
                    className={`p-3 rounded border transition-all cursor-pointer flex items-start gap-3 select-none ${
                      isChecked
                        ? 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                        : 'bg-amber-950/20 border-amber-500/30 hover:border-amber-500/50'
                    }`}
                  >
                    <button
                      type="button"
                      className="mt-0.5 text-amber-400 shrink-0 cursor-pointer"
                      aria-label={isChecked ? 'Elemento verificado' : 'Marcar elemento'}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-500" />
                      )}
                    </button>
                    <div className="space-y-0.5">
                      <div className={`text-xs font-semibold ${isChecked ? 'text-slate-200' : 'text-white'}`}>
                        {gear.item}
                      </div>
                      <div className="text-[11px] text-slate-400 leading-tight">
                        {gear.detail}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={`p-3 rounded text-xs transition-colors flex items-center justify-between ${
              isReady ? 'bg-emerald-950/40 border border-emerald-800/60 text-emerald-300' : 'bg-slate-950 border border-slate-800 text-slate-400'
            }`}>
              <span>
                {isReady
                  ? '¡Excelente! Cumples con todos los implementos de seguridad requeridos para la largada.'
                  : 'Faltan elementos por verificar. No se permitirá largar a ciclistas sin casco o sin abrigo térmico.'}
              </span>
              <ShieldCheck className={`w-5 h-5 shrink-0 ${isReady ? 'text-emerald-400' : 'text-slate-600'}`} />
            </div>
          </div>

          {/* Column 2: Official WhatsApp & Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp lines */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-bold text-white uppercase tracking-wide">
                  Canales Oficiales de WhatsApp
                </h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                El equipo organizador de MTB Rodadas La Paz responde en tiempo real consultas sobre rutas, estados del camino y transferencias QR:
              </p>

              <div className="space-y-2.5 pt-1">
                {EVENT_DATA.registrationChannels.whatsappContacts.map((contact, idx) => (
                  <a
                    key={idx}
                    href={`https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hola MTB Rodadas La Paz, deseo información e inscribirme al Desafío Huayna Potosí 2026.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded bg-slate-950/70 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                        {contact.label}
                      </div>
                      <div className="text-[11px] font-['JetBrains_Mono'] text-slate-400">
                        {contact.phone}
                      </div>
                    </div>
                    <span className="text-xs font-medium text-emerald-400 flex items-center gap-1">
                      Chatear <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* External Registration Portals */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-5 space-y-3 shadow-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                Plataformas de Registro Externas:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {EVENT_DATA.registrationChannels.platforms.map((plat, idx) => (
                  <div key={idx} className="p-3 bg-slate-950/80 rounded border border-slate-800 space-y-1">
                    <div className="font-bold text-white">{plat.name}</div>
                    <div className="text-[10px] text-slate-400 leading-tight">{plat.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase tracking-wide text-white">
              Preguntas Frecuentes de los Participantes
            </h3>
          </div>

          <div className="divide-y divide-slate-800 bg-slate-900/60 border border-slate-800 rounded-lg overflow-hidden">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="p-4 sm:p-5 transition-colors">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left gap-4 cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-white">
                      {faq.q}
                    </span>
                    <span className="text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-2.5 text-xs text-slate-300 leading-relaxed pr-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
