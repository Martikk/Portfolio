import React from 'react';
import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';
import heroImage from '../assets/img/hero.webp';
import { Accent, Button, Container, Dots, LogoMark, Reveal, Square } from '../components/ui';

export const Hero = () => (
    <HeroSection id="home">
        <Grid>
            <Copy>
                <Reveal as="h1">
                    Alex Martishyn is a <Accent><NoWrap>full-stack</NoWrap> developer</Accent>
                </Reveal>
                <Reveal as="p" delay={60}>
                    I build responsive web apps where technology meets creativity — React on the front,
                    Node.js on the back.
                </Reveal>
                <Reveal delay={120}>
                    <Actions>
                        <Button href="#contacts">
                            Contact me <FiArrowRight aria-hidden />
                        </Button>
                        <Button href="#works" $variant="ghost">
                            View work
                        </Button>
                    </Actions>
                </Reveal>
            </Copy>

            <Reveal delay={80}>
                <Figure>
                    <Art aria-hidden>
                        <LogoMark size={156} />
                    </Art>
                    <Square $size={120} $top="18%" $left="-4%" />
                    <Photo src={heroImage} alt="Portrait of Alex Martishyn" width={447} height={559} />
                    <Dots $cols={5} $rows={5} $right="-2%" $bottom="22%" />
                    <Status>
                        <StatusDot aria-hidden />
                        <span>
                            Currently working on{' '}
                            <a href="https://github.com/Martikk/DreamyDates" target="_blank" rel="noreferrer">
                                DreamyDates
                            </a>
                        </span>
                    </Status>
                </Figure>
            </Reveal>
        </Grid>

        <Reveal>
            <Quote>
                <blockquote>
                    <p>With great power comes great electricity bill</p>
                </blockquote>
                <cite>— Dr. Who</cite>
            </Quote>
        </Reveal>
    </HeroSection>
);

const NoWrap = styled.span`
    white-space: nowrap;
`;

const HeroSection = styled(Container).attrs({ as: 'section' })`
    padding-top: clamp(24px, 6vw, 64px);
`;

const Grid = styled.div`
    display: grid;
    gap: 48px;
    align-items: center;

    @media (min-width: ${p => p.theme.bp.md}) {
        grid-template-columns: 1.05fr 1fr;
        gap: 32px;
    }
`;

const Copy = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    h1 {
        font-size: clamp(2rem, 5vw, 2.75rem);
        font-weight: 600;
    }

    p {
        max-width: 46ch;
        font-size: 1.0625rem;
    }
`;

const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

const Figure = styled.div`
    position: relative;
    max-width: 460px;
    margin-inline: auto;
    padding-inline: 8%;
`;

const Art = styled.div`
    position: absolute;
    top: 22%;
    left: 4%;
    color: transparent;
    pointer-events: none;

    svg path {
        stroke: ${p => p.theme.colors.primary};
        stroke-width: 0.12;
    }
`;

const Photo = styled.img`
    position: relative;
    width: 100%;
    height: auto;
    aspect-ratio: 447 / 470;
    object-fit: cover;
    object-position: top;
    /* Fade the cut-off edge of the photo into the page instead of a hard line. */
    mask-image: linear-gradient(to bottom, #000 82%, transparent);
    -webkit-mask-image: linear-gradient(to bottom, #000 82%, transparent);
`;

const Status = styled.p`
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: -8px;
    padding: 8px 12px;
    border: 1px solid ${p => p.theme.colors.gray};
    background: ${p => p.theme.colors.backgroundDark};
    font-size: 0.9375rem;

    a {
        color: ${p => p.theme.colors.white};
        font-weight: 600;
        text-underline-offset: 3px;
    }
`;

const StatusDot = styled.span`
    flex-shrink: 0;
    width: 14px;
    height: 14px;
    background: ${p => p.theme.colors.primary};
    border: 1px solid ${p => p.theme.colors.primary};
`;

const Quote = styled.figure`
    position: relative;
    width: fit-content;
    max-width: 100%;
    margin: clamp(64px, 10vw, 112px) auto 0;

    blockquote {
        position: relative;
        padding: 28px 32px;
        border: 1px solid ${p => p.theme.colors.gray};
        color: ${p => p.theme.colors.white};
        font-size: clamp(1rem, 2.4vw, 1.5rem);
        font-weight: 500;

        &::before,
        &::after {
            content: '\\201C';
            position: absolute;
            padding-inline: 8px;
            background: ${p => p.theme.colors.backgroundDark};
            color: ${p => p.theme.colors.gray};
            font-size: 3rem;
            line-height: 1;
        }
        &::before { top: -18px; left: 20px; }
        &::after { content: '\\201D'; bottom: -26px; right: 8px; }
    }

    cite {
        display: block;
        width: fit-content;
        margin: 0 64px 0 auto;
        padding: 12px 16px;
        border: 1px solid ${p => p.theme.colors.gray};
        border-top: none;
        color: ${p => p.theme.colors.white};
        font-style: normal;
    }
`;
