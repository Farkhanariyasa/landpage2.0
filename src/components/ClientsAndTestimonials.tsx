import { useState } from 'react';
import { Pause, Play, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import { CUSTOMER_LOGOS, VIDEO_TESTIMONIALS } from '../data/content';

interface ClientsAndTestimonialsProps {
  copy: {
    eyebrow: string;
    title: string;
    subtitle: string;
    pauseLabel: string;
    playLabel: string;
    testimonialsTitle: string;
    prevLabel: string;
    nextLabel: string;
  };
}

export function ClientsAndTestimonials({ copy }: ClientsAndTestimonialsProps) {
  const [paused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const doubled = [...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS];

  const total = VIDEO_TESTIMONIALS.length;
  const activeVideo = VIDEO_TESTIMONIALS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  return (
    <section id="clients" className="bg-[#042C5E] py-14 md:py-24 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">
              {copy.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-3 text-base text-slate-200">{copy.subtitle}</p>
          </div>

          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            className="inline-flex min-h-[44px] items-center gap-2 self-start rounded-md border border-white/30 bg-[#021A3A] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10"
          >
            {paused ? (
              <>
                <Play className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{copy.playLabel}</span>
              </>
            ) : (
              <>
                <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{copy.pauseLabel}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Logo Marquee */}
      <div className="relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20 bg-gradient-to-r from-[#042C5E] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20 bg-gradient-to-l from-[#042C5E] to-transparent" />

        <div className={`animate-marquee flex items-center gap-5 ${paused ? 'paused' : ''}`}>
          {doubled.map((logo, idx) => (
            <div
              key={`${logo.alt}-${idx}`}
              className="flex h-20 w-40 shrink-0 items-center justify-center rounded-lg bg-white p-3 border border-slate-200"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={56}
                loading="lazy"
                className="max-h-14 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* YouTube Testimonial Slider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-14">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
            {copy.testimonialsTitle}
          </h3>

          <div className="flex items-center gap-2">
            <span className="mr-2 text-xs font-semibold text-slate-300" aria-live="polite">
              {activeIndex + 1} / {total}
            </span>
            <button
              type="button"
              onClick={handlePrev}
              aria-label={copy.prevLabel}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-white/30 bg-[#021A3A] text-white transition-colors hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label={copy.nextLabel}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-white/30 bg-[#021A3A] text-white transition-colors hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-start">
          {/* Active YouTube Embed */}
          <div className="lg:col-span-7 rounded-xl border border-white/15 bg-[#021A3A] p-3 sm:p-4">
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
              <iframe
                key={activeVideo.youtubeId}
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?rel=0`}
                title={`${activeVideo.name}, ${activeVideo.role}`}
                width={1280}
                height={720}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
            <div className="mt-4 px-1 pb-1">
              <div className="font-display text-lg font-bold text-white">
                {activeVideo.name}
              </div>
              <div className="text-sm font-medium text-[#F5A623] mt-0.5">
                {activeVideo.role}
              </div>
            </div>
          </div>

          {/* Playlist Selector */}
          <div
            role="tablist"
            aria-label={copy.testimonialsTitle}
            className="lg:col-span-5 flex flex-col gap-2"
          >
            {VIDEO_TESTIMONIALS.map((item, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex min-h-[52px] w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors border ${
                    isSelected
                      ? 'bg-white text-[#042C5E] border-white'
                      : 'bg-[#021A3A] text-white border-white/15 hover:border-white/40 hover:bg-[#021A3A]/80'
                  }`}
                >
                  <PlayCircle
                    className={`h-5 w-5 shrink-0 ${
                      isSelected ? 'text-[#042C5E]' : 'text-[#F5A623]'
                    }`}
                    aria-hidden="true"
                  />
                  <div className="min-w-0 flex-1">
                    <div
                      className={`text-sm font-bold truncate ${
                        isSelected ? 'text-[#042C5E]' : 'text-white'
                      }`}
                    >
                      {item.name}
                    </div>
                    <div
                      className={`text-xs truncate ${
                        isSelected ? 'text-slate-700' : 'text-slate-300'
                      }`}
                    >
                      {item.role}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
