/**
 * MediLife Care design reminder: Clinical Horizon — high-key architectural hero, low clinical noise, and a layered ribbon guiding visitors from assurance to action.
 */
import { Link } from "wouter";
import { ArrowRight, CalendarCheck2, Clock3, HeartHandshake, ShieldCheck, Stethoscope, UserRoundCheck } from "lucide-react";
import { doctors, services } from "../data";

const heroImage = "/manus-storage/medilife-hero-hospital_57873805.jpg";
const clinicianImage = "/manus-storage/medilife-clinicians_c7165928.jpg";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="pulse-dot" /> WELCOME TO MEDILIFE CARE</span>
            <h1>Expert care.<br /><em>Every time.</em></h1>
            <p>Compassionate care, advanced technology, and specialists who make the next step feel simpler.</p>
            <div className="hero-actions"><Link href="/appointment" className="btn btn-primary">Book an appointment <ArrowRight size={18} /></Link><Link href="/services" className="text-link">Explore services <ArrowRight size={17} /></Link></div>
            <div className="hero-proof"><ShieldCheck size={21} /><span><strong>Care with clarity</strong><br />Specialists, diagnostics, and support in one connected center.</span></div>
          </div>
          <div className="hero-visual">
            <div className="visual-frame" />
            <img src={heroImage} alt="Modern MediLife Care medical center" />
            <div className="hero-float-card"><span>NEW PATIENTS</span><strong>Start with a<br />care consultation.</strong><Link href="/appointment">Find a time <ArrowRight size={15} /></Link></div>
          </div>
        </div>
      </section>

      <section className="care-strip-section">
        <div className="container care-strip">
          <div className="care-strip-item"><span className="care-icon"><CalendarCheck2 size={23} /></span><div><strong>Simple scheduling</strong><p>Choose an in-person or virtual visit.</p></div></div>
          <div className="care-strip-item"><span className="care-icon"><UserRoundCheck size={23} /></span><div><strong>Experienced specialists</strong><p>Guidance shaped around your needs.</p></div></div>
          <div className="care-strip-item"><span className="care-icon"><HeartHandshake size={23} /></span><div><strong>Coordinated support</strong><p>One team, a clearer way forward.</p></div></div>
          <Link href="/contact" className="care-strip-call">Need help finding care?<br /><strong>Talk with us <ArrowRight size={16} /></strong></Link>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <div className="section-heading split-heading"><div><span className="eyebrow">CARE FOR YOUR WHOLE HEALTH</span><h2>One trusted place<br />for every need.</h2></div><p>Find specialist care, everyday health support, and diagnostic services designed to work together — not in silos.</p></div>
          <div className="row g-3 service-card-grid">
            {services.slice(0, 6).map((service, index) => { const Icon = service.icon; return <div className="col-md-6 col-xl-4" key={service.name}><Link href="/services" className="service-card"><span className={`service-number n-${index + 1}`}>0{index + 1}</span><Icon size={29} strokeWidth={1.8} /><h3>{service.name}</h3><p>{service.short}</p><span className="service-arrow"><ArrowRight size={18} /></span></Link></div>; })}
          </div>
        </div>
      </section>

      <section className="care-story-section">
        <div className="container care-story-grid">
          <div className="care-photo"><div className="photo-offset" /><img src={clinicianImage} alt="Two clinicians in a welcoming consultation space" /><div className="photo-label"><Stethoscope size={19} /> <span>CARE TEAMS<br /><strong>WHO CONNECT THE DOTS</strong></span></div></div>
          <div className="care-story-copy"><span className="eyebrow">A DIFFERENT KIND OF MEDICAL CENTER</span><h2>Healing hands.<br />Clearer plans.</h2><p>Great care is more than clinical expertise. It is being heard, knowing what happens next, and having the right people in your corner.</p><div className="care-stats"><div><strong>20+</strong><span>specialists<br />on one team</span></div><div><strong>15k</strong><span>annual visits<br />coordinated</span></div><div><strong>6</strong><span>integrated care<br />departments</span></div></div><Link href="/about" className="text-link">How our care works <ArrowRight size={17} /></Link></div>
        </div>
      </section>

      <section className="section doctors-section">
        <div className="container"><div className="section-heading centered-heading"><span className="eyebrow">THE PEOPLE BEHIND THE CARE</span><h2>Meet a team that makes time.</h2><p>Our clinicians pair deep expertise with the kind of attention that turns questions into a plan.</p></div><div className="row g-3 doctor-grid">{doctors.map((doctor) => <div className="col-sm-6 col-xl-3" key={doctor.name}><Link href="/doctors" className="doctor-card"><div className={`doctor-avatar ${doctor.tone}`}><img src={doctor.portrait} alt={`${doctor.name}, ${doctor.specialty}`}/><span>{doctor.initials}</span></div><small>{doctor.specialty}</small><h3>{doctor.name}</h3><p>{doctor.focus}</p><span className="doctor-link">View profile <ArrowRight size={16} /></span></Link></div>)}</div><div className="center-action"><Link href="/doctors" className="btn btn-outline-primary">Meet all doctors <ArrowRight size={17} /></Link></div></div>
      </section>

      <section className="home-appointment"><div className="container appointment-inner"><div><span className="eyebrow light">MAKE A MOVE FOR YOUR HEALTH</span><h2>Ready when you are.</h2><p>Book a visit online, or call to speak with someone who can guide you to the right care.</p></div><div className="appointment-actions"><Link href="/appointment" className="btn btn-light">Book an appointment <ArrowRight size={18} /></Link><a href="tel:+15550184422"><Clock3 size={19} /> Call (555) 018-4422</a></div></div></section>
    </>
  );
}
