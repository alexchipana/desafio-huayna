import React from 'react';
import { Music, Sparkles, Shield, Wrench, Coffee, HeartPulse } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import concertImage from '../assets/images/rock_band_armadura_milluni_1792904387327.jpg';

export const ConcertAndSponsors: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0a0d14] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
        {/* Culture & Closing Concert Block */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/30 border border-slate-800 rounded-lg overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Concert narrative */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
                <Music className="w-4 h-4" />
                Celebración Cultural en Meta
              </div>

              <h2 className="font-['Barlow_Condensed'] text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
                Cierre Épico: Concierto en Vivo de <span className="text-amber-400">{EVENT_DATA.culturalConcert.band}</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                El esfuerzo titánico de coronar los 5.029 msnm culmina con una celebración única en los Andes.
                La consagrada banda boliviana de heavy rock <strong className="text-white">«Armadura»</strong> presentará un recital completo en la plaza histórica de Alto Milluni para honrar la tenacidad de los competidores.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded bg-slate-950/70 border border-slate-800 space-y-1">
                  <span className="text-slate-400 uppercase tracking-wider text-[11px] font-medium block">
                    Escenario Andino
                  </span>
                  <div className="font-semibold text-slate-100">{EVENT_DATA.culturalConcert.location}</div>
                  <div className="text-[11px] text-slate-400">A 4.650 metros de altitud frente al glaciar</div>
                </div>

                <div className="p-3 rounded bg-slate-950/70 border border-slate-800 space-y-1">
                  <span className="text-slate-400 uppercase tracking-wider text-[11px] font-medium block">
                    Acceso para Atletas
                  </span>
                  <div className="font-semibold text-emerald-400">Ingreso Libre con Dorsal de Carrera</div>
                  <div className="text-[11px] text-slate-400">Incluido en el pase individual y por equipos</div>
                </div>
              </div>
            </div>

            {/* Concert image */}
            <div className="lg:col-span-5 h-72 lg:h-full relative overflow-hidden bg-slate-950">
              <img
                src={concertImage}
                alt="Concierto de rock de Armadura en la meta de Alto Milluni frente al Huayna Potosí"
                className="w-full h-full object-cover min-h-[280px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Commercial Sponsors Showcase */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Auspiciadores Oficiales
            </div>
            <h3 className="font-['Barlow_Condensed'] text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
              Marcas Líderes que Hacen Posible el Desafío
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Agradecemos la confianza de la industria ciclística internacional, empresas de nutrición andina y prestadores de servicios médicos.
            </p>
          </div>

          {/* Technical gear sponsors */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" />
              Equipamiento Técnico, Repuestos & Cubiertas
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {EVENT_DATA.sponsors.technical.map((sp, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 rounded p-3.5 text-center transition-all group"
                >
                  <div className="font-bold text-white text-sm group-hover:text-amber-400 transition-colors">
                    {sp.name}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 leading-tight line-clamp-2">
                    {sp.category}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nutrition and recovery services */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <Coffee className="w-3.5 h-3.5" />
              Nutrición, Hidratación, Fisioterapia & Gastronomía Andina
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {EVENT_DATA.sponsors.nutritionAndServices.map((sp, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 rounded p-3.5 text-center transition-all group"
                >
                  <div className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">
                    {sp.name}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 leading-tight line-clamp-2">
                    {sp.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
