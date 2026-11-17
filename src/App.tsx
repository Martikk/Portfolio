import React from 'react';
import { Header } from './sections/Header';
import { SocialRail } from './sections/SocialRail';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
    return (
        <>
            <SkipLink href="#works">Skip to projects</SkipLink>
            <Header />
            <SocialRail />
            <main>
                <Hero />
                <Projects />
                <Skills />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

const SkipLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
        href={href}
        className="visually-hidden"
        onFocus={e => e.currentTarget.classList.remove('visually-hidden')}
        onBlur={e => e.currentTarget.classList.add('visually-hidden')}
        style={{ position: 'fixed', top: 8, left: 8, zIndex: 100, padding: '8px 12px', background: '#C778DD', color: '#282C33' }}
    >
        {children}
    </a>
);

export default App;
