import React from 'react';
import styled from 'styled-components';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { Reveal, Section, Tag, TagList } from '../components/ui';
import { projects } from '../data';
import { hover } from '../styles/Theme.styled';

export const Projects = () => (
    <Section id="work" label="Work">
        <List>
            {projects.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 70}>
                    <Card>
                        <Thumb>
                            <img src={p.image} alt={p.alt} loading="lazy" decoding="async" />
                        </Thumb>
                        <Body>
                            <Year>{p.year}</Year>
                            <h3>
                                {/* The title link stretches over the whole card (see ::after). */}
                                <CardLink href={p.live} target="_blank" rel="noreferrer">
                                    {p.title}
                                    <FiArrowUpRight aria-hidden />
                                    <span className="visually-hidden"> (opens {p.liveLabel})</span>
                                </CardLink>
                            </h3>
                            <p>{p.description}</p>
                            <TagList aria-label="Tech stack">
                                {p.tags.map(t => (
                                    <Tag key={t}>{t}</Tag>
                                ))}
                            </TagList>
                            <Source href={p.github} target="_blank" rel="noreferrer">
                                <FiGithub aria-hidden /> Source
                            </Source>
                        </Body>
                    </Card>
                </Reveal>
            ))}
        </List>

        <Archive href="https://github.com/Martikk?tab=repositories" target="_blank" rel="noreferrer">
            All repositories on GitHub <FiArrowUpRight aria-hidden />
        </Archive>
    </Section>
);

const Card = styled.article`
    position: relative;
    display: grid;
    gap: 16px;
    padding: 20px;
    margin-inline: -20px;
    border-radius: 12px;
    transition:
        background-color 200ms ease,
        opacity 200ms ease;

    @media (min-width: 560px) {
        grid-template-columns: 160px 1fr;
        gap: 24px;
    }

    ${hover} {
        &:hover {
            background: ${p => p.theme.colors.raised};
        }
    }
`;

/* Hovering one card quiets the others, so the eye goes where the pointer is. */
const List = styled.ol`
    display: flex;
    flex-direction: column;
    gap: 8px;

    ${hover} {
        &:hover ${Card}:not(:hover) {
            opacity: 0.5;
        }
    }
`;

const Thumb = styled.div`
    aspect-ratio: 16 / 10;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid ${p => p.theme.colors.line};
    background: ${p => p.theme.colors.surface};

    @media (min-width: 560px) {
        margin-top: 6px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    h3 {
        font-size: 1.0625rem;
        font-weight: 600;
        letter-spacing: -0.01em;
    }

    p {
        font-size: 0.9375rem;
    }
`;

const Year = styled.span`
    font-family: ${p => p.theme.font.mono};
    font-size: 0.75rem;
    color: ${p => p.theme.colors.faint};
`;

const CardLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: ${p => p.theme.colors.text};
    transition: color 150ms ease;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 12px;
    }

    svg {
        transition: transform 200ms ${p => p.theme.ease.out};
    }

    ${hover} {
        ${Card}:hover & {
            color: ${p => p.theme.colors.accent};
        }
        ${Card}:hover & svg {
            transform: translate(2px, -2px);
        }
    }
`;

const Source = styled.a`
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 2px;
    color: ${p => p.theme.colors.muted};
    font-size: 0.875rem;
    font-weight: 500;
    transition: color 150ms ease;

    ${hover} {
        &:hover { color: ${p => p.theme.colors.text}; }
    }
`;

const Archive = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 32px;
    color: ${p => p.theme.colors.text};
    font-weight: 500;

    svg {
        transition: transform 200ms ${p => p.theme.ease.out};
    }

    ${hover} {
        &:hover svg { transform: translate(2px, -2px); }
    }
`;
