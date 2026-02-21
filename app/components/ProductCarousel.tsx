"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Maximize2,
  RotateCcw,
} from "lucide-react";

type Slide =
  | { type: "video"; src: string; poster: string }
  | { type: "image"; src: string; alt: string };

const slides: Slide[] = [
  {
    type: "video",
    src: "https://supabase.robokidsedu.com/storage/v1/object/public/videos//WhatsApp%20Video%202026-02-20%20at%207.09.23%20PM.mp4",
    poster: "/lekprov22.png",
  },
];

function formatTime(secs: number) {
  if (!secs || isNaN(secs)) return "0:00";
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function ProductCarousel() {
  const [current, setCurrent]       = useState(0);
  const [playing, setPlaying]       = useState(false);
  const [paused, setPaused]         = useState(false);
  const [ended, setEnded]           = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration]     = useState(0);
  const [muted, setMuted]           = useState(false);
  const [showControls, setShowControls] = useState(true);

  const videoRef    = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimer   = useRef<ReturnType<typeof setTimeout> | null>(null);

  const slide = slides[current];
  const progress = duration ? (currentTime / duration) * 100 : 0;

  /* ── Auto-hide controls ── */
  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowControls(false), 3000);
  }, []);

  useEffect(() => {
    if (!playing) return;
    if (paused) {
      setShowControls(true);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    } else {
      resetHideTimer();
    }
  }, [paused, playing, resetHideTimer]);

  /* ── Acciones ── */
  function handleFirstPlay() {
    videoRef.current?.play();
    setPlaying(true);
    setPaused(false);
    setEnded(false);
    resetHideTimer();
  }

  function togglePause() {
    if (!videoRef.current) return;
    if (paused || ended) {
      if (ended) videoRef.current.currentTime = 0;
      videoRef.current.play();
      setPaused(false);
      setEnded(false);
      resetHideTimer();
    } else {
      videoRef.current.pause();
      setPaused(true);
    }
  }

  function handleProgressClick(e: React.MouseEvent<HTMLDivElement>) {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    videoRef.current.currentTime = ratio * duration;
  }

  function toggleMute() {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  }

  function handleFullscreen() {
    const video = videoRef.current;
    if (!video) return;
    const v = video as HTMLVideoElement & {
      webkitRequestFullscreen?: () => void;
      mozRequestFullScreen?: () => void;
    };
    if (v.requestFullscreen) v.requestFullscreen();
    else if (v.webkitRequestFullscreen) v.webkitRequestFullscreen();
    else if (v.mozRequestFullScreen) v.mozRequestFullScreen();
  }

  function goTo(index: number) {
    setCurrent(index);
    setPlaying(false);
    setPaused(false);
    setCurrentTime(0);
    setDuration(0);
    setEnded(false);
  }

  return (
    <div className="relative w-full flex flex-col gap-3">
      {/* ── Slide ── */}
      <div
        ref={containerRef}
        className="relative w-full aspect-square bg-[#f8f8f8] rounded-3xl overflow-hidden border border-gray-100 group"
        onMouseMove={playing ? resetHideTimer : undefined}
        onTouchStart={playing ? resetHideTimer : undefined}
      >
        {/* Círculos decorativos */}
        <div className="absolute rounded-full bg-[#dc2a36] w-52 h-52 opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute rounded-full bg-[#dc2a36] w-36 h-36 opacity-15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        {slide.type === "video" && (
          <>
            {/* Poster — visible antes de reproducir */}
            <div
              className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-700
                          ${playing ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            >
              <Image src={slide.poster} alt="Lek 2" fill className="object-contain p-8" priority />
            </div>

            {/* Botón play inicial */}
            {!playing && (
              <button
                onClick={handleFirstPlay}
                className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer"
                aria-label="Reproducir video"
              >
                <div className="w-16 h-16 rounded-full bg-[#dc2a36] hover:bg-[#f03344] hover:scale-110
                                flex items-center justify-center shadow-2xl transition-all duration-300">
                  <Play size={26} fill="white" className="text-white ml-1" />
                </div>
              </button>
            )}

            {/* Video */}
            <video
              ref={videoRef}
              src={slide.src}
              className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-700
                          ${playing ? "opacity-100" : "opacity-0"}`}
              onLoadedMetadata={() => {
                const d = videoRef.current?.duration;
                if (d && isFinite(d)) setDuration(d);
              }}
              onDurationChange={() => {
                const d = videoRef.current?.duration;
                if (d && isFinite(d)) setDuration(d);
              }}
              onTimeUpdate={() => {
                const v = videoRef.current;
                if (!v) return;
                setCurrentTime(v.currentTime);
                if (!duration && v.duration && isFinite(v.duration)) setDuration(v.duration);
              }}
              onEnded={() => { setEnded(true); setPaused(true); setShowControls(true); }}
              playsInline
              preload="auto"
            />

            {/* Overlay click-to-pause (debajo de los controles) */}
            {playing && (
              <div
                className="absolute inset-0 z-20 cursor-pointer"
                onClick={togglePause}
              />
            )}

            {/* ── Controles custom ── */}
            {playing && (
              <div
                className={`absolute bottom-0 left-0 right-0 z-30 transition-opacity duration-300
                            ${showControls || paused || ended ? "opacity-100" : "opacity-0"}`}
              >
                {/* Gradiente de fondo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

                <div className="relative px-4 pb-4 pt-10 flex flex-col gap-2.5">
                  {/* Barra de progreso */}
                  <div className="flex items-center gap-2.5">
                    <span className="text-white text-[11px] font-mono tabular-nums min-w-[32px]">
                      {formatTime(currentTime)}
                    </span>

                    {/* Track clickeable — área grande para facilitar el click */}
                    <div
                      className="flex-1 relative h-5 flex items-center cursor-pointer group/bar"
                      onClick={handleProgressClick}
                    >
                      {/* Fondo */}
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-white/20 rounded-full" />
                      {/* Fill rojo */}
                      <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#dc2a36] rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                      {/* Thumb */}
                      <div
                        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow border-2 border-[#dc2a36] opacity-0 group-hover/bar:opacity-100 transition-opacity"
                        style={{ left: `calc(${progress}% - 6px)` }}
                      />
                    </div>

                    <span className="text-white/50 text-[11px] font-mono tabular-nums min-w-[32px] text-right">
                      {formatTime(duration)}
                    </span>
                  </div>

                  {/* Botones de control */}
                  <div className="flex items-center gap-2">
                    {/* Play / Pause / Replay */}
                    <button
                      onClick={togglePause}
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-[#dc2a36] hover:bg-[#f03344]
                                 text-white transition-all hover:scale-105 shadow-lg shadow-[#dc2a36]/40"
                    >
                      {ended
                        ? <RotateCcw size={15} />
                        : paused
                          ? <Play size={15} fill="white" className="ml-0.5" />
                          : <Pause size={15} />}
                    </button>

                    {/* Mute */}
                    <button
                      onClick={toggleMute}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25
                                 text-white transition-all"
                    >
                      {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>

                    <div className="flex-1" />

                    {/* Fullscreen */}
                    <button
                      onClick={handleFullscreen}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25
                                 text-white transition-all"
                    >
                      <Maximize2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {slide.type === "image" && (
          <div className="absolute inset-0 flex items-center justify-center p-10">
            <Image
              src={slide.src}
              alt={(slide as { type: "image"; src: string; alt: string }).alt}
              fill
              className="object-contain p-8"
            />
          </div>
        )}

        {/* Flechas carrusel */}
        {slides.length > 1 && (
          <>
            <button
              onClick={() => goTo((current - 1 + slides.length) % slides.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-40 w-9 h-9 bg-white/90 hover:bg-white
                         rounded-full flex items-center justify-center shadow-md transition-all hover:scale-105"
            >
              <ChevronLeft size={18} className="text-gray-700" />
            </button>
            <button
              onClick={() => goTo((current + 1) % slides.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-40 w-9 h-9 bg-white/90 hover:bg-white
                         rounded-full flex items-center justify-center shadow-md transition-all hover:scale-105"
            >
              <ChevronRight size={18} className="text-gray-700" />
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {slides.length > 1 && (
        <div className="flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300
                          ${i === current ? "w-6 bg-[#dc2a36]" : "w-1.5 bg-gray-200 hover:bg-gray-400"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
