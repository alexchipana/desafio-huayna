import React from 'react';
import { ShieldCheck, HeartPulse, Building2, Users2, Truck, AlertCircle } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import milluniImage from '../assets/images/route_alto_milluni_glacier_1792904385218.jpg';

export const SafetyLogistics: React.FC = () => {
  return (
    <section id="seguridad" className="py-16 sm:py-20 bg-[#0d121c] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Gestión del Riesgo, Respaldo Estatal & Comunidades
          </div>
          <h2 className="font-['Barlow_Condensed'] text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            Logística de Seguridad en Alta Montaña
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Competir sobre los 5.000 metros de altitud exige un despliegue preventivo sin precedentes.
            El evento cuenta con asistencia médica prehospitalaria continua, soporte de ambulancias 4x4 y el respaldo directo de los gobiernos municipales y las comunidades originarias.
          </p>
        </div>

        {/* 2-Column Bento Grid: Safety & Institutional Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: Bomberos Santa Bárbara & Medical Protocol */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-lg p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="w-10 h-10 rounded bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider block">
                    Atención Médica en Ruta
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {EVENT_DATA.safetyAndSupport.bomberos.name}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {EVENT_DATA.safetyAndSupport.bomberos.role}. Especialistas entrenados en socorrismo alpino, rescate en laderas escarpadas y estabilización ante el Mal Agudo de Montaña severo (MAM/Edema Pulmonar de Altitud).
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Capacidades desplegadas en competencia:
                </div>
                {EVENT_DATA.safetyAndSupport.bomberos.equipment.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 bg-slate-950/80 rounded border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Criterio médico vinculante: Si el equipo médico detecta saturación de oxígeno por debajo de los límites seguros (&lt;65% en reposo forzado), el atleta será retirado preventivamente en vehículo 4x4.
              </span>
            </div>
          </div>

          {/* Column 2: Indigenous Communities & Municipal Alliance */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-lg p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                    Alianzas Estratégicas
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Soporte Estatal y Comunitario
                  </h3>
                </div>
              </div>

              {/* Institutions */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                  Entidades Estatales & Municipales Participantes:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {EVENT_DATA.safetyAndSupport.institutional.map((inst, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded bg-slate-950/70 border border-slate-800 text-slate-200"
                    >
                      {inst}
                    </div>
                  ))}
                </div>
              </div>

              {/* Communities */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 block flex items-center gap-1.5">
                  <Users2 className="w-3.5 h-3.5 text-amber-400" />
                  Comunidades Originarias Anfitrionas:
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Autorización y coordinación activa con las dirigencias originarias para el paso sustentable por senderos históricos y cuidado de la fauna silvestre (alpacas, llamas y vizcachas):
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {EVENT_DATA.safetyAndSupport.indigenousCommunities.map((com, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded"
                    >
                      {com}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-400 pt-3 border-t border-slate-800">
              Protocolo de carrera ecológico "Leave No Trace": Prohibido arrojar envoltorios de geles plásticos en la montaña bajo sanción de descalificación inmediata.
            </div>
          </div>
        </div>

        {/* Alto Milluni & Glacier Scenic Showcase */}
        <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                Llegada & Patrimonio Histórico
              </div>
              <h3 className="font-['Barlow_Condensed'] text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                Alto Milluni: Historia Minera a los Pies del Huayna Potosí
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                La meta se sitúa en la emblemática población minera de Alto Milluni. Rodeada de lagunas de tintes rojizos y esmeralda por los sedimentos minerales, este paraje andino alberga un cementerio histórico declarado patrimonio cultural y ofrece una vista frontal imponente del glaciar.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Al cruzar el arco de meta, los corredores contarán con el apoyo de la gastronomía autóctona de <strong className="text-slate-200">Suma Phunkhu Milluni</strong>, sesiones de descarga muscular con <strong className="text-slate-200">Uma Fisioterapia</strong> y transporte de retorno coordinado hacia La Paz y El Alto.
              </p>
            </div>

            <div className="lg:col-span-5 h-64 lg:h-full relative overflow-hidden">
              <img
                src={milluniImage}
                alt="Comunidad de Alto Milluni frente al glaciar Huayna Potosí"
                className="w-full h-full object-cover min-h-[260px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-transparent lg:block hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
