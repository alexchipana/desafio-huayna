import React, { useState } from 'react';
import { Menu, X, Bike } from 'lucide-react';

interface HeaderProps {
  onOpenRegister?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
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

        {/* Zone 2: Clean single-line text links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#galeria" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 text-amber-300 font-semibold">
            Galería de Fotos
          </a>
          <a href="#inscritos" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Lista de Inscritos (167)
          </a>
          <a href="#reglamento-oficial" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Cronograma & Normas
          </a>
          <a href="#ruta" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Ruta & Altimetría
          </a>
          <a href="#categorias" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Categorías & Premios
          </a>
          <a href="#seguridad" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Seguridad & Logística
          </a>
        </nav>

        {/* Zone 3: Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d121c] border-b border-slate-800 px-6 py-4 space-y-3">
          <a
            href="#galeria"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-amber-400 hover:text-amber-300"
          >
            Galería de Fotos Oficial
          </a>
          <a
            href="#inscritos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Lista de Inscritos (167)
          </a>
          <a
            href="#reglamento-oficial"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Cronograma & Normas Técnicas
          </a>
          <a
            href="#ruta"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Ruta & Altimetría
          </a>
          <a
            href="#categorias"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Categorías & Premios
          </a>
          <a
            href="#seguridad"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-amber-400"
          >
            Seguridad & Logística
          </a>
        </div>
      )}
    </header>
  );
};
