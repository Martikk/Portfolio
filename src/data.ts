import Plenum from './assets/img/Plenum.webp';
import AlliedSite from './assets/img/AlliedSite.webp';
import Held from './assets/img/Held.webp';
import NCCG from './assets/img/NCCG.webp';

export const EMAIL = 'alex@martishyn.ca';
export const RESUME = `${process.env.PUBLIC_URL}/Alex-Martishyn-Technical-Project-Manager.pdf`;

export const socials = [
    { name: 'GitHub', href: 'https://github.com/Martikk', icon: 'github' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/martishyn/', icon: 'linkedin' },
    { name: 'Telegram', href: 'https://t.me/alexinis', icon: 'telegram' },
] as const;

export const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
    { id: 'stack', label: 'Stack' },
    { id: 'contact', label: 'Contact' },
] as const;

/*
  Sources: LinkedIn (Nov 2026), Alex's own CV and 2024–2026 project list,
  LinkedIn Learning certificates, GitHub. Unsourced percentage claims are
  deliberately left out. Per-project dollar values stay off the site; only the
  combined figure from the project list is used.
*/

/* ---------- Experience ---------- */

export type Role = {
    period: string;
    title: string;
    org: string;
    place: string;
    summary: string;
    tags: string[];
};

export const experience: Role[] = [
    {
        period: '2024 — Now',
        title: 'Project Manager & Estimator, Mechanical',
        org: 'Allied Plumbing, Heating & Air Conditioning',
        place: 'Burnaby, BC',
        summary:
            'Estimate and run institutional HVAC retrofits — boiler plants, chillers, heat pump conversions and DDC controls — mostly in occupied schools and campus buildings: 8 projects, about $3.3M combined, for SD 40, SD 43, SD 48, Capilano University, Collingwood School and ICBC. I also built and run the company’s website, alliedplumbing.ca.',
        tags: ['Public tenders', 'Estimating', 'Procurement', 'RFIs & submittals', 'Change orders', 'Procore'],
    },
    {
        period: '2022 — 2024',
        title: 'Project Manager',
        org: 'Lionhead Mechanical',
        place: 'Vancouver, BC',
        summary:
            'Ran concurrent plumbing and HVAC projects from tender award to completion — institutional, residential and tenant improvements — and prepared takeoffs, scope sheets and bids for projects up to $1.2M. Scheduled with Last Planner pull planning.',
        tags: ['Takeoffs & bids', 'Last Planner', 'Site quality & safety'],
    },
    {
        period: '2019 — 2022',
        title: 'Project Manager',
        org: 'Fourmeta',
        place: 'London, UK',
        summary:
            'Ran growth projects and client delivery for B2B services: discovery calls, requirements and success criteria, tailored proposals and scopes, CRM pipeline, and clean hand-offs from sales to delivery.',
        tags: ['Discovery', 'Proposals & scoping', 'CRM'],
    },
    {
        period: '2016 — 2019',
        title: 'Project Manager',
        org: 'ANODA — web & mobile development agency',
        place: 'New York · remote',
        summary:
            'Took 40+ web and mobile projects from first client call to release, including work with 17 early-stage startups. Led cross-functional teams on scope, budget and timelines.',
        tags: ['Web & mobile', 'Startups', 'Full lifecycle'],
    },
    {
        period: '2008 — 2016',
        title: 'Plumber',
        org: 'Bioprom',
        place: 'Kharkiv, Ukraine',
        summary:
            'Installation, service and repair on residential and commercial jobs. Eight years on the tools — it’s why I know how buildings, and the people who build them, actually work.',
        tags: ['Field experience'],
    },
];

export const education = [
    { year: 'In progress', title: 'Plumber Red Seal — trade challenge', org: 'SkilledTradesBC' },
    { year: '2025', title: 'Procore Construction Management Professional Certificate', org: 'LinkedIn Learning' },
    {
        year: '2025',
        title: 'Construction Management: Foundations · Planning & Scheduling · Managing Risk',
        org: 'LinkedIn Learning (PMI REP)',
    },
    { year: '2025', title: 'Project Management Foundations', org: 'LinkedIn Learning (PMI REP)' },
    { year: '2024', title: 'Diploma, Web Development', org: 'BrainStation, Vancouver' },
    { year: '2022', title: 'IT Project Manager program', org: 'IAMPM' },
    { year: '2008', title: 'Radio Technician', org: 'Kharkiv Engineering College' },
];

/* ---------- Projects ---------- */

export type Project = {
    title: string;
    kind: string;
    year: string;
    description: string;
    tags: string[];
    live: string;
    liveLabel: string;
    github?: string;
    image: string;
    alt: string;
};

export const projects: Project[] = [
    {
        title: 'Plenum',
        kind: 'Field-service software for HVAC & plumbing contractors',
        year: '2026',
        description:
            'Dispatch, quotes, work orders, invoicing and a customer portal, designed from the workflow of a working BC mechanical contractor. Role-based workspaces, drag-and-drop dispatch, estimate-vs-actual margin on every job, and progress billing with 10% holdback per the BC Builders Lien Act.',
        tags: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind 4', 'Zustand', 'Netlify'],
        live: 'https://plenum-fsm.netlify.app/',
        liveLabel: 'live demo',
        github: 'https://github.com/Martikk/plenum',
        image: Plenum,
        alt: 'Plenum Today dashboard for a dispatcher',
    },
    {
        title: 'alliedplumbing.ca',
        kind: 'Production website for a BC mechanical contractor',
        year: '2025',
        description:
            'The company’s main channel for quote requests, emergency calls and hiring. 42 prerendered routes, a lead-capture pipeline with server-side file checks, consent-gated analytics, PageSpeed mobile 95, and an automated check of every live route on release.',
        tags: ['React 19', 'TypeScript', 'SSR prerender', 'Apps Script', 'AWS Amplify'],
        live: 'https://www.alliedplumbing.ca/',
        liveLabel: 'live site',
        github: 'https://github.com/Martikk/AlliedPlumbing',
        image: AlliedSite,
        alt: 'Allied Plumbing home page',
    },
    {
        title: 'Held',
        kind: 'Cycling training software',
        year: '2026',
        description:
            'Plan structured workouts from CP or FTP, import rides from .fit, .tcx, .gpx and intervals.icu, compare planned intervals with recorded power and heart rate, and track power profile and training load. Installable, English and Russian, invite-only.',
        tags: ['Next.js 16', 'React 19', 'PostgreSQL', 'Tailwind 4', 'PWA'],
        live: 'https://he1d.vercel.app/welcome',
        liveLabel: 'live app',
        image: Held,
        alt: 'Held Today dashboard with a scheduled workout',
    },
    {
        title: 'NCCG',
        kind: 'Website for a construction-industry consultancy',
        year: '2025',
        description:
            'Calm, story-led brand site for Nostra Cura Consulting Group, prerendered for SEO, with contact forms delivered through a serverless function — origin check, honeypot, idempotency keys and rate limiting, no secrets in the bundle.',
        tags: ['React 19', 'Tailwind 4', 'Netlify Functions', 'Resend'],
        live: 'https://nccg.ca/',
        liveLabel: 'live site',
        github: 'https://github.com/Martikk/nostra-cura',
        image: NCCG,
        alt: 'NCCG home page',
    },
];

/* ---------- Stack ---------- */

export const stack = [
    {
        title: 'Frontend',
        items: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Zustand', 'SSR / prerendering'],
    },
    {
        title: 'Backend & data',
        items: ['Node.js', 'Express', 'PostgreSQL', 'MySQL', 'Serverless functions', 'Google Apps Script', 'REST APIs'],
    },
    {
        title: 'Shipping & AI',
        items: ['Claude Code', 'Netlify', 'Vercel', 'AWS Amplify', 'Git', 'Figma'],
    },
    {
        title: 'Construction delivery',
        items: ['Estimating & takeoffs', 'Public tenders', 'Procore', 'MS Project', 'RFIs & submittals', 'Change orders', 'Closeout & O&M'],
    },
];
