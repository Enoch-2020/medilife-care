/**
 * MediLife Care design reminder: Clinical Horizon — even exception states remain calm, clear, and oriented toward a useful next step.
 */
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function NotFound() { return <section className="not-found"><span className="eyebrow">PAGE NOT FOUND</span><h1>Let’s get you back to care.</h1><p>The page you are looking for is no longer here or may have moved.</p><Link href="/" className="btn btn-primary">Return home <ArrowRight size={18}/></Link></section>; }
