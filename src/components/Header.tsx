import React, { useState } from 'react';
import { Menu, X, Bike } from 'lucide-react';

interface HeaderProps {
  onOpenRegister: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRegister }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a0d14]/95 backdrop-blur-md border-b border-slate-800">
      {/* Informational Disclaimer Banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-1.5 text-center text-[11px] sm:text-xs text-amber-200/90">
        <span className="font-semibold text-amber-400">Aviso:</span> Este es un portal informativo comunitario independiente (no oficial). El sitio web y registro oficial de la carrera se encuentra en{' '}
        <a
          href="https://runsignup.com/Race/BO/LaPaz/DESAFIOHUAYNAPOTOSI"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline text-white hover:text-amber-300 inline-flex items-center gap-0.5 ml-1 transition-colors"
        >
          RunSignUp Oficial <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a href="#" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group">
          <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 transition-colors">
            <Bike className="w-4 h-4" />
          </div>
          <span className="font-['Barlow_Condensed'] font-bold text-xl tracking-wider text-slate-100 uppercase">
            Desafío Huayna Potosí
          </span>
        </a>

        {/* Zone 2: 4-5 Clean single-line text links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#inscritos" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Lista de Inscritos (167)
          </a>
          <a href="#reglamento-oficial" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Cronograma & Normas
          </a>
          <a href="#ruta" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Ruta & Altimetría
          </a>
          <a href="#fisiologia" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Simulador de Altitud
          </a>
          <a href="#seguridad" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Seguridad & Logística
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#inscritos"
            className="px-4 py-2 text-xs font-semibold tracking-wide uppercase text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            Inscripciones Cerradas (167 Cupos)
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d121c] border-b border-slate-800 px-6 py-4 space-y-3">
          <a
            href="#ruta"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Ruta & Altimetría
          </a>
          <a
            href="#fisiologia"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Calculadora Fisiológica
          </a>
          <a
            href="#categorias"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Categorías & Premios
          </a>
          <a
            href="#seguridad"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Seguridad & Logística
          </a>
          <a
            href="#reglamento"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Reglamento & Contacto
          </a>
          <div className="pt-2 border-t border-slate-800">
            <a
              href="#inscritos"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-300 bg-slate-800 hover:bg-slate-700 rounded transition-colors text-center"
            >
              Inscripciones Cerradas · Ver 167 Inscritos
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
