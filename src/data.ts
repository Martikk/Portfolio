import DreamDate from './assets/img/DreamDate.webp';
import Video from './assets/img/Video.webp';
import InStock from './assets/img/InStock.webp';

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

/* ---------- Experience (source: LinkedIn, Nov 2026) ---------- */

export type Role = {
    period: string;
    title: string;
    org: string;
    orgUrl?: string;
    place: string;
    summary: string;
    tags: string[];
};

export const experience: Role[] = [
    {
        period: '2024 — Now',
        title: 'Project Manager, Mechanical (HVAC & Plumbing)',
        org: 'Allied Plumbing, Heating & Air Conditioning',
        place: 'Vancouver',
        summary:
            'Run institutional HVAC and plumbing projects from estimate to closeout — boiler plants, heat pumps and DDC controls upgrades for school districts, Capilano University and public-sector owners, often in occupied buildings.',
        tags: ['Public tenders', 'Estimating', 'RFIs & submittals', 'Change orders', 'Closeout & O&M'],
    },
    {
        period: '2022 — 2024',
        title: 'Construction Project Manager',
        org: 'Lionhead Mechanical',
        place: 'Vancouver',
        summary:
            'Managed plumbing and mechanical projects from preconstruction to closeout. Scheduled with lean pull planning and set up a central document system for drawings and project files.',
        tags: ['Last Planner System', 'Scheduling', 'Quality & safety'],
    },
    {
        period: '2019 — 2022',
        title: 'Project Manager',
        org: 'Fourmeta Agency',
        place: 'Vancouver',
        summary:
            'Led client web projects for a digital agency and built the tracking and reporting that gave clients and the team one shared view of status, scope and risk.',
        tags: ['Agile', 'Client delivery', 'Reporting'],
    },
    {
        period: '2016 — 2019',
        title: 'Project Manager',
        org: 'ANODA — web & mobile development agency',
        place: 'New York · remote',
        summary:
            'Took 40+ web and mobile projects from first client call to release, including work with 17 early-stage startups. Worked daily with designers and engineers on scope, estimates and timelines.',
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

/* ---------- Projects ---------- */

export type Project = {
    title: string;
    year: string;
    description: string;
    tags: string[];
    live: string;
    liveLabel: string;
    github: string;
    image: string;
    alt: string;
};

export const projects: Project[] = [
    {
        title: 'Dreamy Dates',
        year: '2024',
        description:
            'Booking platform for curated date experiences, with its own Node.js API. Couples browse ideas, leave reviews and pay with Stripe; confirmations go out through SendGrid.',
        tags: ['React', 'Redux', 'Node.js', 'Express', 'Stripe', 'SendGrid'],
        live: 'https://dreamydates.ca',
        liveLabel: 'live site',
        github: 'https://github.com/Martikk/DreamyDates',
        image: DreamDate,
        alt: 'Dreamy Dates home page',
    },
    {
        title: 'InStock',
        year: '2024',
        description:
            'Warehouse and inventory management: a React app on top of a REST API with MySQL, Knex migrations and seed data, plus validation, search and sorting.',
        tags: ['React', 'Node.js', 'Express', 'MySQL', 'Knex'],
        live: 'https://www.youtube.com/watch?v=_kAHgS-aRPc',
        liveLabel: 'video demo',
        github: 'https://github.com/Martikk/warehouse-backend',
        image: InStock,
        alt: 'InStock inventory table in MySQL',
    },
    {
        title: 'BrainFlix',
        year: '2024',
        description:
            'Video sharing app: watch, comment on and upload videos, with a separate Express API for videos and comments.',
        tags: ['React', 'React Router', 'Vite', 'SCSS', 'Express'],
        live: 'https://master.d3hz3i03c78cd3.amplifyapp.com/',
        liveLabel: 'live site',
        github: 'https://github.com/Martikk/BrainFlix',
        image: Video,
        alt: 'BrainFlix video page',
    },
];

/* ---------- Stack: only what GitHub or LinkedIn can back up ---------- */

export const stack = [
    { title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'SCSS', 'Redux'] },
    { title: 'Backend & data', items: ['Node.js', 'Express', 'REST APIs', 'MySQL', 'Knex', 'Sequelize'] },
    { title: 'AI & tooling', items: ['Claude Code', 'Git', 'Vercel', 'AWS Amplify', 'Figma'] },
    {
        title: 'Project delivery',
        items: ['Estimating', 'Public tenders', 'Scheduling', 'RFIs & submittals', 'Change orders', 'Closeout'],
    },
];
