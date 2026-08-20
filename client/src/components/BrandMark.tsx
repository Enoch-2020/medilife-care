/**
 * MediLife Care design reminder: Clinical Horizon — a calm, white-and-sapphire healthcare system with precise geometry and human warmth.
 */
import { Link } from "wouter";

const LOGO_URL = "/manus-storage/medilife-pulse-cross_8a70edd2.png";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand-mark" aria-label="MediLife Care home">
      <img src={LOGO_URL} alt="MediLife Care pulse cross" className="brand-logo-image" />
      {!compact && (
        <span className="brand-type">
          <strong>MediLife</strong>
          <small>CARE CENTER</small>
        </span>
      )}
    </Link>
  );
}

export { LOGO_URL };
