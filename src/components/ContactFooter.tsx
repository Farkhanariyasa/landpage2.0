import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Instagram,
  MessageCircle,
  Send,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import { FirstatLogo } from './FirstatLogo';

interface ContactFooterProps {
  copy: {
    eyebrow: string;
    title: string;
    subtitle: string;
    officeLabel: string;
    officeAddress: string;
    phoneLabel: string;
    emailLabel: string;
    socialLabel: string;
    form: {
      name: string;
      company: string;
      email: string;
      service: string;
      message: string;
      messagePlaceholder: string;
      submitWa: string;
      submitEmail: string;
      errorMissing: string;
      successWa: string;
      successEmail: string;
    };
  };
  servicesList: string[];
  footerRights: string;
}

export function ContactFooter({ copy, servicesList, footerRights }: ContactFooterProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(servicesList[0] ?? 'Customer Understanding');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'error' | 'success'; text: string } | null>(null);

  const buildPayload = () => {
    const lines = [
      'Hello Firstat Team,',
      name ? `Name: ${name}` : '',
      company ? `Company: ${company}` : '',
      email ? `Email: ${email}` : '',
      `Service: ${service}`,
      message ? `Objectives: ${message}` : '',
    ].filter(Boolean);
    return lines.join('\n');
  };

  const validate = () => {
    if (!name.trim() || !message.trim()) {
      setFeedback({ type: 'error', text: copy.form.errorMissing });
      return false;
    }
    return true;
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const text = encodeURIComponent(buildPayload());
    window.open(`https://wa.me/62811908400?text=${text}`, '_blank', 'noopener,noreferrer');
    setFeedback({ type: 'success', text: copy.form.successWa });
  };

  const handleEmail = () => {
    if (!validate()) return;
    const subject = encodeURIComponent(`Research Inquiry: ${company || name}`);
    const body = encodeURIComponent(buildPayload());
    window.location.href = `mailto:info@firstat.id?subject=${subject}&body=${body}`;
    setFeedback({ type: 'success', text: copy.form.successEmail });
  };

  return (
    <footer id="contact" className="bg-[#F4F6FA] pt-14 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#283583]">
              {copy.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-[#042C5E] sm:text-3xl lg:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {copy.subtitle}
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#042C5E] text-white">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    {copy.officeLabel}
                  </div>
                  <p className="mt-1 text-sm font-bold text-slate-900">
                    PT. Firstat Consulting Indonesia
                  </p>
                  <p className="text-sm text-slate-700">{copy.officeAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#042C5E] text-white">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    {copy.phoneLabel}
                  </div>
                  <a
                    href="https://wa.me/62811908400"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex min-h-[44px] items-center text-sm font-semibold text-[#042C5E] hover:underline"
                  >
                    +62 811-908-400
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#042C5E] text-white">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    {copy.emailLabel}
                  </div>
                  <a
                    href="mailto:info@firstat.id"
                    className="mt-1 inline-flex min-h-[44px] items-center text-sm font-semibold text-[#042C5E] hover:underline"
                  >
                    info@firstat.id
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#042C5E] text-white">
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    {copy.socialLabel}
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-5 text-sm font-semibold text-[#042C5E]">
                    <a
                      href="https://firstat.id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center hover:underline"
                    >
                      firstat.id
                    </a>
                    <a
                      href="https://instagram.com/firstat.id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-1.5 hover:underline"
                    >
                      <Instagram className="h-4 w-4" aria-hidden="true" />
                      <span>@firstat.id</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleWhatsApp}
              noValidate
              className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5"
            >
              {feedback && (
                <div
                  role={feedback.type === 'error' ? 'alert' : 'status'}
                  className={`flex items-start gap-3 rounded-lg border p-4 text-sm font-medium ${
                    feedback.type === 'error'
                      ? 'border-red-300 bg-red-50 text-red-900'
                      : 'border-emerald-300 bg-emerald-50 text-emerald-900'
                  }`}
                >
                  {feedback.type === 'error' ? (
                    <AlertCircle className="h-5 w-5 shrink-0 text-red-700" aria-hidden="true" />
                  ) : (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" aria-hidden="true" />
                  )}
                  <span>{feedback.text}</span>
                </div>
              )}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    {copy.form.name} *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Dina Kusuma"
                    className="min-h-[44px] w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#042C5E]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-company"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    {copy.form.company}
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="PT Brand Indonesia"
                    className="min-h-[44px] w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#042C5E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    {copy.form.email}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="min-h-[44px] w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#042C5E]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    {copy.form.service}
                  </label>
                  <select
                    id="contact-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="min-h-[44px] w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#042C5E]"
                  >
                    {servicesList.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  {copy.form.message} *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={copy.form.messagePlaceholder}
                  className="w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#042C5E]"
                />
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  type="submit"
                  className="inline-flex min-h-[44px] flex-1 min-w-[200px] items-center justify-center gap-2 rounded-md bg-[#042C5E] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0a3b7a]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>{copy.form.submitWa}</span>
                </button>
                <button
                  type="button"
                  onClick={handleEmail}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  <span>{copy.form.submitEmail}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#021A3A] py-6 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <FirstatLogo variant="white" className="h-7" />
          <p className="text-xs text-slate-300 text-center sm:text-right">
            &copy; {new Date().getFullYear()} {footerRights}
          </p>
        </div>
      </div>
    </footer>
  );
}
