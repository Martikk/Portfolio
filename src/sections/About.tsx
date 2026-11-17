import React from 'react';
import styled from 'styled-components';
import { Reveal, Section, TextLink } from '../components/ui';

export const About = () => (
    <Section id="about" label="About">
        <Copy>
            <Reveal as="p">
                I’m a full-stack developer in Vancouver who likes taking an idea from a Figma frame all the way
                to something people can actually use. Most of my work lives in{' '}
                <Strong>React and TypeScript</Strong> on the front end and <Strong>Node.js with Express</Strong>{' '}
                behind it, deployed on <Strong>AWS</Strong>.
            </Reveal>
            <Reveal as="p" delay={60}>
                Lately I’ve been building{' '}
                <TextLink href="https://dreamydates.ca" target="_blank" rel="noreferrer">
                    Dreamy Dates
                </TextLink>
                , a booking platform for couples — bookings, reviews, payments with Stripe and transactional email.
                Before that I shipped a video-sharing app and a task manager, each with its own API.
            </Reveal>
            <Reveal as="p" delay={120}>
                I care about the details people don’t notice but feel: fast loads, interfaces that respond the
                moment you touch them, and layouts that hold up on any screen. Right now I’m going deeper on
                Node.js architecture and testing.
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
