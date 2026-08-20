/**
 * Northline Build Co. design reminder: Forge & Form — the logo is an amber-notched structural beam mark, never a generic house icon.
 */
import { Link } from "wouter";

export const LOGO_URL = "/manus-storage/northline-mark_445e2ace.png";

export default function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return <Link href="/" className={`northline-brand ${inverted ? "is-inverted" : ""}`} aria-label="Northline Build Co. home"><img src={LOGO_URL} alt="Northline structural beam mark"/><span><strong>NORTHLINE</strong><small>BUILD CO.</small></span></Link>;
}
