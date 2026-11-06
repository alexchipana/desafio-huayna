import React, { useState, useEffect } from 'react';
import { ArrowRight, Mountain, ShieldCheck, Calendar, MapPin } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

interface HeroProps {
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  // Target race date: November 8, 2026 06:00:00 Bolivia time (UTC-4)
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 15, hours: 8, minutes: 22, seconds: 40 });

  useEffect(() => {
    const target = new Date('2026-11-08T06:00:00-04:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Unboxed Metadata Header (No pills, clean typography) */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-slate-400 mb-4 tracking-wider uppercase">
          <span className="text-amber-400 font-semibold">{EVENT_DATA.organizers.club}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>{EVENT_DATA.discipline}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Nevado Huayna Potosí (6.090 m)</span>
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
            <h1 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[0.95]">
              47 km sobre los <span className="text-amber-400">5.029 m s. n. m.</span>
              <br />
              <span className="text-slate-200">El Desafío Andino Definitivo</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              La prueba de ciclismo de montaña (XCM) en alta altitud más exigente de la Cordillera Real.
              Un ascenso extremo desde la comunidad de Patamanta hasta el pie de monte del glaciar Huayna Potosí en Alto Milluni,
              enfrentando <strong className="text-white font-semibold">hipoxia severa, +1.478 metros de desnivel</strong> y senderos 100% de montaña.
            </p>

            {/* Event Dates & Trust strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-300">
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
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#inscritos"
                className="px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-all flex items-center gap-2.5 shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                Ver Lista de Inscritos (167)
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#reglamento-oficial"
                className="px-5 py-3.5 text-sm font-semibold tracking-wider text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded transition-colors flex items-center gap-2"
              >
                Cronograma del Domingo 8
              </a>

              <div className="px-3.5 py-2 rounded bg-rose-950/50 border border-rose-800/60 text-rose-300 text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                Inscripciones Cerradas
              </div>
            </div>

            {/* Countdown bar */}
            <div className="pt-2">
              <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">
                Tiempo restante para la largada oficial:
              </div>
              <div className="grid grid-cols-4 gap-2 max-w-md">
                <div className="bg-slate-900/80 border border-slate-800 p-2.5 rounded text-center">
                  <div className="font-['JetBrains_Mono'] font-bold text-xl sm:text-2xl text-amber-400 tabular-nums">
                    {String(timeLeft.days).padStart(2, '0')}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">Días</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-2.5 rounded text-center">
                  <div className="font-['JetBrains_Mono'] font-bold text-xl sm:text-2xl text-slate-200 tabular-nums">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">Horas</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-2.5 rounded text-center">
                  <div className="font-['JetBrains_Mono'] font-bold text-xl sm:text-2xl text-slate-200 tabular-nums">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">Min</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 p-2.5 rounded text-center">
                  <div className="font-['JetBrains_Mono'] font-bold text-xl sm:text-2xl text-slate-200 tabular-nums">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">Seg</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
              <img
                src="/src/assets/images/hero_huayna_potosi_mtb_1792904385157.jpg"
                alt="Ciclista de montaña ascendiendo frente al Nevado Huayna Potosí"
                className="w-full h-auto aspect-16/10 object-cover"
                referrerPolicy="no-referrer"
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
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 sm:p-5 rounded-lg bg-slate-900/80 border border-slate-800/80">
            <div className="text-xs uppercase tracking-wider text-slate-400">Distancia Total</div>
            <div className="font-['JetBrains_Mono'] font-bold text-2xl sm:text-3xl text-white mt-1 tabular-nums">
              47 <span className="text-sm font-sans text-amber-400">km</span>
            </div>
            <div className="text-xs text-slate-400 mt-1">100% camino de tierra y ripio</div>
          </div>

          <div className="p-4 sm:p-5 rounded-lg bg-slate-900/80 border border-slate-800/80">
            <div className="text-xs uppercase tracking-wider text-slate-400">Desnivel Acumulado</div>
            <div className="font-['JetBrains_Mono'] font-bold text-2xl sm:text-3xl text-white mt-1 tabular-nums">
              +1.478 <span className="text-sm font-sans text-amber-400">m</span>
            </div>
            <div className="text-xs text-slate-400 mt-1">Ascenso sostenido andino</div>
          </div>

          <div className="p-4 sm:p-5 rounded-lg bg-slate-900/80 border border-slate-800/80">
            <div className="text-xs uppercase tracking-wider text-slate-400">Altitud Máxima</div>
            <div className="font-['JetBrains_Mono'] font-bold text-2xl sm:text-3xl text-amber-400 mt-1 tabular-nums">
              5.029 <span className="text-sm font-sans text-slate-300">m s. n. m.</span>
            </div>
            <div className="text-xs text-slate-400 mt-1">Abra Glaciar Huayna Potosí</div>
          </div>

          <div className="p-4 sm:p-5 rounded-lg bg-slate-900/80 border border-slate-800/80">
            <div className="text-xs uppercase tracking-wider text-slate-400">Pelotón Internacional</div>
            <div className="font-['JetBrains_Mono'] font-bold text-2xl sm:text-3xl text-white mt-1 tabular-nums">
              150+ <span className="text-sm font-sans text-amber-400">Riders</span>
            </div>
            <div className="text-xs text-slate-400 mt-1">Bolivia, Perú, Chile y más</div>
          </div>
        </div>
      </div>
    </section>
  );
};
