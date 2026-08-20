/**
 * MediLife Care design reminder: Clinical Horizon — clear pathways, precise service language, and people-first care information.
 */
import { Activity, Baby, BrainCircuit, HeartPulse, ScanLine, Stethoscope } from "lucide-react";

export const services = [
  { icon: HeartPulse, name: "Cardiology", short: "Heart care that starts with listening.", detail: "Prevention, diagnostics, and personalized cardiac treatment coordinated around your life." },
  { icon: BrainCircuit, name: "Neurology", short: "Specialist support for the nervous system.", detail: "Thoughtful assessment and ongoing care for conditions affecting the brain, spine, and nerves." },
  { icon: ScanLine, name: "Diagnostics", short: "Answers with less waiting.", detail: "Imaging, lab work, and screenings delivered through a comfortable, connected experience." },
  { icon: Baby, name: "Women’s health", short: "Care that changes with you.", detail: "Preventive, reproductive, and menopause care from clinicians who take the whole picture seriously." },
  { icon: Activity, name: "Orthopedics", short: "Move with more confidence.", detail: "Sports injury, joint, and mobility care that helps you return to the things you love." },
  { icon: Stethoscope, name: "Primary care", short: "Your dependable first call.", detail: "Everyday preventive care and long-term health guidance for individuals and families." },
];

export const doctors = [
  { initials: "AR", name: "Dr. Amina Rahman", specialty: "Cardiology", focus: "Preventive heart health & imaging", tone: "blue", portrait: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=82" },
  { initials: "JW", name: "Dr. Jordan Wells", specialty: "Primary care", focus: "Family medicine & care planning", tone: "sand", portrait: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=82" },
  { initials: "MC", name: "Dr. Mateo Chen", specialty: "Neurology", focus: "Headache, movement & memory care", tone: "teal", portrait: "/manus-storage/medilife-dr-mateo_e39e82f1.jpg" },
  { initials: "NS", name: "Dr. Nia Shah", specialty: "Women’s health", focus: "Lifelong gynecologic care", tone: "lavender", portrait: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=900&q=82" },
];
