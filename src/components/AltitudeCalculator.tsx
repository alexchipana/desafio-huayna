import React, { useState } from 'react';
import { Activity, Droplets, Gauge, Zap, AlertTriangle, Wind, Info } from 'lucide-react';

export const AltitudeCalculator: React.FC = () => {
  // User Inputs
  const [trainingAltitude, setTrainingAltitude] = useState<number>(3600); // Default to La Paz 3,600m
  const [seaLevelVO2Max, setSeaLevelVO2Max] = useState<number>(55); // ml/kg/min
  const [weightKg, setWeightKg] = useState<number>(68);
  const [expectedHours, setExpectedHours] = useState<number>(3.8); // 3h 48m average

  // Target race maximum altitude: 5029 msnm
  const targetAltitudeM = 5029;

  // Atmospheric pressure formula: P = 760 * exp(-targetAltitudeM / 8400)
  const pAtmSeaLevel = 760;
  const pAtmRace = Math.round(760 * Math.exp(-targetAltitudeM / 8400)); // ~417 mmHg
  const pAtmPercentDrop = Math.round(((pAtmSeaLevel - pAtmRace) / pAtmSeaLevel) * 100);

  // Inspired PO2 = 0.2093 * (Patm - 47)
  const piO2SeaLevel = Math.round(0.2093 * (pAtmSeaLevel - 47)); // ~149 mmHg
  const piO2Race = Math.round(0.2093 * (pAtmRace - 47)); // ~77 mmHg

  // VO2 max reduction calculation based on acclimatization baseline
  // If native to sea level (0m), drop is ~38%
  // If native to La Paz/El Alto (3600m - 4000m), acute drop from baseline is lower (~22-26%)
  const altitudeDelta = targetAltitudeM - trainingAltitude;
  let vo2LossPercent = 0;
  if (trainingAltitude <= 500) {
    vo2LossPercent = 38.5;
  } else if (trainingAltitude <= 2000) {
    vo2LossPercent = 33.0;
  } else if (trainingAltitude <= 3000) {
    vo2LossPercent = 28.5;
  } else {
    // Altiplano adapted (La Paz 3600m / El Alto 4000m)
    vo2LossPercent = 23.5;
  }

  const effectiveVO2Max = (seaLevelVO2Max * (1 - vo2LossPercent / 100)).toFixed(1);

  // Respiratory water loss estimation (dry cold air + hyperventilation)
  // Normal at sea level ~ 30ml/h; at 5000m can exceed 100ml/h
  const respiratoryWaterLossMlH = trainingAltitude < 2000 ? 115 : 95;
  const recommendedHydrationMlH = Math.round(650 + (weightKg - 65) * 5);
  const recommendedCarbsGH = trainingAltitude < 2000 ? 75 : 65; // increased carbohydrate burning in hypoxia

  return (
    <section id="fisiologia" className="py-16 sm:py-20 bg-[#0d121c] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Fisiología del Rendimiento & Medicina de Montaña
          </div>
          <h2 className="font-['Barlow_Condensed'] text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            Simulador de Hipoxia a 5.029 m s. n. m.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A más de 5.000 metros de altitud, la presión parcial de oxígeno se reduce casi a la mitad.
            Ingresa tus parámetros para simular el impacto en tu $VO_2\max$, planificar tu hidratación y calibrar tu transmisión mecánica.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form Column */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-lg p-5 sm:p-6 space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 pb-2 border-b border-slate-800 flex items-center justify-between">
              <span>Parámetros del Atleta</span>
              <Activity className="w-4 h-4 text-amber-400" />
            </h3>

            {/* Altitude Training Baseline */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300 block">
                Tu altitud habitual de residencia / entrenamiento:
              </label>
              <select
                value={trainingAltitude}
                onChange={(e) => setTrainingAltitude(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
              >
                <option value={0}>Nivel del Mar (0 m) — Ej. Lima, Antofagasta, Costa</option>
                <option value={1500}>Valles Bajos (1.500 m) — Ej. Tarija, Salta</option>
                <option value={2600}>Valles Altos (2.600 m) — Ej. Cochabamba, Arequipa, Sucre</option>
                <option value={3600}>Altiplano Medio (3.600 m) — Ej. La Paz, Oruro, Cusco</option>
                <option value={4000}>Altiplano Alto (4.000 m) — Ej. El Alto, Puno, Potosí</option>
              </select>
            </div>

            {/* VO2 Max Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-medium">VO2 Max basal estimado:</span>
                <span className="font-['JetBrains_Mono'] font-bold text-amber-400 tabular-nums">
                  {seaLevelVO2Max} ml/kg/min
                </span>
              </div>
              <input
                type="range"
                min="35"
                max="78"
                step="1"
                value={seaLevelVO2Max}
                onChange={(e) => setSeaLevelVO2Max(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-['JetBrains_Mono']">
                <span>35 (Aficionado)</span>
                <span>55 (Competidor XCM)</span>
                <span>75+ (Elite Internacional)</span>
              </div>
            </div>

            {/* Weight Input */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-medium">Peso corporal del ciclista:</span>
                <span className="font-['JetBrains_Mono'] font-bold text-slate-200 tabular-nums">
                  {weightKg} kg
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="95"
                step="1"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
            </div>

            {/* Expected Race Duration */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-medium">Tiempo meta estimado (47 km):</span>
                <span className="font-['JetBrains_Mono'] font-bold text-slate-200 tabular-nums">
                  {expectedHours} horas
                </span>
              </div>
              <input
                type="range"
                min="2.2"
                max="5.8"
                step="0.1"
                value={expectedHours}
                onChange={(e) => setExpectedHours(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-['JetBrains_Mono']">
                <span>2h 15m (Récord Elite)</span>
                <span>3h 45m (Promedio)</span>
                <span>5h 45m (Límite corte)</span>
              </div>
            </div>

            {/* Acclimatization Notice */}
            <div className="p-3 bg-slate-950/80 rounded border border-slate-800 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-400 font-medium">
                <Info className="w-3.5 h-3.5" />
                Consejo Médico de MTB Rodadas:
              </div>
              <p>
                {trainingAltitude < 2500
                  ? 'Requerirás mínimo 5 a 7 días de aclimatación previa en La Paz (3.600m) o El Alto (4.000m) antes de enfrentar la competencia para evitar el Mal Agudo de Montaña (MAM).'
                  : 'Tu residencia en altura te otorga una ventaja hematocrito clave, pero la hiperventilación en el abra de 5.029m exigirá disciplina estricta de hidratación.'}
              </p>
            </div>
          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-7 space-y-4">
            {/* Live Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Presión Barométrica</span>
                  <Gauge className="w-4 h-4 text-sky-400" />
                </div>
                <div className="font-['JetBrains_Mono'] text-2xl font-bold text-white tabular-nums">
                  {pAtmRace} <span className="text-xs font-sans text-slate-400">mmHg</span>
                </div>
                <div className="text-[11px] text-rose-400 mt-1 font-medium">
                  -{pAtmPercentDrop}% vs nivel del mar
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Oxígeno Inspirado (PiO2)</span>
                  <Wind className="w-4 h-4 text-teal-400" />
                </div>
                <div className="font-['JetBrains_Mono'] text-2xl font-bold text-amber-400 tabular-nums">
                  {piO2Race} <span className="text-xs font-sans text-slate-400">mmHg</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  de 149 mmHg estándar
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>VO2 Max en Cima</span>
                  <Activity className="w-4 h-4 text-amber-400" />
                </div>
                <div className="font-['JetBrains_Mono'] text-2xl font-bold text-white tabular-nums">
                  {effectiveVO2Max} <span className="text-xs font-sans text-slate-400">ml/kg</span>
                </div>
                <div className="text-[11px] text-amber-400 mt-1 font-semibold">
                  Caída del -{vo2LossPercent.toFixed(1)}%
                </div>
              </div>
            </div>

            {/* Strategic Protocol Card */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-5 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 pb-2 border-b border-slate-800 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                Prescripción de Carrera Calculada para tu Perfil
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {/* Hydration */}
                <div className="bg-slate-950/60 p-3.5 rounded border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-semibold text-sky-400 text-xs">
                    <Droplets className="w-4 h-4" />
                    Pauta de Hidratación & Electrolitos
                  </div>
                  <div className="font-['JetBrains_Mono'] text-base font-bold text-white">
                    {recommendedHydrationMlH} ml / hora
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Pérdida respiratoria en aire seco: <strong className="text-slate-100">~{respiratoryWaterLossMlH} ml/h</strong> solo por hiperventilación. Incorpora 500–700 mg de sodio por litro para evitar hiponatremia y calambres.
                  </p>
                </div>

                {/* Nutrition */}
                <div className="bg-slate-950/60 p-3.5 rounded border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-semibold text-amber-400 text-xs">
                    <Activity className="w-4 h-4" />
                    Combustible & Glucógeno
                  </div>
                  <div className="font-['JetBrains_Mono'] text-base font-bold text-white">
                    {recommendedCarbsGH} g carbohidratos / hora
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    La hipoxia acelera la dependencia de la glucosa anaeróbica en un 30%. Consumir geles o gomitas cada 25–30 minutos con pequeños sorbos de agua.
                  </p>
                </div>
              </div>

              {/* Technical Bike Setup Recommendations */}
              <div className="bg-slate-950/70 p-4 rounded border border-slate-800 text-xs space-y-2">
                <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
                  Configuración Mecánica Sugerida para los 5.029 m s. n. m.
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-slate-300 text-[11px]">
                  <div>
                    <span className="text-amber-400 font-semibold block">Corona / Monoplato:</span>
                    30T o 32T (máximo) combinado con piñón de 50T o 52T para mantener cadencia fluida (&gt;75 rpm) en pendientes del 15-18%.
                  </div>
                  <div>
                    <span className="text-amber-400 font-semibold block">Presión Neumáticos:</span>
                    Sistema Tubeless con 19 a 23 PSI. La grava andina y la laja filosa requieren tracción elástica sin riesgo de llantazos.
                  </div>
                  <div>
                    <span className="text-amber-400 font-semibold block">Indumentaria de Cima:</span>
                    Cortavientos térmico y guantes cerrados listos en el bolsillo para el descenso técnico desde el glaciar hacia Alto Milluni.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
