import React, { useState } from 'react';
import { Trophy, Users, Award, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { EVENT_DATA, Category } from '../data/eventData';

interface PricingCategoriesProps {
  onOpenRegister?: (initialCategory?: string, isTeam?: boolean) => void;
}

export const PricingCategories: React.FC<PricingCategoriesProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(EVENT_DATA.categories[0]);

  return (
    <section id="categorias" className="py-16 sm:py-20 bg-[#0a0d14] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Title */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Competitividad, Bolsa de Premios & Tarifas
          </div>
          <h2 className="font-['Barlow_Condensed'] text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            Estructura de Categorías & Registro
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Diseñado para acoger desde corredores federados del más alto nivel andino hasta entusiastas del mountain bike de aventura.
            Inscripciones abiertas con cupos limitados para preservar la seguridad en alta montaña.
          </p>
        </div>

        {/* Pricing Cards (Individual vs Team 10+1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Individual Pass */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-6 sm:p-8 flex flex-col justify-between relative shadow-xl">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    Pase Individual
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-0.5">Inscripción General</h3>
                </div>
                <div className="text-right">
                  <div className="font-['JetBrains_Mono'] text-3xl font-extrabold text-white tabular-nums">
                    130 <span className="text-sm font-sans font-normal text-amber-400">BOB</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Por corredor</div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Acceso completo a la competencia de 47 km en cualquier categoría habilitada. Válido para ciclistas nacionales y extranjeros.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  El kit de competidor incluye:
                </div>
                {EVENT_DATA.pricing.includedItems.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 space-y-3">
              <div className="w-full py-3 text-xs font-bold uppercase tracking-wider text-slate-300 bg-slate-800/90 border border-slate-700 rounded text-center flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                Inscripciones Cerradas · Cupos Agotados
              </div>
              <div className="text-[11px] text-center text-rose-400 font-medium">
                Período concluido · 167 Corredores Habilitados
              </div>
            </div>
          </div>

          {/* Team Pass (10 + 1) */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/20 border-2 border-slate-700/60 rounded-lg p-6 sm:p-8 flex flex-col justify-between relative shadow-xl">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Promoción Clubes & Delegaciones
                    </span>
                    <span className="text-[10px] bg-slate-800 text-slate-300 border border-slate-700 font-bold px-1.5 py-0.5 rounded uppercase">
                      Cerrado
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-0.5">Inscripción por Equipos</h3>
                </div>
                <div className="text-right">
                  <div className="font-['JetBrains_Mono'] text-3xl font-extrabold text-slate-400 tabular-nums">
                    1.300 <span className="text-sm font-sans font-normal text-slate-500">BOB</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">11 cupos al precio de 10</div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Diseñado para clubes ciclistas, escuderías departamentales y delegaciones internacionales.
                Registra 10 integrantes y obtén <strong className="text-white font-semibold">1 cupo totalmente gratis</strong> con nombre de equipo oficial en los dorsales.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Beneficios para equipos participantes:
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>11 kits completos de cronometraje y medallas</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Área designada para carpa técnica de equipo en Alto Milluni</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>1 vehículo de auxilio mecánico (moto/cuadratrack) acreditado</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Gestión consolidada de drop-bags y asistencia técnica grupal</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 space-y-3">
              <div className="w-full py-3 text-xs font-bold uppercase tracking-wider text-slate-300 bg-slate-800/90 border border-slate-700 rounded text-center flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                Inscripciones por Equipos Cerradas
              </div>
              <div className="text-[11px] text-center text-slate-400">
                Consulta la lista oficial en la sección de inscritos
              </div>
            </div>
          </div>
        </div>

        {/* Categories & Prize Showcase */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-['Barlow_Condensed'] text-2xl font-bold uppercase tracking-wide text-white">
                Bolsa de Premios & Categorías Oficiales
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Selecciona una categoría para conocer sus requerimientos de edad y la dotación de premios.
              </p>
            </div>
            <div className="text-xs text-slate-400 font-['JetBrains_Mono']">
              Premios en Efectivo + Insumos de Marcas Patrocinadoras
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
