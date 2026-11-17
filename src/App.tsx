import React, { useState } from 'react';
import styled from 'styled-components';
import { Spotlight } from './components/ui';
import { CommandMenu } from './components/CommandMenu';
import { Sidebar } from './sections/Sidebar';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';
import { desktop } from './styles/Theme.styled';

function App() {
    const [commandOpen, setCommandOpen] = useState(false);

    return (
        <>
            <Spotlight />
            <SkipLink href="#work">Skip to work</SkipLink>
            <Shell>
                <Sidebar onOpenCommand={() => setCommandOpen(true)} />
                <Main>
                    <About />
                    <Projects />
                    <Skills />
                    <Contact />
                </Main>
            </Shell>
            <CommandMenu open={commandOpen} setOpen={setCommandOpen} />
        </>
    );
}

const Shell = styled.div`
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin-inline: auto;
    padding-inline: 24px;

    ${desktop} {
        display: grid;
        grid-template-columns: 1fr 1.15fr;
        gap: 64px;
        padding-inline: 48px;
    }
`;

const Main = styled.main`
    padding-bottom: 48px;

    ${desktop} {
        padding-block: 96px;
    }
`;

const SkipLink = styled.a`
    position: fixed;
    top: 12px;
    left: 12px;
    z-index: 100;
    padding: 8px 14px;
    border-radius: 8px;
    background: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.bg};
    font-weight: 500;
    transform: translateY(-150%);

    &:focus-visible { transform: none; }
`;

export default App;
