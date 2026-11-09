import React, { useState } from 'react';
import { Mountain, Compass, MapPin, AlertCircle, HeartPulse, Shield, Flag, CloudRain, Snowflake, Wrench, ShieldAlert } from 'lucide-react';
import { EVENT_DATA, Checkpoint } from '../data/eventData';

export const RouteElevation: React.FC = () => {
  const [selectedCp, setSelectedCp] = useState<Checkpoint>(EVENT_DATA.checkpoints[3]); // default to highest point 5030m

  // SVG coordinates for the 46.9km profile from GPX
  // Invert Y for SVG: max elevation (5200m) -> y=20, min elevation (3800m) -> y=240
  const minElev = 3800;
  const maxElev = 5200;
  const elevRange = maxElev - minElev;
  const totalKm = 46.9;

  const getY = (elev: number) => {
    const fraction = (elev - minElev) / elevRange;
    return 240 - fraction * 210;
  };

  const getX = (km: number) => {
    return 40 + (km / totalKm) * 720;
  };

  // Profile points extracted from official GPX (DOC-20260903-WA0073..gpx)
  const profilePoints = [
    { km: 0.0, elev: 3954 },
    { km: 2.3, elev: 4062 },
    { km: 4.7, elev: 4073 },
    { km: 7.0, elev: 4123 },
    { km: 9.4, elev: 4240 },
    { km: 11.7, elev: 4360 },
    { km: 14.1, elev: 4470 },
    { km: 16.4, elev: 4621 },
    { km: 18.8, elev: 4761 },
    { km: 21.1, elev: 4798 },
    { km: 23.4, elev: 4726 },
    { km: 25.8, elev: 4696 },
    { km: 28.1, elev: 4612 },
    { km: 30.5, elev: 4678 },
    { km: 32.8, elev: 4893 },
    { km: 35.2, elev: 4936 },
    { km: 37.6, elev: 5030 }, // Abra Glaciar Huayna Potosi Cota Maxima
    { km: 39.9, elev: 4907 },
    { km: 42.2, elev: 4745 },
    { km: 44.5, elev: 4593 },
    { km: 46.9, elev: 4635 }, // Meta Alto Milluni
  ];

  const pathD = profilePoints.reduce((acc, p, i) => {
    const x = getX(p.km);
    const y = getY(p.elev);
    return i === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
  }, '');

  const areaD = `${pathD} L ${getX(totalKm)} 240 L ${getX(0)} 240 Z`;

  return (
    <section id="ruta" className="py-10 sm:py-20 bg-[#0a0d14] border-b border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Geografía, Altimetría y Parámetros Técnicos (GPX Oficial)
          </div>
          <h2 className="font-['Barlow_Condensed'] text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            Perfil de Ruta: De Patamanta al Abra Glaciar
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Un trazado 100% off-road de 46.9 km que arranca en la meseta altiplánica y asciende de manera sostenida
            hacia los contrafuertes rocosos de la Cordillera Real, culminando en la histórica comunidad minera de Alto Milluni.
          </p>
        </div>

        {/* Interactive Altimetry Profile Graphic */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4 sm:p-6 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-800">
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Altimetría Interactiva · Perfil GPX Oficial
              </span>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Mountain className="w-5 h-5 text-amber-400" />
                Desnivel Positivo: +1.450 m (+1.704 m acumulado GPX)
              </h3>
            </div>
            <div className="text-xs text-slate-400">
              Haz clic en cualquiera de los puntos de control para ver detalles de altitud, distancia y socorro.
            </div>
          </div>

          {/* SVG Chart Container */}
          <div>
            <div className="sm:hidden pb-1.5 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Desliza lateralmente para ver todo el perfil</span>
              <span className="text-amber-400 font-bold">⇄</span>
            </div>
            <div className="relative overflow-x-auto">
              <svg
                viewBox="0 0 800 270"
                className="w-full h-auto min-w-[650px] overflow-visible"
                aria-label="Gráfico de altimetría de la carrera"
              >
              <defs>
                <linearGradient id="altitudeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.45" />
                  <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="60%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>

              {/* Horizontal altitude grid lines */}
              {[4000, 4500, 5000].map((level) => {
                const y = getY(level);
                return (
                  <g key={level} className="text-slate-700">
                    <line x1="30" y1={y} x2="770" y2={y} stroke="#1e293b" strokeDasharray="3 3" />
                    <text
                      x="25"
                      y={y + 4}
                      fill="#64748b"
                      fontSize="10"
                      textAnchor="end"
                      fontFamily="JetBrains Mono"
                    >
                      {level}m
                    </text>
                  </g>
                );
              })}

              {/* Filled Elevation Area */}
              <path d={areaD} fill="url(#altitudeGradient)" />

              {/* Main Elevation Stroke Line */}
              <path d={pathD} fill="none" stroke="url(#lineGradient)" strokeWidth="3" strokeLinecap="round" />

              {/* Checkpoints Markers */}
              {EVENT_DATA.checkpoints.map((cp) => {
                const cx = getX(cp.distanceKm);
                const cy = getY(cp.elevationM);
                const isSelected = selectedCp.id === cp.id;

                return (
                  <g
                    key={cp.id}
                    onClick={() => setSelectedCp(cp)}
                    className="cursor-pointer group"
                  >
                    {/* Vertical guideline */}
                    <line
                      x1={cx}
                      y1={cy}
                      x2={cx}
                      y2="240"
                      stroke={isSelected ? '#f59e0b' : '#334155'}
                      strokeWidth={isSelected ? '1.5' : '1'}
                      strokeDasharray="2 2"
                    />

                    {/* Checkpoint Circle */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isSelected ? 8 : 5}
                      fill={isSelected ? '#f59e0b' : '#0f172a'}
                      stroke={isSelected ? '#ffffff' : '#f59e0b'}
                      strokeWidth="2.5"
                      className="transition-all duration-150"
                    />

                    {/* Metric Label above dot */}
                    <text
                      x={cx}
                      y={cy - 12}
                      textAnchor="middle"
                      fill={isSelected ? '#f59e0b' : '#94a3b8'}
                      fontSize={isSelected ? '11' : '10'}
                      fontWeight={isSelected ? '700' : '500'}
                      fontFamily="JetBrains Mono"
                    >
                      {cp.elevationM}m
                    </text>

                    {/* Distance label at bottom */}
                    <text
                      x={cx}
                      y="255"
                      textAnchor="middle"
                      fill="#64748b"
                      fontSize="10"
                      fontFamily="JetBrains Mono"
                    >
                      {cp.distanceKm}km
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

          {/* Selected Checkpoint Detail Card */}
          <div className="bg-slate-950/70 border border-slate-800 rounded p-4 sm:p-5 transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3 border-b border-slate-800/80">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  Punto de Control Seleccionado
                </div>
                <h4 className="text-xl font-bold text-white mt-0.5">{selectedCp.name}</h4>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-['JetBrains_Mono']">
                <div className="bg-slate-900 px-3 py-1.5 rounded border border-slate-800">
                  <span className="text-slate-400">Kilómetro:</span>{' '}
                  <strong className="text-white">{selectedCp.distanceKm} km</strong>
                </div>
                <div className="bg-slate-900 px-3 py-1.5 rounded border border-slate-800">
                  <span className="text-slate-400">Altitud:</span>{' '}
                  <strong className="text-amber-400">{selectedCp.elevationM} msnm</strong>
                </div>
                <div className="bg-slate-900 px-3 py-1.5 rounded border border-slate-800">
                  <span className="text-slate-400">Pendiente:</span>{' '}
                  <strong className="text-white">+{selectedCp.slopePercent}%</strong>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-xs sm:text-sm">
              <div className="space-y-1">
                <span className="text-slate-400 font-medium uppercase tracking-wide text-[11px] block">
                  Descripción del Tramo
                </span>
                <p className="text-slate-200 leading-relaxed">{selectedCp.description}</p>
              </div>

              <div className="space-y-1">
                <span className="text-slate-400 font-medium uppercase tracking-wide text-[11px] block">
                  Superficie & Rodadura
                </span>
                <p className="text-slate-200 leading-relaxed">{selectedCp.surface}</p>
              </div>

              <div className="space-y-1">
                <span className="text-slate-400 font-medium uppercase tracking-wide text-[11px] block">
                  Servicios & Respaldo
                </span>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {selectedCp.services.map((srv, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] text-slate-300 bg-slate-900 border border-slate-800 rounded px-2 py-0.5"
                    >
                      {srv}
                    </span>
                  ))}
                  {selectedCp.oxygenAvailable && (
                    <span className="text-[11px] text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 rounded px-2 py-0.5 flex items-center gap-1">
                      <HeartPulse className="w-3 h-3" /> Oxigenoterapia
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications Table */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-4 sm:p-6">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-wide text-white">
                Ficha Técnica Oficial
              </h3>
              <span className="text-xs font-['JetBrains_Mono'] text-amber-400">Modalidad MTB</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 divide-y sm:divide-y-0 divide-slate-800/80 text-xs sm:text-sm">
              <div className="py-2.5 flex justify-between gap-4 sm:border-b sm:border-slate-800/80">
                <span className="text-slate-400 font-medium">Distancia Total</span>
                <span className="text-slate-100 font-['JetBrains_Mono'] font-semibold">46.9 km (48.7 km trazado)</span>
              </div>
              <div className="py-2.5 flex justify-between gap-4 sm:border-b sm:border-slate-800/80">
                <span className="text-slate-400 font-medium">Desnivel Positivo (+)</span>
                <span className="text-slate-100 font-['JetBrains_Mono'] font-semibold">+1.450 m (+1.704 m GPX)</span>
              </div>
              <div className="py-2.5 flex justify-between gap-4 sm:border-b sm:border-slate-800/80">
                <span className="text-slate-400 font-medium">Altitud Máxima</span>
                <span className="text-amber-400 font-['JetBrains_Mono'] font-semibold">5.030 m s. n. m. (Abra Glaciar)</span>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <span className="text-slate-400 font-medium">Superficie de Rodaje</span>
                <span className="text-slate-200">100% tierra y roca no pavimentada</span>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <span className="text-slate-400 font-medium">Partida → Llegada</span>
                <span className="text-slate-200">Patamanta (3.954 m) → Alto Milluni (4.635 m)</span>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <span className="text-slate-400 font-medium">Fecha de Carrera</span>
                <span className="text-amber-400 font-bold">Domingo, 8 de noviembre de 2026</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Tiempo límite: 6 horas con punto de corte en Churiaque a las 11:30 AM.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
