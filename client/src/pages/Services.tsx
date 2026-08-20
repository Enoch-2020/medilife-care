/**
 * MediLife Care design reminder: Clinical Horizon — make service navigation feel like calm hospital wayfinding; structured, legible, and never dense.
 */
import { Link } from "wouter";
import { ArrowRight, Check, ScanLine } from "lucide-react";
import PageHero from "../components/PageHero";
import { services } from "../data";

const diagnosticImage = "/manus-storage/medilife-diagnostics_7aa8b3db.jpg";

export default function Services() {
  return <><PageHero eyebrow="Care services" title="The care you need, connected by design." description="Whether you are staying well, looking for an answer, or managing an ongoing condition, start with the team that fits your next step." action="Find the right care" /><section className="section services-all"><div className="container"><div className="service-list-header"><span className="eyebrow">EXPLORE OUR DEPARTMENTS</span><p>Choose a specialty to learn how we can support your health goals.</p></div><div className="service-full-list">{services.map((service, index)=>{const Icon=service.icon;return <article className="service-full-card" key={service.name}><span className="service-index">0{index+1}</span><span className="service-full-icon"><Icon size={30}/></span><div><h2>{service.name}</h2><p>{service.detail}</p></div><Link href="/appointment" className="circle-arrow" aria-label={`Book ${service.name} care`}><ArrowRight size={19}/></Link></article>})}</div></div></section><section className="diagnostics-feature"><div className="container diagnostics-grid"><div className="diagnostics-content"><span className="eyebrow">CONNECTED DIAGNOSTICS</span><h2>From questions to answers, without extra distance.</h2><p>Our diagnostics team works closely with your clinician so imaging, lab results, and next steps are easier to understand and act on.</p><div className="diagnostic-points"><p><Check size={18}/> Dedicated care coordinators</p><p><Check size={18}/> Thoughtful preparation guidance</p><p><Check size={18}/> Results routed to your care team</p></div><Link href="/appointment" className="btn btn-primary">Schedule a diagnostic visit <ArrowRight size={18}/></Link></div><div className="diagnostics-image"><img src={diagnosticImage} alt="Radiology technician preparing a patient for diagnostics"/><span><ScanLine size={20}/> COMFORT-FIRST IMAGING</span></div></div></section></>;
}
