import DreamDate from './assets/img/DreamDate.webp';
import Video from './assets/img/Video.webp';
import Todo from './assets/img/Todo.webp';

export const EMAIL = 'alex@martishyn.ca';

export const socials = [
    { name: 'GitHub', href: 'https://github.com/Martikk', icon: 'github' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/martishyn/', icon: 'linkedin' },
    { name: 'Telegram', href: 'https://t.me/alexinis', icon: 'telegram' },
] as const;

export const sections = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'stack', label: 'Stack' },
    { id: 'contact', label: 'Contact' },
] as const;

export type Project = {
    title: string;
    year: string;
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
        year: '2024',
        description:
            'Booking platform for curated romantic experiences. Couples browse date ideas, leave reviews and check out with Stripe; transactional email goes out through SendGrid.',
        tags: ['React', 'Redux', 'React Router', 'SCSS', 'Stripe', 'SendGrid'],
        live: 'https://dreamydates.ca',
        github: 'https://github.com/Martikk/DreamyDates',
        image: DreamDate,
        alt: 'Dreamy Dates home page',
    },
    {
        title: 'BrainFlix',
        year: '2024',
        description:
            'Video sharing platform: watch videos, read and post comments, and upload new content with drag-and-drop, all backed by a REST API.',
        tags: ['React', 'React Router', 'Vite', 'SCSS', 'Axios'],
        live: 'https://master.d3hz3i03c78cd3.amplifyapp.com/',
        github: 'https://github.com/Martikk/BrainFlix',
        image: Video,
        alt: 'BrainFlix video page',
    },
    {
        title: 'To-Do List',
        year: '2024',
        description:
            'Task manager with categories, priorities, due dates and filtering. Frontend talks to its own API and is deployed on AWS Amplify.',
        tags: ['React', 'Axios', 'CSS', 'AWS Amplify'],
        live: 'https://main.d3sufhpecf7yrr.amplifyapp.com/',
        github: 'https://github.com/Martikk/todo-frontend',
        image: Todo,
        alt: 'To-Do List app with task form and filters',
    },
];

export const stack = [
    { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Redux', 'Vue', 'HTML', 'CSS', 'SCSS'] },
    { title: 'Backend', items: ['Node.js', 'Express', 'REST', 'Python', 'Flask', 'EJS', 'Jinja'] },
    { title: 'Data', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite'] },
    { title: 'Tooling', items: ['Git', 'AWS', 'Linux', 'Vite', 'Figma', 'Photoshop', 'Neovim'] },
];
