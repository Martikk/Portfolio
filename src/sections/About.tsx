import React from 'react';
import styled from 'styled-components';
import { Reveal, Section, TextLink } from '../components/ui';

export const About = () => (
    <Section id="about" label="About">
        <Copy>
            <Reveal as="p">
                I estimate and manage <Strong>mechanical construction projects</Strong> — boiler plants, chillers,
                heat pump conversions and controls upgrades for school districts, Capilano University and other
                public-sector owners around Vancouver. Before that I spent six years running{' '}
                <Strong>web and mobile projects</Strong> at development agencies, and eight years as a plumber.
            </Reveal>
            <Reveal as="p" delay={60}>
                I also build the software. My employer’s website,{' '}
                <TextLink href="https://www.alliedplumbing.ca/" target="_blank" rel="noreferrer">
                    alliedplumbing.ca
                </TextLink>
                , is mine end to end and brings in real quote requests. I built{' '}
                <TextLink href="https://plenum-fsm.netlify.app/" target="_blank" rel="noreferrer">
                    Plenum
                </TextLink>
                , field-service software shaped by how a BC mechanical contractor actually dispatches, prices and
                bills work — and <Strong>Held</Strong>, a cycling training app with a real power model behind it.
            </Reveal>
            <Reveal as="p" delay={120}>
                I work in <Strong>React, Next.js and TypeScript</Strong> with AI coding tools like Claude Code
                every day: they let one person ship what used to take a team, and my job is knowing what to build,
                checking what they write, and getting it in front of real users. I’m looking for construction-tech,
                technical project management and implementation roles where both halves count.
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
