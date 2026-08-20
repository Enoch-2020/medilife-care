/**
 * MediLife Care design reminder: Clinical Horizon — editorial left-weighted mastheads with an airy, high-key clinical field and decisive blue accent.
 */
import { Link } from "wouter";
import { ArrowRight, CalendarDays, ChevronRight, HeartPulse, MapPin, Stethoscope, UserRoundCheck } from "lucide-react";

const heroSignals = {
  "About MediLife": { icon: HeartPulse, overline: "OUR CARE STANDARD", title: "Listen. Connect. Guide.", detail: "A shared care plan begins with your whole story.", step: "Care path 01", tone: "about" },
  "Care services": { icon: Stethoscope, overline: "SPECIALTY NAVIGATION", title: "Find the right door.", detail: "Six connected departments, one clearer direction.", step: "Care path 02", tone: "services" },
  "Our doctors": { icon: UserRoundCheck, overline: "YOUR CLINICAL TEAM", title: "Expertise, made personal.", detail: "Meet clinicians who carry context forward.", step: "Care path 03", tone: "doctors" },
  "Book a visit": { icon: CalendarDays, overline: "VISIT PLANNING", title: "A time that works.", detail: "A coordinator helps confirm the right next step.", step: "Care path 04", tone: "appointment" },
  "Contact MediLife": { icon: MapPin, overline: "CARE SUPPORT", title: "Start with a person.", detail: "Questions, directions, and next steps — all in one call.", step: "Care path 05", tone: "contact" },
};

export default function PageHero({ eyebrow, title, description, action = "Book an appointment" }: { eyebrow: string; title: string; description: string; action?: string }) {
  const signal = heroSignals[eyebrow as keyof typeof heroSignals];
  const SignalIcon = signal.icon;
  return (
    <section className="page-hero">
      <div className="page-hero-grid" aria-hidden="true"><span /><span /><span /><span /></div>
      <div className="container page-hero-content">
        <div className="breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} /><span>{eyebrow}</span></div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link href="/appointment" className="btn btn-primary">{action} <ArrowRight size={18} /></Link>
      </div>
      <aside className={`hero-signal ${signal.tone}`} aria-label={signal.overline}>
        <div className="signal-topline"><SignalIcon size={20}/><span>{signal.overline}</span></div>
        <h2>{signal.title}</h2>
        <p>{signal.detail}</p>
        <div className="signal-pulse"><i /><i /><i /><i /><b>{signal.step}</b></div>
      </aside>
      <div className="page-care-ribbon"><span className="ribbon-cross">+</span><strong>{signal.step}</strong><i /><span>{signal.overline}</span><i /><span>{signal.detail}</span></div>
    </section>
  );
}
