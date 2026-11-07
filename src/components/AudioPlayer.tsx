import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import audioFile from '../assets/audio/desafio-huayna.mp3';

export const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime || 0);
    };

    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Playback error:', err);
      });
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const targetTime = Number(e.target.value);
    if (!audio) return;
    audio.currentTime = targetTime;
    setCurrentTime(targetTime);
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds <= 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full bg-slate-900/90 border border-amber-500/30 rounded-xl p-3 sm:p-4 shadow-xl backdrop-blur-sm">
      <audio
        ref={audioRef}
        src={audioFile}
        preload="metadata"
      />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Track Info */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={togglePlay}
            type="button"
            className="w-11 h-11 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow-md shadow-amber-400/20 cursor-pointer"
            aria-label={isPlaying ? 'Pausar música' : 'Reproducir canción oficial'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-slate-950" />
            ) : (
              <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
            )}
          </button>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 px-1.5 py-0.5 bg-amber-500/10 rounded border border-amber-500/20">
                Canción Oficial
              </span>
              {isPlaying && (
                <div className="flex items-center gap-0.5">
                  <span className="w-1 h-3 bg-amber-400 animate-pulse rounded-full" />
                  <span className="w-1 h-4 bg-amber-300 animate-pulse delay-75 rounded-full" />
                  <span className="w-1 h-2 bg-amber-400 animate-pulse delay-150 rounded-full" />
                </div>
              )}
            </div>
            <div className="text-xs sm:text-sm font-bold text-white truncate mt-0.5">
              Desafío Huayna Potosí
            </div>
            <div className="text-[11px] text-slate-400 truncate">
              Tema oficial de la competencia de ciclismo de montaña
            </div>
          </div>
        </div>

        {/* Progress & Volume Controls */}
        <div className="flex items-center gap-3 w-full sm:w-64 shrink-0">
          <span className="text-[11px] font-['JetBrains_Mono'] text-slate-400 tabular-nums w-8 text-right">
            {formatTime(currentTime)}
          </span>

          <div className="relative flex-1 flex items-center">
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              aria-label="Progreso del audio"
            />
          </div>

          <span className="text-[11px] font-['JetBrains_Mono'] text-slate-400 tabular-nums w-8">
            {formatTime(duration)}
          </span>

          <button
            onClick={toggleMute}
            type="button"
            className="p-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-rose-400" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};