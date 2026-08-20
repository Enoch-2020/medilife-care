/**
 * Northline Build Co. design reminder: Forge & Form — each inner masthead needs a unique site-status signal and beam-line ribbon, never a generic repeated banner.
 */
import { Link } from "wouter";
import { ArrowUpRight, BriefcaseBusiness, ChevronRight, ClipboardList, HardHat, MapPinned, MessagesSquare } from "lucide-react";

const signals = {
  About: { icon: BriefcaseBusiness, tag: "COMPANY PROFILE", headline: "A partner built for the work.", note: "27 years of field discipline, from a first walk-through to final closeout.", code: "N / 01", tone: "about" },
  Capabilities: { icon: ClipboardList, tag: "SCOPE DIRECTORY", headline: "One team. Clear accountability.", note: "The right construction path depends on the work in front of you.", code: "N / 02", tone: "capabilities" },
  Projects: { icon: MapPinned, tag: "PROJECT LEDGER", headline: "Work you can walk through.", note: "Selected projects across commercial, residential, and complex occupied sites.", code: "N / 03", tone: "projects" },
  Contact: { icon: MessagesSquare, tag: "PRE-BUILD CONVERSATION", headline: "Start with a practical question.", note: "We will point you toward the clearest next step for your project.", code: "N / 04", tone: "contact" },
  "Request a quote": { icon: HardHat, tag: "NEW PROJECT INTAKE", headline: "Start with the facts on site.", note: "Share the scope and our preconstruction team will follow up directly.", code: "N / 05", tone: "quote" },
};

export default function PageHero({ section, title, copy }: { section: keyof typeof signals; title: string; copy: string }) {
  const signal = signals[section]; const Icon = signal.icon;
  return <section className="page-hero"><div className="page-hero-grid" aria-hidden="true"><i/><i/><i/></div><div className="container page-hero-copy"><div className="breadcrumbs"><Link href="/">Home</Link><ChevronRight size={13}/><span>{section}</span></div><span className="section-code">{section}</span><h1>{title}</h1><p>{copy}</p><Link href="/quote" className="button button-amber">Start a conversation <ArrowUpRight size={18}/></Link></div><aside className={`site-signal ${signal.tone}`}><div><Icon size={20}/><span>{signal.tag}</span></div><h2>{signal.headline}</h2><p>{signal.note}</p><footer><b>{signal.code}</b><i/><i/><i/><small>NORTHLINE BUILD CO.</small></footer></aside><div className="masthead-ribbon"><span className="notch">↗</span><b>{signal.code}</b><i/><span>{signal.tag}</span><i/><span>{signal.note}</span></div></section>;
}
