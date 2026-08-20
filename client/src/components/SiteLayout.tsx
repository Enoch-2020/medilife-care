/**
 * Northline Build Co. design reminder: Forge & Form — the global shell should feel like a structural beam: compact, dark, precise, and always route-oriented.
 */
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Instagram, Linkedin, Mail, Menu, Phone, X } from "lucide-react";
import BrandMark from "./BrandMark";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Capabilities" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }, [location]);
  return <div className="northline-shell">
    <div className="site-utility"><div className="container"><span>CALIFORNIA LICENSE #1084921</span><div><a href="tel:+14155550148"><Phone size={13}/> (415) 555-0148</a><a href="mailto:build@northline.example"><Mail size={13}/> build@northline.example</a></div></div></div>
    <header className="site-header"><div className="container header-inner"><BrandMark/><button className="northline-menu" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button><nav className={open ? "is-open" : ""} aria-label="Main navigation">{navigation.map(item => <Link key={item.href} href={item.href} className={location === item.href ? "active" : ""}>{item.label}</Link>)}<Link href="/quote" className="northline-cta">Start a project <ArrowUpRight size={16}/></Link></nav></div></header>
    <main>{children}</main>
    <section className="quote-ribbon"><div className="container"><div><span className="section-code amber">NEXT MOVE / 01</span><h2>Bring us the site.<br/>We’ll bring the plan.</h2></div><p>Tell us what you are building, where you are in the process, and what you need from a construction partner.</p><Link href="/quote" className="button button-amber">Request a quote <ArrowUpRight size={18}/></Link></div></section>
    <footer className="site-footer"><div className="container footer-grid"><div><BrandMark inverted/><p>Northline delivers commercial, residential, and complex renovation work with a disciplined way of building.</p><div className="footer-social"><a href="#linkedin" aria-label="LinkedIn"><Linkedin size={16}/></a><a href="#instagram" aria-label="Instagram"><Instagram size={16}/></a></div></div><div><span className="footer-heading">NAVIGATE</span><Link href="/about">About Northline</Link><Link href="/services">Capabilities</Link><Link href="/projects">Selected projects</Link><Link href="/quote">Request a quote</Link></div><div><span className="footer-heading">CONTACT</span><a href="tel:+14155550148">(415) 555-0148</a><a href="mailto:build@northline.example">build@northline.example</a><p>1450 Bryant Street<br/>San Francisco, CA 94103</p></div><div className="footer-status"><span className="footer-heading">FIELD STATUS</span><strong><i/> 14 ACTIVE SITES</strong><p>Office hours<br/>Mon–Fri, 7:00 AM–5:30 PM</p></div></div><div className="container footer-bottom"><span>© 2026 Northline Build Co. Demo construction website.</span><span>Built with scope. Held to standard.</span></div></footer>
  </div>;
}
