import React, { useState } from 'react';
import { Trophy, Users, Award, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { EVENT_DATA, Category } from '../data/eventData';

interface PricingCategoriesProps {
  onOpenRegister?: (initialCategory?: string, isTeam?: boolean) => void;
}

export const PricingCategories: React.FC<PricingCategoriesProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(EVENT_DATA.categories[0]);

  return (
    <section id="categorias" className="py-10 sm:py-20 bg-[#0a0d14] border-b border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        {/* Section Title */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Competitividad & Bolsa de Premios
          </div>
          <h2 className="font-['Barlow_Condensed'] text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            Categorías Oficiales & Premiación
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Estructura competitiva avalada por el Club MTB Rodadas La Paz con premiación en efectivo, trofeos e indumentaria técnica de patrocinadores.
          </p>
        </div>

        {/* Categories & Prize Showcase */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase tracking-wide text-white">
                Bolsa de Premios por Categoría
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Selecciona una categoría para conocer sus requerimientos de edad y la dotación de premios.
              </p>
            </div>
            <div className="text-xs text-slate-400 font-['JetBrains_Mono']">
              Premios en Efectivo + Insumos de Patrocinadores
            </div>
          </div>

          {/* Interactive Category Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {EVENT_DATA.categories.map((cat) => {
              const isActive = selectedCategory.id === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat)}
                  className={`p-3 rounded text-left transition-all border cursor-pointer ${
                    isActive
                      ? 'bg-amber-500/10 border-amber-400 text-white'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="text-xs font-bold truncate">{cat.name}</div>
                  <div className="text-[11px] font-['JetBrains_Mono'] mt-0.5 text-slate-400">
                    {cat.gender}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Category Details Card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="space-y-1.5 md:col-span-1">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                <Trophy className="w-4 h-4" />
                Categoría en Detalle
              </div>
              <h4 className="text-xl font-bold text-white">{selectedCategory.name}</h4>
              <div className="text-xs text-slate-300 font-medium">
                Rango de Edad: <span className="text-amber-300">{selectedCategory.ageRange}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                {selectedCategory.description}
              </p>
            </div>

            <div className="bg-slate-950/70 p-4 rounded border border-slate-800 md:col-span-1 space-y-1 text-center sm:text-left">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Premio en Efectivo al 1° Lugar
              </span>
              <div className="font-['JetBrains_Mono'] text-3xl font-extrabold text-amber-400 tabular-nums">
                {selectedCategory.prizeFirstBOB} <span className="text-sm font-sans font-normal text-slate-300">BOB</span>
              </div>
              <div className="text-[11px] text-slate-400">
                + Trofeo Conmemorativo Esculpido en Piedra de Cordillera
              </div>
            </div>

            <div className="space-y-2 md:col-span-1 text-xs">
              <span className="font-semibold text-slate-300 uppercase tracking-wider text-[11px] block flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Premios de Patrocinadores (2° y 3° Lugar):
              </span>
              <p className="text-slate-300 leading-relaxed bg-slate-950/40 p-3 rounded border border-slate-800/80">
                {selectedCategory.gearPrizes}
              </p>
              <a
                href="#inscritos"
                className="block text-center w-full py-2 text-xs font-semibold uppercase tracking-wide text-slate-300 bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded transition-colors"
              >
                Ver Lista de Inscritos en {selectedCategory.name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
