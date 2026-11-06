import React, { useState } from 'react';
import { Clock, ShieldAlert, Bike, Award, Download, ExternalLink, MapPin, AlertCircle, FileText, CheckCircle } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export const TechnicalRegulationsModal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cronograma' | 'bicicletas' | 'premios' | 'deslinde'>('cronograma');

  return (
    <section id="reglamento-oficial" className="py-16 sm:py-20 bg-[#0d121c] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Convocatoria Oficial V1 · Reglamento & Disposiciones de Carrera
            </div>
            <h2 className="font-['Barlow_Condensed'] text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
              Cronograma de Partida & Normas Técnicas
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Consulta al detalle los horarios oficiales de largada escalonada del 8 de noviembre, las normas de admisión de bicicletas, las condiciones del deslinde legal y la bolsa económica oficial de premios.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={EVENT_DATA.keyMetrics.gpxUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4 text-amber-400" />
              Descargar GPX de Ruta
            </a>
            <a
              href={EVENT_DATA.keyMetrics.stravaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Ver en Strava (48.7 km)
            </a>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900 rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveTab('cronograma')}
            className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'cronograma'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Clock className="w-4 h-4" />
            Cronograma del Domingo 8
          </button>

          <button
            onClick={() => setActiveTab('bicicletas')}
            className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'bicicletas'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Bike className="w-4 h-4" />
            Bicicletas Admitidas (MTB, Gravel & E-Bike)
          </button>

          <button
            onClick={() => setActiveTab('premios')}
            className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'premios'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Award className="w-4 h-4" />
            Premios Económicos & Quórum
          </button>

          <button
            onClick={() => setActiveTab('deslinde')}
            className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'deslinde'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            Deslinde de Responsabilidades (Anexo 1)
          </button>
        </div>

        {/* TAB 1: SCHEDULE */}
        {activeTab === 'cronograma' && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase tracking-wide text-white">
                  Programa Oficial de la Jornada (Domingo 8 de Noviembre de 2026)
                </h3>
                <p className="text-xs text-slate-400">
                  Cumplimiento riguroso de horarios para garantizar la seguridad barométrica antes del mediodía.
                </p>
              </div>
              <a
                href={EVENT_DATA.keyMetrics.googleMapsStartUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-400 hover:underline flex items-center gap-1.5 shrink-0"
              >
                <MapPin className="w-4 h-4" />
                Ubicación Partida Patamanta (Google Maps)
              </a>
            </div>

            <div className="space-y-3">
              {EVENT_DATA.scheduleDayOfRace.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-lg bg-slate-950/70 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 hover:border-slate-700 transition-colors"
                >
                  <div className="font-['JetBrains_Mono'] font-bold text-amber-400 text-sm sm:text-base sm:w-44 shrink-0">
                    {item.time}
                  </div>
                  <div className="space-y-0.5 flex-1">
                    <div className="font-semibold text-white text-sm">
                      {item.activity}
                    </div>
                    <div className="text-xs text-slate-400 leading-relaxed">
                      {item.details}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: BIKES */}
        {activeTab === 'bicicletas' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* MTB Conventional */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
                <Bike className="w-5 h-5 text-amber-400" />
                <h4 className="font-bold text-white text-base uppercase">Bicicletas MTB (Oficial)</h4>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Solo manubrios normales de montaña.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Ancho mínimo de llanta: <strong>1.90 pulgadas</strong>.</span>
                </li>
                <li className="flex items-start gap-2 text-rose-400">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Prohibidas aerobarras</strong> de triatlón/contrarreloj (descalificación).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Acceso pleno al podio y premios económicos oficiales.</span>
                </li>
              </ul>
            </div>

            {/* Gravel */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
                <Bike className="w-5 h-5 text-sky-400" />
                <h4 className="font-bold text-white text-base uppercase">Bicicletas Gravel</h4>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Horario de largada diferenciado a las <strong>08:45 AM</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Reciben Kit de Bienvenida completo y cronometraje.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Medalla Finisher solo si llegan a meta <strong>sin asistencia</strong>.</span>
                </li>
                <li className="flex items-start gap-2 text-slate-400">
                  <span>Sin acceso a podio (salvo quórum de 10 inscritos en subcategoría).</span>
                </li>
              </ul>
            </div>

            {/* E-Bike */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
                <Bike className="w-5 h-5 text-purple-400" />
                <h4 className="font-bold text-white text-base uppercase">E-Bikes (Asistencia)</h4>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Horario de largada a las <strong>08:45 AM</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Solo pedaleo asistido (impulsado por pedaleo humano).</span>
                </li>
                <li className="flex items-start gap-2 text-rose-400">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Prohibidas 100% eléctricas</strong> (motos acelerador).</span>
                </li>
                <li className="flex items-start gap-2 text-slate-400">
                  <span>Participación netamente recreativa; no reciben medalla ni podio.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB 3: OFFICIAL PRIZES */}
        {activeTab === 'premios' && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
              <div>
                <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase tracking-wide text-white">
                  Bolsa Oficial de Premios en Efectivo
                </h3>
                <p className="text-xs text-slate-400">
                  Ceremonia de premiación: Domingo 8 de noviembre a las 13:00 en Alto Milluni.
                </p>
              </div>
              <span className="text-xs font-['JetBrains_Mono'] text-amber-400">
                Podio obligatorio sin casco ni lentes
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {EVENT_DATA.officialPrizes.perCategory.map((item, idx) => (
                <div key={idx} className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-center space-y-1.5">
                  <div className="text-xs font-semibold text-slate-300 uppercase">{item.place}</div>
                  <div className="font-['JetBrains_Mono'] text-3xl font-extrabold text-amber-400">
                    Bs. {item.amountBOB}
                  </div>
                  <div className="text-[11px] text-slate-400">{item.extra}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {EVENT_DATA.officialPrizes.specials.map((spec, idx) => (
                <div key={idx} className="p-3.5 bg-slate-950/60 rounded border border-slate-800/80 space-y-1">
                  <div className="text-xs font-bold text-white">{spec.title}</div>
                  <div className="font-['JetBrains_Mono'] text-xl font-bold text-emerald-400">
                    Bs. {spec.amountBOB}
                  </div>
                  <div className="text-[11px] text-slate-400">{spec.note}</div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-amber-950/30 border border-amber-500/30 rounded text-xs text-amber-200">
              <strong>Regla de Quórum:</strong> {EVENT_DATA.officialPrizes.ruleQuorum}
            </div>
          </div>
        )}

        {/* TAB 4: LEGAL WAIVER */}
        {activeTab === 'deslinde' && (
          <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-6 sm:p-8 space-y-4">
            <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase tracking-wide text-white">
              Anexo 1: Deslinde de Responsabilidades & Marco Legal
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              La inscripción online refrenda la aceptación voluntaria de la Convocatoria. Los participantes entregan la copia física firmada durante la entrega de dorsales con la exhibición de su Carnet de Identidad.
            </p>

            <div className="p-4 bg-slate-950 rounded border border-slate-800 text-xs text-slate-400 space-y-2 font-serif leading-relaxed">
              <p>
                «El competidor declara eximir de toda responsabilidad civil, penal o administrativa al Club MTB Rodadas La Paz, MTB Rodadas Racing Team, directores, bomberos voluntarios y auspiciadores, reconociendo que el ciclismo de montaña en altitudes superiores a 5.000 msnm constituye una actividad de riesgo físico voluntario.»
              </p>
              <p>
                «Cláusula Arbitral: Toda controversia jurídica se resolverá bajo arbitraje vinculante conforme a la Ley N.º 708 de Conciliación y Arbitraje de Bolivia ante la Cámara Nacional de Comercio (CAC - CNC) en la ciudad de La Paz.»
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
