import DreamDate from './assets/img/DreamDate.webp';
import Video from './assets/img/Video.webp';
import Todo from './assets/img/Todo.webp';

export const EMAIL = 'alex@martishyn.ca';

export const socials = [
    { name: 'GitHub', href: 'https://github.com/Martikk', icon: 'github' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/martishyn/', icon: 'linkedin' },
    { name: 'Telegram', href: 'https://t.me/alexinis', icon: 'telegram' },
] as const;

export const navItems = [
    { name: 'home', href: '#home' },
    { name: 'works', href: '#works' },
    { name: 'skills', href: '#skills' },
    { name: 'about-me', href: '#about-me' },
    { name: 'contacts', href: '#contacts' },
];

export type Project = {
    title: string;
    description: string;
    tags: string[];
    live: string;
    github: string;
    image: string;
    alt: string;
};

export const projects: Project[] = [
    {
        title: 'Dreamy Dates',
        description:
            'Booking platform for curated romantic experiences — browse dates, leave reviews and pay with Stripe.',
        tags: ['React', 'Redux', 'React Router', 'SCSS', 'Stripe'],
        live: 'https://dreamydates.ca',
        github: 'https://github.com/Martikk/DreamyDates',
        image: DreamDate,
        alt: 'Dreamy Dates home page',
    },
    {
        title: 'BrainFlix',
        description:
            'Video sharing platform: watch, comment on and upload videos, backed by a REST API.',
        tags: ['React', 'React Router', 'SCSS', 'Vite', 'Axios'],
        live: 'https://master.d3hz3i03c78cd3.amplifyapp.com/',
        github: 'https://github.com/Martikk/BrainFlix',
        image: Video,
        alt: 'BrainFlix video page',
    },
    {
        title: 'To-Do List',
        description:
            'Task manager with categories, priorities, due dates and filtering, deployed on AWS Amplify.',
        tags: ['React', 'Axios', 'CSS', 'AWS Amplify'],
        live: 'https://main.d3sufhpecf7yrr.amplifyapp.com/',
        github: 'https://github.com/Martikk/todo-frontend',
        image: Todo,
        alt: 'To-Do List app with task form and filters',
    },
];

export const skills = [
    { title: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Lua'] },
    { title: 'Frontend', items: ['React', 'Redux', 'Vue', 'HTML', 'CSS', 'SCSS'] },
    { title: 'Backend', items: ['Node.js', 'Express', 'Flask', 'REST', 'EJS', 'Jinja'] },
    { title: 'Databases', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite'] },
    { title: 'Tools', items: ['Git', 'AWS', 'Linux', 'Figma', 'VS Code', 'Neovim'] },
    { title: 'Other', items: ['Discord.js', 'Disnake', 'Photoshop'] },
];
