import { GraduationCap, Store, Linkedin } from 'lucide-react';

interface ImpactProps {
  copy: {
    eyebrow: string;
    title: string;
    csrTitle: string;
    csrItems: Array<{ title: string; desc: string }>;
    leadershipTitle: string;
    leaders: Array<{
      name: string;
      role: string;
      image: string;
      linkedin: string;
      bio: string;
    }>;
  };
}

export function ImpactAndLeadership({ copy }: ImpactProps) {
  return (
    <section id="impact" className="py-14 md:py-24 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-wider text-[#283583]">
            {copy.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-[#042C5E] sm:text-3xl lg:text-4xl">
            {copy.title}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
          {/* CSR */}
          <div className="lg:col-span-6">
            <h3 className="font-display text-xl font-bold text-[#042C5E] mb-5">
              {copy.csrTitle}
            </h3>
            <div className="space-y-4">
              {copy.csrItems.map((item, idx) => {
                const Icon = idx === 0 ? GraduationCap : Store;
                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-[#F4F6FA] p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#283583] text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-bold text-[#042C5E]">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-slate-700">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Leadership */}
          <div className="lg:col-span-6">
            <h3 className="font-display text-xl font-bold text-[#042C5E] mb-5">
              {copy.leadershipTitle}
            </h3>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {copy.leaders.map((leader) => (
                <div
                  key={leader.name}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-square w-full overflow-hidden bg-slate-100">
                      <img
                        src={leader.image}
                        alt={`${leader.name}, ${leader.role}`}
                        width={400}
                        height={400}
                        loading="lazy"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="p-5 pb-2">
                      <div className="font-display text-lg font-bold text-[#042C5E]">
                        {leader.name}
                      </div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#283583] mt-0.5">
                        {leader.role}
                      </div>
                      <p className="mt-2.5 text-xs leading-relaxed text-slate-700">
                        {leader.bio}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-4 pt-2">
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${leader.name} LinkedIn profile`}
                      className="inline-flex min-h-[44px] items-center gap-2 text-xs font-bold text-[#042C5E] hover:text-[#283583] hover:underline"
                    >
                      <Linkedin className="h-4 w-4" aria-hidden="true" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
