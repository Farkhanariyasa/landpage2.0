import { useState, useEffect } from 'react';
import { CONTENT, type Lang } from './data/content';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutWhyUs } from './components/AboutWhyUs';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { ClientsAndTestimonials } from './components/ClientsAndTestimonials';
import { ImpactAndLeadership } from './components/ImpactAndLeadership';
import { ContactFooter } from './components/ContactFooter';

export function App() {
  const [lang, setLang] = useState<Lang>('en');
  const copy = CONTENT[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar
        lang={lang}
        onToggleLang={() => setLang((prev) => (prev === 'en' ? 'id' : 'en'))}
        navCopy={copy.nav}
      />
      <main className="flex-1">
        <Hero copy={copy.hero} />
        <AboutWhyUs copy={copy.about} />
        <Services copy={copy.services} />
        <CaseStudies copy={copy.cases} />
        <ClientsAndTestimonials copy={copy.clients} />
        <ImpactAndLeadership copy={copy.impact} />
      </main>
      <ContactFooter
        copy={copy.contact}
        servicesList={copy.services.items.map((s) => s.title)}
        footerRights={copy.footer.rights}
      />
    </div>
  );
}

export default App;
