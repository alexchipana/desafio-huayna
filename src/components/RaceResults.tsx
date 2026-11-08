import React, { useState, useMemo } from 'react';
import { Trophy, Medal, Timer, Search, ExternalLink, Clock, Award, ShieldCheck, Filter } from 'lucide-react';
import raceData from '../data/raceResults.json';
import { CountryFlag } from './CountryFlag';

export const RaceResults: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedGender, setSelectedGender] = useState<'All' | 'M' | 'F'>('All');

  const participants = raceData.participants;

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set(participants.map((p) => p.category));
    return ['All', ...Array.from(set).sort()];
  }, [participants]);

  // Filter participants
  const filteredParticipants = useMemo(() => {
    return participants.filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.bib.toString().includes(searchTerm);

      const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
      const matchGender = selectedGender === 'All' || p.gender === selectedGender;

      return matchSearch && matchCat && matchGender;
    });
  }, [participants, searchTerm, selectedCategory, selectedGender]);

  // Top 3 Podium overall
  const top3 = useMemo(() => {
    return participants.slice(0, 3);
  }, [participants]);

  const formatCleanTime = (timeStr?: string) => {
    if (!timeStr) return '--:--:--';
    return timeStr.replace(/\.000$/, '');
  };

  return (
    <section id="resultados" className="py-10 sm:py-16 bg-[#0a0d14] border-b border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="max-w-3xl space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <Timer className="w-4 h-4" />
              Cronometraje Oficial MYLAPS · Tiempos de Chip & Gun Time
            </div>
            <h2 className="font-['Barlow_Condensed'] text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
              Resultados Oficiales de la Carrera
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Consulta la clasificación general y por categorías de los <strong className="text-white font-bold">{raceData.totalFinishers} atletas clasificados</strong> que coronaron la ruta de 48.7 km desde Patamanta hasta Alto Milluni.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={raceData.sporthiveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <span>Ver en Sporthive</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Podium Highlight Grid (Top 3) */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            <Trophy className="w-4 h-4 text-amber-400" />
            Podio General de la Competencia
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1st Place */}
            {top3[0] && (
              <div className="relative rounded-xl p-5 bg-gradient-to-b from-amber-500/20 via-slate-900/90 to-slate-900 border-2 border-amber-400/80 shadow-xl space-y-3 order-1 md:order-2 md:-translate-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow">
                    🥇 1° Lugar General
                  </span>
                  <span className="font-['JetBrains_Mono'] text-xs font-semibold text-slate-400">
                    Dorsal #{top3[0].bib}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {top3[0].name}
                  </h3>
                  <div className="text-xs text-amber-300/90 font-medium">
                    {top3[0].team}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Categoría</span>
                    <span className="font-semibold text-slate-200">{top3[0].category}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block text-[10px] uppercase">Tiempo Oficial</span>
                    <span className="font-['JetBrains_Mono'] font-bold text-amber-400 text-sm">
                      {formatCleanTime(top3[0].gunTime)}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 2nd Place */}
            {top3[1] && (
              <div className="rounded-xl p-5 bg-slate-900/90 border border-slate-700 shadow-xl space-y-3 order-2 md:order-1">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                    🥈 2° Lugar General
                  </span>
                  <span className="font-['JetBrains_Mono'] text-xs font-semibold text-slate-400">
                    Dorsal #{top3[1].bib}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    {top3[1].name}
                  </h3>
                  <div className="text-xs text-slate-300">
                    {top3[1].team}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Categoría</span>
                    <span className="font-semibold text-slate-200">{top3[1].category}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block text-[10px] uppercase">Tiempo Oficial</span>
                    <span className="font-['JetBrains_Mono'] font-bold text-slate-200 text-sm">
                      {formatCleanTime(top3[1].gunTime)}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 3rd Place */}
            {top3[2] && (
              <div className="rounded-xl p-5 bg-slate-900/90 border border-slate-700 shadow-xl space-y-3 order-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-amber-700/60 text-amber-200 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                    🥉 3° Lugar General
                  </span>
                  <span className="font-['JetBrains_Mono'] text-xs font-semibold text-slate-400">
                    Dorsal #{top3[2].bib}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    {top3[2].name}
                  </h3>
                  <div className="text-xs text-slate-300">
                    {top3[2].team}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Categoría</span>
                    <span className="font-semibold text-slate-200">{top3[2].category}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block text-[10px] uppercase">Tiempo Oficial</span>
                    <span className="font-['JetBrains_Mono'] font-bold text-slate-200 text-sm">
                      {formatCleanTime(top3[2].gunTime)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 sm:p-4 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 sm:gap-3">
            {/* Search Input */}
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por corredor, dorsal (#) o club..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Gender Toggle */}
            <div className="sm:col-span-3 flex p-1 bg-slate-950 rounded-lg border border-slate-800">
              <button
                type="button"
                onClick={() => setSelectedGender('All')}
                className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded transition-colors cursor-pointer text-center ${
                  selectedGender === 'All' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Todos
              </button>
              <button
                type="button"
                onClick={() => setSelectedGender('M')}
                className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded transition-colors cursor-pointer text-center ${
                  selectedGender === 'M' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Varones
              </button>
              <button
                type="button"
                onClick={() => setSelectedGender('F')}
                className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded transition-colors cursor-pointer text-center ${
                  selectedGender === 'F' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Damas
              </button>
            </div>

            {/* Category Selector */}
            <div className="sm:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400 truncate"
              >
                <option value="All">Todas las Categorías</option>
                {categories.filter((c) => c !== 'All').map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
            <span>
              Mostrando <strong className="text-white font-['JetBrains_Mono']">{filteredParticipants.length}</strong> de {participants.length} atletas clasificados
            </span>
            {(searchTerm || selectedCategory !== 'All' || selectedGender !== 'All') && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedGender('All');
                }}
                className="text-amber-400 hover:underline cursor-pointer text-xs"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="sm:hidden px-3.5 py-2 bg-slate-950/80 border-b border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Desliza lateralmente para ver todos los tiempos</span>
            <span className="text-amber-400 font-bold">⇄</span>
          </div>

          <div className="overflow-x-auto max-h-[620px] overflow-y-auto">
            <table className="w-full min-w-[620px] text-left text-xs border-collapse">
              <thead className="bg-[#07090e] text-slate-400 uppercase tracking-wider text-[11px] sticky top-0 z-10 border-b border-slate-800">
                <tr>
                  <th className="py-3 px-3 font-semibold text-center w-14">Pos.</th>
                  <th className="py-3 px-3 font-semibold text-center w-16">Dorsal</th>
                  <th className="py-3 px-4 font-semibold">Ciclista</th>
                  <th className="py-3 px-4 font-semibold">Team / Club</th>
                  <th className="py-3 px-4 font-semibold">Categoría</th>
                  <th className="py-3 px-3 font-semibold text-center w-14">País</th>
                  <th className="py-3 px-3.5 font-semibold text-right">Tiempo Chip</th>
                  <th className="py-3 px-3.5 font-semibold text-right">Tiempo Gun</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {filteredParticipants.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-12 text-center text-slate-500 text-sm">
                      No se encontraron corredores con los criterios de búsqueda.
                    </td>
                  </tr>
                ) : (
                  filteredParticipants.map((rider) => {
                    const isTop1 = rider.overallPosition === 1;
                    const isTop2 = rider.overallPosition === 2;
                    const isTop3 = rider.overallPosition === 3;

                    return (
                      <tr
                        key={rider.id}
                        className="hover:bg-slate-850/60 transition-colors group"
                      >
                        {/* Overall Position */}
                        <td className="py-2.5 px-3 text-center font-['JetBrains_Mono'] font-bold">
                          {isTop1 ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-400 text-slate-950 text-xs">
                              1
                            </span>
                          ) : isTop2 ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-300 text-slate-950 text-xs">
                              2
                            </span>
                          ) : isTop3 ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-700 text-white text-xs">
                              3
                            </span>
                          ) : (
                            <span className="text-slate-400">{rider.overallPosition}</span>
                          )}
                        </td>

                        {/* Bib */}
                        <td className="py-2.5 px-3 text-center font-['JetBrains_Mono'] font-semibold text-amber-400/90 bg-slate-950/40">
                          #{rider.bib}
                        </td>

                        {/* Name */}
                        <td className="py-2.5 px-4 font-semibold text-slate-100 group-hover:text-amber-300 transition-colors">
                          {rider.name}
                        </td>

                        {/* Team */}
                        <td className="py-2.5 px-4 text-slate-300">
                          {rider.team}
                        </td>

                        {/* Category and pos */}
                        <td className="py-2.5 px-4 text-slate-300">
                          <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-[11px] font-medium text-slate-200">
                            {rider.category} (#{rider.categoryPosition})
                          </span>
                        </td>

                        {/* Country */}
                        <td className="py-2.5 px-3 text-center">
                          <div className="inline-flex items-center justify-center">
                            <CountryFlag country={rider.country === 'PE' ? 'Perú' : 'Bolivia'} />
                          </div>
                        </td>

                        {/* Chip Time */}
                        <td className="py-2.5 px-3.5 text-right font-['JetBrains_Mono'] text-slate-300">
                          {formatCleanTime(rider.chipTime)}
                        </td>

                        {/* Gun Time */}
                        <td className="py-2.5 px-3.5 text-right font-['JetBrains_Mono'] font-bold text-amber-400">
                          {formatCleanTime(rider.gunTime)}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-[#07090e] border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
            <span>
              Certificación de cronometraje oficial homologada por Sporthive MYLAPS.
            </span>
            <a
              href={raceData.sporthiveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
            >
              Consultar certificado individual en Sporthive <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
