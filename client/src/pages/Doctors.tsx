/**
 * MediLife Care design reminder: Clinical Horizon — present clinicians with dignified, understated visual identities and accessible specialty information.
 */
import { Link } from "wouter";
import { ArrowRight, Award, CalendarDays, GraduationCap, Languages } from "lucide-react";
import PageHero from "../components/PageHero";
import { doctors } from "../data";

const physicianDetails = [
  { education: "Harbor Medical University", languages: "English, Arabic", note: "Evidence-led prevention with an emphasis on everyday heart health." },
  { education: "Riverside School of Medicine", languages: "English, Spanish", note: "Practical, relationship-centered primary care for every generation." },
  { education: "Pacific Neuroscience Institute", languages: "English, Mandarin", note: "Clear explanations and careful diagnostic pathways for complex symptoms." },
  { education: "Westbridge Medical College", languages: "English, Hindi", note: "Care that respects each patient’s changing needs across life stages." },
];

export default function Doctors() {
  return <><PageHero eyebrow="Our doctors" title="Specialists who make room for you." description="Meet clinicians who pair advanced training with thoughtful questions, plain-language answers, and a shared commitment to your next step." /><section className="section clinicians-list"><div className="container"><div className="section-heading split-heading"><div><span className="eyebrow">MEET YOUR CARE TEAM</span><h2>Knowledgeable. Present. Connected.</h2></div><p>Each MediLife clinician works with a wider care team, so your health story is carried forward with care.</p></div><div className="row g-4">{doctors.map((doctor,index)=>{const detail=physicianDetails[index];return <div className="col-md-6" key={doctor.name}><article className="clinician-card"><div className={`clinician-portrait ${doctor.tone}`}><img src={doctor.portrait} alt={`${doctor.name}, ${doctor.specialty}`}/><span>{doctor.initials}</span><div className="portrait-shape"/></div><div className="clinician-content"><span className="doctor-specialty">{doctor.specialty}</span><h2>{doctor.name}</h2><p>{detail.note}</p><div className="credential"><GraduationCap size={16}/>{detail.education}</div><div className="credential"><Languages size={16}/>{detail.languages}</div><Link href="/appointment" className="text-link">Book with {doctor.name.split(" ")[1]} <ArrowRight size={16}/></Link></div></article></div>})}</div></div></section><section className="doctor-cta"><div className="container doctor-cta-inner"><div><span className="eyebrow light">NOT SURE WHO TO SEE?</span><h2>Let us help you find the right next step.</h2></div><div><p><Award size={21}/> Our care coordinators can help match your needs to the right specialty.</p><Link href="/appointment" className="btn btn-light"><CalendarDays size={18}/> Start with a care visit</Link></div></div></section></>;
}
