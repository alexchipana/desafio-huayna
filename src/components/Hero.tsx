import React from 'react';
import { ArrowRight, Mountain, ShieldCheck, Calendar, MapPin, Camera, Trophy, CheckCircle2 } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';
import { AudioPlayer } from './AudioPlayer';
import heroImage from '../assets/images/hero_huayna_potosi_mtb_1792904385157.jpg';

interface HeroProps {
  onOpenRegister?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {

  return (
    <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Unboxed Metadata Header (No pills, clean typography) */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-slate-400 mb-4 tracking-wider uppercase">
          <span className="text-amber-400 font-semibold">{EVENT_DATA.organizers.club}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>{EVENT_DATA.discipline}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Edición 2026</span>
        </div>

        {/* Informational Portal Notice */}
        <div className="mb-6 p-3 rounded-lg bg-slate-900/90 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-bold uppercase text-[10px] tracking-wide">
              Portal Informativo
            </span>
            <span>
              Página de divulgación deportiva independiente. El sitio web oficial del evento es gestionado en RunSignUp.
            </span>
          </div>
          <a
            href="https://runsignup.com/Race/BO/LaPaz/DESAFIOHUAYNAPOTOSI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 font-semibold underline inline-flex items-center gap-1 shrink-0"
          >
            Ir al Sitio Oficial de la Carrera <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Hero Grid: Editorial Text + Hero Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-['Barlow_Condensed'] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[0.98] sm:leading-[0.95] break-words">
              47 km sobre los <span className="text-amber-400">5.029 m s. n. m.</span>
              <br />
              <span className="text-slate-200">El Desafío Definitivo</span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              La prueba de ciclismo de montaña (MTB) en alta altitud más exigente de la Cordillera Real.
              Un ascenso extremo desde la comunidad de Patamanta hasta el pie de montaña del glaciar Huayna Potosí en Alto Milluni,
              enfrentando <strong className="text-white font-semibold">+1.450 metros de desnivel</strong> (+1.704 m acumulado GPX) y senderos 100% de montaña.
            </p>

            {/* Event Dates & Trust strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 text-sm text-slate-300">
              <div className="flex items-start gap-3 p-3 rounded bg-slate-900/60 border border-slate-800">
                <Calendar className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">Fecha de Carrera</div>
                  <div className="font-semibold text-slate-100">Domingo, 8 de noviembre de 2026</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded bg-slate-900/60 border border-slate-800">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">Ruta & Llegada</div>
                  <div className="font-semibold text-slate-100">Patamanta ➔ Alto Milluni, La Paz</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
              <a
                href="#resultados"
                className="w-full sm:w-auto px-6 py-3 text-sm font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                <Trophy className="w-4 h-4 fill-slate-950" />
                Resultados de Carrera (145)
              </a>

              <a
                href="#galeria"
                className="w-full sm:w-auto px-5 py-3 text-sm font-semibold tracking-wider text-amber-300 hover:text-white bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded transition-colors flex items-center justify-center gap-2"
              >
                <Camera className="w-4 h-4 text-amber-400" />
                Galería (57 Fotos)
              </a>
            </div>

            {/* Audio Player: Desafío Huayna Canción */}
            <div className="pt-2">
              <AudioPlayer />
            </div>

            {/* Race Completed Status Badge */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider w-fit">
                <CheckCircle2 className="w-4 h-4" />
                Carrera Finalizada · 8 de Noviembre de 2026
              </span>
              <span className="text-xs text-slate-400">
                145 ciclistas clasificados en meta · Cronometraje Sporthive
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
              <img
                src={heroImage}
                alt="Ciclista de montaña ascendiendo frente al Nevado Huayna Potosí"
                className="w-full h-auto aspect-16/10 object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

              {/* In-image caption with verified real context */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Asistencia Médica Santa Bárbara en Ruta
                </div>
                <p className="text-xs text-slate-300 leading-snug">
                  47 km de alta exigencia técnica sobre la Cordillera Real con el respaldo de Bomberos Voluntarios y comunidades originarias.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item KPI Strip Full-Width Row Below Hero */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          <div className="p-3 sm:p-5 rounded-lg bg-slate-900/80 border border-slate-800/80">
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400">Distancia Total</div>
            <div className="font-['JetBrains_Mono'] font-bold text-xl sm:text-3xl text-white mt-1 tabular-nums">
              47 <span className="text-xs sm:text-sm font-sans text-amber-400">km</span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-400 mt-1">100% camino de tierra y ripio</div>
          </div>

          <div className="p-3 sm:p-5 rounded-lg bg-slate-900/80 border border-slate-800/80">
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400">Desnivel Acumulado</div>
            <div className="font-['JetBrains_Mono'] font-bold text-xl sm:text-3xl text-white mt-1 tabular-nums">
              +1.450 <span className="text-xs sm:text-sm font-sans text-amber-400">m</span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-400 mt-1">+1.704 m acumulado según GPX</div>
          </div>

          <div className="p-3 sm:p-5 rounded-lg bg-slate-900/80 border border-slate-800/80">
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400">Altitud Máxima</div>
            <div className="font-['JetBrains_Mono'] font-bold text-xl sm:text-3xl text-amber-400 mt-1 tabular-nums">
              5.029 <span className="text-xs sm:text-sm font-sans text-slate-300">msnm</span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-400 mt-1">Abra Glaciar Huayna Potosí</div>
          </div>

          <div className="p-3 sm:p-5 rounded-lg bg-slate-900/80 border border-slate-800/80">
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400">Pelotón Internacional</div>
            <div className="font-['JetBrains_Mono'] font-bold text-xl sm:text-3xl text-white mt-1 tabular-nums">
              167 <span className="text-xs sm:text-sm font-sans text-amber-400">Riders</span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-400 mt-1">7 delegaciones confirmadas</div>
          </div>
        </div>
      </div>
    </section>
  );
};
