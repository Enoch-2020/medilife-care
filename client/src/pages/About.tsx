/**
 * Northline Build Co. design reminder: Forge & Form — company proof should be grounded in field discipline, not generic construction claims.
 */
import { Check, HardHat, ShieldCheck, SquareStack } from "lucide-react";
import PageHero from "../components/PageHero";
import { stats } from "../data";

const craftImage = "/manus-storage/northline-craft-detail_fc295bf8.jpg";
const values = [
  { icon: SquareStack, title: "Coordinate the whole", copy: "We bring the moving parts together so decisions travel cleanly from document to field." },
  { icon: ShieldCheck, title: "Protect the work", copy: "We build quality controls into the sequence instead of saving them for the finish." },
  { icon: HardHat, title: "Lead from site", copy: "Our project leaders stay close to the daily work, trade partners, and owner decisions." },
];

export default function About() {
  return <>
    <PageHero section="About" title="The build only works when the team does." copy="Northline was founded on a simple rule: solve the hard parts early, lead the site directly, and stay accountable to the last detail."/>
    <section className="about-stance"><div className="container stance-grid"><div><span className="section-code">OUR STANCE / BUILT ON SITE</span><h2>Practical leadership.<br/>No loose ends.</h2><p className="large-copy">We bring owners, architects, consultants, and trade partners into a working construction plan — then keep that plan visible as the work moves.</p><div className="principle-list"><p><Check size={17}/> <strong>Own the sequence.</strong> A build moves better when someone holds the whole line.</p><p><Check size={17}/> <strong>Surface the facts.</strong> We manage issues early and communicate in plain sight.</p><p><Check size={17}/> <strong>Protect the standard.</strong> Detail, safety, and handoff matter all the way through.</p></div></div><div className="stance-image"><div className="amber-beam"/><img src={craftImage} alt="Timber and steel construction detail"/><div className="image-stamp"><HardHat size={19}/><span>FIELD-LED<br/><b>CONSTRUCTION</b></span></div></div></div></section>
    <section className="about-stats"><div className="container">{stats.map(stat=><div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></section>
    <section className="values-grid"><div className="container"><div className="section-header-line"><span className="section-code">WHAT WE HOLD TO</span><h2>Standards that stay<br/>on the job.</h2></div><div className="row g-3">{values.map((value,index)=>{const Icon=value.icon; return <div className="col-md-4" key={value.title}><article className="value-block"><span>0{index+1}</span><Icon size={28}/><h3>{value.title}</h3><p>{value.copy}</p></article></div>})}</div></div></section>
  </>;
}
