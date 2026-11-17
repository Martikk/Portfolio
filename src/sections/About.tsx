import React from 'react';
import styled from 'styled-components';
import { Reveal, Section } from '../components/ui';

export const About = () => (
    <Section id="about" label="About">
        <Copy>
            <Reveal as="p">
                I’ve spent ten years running projects — first <Strong>web and mobile apps</Strong> at two
                development agencies, now <Strong>mechanical construction</Strong> for school districts,
                universities and public-sector owners around Vancouver. Before that I was a plumber for eight years,
                so I know the work from the tools up.
            </Reveal>
            <Reveal as="p" delay={60}>
                In 2024 I started building software myself: <Strong>React and TypeScript</Strong> on the front
                end, <Strong>Node.js, Express and SQL</Strong> behind it. Today I build with AI coding tools like
                Claude Code every day — they let one person ship what used to take a team, and my job is knowing
                what to build, checking what they write, and getting it in front of real users.
            </Reveal>
            <Reveal as="p" delay={120}>
                That’s the combination I bring: a project manager who can read a spec, run a schedule and talk to a
                site super — and also open an editor and build the tool. I’m most interested in software for
                construction and the trades, where I already know the problems first-hand.
            </Reveal>
        </Copy>
    </Section>
);

const Copy = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 62ch;
`;

const Strong = styled.span`
    color: ${p => p.theme.colors.text};
    font-weight: 500;
`;
