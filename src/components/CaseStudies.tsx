import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface CaseStudyItem {
  id: string;
  category: string;
  title: string;
  focus: string;
  keyTakeaway: string;
  type: 'beverage' | 'fmcg' | 'ramadhan' | 'sunscreen' | 'fashion';
}

interface CaseStudiesProps {
  copy: {
    eyebrow: string;
    title: string;
    subtitle: string;
    focusLabel: string;
    takeawayLabel: string;
    filterAll: string;
    emptyMessage: string;
    resetFilter: string;
    items: CaseStudyItem[];
  };
}

function CaseVisual({ type }: { type: CaseStudyItem['type'] }) {
  if (type === 'beverage') {
    const sports = [
      { label: 'Running', love: 75, ok: 15, dislike: 10 },
      { label: 'Gym', love: 20, ok: 30, dislike: 40 },
      { label: 'Pilates', love: 15, ok: 65, dislike: 20 },
      { label: 'Padel', love: 10, ok: 60, dislike: 30 },
    ];
    const sweetness = [
      { label: 'Just right', pct: 44.44 },
      { label: 'Slightly less sweet', pct: 40.74 },
      { label: 'Far too little sweet', pct: 11.11 },
      { label: 'Slightly too sweet', pct: 3.7 },
    ];
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-[#F4F6FA] p-5 border border-slate-200">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#042C5E] mb-4">
            Taste Rating by Sport Activity (% Love It)
          </h4>
          <div className="space-y-3">
            {sports.map((s) => (
              <div key={s.label}>
                <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1">
                  <span>{s.label}</span>
                  <span className="text-[#042C5E]">{s.love}% love it</span>
                </div>
                <div className="h-3 w-full rounded-sm bg-slate-200 overflow-hidden flex border border-slate-300/60">
                  <div className="bg-[#042C5E]" style={{ width: `${s.love}%` }} />
                  <div className="bg-[#F5A623]" style={{ width: `${s.ok}%` }} />
                  <div className="bg-slate-500" style={{ width: `${s.dislike}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-[#F4F6FA] p-5 border border-slate-200">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#042C5E] mb-4">
            Sweetness Level (Flavor 2)
          </h4>
          <div className="space-y-3">
            {sweetness.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1">
                  <span>{item.label}</span>
                  <span className="text-[#283583]">{item.pct}%</span>
                </div>
                <div className="h-3 w-full rounded-sm bg-slate-200 overflow-hidden border border-slate-300/60">
                  <div
                    className="h-full bg-[#283583]"
                    style={{ width: `${Math.min(item.pct * 1.8, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'fmcg') {
    const awareness = [
      { label: 'Have tried the product', pct: 65, color: 'bg-[#042C5E]' },
      { label: 'Heard of, but not tried', pct: 24, color: 'bg-[#283583]' },
      { label: 'Never heard of brand', pct: 11, color: 'bg-slate-600' },
    ];
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-[#F4F6FA] p-5 border border-slate-200">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#042C5E] mb-4">
            Brand Awareness &amp; Trial
          </h4>
          <div className="space-y-4">
            {awareness.map((a) => (
              <div key={a.label}>
                <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1">
                  <span>{a.label}</span>
                  <span>{a.pct}%</span>
                </div>
                <div className="h-3 w-full rounded-sm bg-slate-200 overflow-hidden border border-slate-300/60">
                  <div className={`h-full ${a.color}`} style={{ width: `${a.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-[#F4F6FA] p-5 border border-slate-200 flex flex-col justify-between">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#042C5E] mb-3">
            Packaging Sentiment &amp; Recommendations
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-md bg-white p-4 border border-slate-200">
              <div className="font-display text-2xl font-extrabold text-[#042C5E]">55%</div>
              <div className="text-xs text-slate-700 mt-1">Positive on clean &amp; modern white design</div>
            </div>
            <div className="rounded-md bg-white p-4 border border-slate-200">
              <div className="font-display text-sm font-bold text-[#283583]">Top Requests</div>
              <div className="text-xs text-slate-700 mt-1">Resealable zip, matte finish, larger logo</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'ramadhan') {
    const gens = [
      { label: 'Gen Z', pct: 81 },
      { label: 'Millennials', pct: 77 },
      { label: 'Gen X', pct: 57 },
    ];
    const channels = [
      { item: 'Cookies', online: 90, offline: 20 },
      { item: 'Clothes', online: 70, offline: 75 },
      { item: 'Shoes & Sandals', online: 25, offline: 85 },
      { item: 'Mobile Devices', online: 22, offline: 90 },
    ];
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-[#F4F6FA] p-5 border border-slate-200">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#042C5E] mb-4">
            Interest in Couple&apos;s Attire by Generation
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {gens.map((g) => (
              <div key={g.label} className="rounded-md bg-white p-3 text-center border border-slate-200">
                <div className="font-display text-2xl font-extrabold text-[#042C5E]">{g.pct}%</div>
                <div className="text-xs font-medium text-slate-700 mt-1">{g.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-md bg-[#042C5E] px-4 py-3 text-xs text-white flex flex-wrap justify-between items-center gap-2">
            <span>Expected Hamper Budget</span>
            <span className="font-bold text-[#F5A623]">Rp 150,000 / hamper</span>
          </div>
        </div>

        <div className="rounded-lg bg-[#F4F6FA] p-5 border border-slate-200">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#042C5E] mb-3">
            Where to Shop? (Online vs Offline)
          </h4>
          <div className="space-y-2.5">
            {channels.map((c) => (
              <div
                key={c.item}
                className="flex flex-wrap items-center justify-between gap-2 text-xs bg-white rounded-md px-3 py-2.5 border border-slate-200"
              >
                <span className="font-semibold text-slate-900">{c.item}</span>
                <div className="flex gap-4">
                  <span className="text-[#042C5E] font-semibold">Online {c.online}%</span>
                  <span className="text-[#991B1B] font-semibold">Offline {c.offline}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'sunscreen') {
    const brands = [
      { name: 'Azarine', rate: 13.77, highlight: true },
      { name: 'The Originote', rate: 10.45, highlight: false },
      { name: 'Nouis Skin', rate: 10.15, highlight: false },
      { name: 'Npure', rate: 9.35, highlight: false },
      { name: 'Skintific', rate: 8.72, highlight: false },
      { name: "L'Oreal", rate: 8.62, highlight: false },
      { name: 'Wardah', rate: 7.98, highlight: false },
    ];
    return (
      <div className="rounded-lg bg-[#F4F6FA] p-5 border border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#042C5E]">
            Repurchase Rate of Sunscreen Brands (%) in Marketplace A
          </h4>
          <span className="text-xs font-medium text-slate-700">
            Price range analyzed: Rp 540/ml to Rp 5,980/ml
          </span>
        </div>
        <div className="space-y-2.5">
          {brands.map((b) => (
            <div key={b.name} className="grid grid-cols-12 items-center gap-3 text-xs">
              <div className={`col-span-4 sm:col-span-3 font-semibold ${b.highlight ? 'text-[#042C5E]' : 'text-slate-800'}`}>
                {b.name}
              </div>
              <div className="col-span-6 sm:col-span-7 h-3 rounded-sm bg-slate-200 overflow-hidden border border-slate-300/60">
                <div
                  className={`h-full ${b.highlight ? 'bg-[#F5A623]' : 'bg-[#042C5E]'}`}
                  style={{ width: `${(b.rate / 15) * 100}%` }}
                />
              </div>
              <div className={`col-span-2 text-right font-bold ${b.highlight ? 'text-[#92400E]' : 'text-slate-800'}`}>
                {b.rate}%
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="rounded-lg bg-[#F4F6FA] p-5 border border-slate-200">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#042C5E] mb-4">
          Medium-to-Top Customer Share
        </h4>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1">
              <span>Marketplace A</span>
              <span className="text-[#042C5E]">40% Medium-to-Top</span>
            </div>
            <div className="h-3.5 w-full rounded-sm bg-slate-200 overflow-hidden border border-slate-300/60">
              <div className="h-full bg-[#042C5E]" style={{ width: '40%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1">
              <span>Marketplace B</span>
              <span className="text-slate-700">28% Medium-to-Top</span>
            </div>
            <div className="h-3.5 w-full rounded-sm bg-slate-200 overflow-hidden border border-slate-300/60">
              <div className="h-full bg-[#283583]" style={{ width: '28%' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-[#F4F6FA] p-5 border border-slate-200 flex flex-col justify-between">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#042C5E] mb-3">
          3-Year Sales &amp; Regional Findings
        </h4>
        <ul className="space-y-2.5 text-xs text-slate-800">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#042C5E] shrink-0 mt-0.5" aria-hidden="true" />
            <span>Strong non-Java demand in provincial capitals, balanced in South &amp; East Kalimantan.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#042C5E] shrink-0 mt-0.5" aria-hidden="true" />
            <span>Deseasonalized trend (excluding Idul Fitri) revealed shifting preferences, guiding new product development.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function CaseStudies({ copy }: CaseStudiesProps) {
  const categories = [copy.filterAll, ...Array.from(new Set(copy.items.map((i) => i.category)))];
  const [selectedCategory, setSelectedCategory] = useState(copy.filterAll);
  const filteredItems =
    selectedCategory === copy.filterAll
      ? copy.items
      : copy.items.filter((c) => c.category === selectedCategory);

  const [activeId, setActiveId] = useState(copy.items[0].id);
  const activeCase = filteredItems.find((c) => c.id === activeId) ?? filteredItems[0];

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    const nextList = cat === copy.filterAll ? copy.items : copy.items.filter((c) => c.category === cat);
    if (nextList.length > 0 && !nextList.some((c) => c.id === activeId)) {
      setActiveId(nextList[0].id);
    }
  };

  return (
    <section id="case-studies" className="py-14 md:py-24 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
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

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter case studies by practice">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryChange(cat)}
                  className={`min-h-[44px] rounded-md px-3.5 py-2 text-xs font-semibold transition-colors border ${
                    active
                      ? 'bg-[#283583] text-white border-[#283583]'
                      : 'bg-[#F4F6FA] text-slate-800 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="mt-10 rounded-xl border border-slate-200 bg-[#F4F6FA] p-10 text-center">
            <p className="text-sm font-medium text-slate-700">{copy.emptyMessage}</p>
            <button
              type="button"
              onClick={() => handleCategoryChange(copy.filterAll)}
              className="mt-4 min-h-[44px] rounded-md bg-[#042C5E] px-5 py-2 text-sm font-bold text-white"
            >
              {copy.resetFilter}
            </button>
          </div>
        ) : (
          <>
            <div
              role="tablist"
              aria-label={copy.eyebrow}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {filteredItems.map((item) => {
                const isActive = item.id === activeCase.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    id={`case-tab-${item.id}`}
                    aria-selected={isActive}
                    aria-controls={`case-panel-${item.id}`}
                    onClick={() => setActiveId(item.id)}
                    className={`min-h-[44px] rounded-md px-4 py-2.5 text-sm font-semibold transition-colors border ${
                      isActive
                        ? 'bg-[#042C5E] text-white border-[#042C5E]'
                        : 'bg-white text-slate-800 border-slate-300 hover:border-[#042C5E]'
                    }`}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>

            <div
              role="tabpanel"
              id={`case-panel-${activeCase.id}`}
              aria-labelledby={`case-tab-${activeCase.id}`}
              className="mt-6 rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs"
            >
              <div className="border-b border-slate-200 pb-5">
                <span className="inline-block rounded-md bg-[#F4F6FA] border border-slate-200 px-3 py-1 text-xs font-bold text-[#283583]">
                  {activeCase.category}
                </span>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-[#042C5E]">
                  {activeCase.title}
                </h3>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2 mb-8">
                <div className="rounded-lg bg-[#F4F6FA] p-4 border border-slate-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#283583]">
                    {copy.focusLabel}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-800">
                    {activeCase.focus}
                  </p>
                </div>
                <div className="rounded-lg bg-amber-50 p-4 border border-amber-300">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-900">
                    {copy.takeawayLabel}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-900">
                    {activeCase.keyTakeaway}
                  </p>
                </div>
              </div>

              <CaseVisual type={activeCase.type} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
