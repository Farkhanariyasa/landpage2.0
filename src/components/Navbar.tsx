import { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { FirstatLogo } from './FirstatLogo';
import type { Lang } from '../data/content';

interface NavbarProps {
  lang: Lang;
  onToggleLang: () => void;
  navCopy: {
    about: string;
    services: string;
    cases: string;
    clients: string;
    impact: string;
    contact: string;
    menuLabel: string;
  };
}

export function Navbar({ lang, onToggleLang, navCopy }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const links = [
    { href: '#why-us', label: navCopy.about },
    { href: '#services', label: navCopy.services },
    { href: '#case-studies', label: navCopy.cases },
    { href: '#clients', label: navCopy.clients },
    { href: '#impact', label: navCopy.impact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-white border-b border-slate-200 shadow-xs'
          : 'bg-[#042C5E] border-b border-white/10'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          aria-label="Firstat Home"
          className="inline-flex min-h-[44px] items-center rounded-md px-1"
        >
          <FirstatLogo variant={scrolled ? 'navy' : 'white'} className="h-7" />
        </a>

        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`inline-flex min-h-[44px] items-center text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-slate-700 hover:text-[#042C5E]'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleLang}
            className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-md px-3.5 text-xs font-semibold transition-colors ${
              scrolled
                ? 'border border-slate-300 text-slate-800 hover:bg-slate-100'
                : 'border border-white/30 text-white hover:bg-white/10'
            }`}
            aria-label={lang === 'en' ? 'Switch language to Indonesian' : 'Ganti bahasa ke Inggris'}
          >
            <Globe className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{lang === 'en' ? 'EN / ID' : 'ID / EN'}</span>
          </button>
          <a
            href="#contact"
            className={`inline-flex min-h-[44px] items-center rounded-md px-5 text-sm font-bold transition-colors ${
              scrolled
                ? 'bg-[#042C5E] text-white hover:bg-[#0a3b7a]'
                : 'bg-[#F5A623] text-[#021A3A] hover:bg-amber-400'
            }`}
          >
            {navCopy.contact}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onToggleLang}
            className={`min-h-[44px] min-w-[44px] rounded-md px-3 text-xs font-semibold ${
              scrolled
                ? 'border border-slate-300 text-slate-800'
                : 'border border-white/30 text-white'
            }`}
            aria-label={lang === 'en' ? 'Switch language to Indonesian' : 'Ganti bahasa ke Inggris'}
          >
            {lang.toUpperCase()}
          </button>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            className={`inline-flex min-h-[44px] items-center gap-2 rounded-md px-3 text-sm font-semibold ${
              scrolled
                ? 'border border-slate-300 text-slate-800'
                : 'border border-white/30 text-white'
            }`}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
            <span>{navCopy.menuLabel}</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile navigation"
          className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-1 shadow-md"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[44px] items-center rounded-md px-3 text-base font-medium text-slate-800 hover:bg-slate-100"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[44px] w-full items-center justify-center rounded-md bg-[#042C5E] px-4 text-sm font-bold text-white"
            >
              {navCopy.contact}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
