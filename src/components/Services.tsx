import { useState } from 'react';

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  useCase: string;
}

interface ServicesProps {
  copy: {
    eyebrow: string;
    title: string;
    subtitle: string;
    useCaseLabel: string;
    ctaLabel: string;
    items: ServiceItem[];
  };
}

export function Services({ copy }: ServicesProps) {
  const [selectedId, setSelectedId] = useState(copy.items[0].id);
  const activeService = copy.items.find((s) => s.id === selectedId) ?? copy.items[0];

  return (
    <section id="services" className="bg-[#F4F6FA] py-14 md:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-[#283583]">
            {copy.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-[#042C5E] sm:text-3xl lg:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {copy.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 items-start">
          <div
            role="tablist"
            aria-label={copy.eyebrow}
            className="lg:col-span-5 flex flex-col gap-2"
          >
            {copy.items.map((service, idx) => {
              const isSelected = service.id === activeService.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  id={`service-tab-${service.id}`}
                  aria-selected={isSelected}
                  aria-controls={`service-panel-${service.id}`}
                  onClick={() => setSelectedId(service.id)}
                  className={`flex min-h-[48px] w-full items-center justify-between rounded-lg px-4 py-3.5 text-left text-sm font-bold transition-colors border ${
                    isSelected
                      ? 'bg-[#042C5E] text-white border-[#042C5E]'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-[#042C5E]/50 hover:bg-slate-50'
                  }`}
                >
                  <span>
                    <span className={`mr-3 text-xs font-extrabold ${isSelected ? 'text-[#F5A623]' : 'text-[#283583]'}`}>
                      0{idx + 1}
                    </span>
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`service-panel-${activeService.id}`}
            aria-labelledby={`service-tab-${activeService.id}`}
            className="lg:col-span-7 rounded-xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xs"
          >
            <h3 className="font-display text-2xl font-extrabold text-[#042C5E]">
              {activeService.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              {activeService.desc}
            </p>

            <div className="mt-7 rounded-lg bg-[#F4F6FA] border border-slate-200 p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#283583]">
                {copy.useCaseLabel}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-800">
                {activeService.useCase}
              </p>
            </div>

            <div className="mt-7">
              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center rounded-md bg-[#042C5E] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0a3b7a]"
              >
                {copy.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
