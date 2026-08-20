/** Northline Build Co. design reminder: Forge & Form — errors still guide visitors back to a useful construction path. */
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
export default function NotFound(){return <section className="not-found"><span className="section-code amber">PAGE NOT FOUND</span><h1>This route is<br/>off the plan.</h1><p>Let’s return you to the project board.</p><Link href="/" className="button button-amber">Back to Northline <ArrowUpRight size={18}/></Link></section>}
