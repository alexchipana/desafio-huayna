import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink, Image as ImageIcon } from 'lucide-react';

// Dynamically import all 57 photos sorted in numerical order
const imageModules = import.meta.glob<{ default: string }>('../assets/images/gallery/*.jpg', { eager: true });
const GALLERY_IMAGES = Object.keys(imageModules)
  .sort()
  .map((key) => imageModules[key].default);

export const PhotoSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const thumbnailsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const total = GALLERY_IMAGES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  // Scroll active thumbnail smoothly into view
  useEffect(() => {
    const el = thumbnailsRef.current[currentIndex];
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [currentIndex]);

  // Autoplay effect
  useEffect(() => {
    if (isAutoPlaying && total > 0) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 4500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, nextSlide, total]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  if (total === 0) return null;

  return (
    <section id="galeria" className="py-10 sm:py-16 bg-[#07090e] border-b border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-slate-800/80">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <ImageIcon className="w-4 h-4" />
              Galería Oficial · 57 Fotografías
            </div>
            <h2 className="font-['Barlow_Condensed'] text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              Fotografías del Desafío Huayna Potosí
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              Capturas del imponente paisaje de la Cordillera Real, las comunidades anfitrionas y el espíritu de la prueba en alta montaña.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://photos.app.goo.gl/f2zAW55iv3mgtsCt7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <span>Ver Álbum en Google Photos (57 Fotos)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Main Slider Canvas */}
        <div
          className="relative bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl select-none group"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Image Frame with Ambient Background Blur */}
          <div className="relative w-full h-[380px] sm:h-[500px] md:h-[580px] flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Ambient Blurred Backdrop */}
            <img
              src={GALLERY_IMAGES[currentIndex]}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-25 scale-110 pointer-events-none transition-all duration-700"
            />

            {/* Sharp Foreground Image */}
            <img
              key={currentIndex}
              src={GALLERY_IMAGES[currentIndex]}
              alt={`Fotografía oficial ${currentIndex + 1} de 57 del Desafío Huayna Potosí`}
              className="relative max-h-full max-w-full object-contain z-10 drop-shadow-2xl transition-opacity duration-300"
              loading="lazy"
            />

            {/* Gradient Overlays for Controls Readability */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/60 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 pointer-events-none" />

            {/* Top Badges (Counter & Autoplay status) */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-30 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white font-['JetBrains_Mono'] text-xs font-semibold">
                {currentIndex + 1} / {total}
              </span>
            </div>

            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/10 text-white transition-colors cursor-pointer"
                title={isAutoPlaying ? 'Pausar pase automático' : 'Reanudar pase automático'}
                aria-label={isAutoPlaying ? 'Pausar pase automático' : 'Reanudar pase automático'}
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Arrow Nav Buttons */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-amber-400 hover:text-slate-950 text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-amber-400 hover:text-slate-950 text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="Siguiente foto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-3 sm:bottom-4 inset-x-4 z-30 flex items-center justify-between text-xs text-slate-300">
              <span className="truncate bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                Álbum Oficial · Club MTB Rodadas La Paz (57 Fotos)
              </span>
              <span className="hidden sm:inline-block bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] text-amber-300">
                Desliza en móvil o usa las flechas
              </span>
            </div>
          </div>

          {/* Bottom Thumbnails Strip */}
          <div className="p-2 sm:p-3 bg-slate-950/95 border-t border-slate-800/80">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-1 px-1 scrollbar-thin">
              {GALLERY_IMAGES.map((img, idx) => (
                <button
                  key={idx}
                  ref={(el) => (thumbnailsRef.current[idx] = el)}
                  onClick={() => goToSlide(idx)}
                  className={`relative shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'border-amber-400 scale-105 shadow-md shadow-amber-400/20 opacity-100 ring-2 ring-amber-400/30'
                      : 'border-slate-800 opacity-50 hover:opacity-80'
                  }`}
                  aria-label={`Ir a la foto ${idx + 1} de 57`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
