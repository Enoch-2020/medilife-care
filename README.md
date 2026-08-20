# MediLife Care Website

MediLife Care is a responsive, multi-page healthcare website inspired by the supplied Pinterest reference. The visual system is an original **Clinical Horizon** interpretation: light clinical surfaces, MediLife Blue calls to action, editorial typography, patient-guiding content, care ribbons, and professional clinician imagery.

## Included Pages

| Route | Purpose |
| --- | --- |
| `/` | Home page with hero, care services, clinical team, and appointment calls to action. |
| `/about` | About MediLife, care principles, and approach. |
| `/services` | Service directory and diagnostics feature. |
| `/doctors` | Clinician directory with profiles and appointment links. |
| `/appointment` | Interactive appointment-request form with confirmation state. |
| `/contact` | Support contacts, interactive message form, directions, and hours. |

## Technology

The website is written in **HTML-rendered React components, CSS, and JavaScript**, with the **Bootstrap 5.3.3 CSS and JavaScript bundle** included through the project HTML template. It also uses Lucide icons for accessible interface icons. The project is structured as a Vite static frontend application.

## Run Locally

Install a recent Node.js version (18 or later is recommended), then run:

```bash
pnpm install
pnpm dev
```

Open the local address printed in the terminal. To create a production build, run:

```bash
pnpm build
pnpm start
```

## Notes

Appointment and contact forms are UI demonstrations. They validate required fields and show a confirmation state locally; no personal information is sent to a server. Emergency concerns should always be directed to local emergency services.
