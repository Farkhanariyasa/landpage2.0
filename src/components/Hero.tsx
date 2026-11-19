interface HeroProps {
  copy: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metrics: Array<{ value: string; label: string }>;
  };
}

export function Hero({ copy }: HeroProps) {
  return (
    <section id="top" className="bg-[#042C5E] text-white pt-10 pb-14 md:pt-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.14]">
              {copy.title}
            </h1>

            <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg max-w-2xl">
              {copy.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center rounded-md bg-[#F5A623] px-6 py-3 text-sm font-bold text-[#021A3A] transition-colors hover:bg-amber-400"
              >
                {copy.ctaPrimary}
              </a>
              <a
                href="#services"
                className="inline-flex min-h-[44px] items-center rounded-md border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {copy.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl bg-[#042C5E]">
              <img
                src="/assets/hero/hero-illustration.jpg"
                alt="Illustration of Indonesia archipelago survey network and market analytics charts"
                width={1200}
                height={800}
                fetchPriority="high"
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 border-t border-white/15 pt-8">
          {copy.metrics.map((m) => (
            <div key={m.label} className="rounded-lg bg-[#021A3A] border border-white/10 px-5 py-4">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#F5A623]">
                {m.value}
              </div>
              <div className="mt-1 text-sm text-slate-200">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
