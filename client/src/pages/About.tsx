/**
 * MediLife Care design reminder: Clinical Horizon — build trust through editorial clarity, concise facts, and a protected soft-blue image frame.
 */
import { CheckCircle2, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";

const teamImage = "/manus-storage/medilife-clinicians_c7165928.jpg";
const values = [
  { icon: ShieldCheck, title: "Be precise", text: "We explain what we know, what comes next, and how each decision supports your health." },
  { icon: HeartHandshake, title: "Be present", text: "We create room for questions, concerns, and the context that makes your health unique." },
  { icon: Sparkles, title: "Keep improving", text: "We use better systems, better evidence, and thoughtful feedback to make care easier to navigate." },
];

export default function About() {
  return <><PageHero eyebrow="About MediLife" title="Healthcare that sees the whole person." description="We built MediLife Care around a simple belief: patients deserve expert medicine, plain-language guidance, and a team that stays connected." /><section className="section about-story"><div className="container about-grid"><div><span className="eyebrow">OUR PURPOSE</span><h2>Bring more ease to every health decision.</h2><p className="lead">MediLife Care is an integrated health center for people who want care to feel more informed, coordinated, and human.</p><p>From first questions to follow-up, our specialists and care coordinators share a single view of your needs. That means less repeating, fewer loose ends, and a clearer plan when it matters.</p><div className="check-list"><p><CheckCircle2 /> Specialists who collaborate across care areas</p><p><CheckCircle2 /> Clear information before, during, and after your visit</p><p><CheckCircle2 /> Flexible pathways for in-person and virtual support</p></div></div><div className="about-image"><div className="photo-offset" /><img src={teamImage} alt="MediLife clinicians collaborating" /><div className="image-stat"><strong>ONE TEAM</strong><span>many care<br />perspectives</span></div></div></div></section><section className="values-section"><div className="container"><div className="section-heading split-heading"><div><span className="eyebrow">WHAT GUIDES US</span><h2>Care you can feel confident in.</h2></div><p>Our model holds clinical excellence and human attention to the same high standard.</p></div><div className="row g-4">{values.map((value, i) => { const Icon = value.icon; return <div className="col-md-4" key={value.title}><article className="value-card"><span><Icon size={26}/></span><h3>{value.title}</h3><p>{value.text}</p><b>0{i + 1}</b></article></div>; })}</div></div></section></>;
}
