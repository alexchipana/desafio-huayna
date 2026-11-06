import React, { useState, useMemo } from 'react';
import { Search, Filter, Users, Flag, Trophy, Shield, Globe2, ChevronDown, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_INSCRIBED_RIDERS, InscribedRider } from '../data/inscribedRiders';

export const InscribedRidersList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGender, setSelectedGender] = useState<'All' | 'Damas' | 'Varones'>('All');
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Derive unique countries and categories
  const countries = useMemo(() => {
    const set = new Set(OFFICIAL_INSCRIBED_RIDERS.map((r) => r.country));
    return ['All', ...Array.from(set)];
  }, []);

  const categories = useMemo(() => {
    const set = new Set(OFFICIAL_INSCRIBED_RIDERS.map((r) => r.categoryGroup));
    return ['All', ...Array.from(set)];
  }, []);

  // Filter riders
  const filteredRiders = useMemo(() => {
    return OFFICIAL_INSCRIBED_RIDERS.filter((rider) => {
      const matchSearch =
        rider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rider.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rider.bib.toString().includes(searchTerm);

      const matchGender = selectedGender === 'All' || rider.gender === selectedGender;
      const matchCountry = selectedCountry === 'All' || rider.country === selectedCountry;
      const matchCategory = selectedCategory === 'All' || rider.categoryGroup === selectedCategory;

      return matchSearch && matchGender && matchCountry && matchCategory;
    });
  }, [searchTerm, selectedGender, selectedCountry, selectedCategory]);

  // Statistics
  const totalRiders = OFFICIAL_INSCRIBED_RIDERS.length;
  const womenCount = OFFICIAL_INSCRIBED_RIDERS.filter((r) => r.gender === 'Damas').length;
  const menCount = OFFICIAL_INSCRIBED_RIDERS.filter((r) => r.gender === 'Varones').length;
  const foreignCount = OFFICIAL_INSCRIBED_RIDERS.filter((r) => r.country !== 'Bolivia').length;

  return (
    <section id="inscritos" className="py-16 sm:py-20 bg-[#0a0d14] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="max-w-3xl space-y-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Póster Oficial & Nómina de Competidores Confirmados
            </div>
            <h2 className="font-['Barlow_Condensed'] text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
              Lista Oficial de Inscritos (167 Ciclistas)
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Consulta en tiempo real la lista completa de dorsales, categorías y equipos acreditados
              según el documento oficial emitido por el <strong className="text-white">Club MTB Rodadas La Paz</strong>.
            </p>
          </div>

          {/* Quick Counter Pills / Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 shrink-0 text-center">
            <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
              <div className="text-[11px] text-slate-400 uppercase tracking-wider">Total Corredores</div>
              <div className="font-['JetBrains_Mono'] text-xl font-bold text-amber-400 tabular-nums">
                {totalRiders}
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
              <div className="text-[11px] text-slate-400 uppercase tracking-wider">Categoría Damas</div>
              <div className="font-['JetBrains_Mono'] text-xl font-bold text-rose-400 tabular-nums">
                {womenCount}
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
              <div className="text-[11px] text-slate-400 uppercase tracking-wider">Categoría Varones</div>
              <div className="font-['JetBrains_Mono'] text-xl font-bold text-sky-400 tabular-nums">
                {menCount}
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg">
              <div className="text-[11px] text-slate-400 uppercase tracking-wider">Extranjeros</div>
              <div className="font-['JetBrains_Mono'] text-xl font-bold text-emerald-400 tabular-nums">
                {foreignCount}
              </div>
            </div>
          </div>
        </div>

        {/* International Presence Bar */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-3.5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-semibold text-white">Delegaciones Internacionales Presentes:</span>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-200">
              🇧🇴 Bolivia (150+)
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-200">
              🇵🇪 Perú (Wayqis Club - 10 corredores)
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-200">
              🇪🇸 España (Revilla del Campo)
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-200">
              🇩🇪 Alemania
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-200">
              🇫🇷 Francia
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-200">
              🇺🇸 Estados Unidos
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-200">
              🇺🇾 Uruguay
            </span>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="sm:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por nombre de ciclista, team/club (ej. KTM, Wayqis)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Gender Toggle */}
            <div className="sm:col-span-3 flex p-1 bg-slate-950 rounded-lg border border-slate-800">
              <button
                onClick={() => setSelectedGender('All')}
                className={`flex-1 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  selectedGender === 'All' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Todos ({totalRiders})
              </button>
              <button
                onClick={() => setSelectedGender('Damas')}
                className={`flex-1 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  selectedGender === 'Damas' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Damas ({womenCount})
              </button>
              <button
                onClick={() => setSelectedGender('Varones')}
                className={`flex-1 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  selectedGender === 'Varones' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Varones ({menCount})
              </button>
            </div>

            {/* Country Selector */}
            <div className="sm:col-span-2">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
              >
                <option value="All">Todos los Países</option>
                {countries.filter((c) => c !== 'All').map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Category Selector */}
            <div className="sm:col-span-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
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
              Mostrando <strong className="text-white font-['JetBrains_Mono']">{filteredRiders.length}</strong> de {totalRiders} atletas
            </span>
            {(searchTerm || selectedGender !== 'All' || selectedCountry !== 'All' || selectedCategory !== 'All') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedGender('All');
                  setSelectedCountry('All');
                  setSelectedCategory('All');
                }}
                className="text-amber-400 hover:underline cursor-pointer text-xs"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {/* Riders Table without DORSAL and without ESTADO */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-lg overflow-hidden shadow-xl">
          <div className="overflow-x-auto max-h-[550px] overflow-y-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-[#0a0d14] text-slate-400 uppercase tracking-wider text-[11px] sticky top-0 z-10 border-b border-slate-800">
                <tr>
                  <th className="py-3 px-3.5 font-semibold text-center w-12">N°</th>
                  <th className="py-3 px-4 font-semibold">Nombre del Ciclista</th>
                  <th className="py-3 px-4 font-semibold">Team / Club Deportivo</th>
                  <th className="py-3 px-4 font-semibold">Categoría Oficial</th>
                  <th className="py-3 px-4 font-semibold text-center">País</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {filteredRiders.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-slate-500 text-sm">
                      No se encontraron corredores con el criterio de búsqueda "{searchTerm}".
                    </td>
                  </tr>
                ) : (
                  filteredRiders.map((rider, index) => (
                    <tr
                      key={rider.id}
                      className="hover:bg-slate-850/50 transition-colors group"
                    >
                      {/* Correlative Number */}
                      <td className="py-2.5 px-3.5 text-center font-['JetBrains_Mono'] font-medium text-slate-400 bg-slate-950/40">
                        {rider.id}
                      </td>

                      {/* Name */}
                      <td className="py-2.5 px-4 font-semibold text-slate-100 group-hover:text-amber-300 transition-colors">
                        {rider.name}
                      </td>

                      {/* Team */}
                      <td className="py-2.5 px-4 text-slate-300">
                        {rider.team === 'INDEPENDIENTE' ? (
                          <span className="text-slate-500 italic">Independiente</span>
                        ) : (
                          <span className="font-semibold text-slate-200">{rider.team}</span>
                        )}
                      </td>

                      {/* Category */}
                      <td className="py-2.5 px-4 text-slate-300 text-[11px]">
                        {rider.categoryGroup}
                      </td>

                      {/* Country */}
                      <td className="py-2.5 px-4 text-center">
                        <span className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-medium border ${
                          rider.country === 'Bolivia'
                            ? 'bg-slate-800 text-slate-300 border-slate-700'
                            : 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60 font-semibold'
                        }`}>
                          {rider.country}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-[#0a0d14] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <div>
              Fuente: <em>Lista Oficial de Inscritos Desafío Huayna Potosí 2026 V1</em> emitida por MTB Rodadas Racing Team.
            </div>
            <div className="font-['JetBrains_Mono'] text-rose-400 font-semibold">
              Inscripciones Concluidas · 167 Atletas Confirmados
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
