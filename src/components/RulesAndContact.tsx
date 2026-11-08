import React, { useState } from 'react';
import { ShieldCheck, MessageCircle, HelpCircle, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export const RulesAndContact: React.FC = () => {
  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Dónde se consultan los tiempos y clasificaciones de la carrera?',
      a: 'Los resultados oficiales con tiempos de chip y tiempo pistola fueron registrados por el sistema MYLAPS y están disponibles en la sección superior de este portal y en la plataforma de Sporthive.',
    },
    {
      q: '¿Cómo funcionó el transporte y entrega de equipaje a la meta (Drop-Bag)?',
      a: 'En la partida de Patamanta (06:00 AM a 07:15 AM) cada ciclista entregó una mochila etiquetada con su dorsal. La organización trasladó estos bultos directamente a la meta en Alto Milluni para contar con ropa térmica seca inmediatamente al cruzar el arco.',
    },
    {
      q: '¿Cómo se organizó el retorno vehicular desde Alto Milluni hacia La Paz y El Alto?',
      a: 'La organización dispuso minibuses de retorno para los corredores y camiones plataforma acolchados para el traslado seguro de las bicicletas desde Alto Milluni hacia la Ceja de El Alto y el centro de La Paz.',
    },
    {
      q: '¿Qué protocolo médico se implementó para el Mal Agudo de Montaña (MAM)?',
      a: 'La 2da Compañía de Bomberos Voluntarios Santa Bárbara contó con puestos de oxigenoterapia en Churiaque y en el abra glaciar a 5.029m para la atención y estabilización inmediata de los participantes.',
    },
    {
      q: '¿Se permite el uso de bicicletas eléctricas (E-MTB / Pedelec)?',
      a: 'Para la edición 2026, las categorías competitivas fueron exclusivamente de tracción humana. La categoría Aficionados/Open admitió E-MTBs bajo modalidad participativa con cronometraje diferenciado.',
    },
  ];

  return (
    <section id="reglamento" className="py-10 sm:py-16 bg-[#0d121c] border-b border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        {/* Section Title */}
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Soporte & Preguntas Frecuentes
          </div>
          <h2 className="font-['Barlow_Condensed'] text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white">
            Canales de Contacto & Información
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Comunícate con los coordinadores del Club MTB Rodadas La Paz para consultas sobre resultados, fotografías o la próxima edición.
          </p>
        </div>

        {/* 2-Column Grid: Contacts + Gear Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Column 1: WhatsApp Channels */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-lg p-5 sm:p-6 space-y-4 shadow-xl">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wide">
                Canales de Atención por WhatsApp
              </h3>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              El equipo organizador de MTB Rodadas La Paz atiende consultas directas:
            </p>

            <div className="space-y-2.5 pt-1">
              {EVENT_DATA.registrationChannels.whatsappContacts.map((contact, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hola MTB Rodadas La Paz, tengo una consulta sobre el Desafío Huayna Potosí 2026.')}`}
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

          {/* Column 2: Mandatory Gear Summary (Simplified) */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-lg p-5 sm:p-6 space-y-4 shadow-xl">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wide">
                Equipamiento de Seguridad del Circuito
              </h3>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Estándares técnicos requeridos para la travesía de alta montaña sobre los 5.029 m s. n. m.:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-300">
              {EVENT_DATA.mandatoryGear.map((gear, idx) => (
                <div key={idx} className="p-2.5 rounded bg-slate-950/60 border border-slate-800/80">
                  <div className="font-semibold text-slate-200 text-xs">{gear.item}</div>
                  <div className="text-[11px] text-slate-400 leading-snug">{gear.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <h3 className="font-['Barlow_Condensed'] text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
              Preguntas Frecuentes
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
