/**
 * MediLife Care design reminder: Clinical Horizon — use measured information bands, reassuring dark ink, MediLife Blue actions, and no decorative excess.
 */
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import { BrandMark } from "./BrandMark";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Care services" },
  { href: "/doctors", label: "Our doctors" },
  { href: "/contact", label: "Contact" },
];

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div className="site-shell">
      <div className="utility-bar">
        <div className="container d-flex flex-wrap align-items-center justify-content-between gap-2">
          <p className="utility-copy mb-0"><ShieldCheck size={14} /> Compassionate, coordinated care for every stage of life.</p>
          <div className="utility-actions">
            <a href="tel:+15550184422"><Phone size={13} /> (555) 018-4422</a>
            <span className="utility-divider" />
            <a href="mailto:care@medilife.example"><Mail size={13} /> care@medilife.example</a>
          </div>
        </div>
      </div>

      <header className="main-header">
        <div className="container nav-wrap">
          <BrandMark />
          <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={25} />}
          </button>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={location === item.href ? "active" : ""}>{item.label}</Link>
            ))}
            <Link href="/appointment" className="btn btn-primary header-appointment"><CalendarDays size={17} /> Book an appointment</Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <section className="schedule-strip">
        <div className="container schedule-grid">
          <div className="schedule-title"><span className="eyebrow light">YOUR NEXT STEP</span><h2>Care begins with a conversation.</h2></div>
          <div className="schedule-details"><Clock3 size={23} /><p><strong>Same-week appointments</strong><br />Call our care coordinators Monday–Saturday.</p></div>
          <Link href="/appointment" className="btn btn-light schedule-button">Choose a time <ArrowRight size={18} /></Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-top">
          <div className="footer-intro">
            <BrandMark />
            <p>Modern care, made clear. We bring trusted specialists, practical guidance, and the next right step into one place.</p>
            <div className="socials" aria-label="Social links">
              <a href="#social" aria-label="Facebook"><Facebook size={17} /></a>
              <a href="#social" aria-label="Instagram"><Instagram size={17} /></a>
              <a href="#social" aria-label="LinkedIn"><Linkedin size={17} /></a>
            </div>
          </div>
          <div className="footer-links">
            <h3>Explore care</h3>
            <Link href="/about">Our approach</Link>
            <Link href="/services">Care services</Link>
            <Link href="/doctors">Meet doctors</Link>
            <Link href="/appointment">Book a visit</Link>
          </div>
          <div className="footer-links">
            <h3>Useful information</h3>
            <a href="#visit">Preparing for a visit</a>
            <a href="#billing">Billing & insurance</a>
            <a href="#records">Medical records</a>
            <Link href="/contact">Support & directions</Link>
          </div>
          <div className="footer-contact">
            <h3>Visit MediLife</h3>
            <p><MapPin size={17} /> 325 Harbor Avenue<br /><span>Riverside, CA 92501</span></p>
            <p><Phone size={17} /> (555) 018-4422</p>
            <p><Mail size={17} /> care@medilife.example</p>
          </div>
        </div>
        <div className="container footer-bottom"><span>© 2026 MediLife Care Center. Demo website concept.</span><div><a href="#privacy">Privacy</a><a href="#terms">Terms</a><a href="#accessibility">Accessibility</a></div></div>
      </footer>
    </div>
  );
}
