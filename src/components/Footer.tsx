import React from 'react';
import { Bike, Mountain, Heart } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07090e] border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand & Mission */}
          <div className="space-y-2 max-w-md">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Bike className="w-3.5 h-3.5" />
              </div>
              <span className="font-['Barlow_Condensed'] font-bold text-lg tracking-wider text-slate-100 uppercase">
                Desafío Huayna Potosí 2026
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Organizado por el club especializado <strong className="text-slate-200">MTB Rodadas La Paz</strong> y su división competitiva <strong className="text-slate-200">MTB Rodadas Racing Team</strong>. Fomentando el ciclismo de alta montaña y el turismo comunitario sustentable en la Cordillera Real.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-medium">
            <a href="#inscritos" className="hover:text-amber-400 transition-colors">
              Lista de Inscritos
            </a>
            <a href="#ruta" className="hover:text-amber-400 transition-colors">
              Ruta & Altimetría
            </a>
            <a href="#categorias" className="hover:text-amber-400 transition-colors">
              Categorías & Premios
            </a>
            <a href="#seguridad" className="hover:text-amber-400 transition-colors">
              Seguridad Médica
            </a>
            <a href="#reglamento-oficial" className="hover:text-amber-400 transition-colors">
              Reglamento Técnico
            </a>
          </div>
        </div>

        {/* Communities and institutional acknowledgement */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            Con el respaldo de los Gobiernos Autónomos Municipales de El Alto y Pucarani, Asociación Municipal de Ciclismo La Paz, 2.ª Cía. de Bomberos Voluntarios Santa Bárbara y las Comunidades Originarias de Patamanta y Alto Milluni.
          </div>
          <div className="shrink-0 text-slate-400">
            © {new Date().getFullYear()} MTB Rodadas La Paz · La Paz, Bolivia
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="p-3 bg-slate-900/60 border border-slate-800 rounded text-center text-[11px] text-slate-400">
          Nota legal y de transparencia: Este portal web es una iniciativa informativa y de divulgación deportiva independiente.
          El sitio web oficial de la carrera y plataforma formal de registro del evento es:{' '}
          <a
            href="https://runsignup.com/Race/BO/LaPaz/DESAFIOHUAYNAPOTOSI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 font-semibold underline"
          >
            https://runsignup.com/Race/BO/LaPaz/DESAFIOHUAYNAPOTOSI
          </a>
        </div>
      </div>
    </footer>
  );
};
