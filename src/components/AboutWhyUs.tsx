interface AboutWhyUsProps {
  copy: {
    eyebrow: string;
    title: string;
    subtitle: string;
    pillars: Array<{ id: string; num: string; title: string; desc: string }>;
  };
}

export function AboutWhyUs({ copy }: AboutWhyUsProps) {
  return (
    <section id="why-us" className="bg-white py-14 md:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <p className="text-xs font-bold uppercase tracking-wider text-[#283583]">
              {copy.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-[#042C5E] sm:text-3xl lg:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {copy.subtitle}
            </p>
          </div>

          <div className="lg:col-span-7 divide-y divide-slate-200 border-t border-b border-slate-200">
            {copy.pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="py-6 sm:py-7 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
              >
                <span className="font-display text-sm font-extrabold text-[#283583] shrink-0 w-8">
                  {pillar.num}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#042C5E]">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
