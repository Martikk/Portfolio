import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IconLink, SocialIcon } from '../components/ui';
import { FiDownload } from 'react-icons/fi';
import { RESUME, sections, socials } from '../data';
import { desktop, hover } from '../styles/Theme.styled';

const useActiveSection = () => {
    const [active, setActive] = useState<string>(sections[0].id);

    useEffect(() => {
        let frame = 0;
        // The current section is the last one whose top has passed 40% of the
        // viewport. Gaps between sections can't leave it stale, and at the very
        // bottom of the page the last section always wins.
        const update = () => {
            frame = 0;
            const line = window.innerHeight * 0.4;
            const atBottom =
                window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
            let current: string = sections[0].id;
            for (const s of sections) {
                const el = document.getElementById(s.id);
                if (el && el.getBoundingClientRect().top <= line) current = s.id;
            }
            if (atBottom) current = sections[sections.length - 1].id;
            setActive(current);
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    return active;
};

export const Sidebar = ({ onOpenCommand }: { onOpenCommand: () => void }) => {
    const active = useActiveSection();
    const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);

    return (
        <Aside>
            <div>
                <Name>
                    <a href="#about">Alex Martishyn</a>
                </Name>
                <Role>Project manager who builds software</Role>
                <Lede>
                    Ten years running web and construction projects. Now I also build the tools — with React,
                    Node.js and AI.
                </Lede>

                <Resume href={RESUME} target="_blank" rel="noreferrer">
                    <FiDownload aria-hidden /> Résumé (PDF)
                </Resume>

                <Status>
                    <Pulse aria-hidden />
                    Open to construction-tech & technical PM roles
                </Status>

                <Nav aria-label="Sections">
                    <ul>
                        {sections.map(s => (
                            <li key={s.id}>
                                <NavLink href={`#${s.id}`} aria-current={active === s.id ? 'true' : undefined}>
                                    <Indicator aria-hidden />
                                    {s.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </Nav>
            </div>

            <Bottom>
                <Socials>
                    {socials.map(s => (
                        <li key={s.name}>
                            <IconLink href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
                                <SocialIcon icon={s.icon} />
                            </IconLink>
                        </li>
                    ))}
                </Socials>
                <CommandHint type="button" onClick={onOpenCommand} aria-label="Open command menu">
                    <kbd>{isMac ? '⌘' : 'Ctrl'}</kbd>
                    <kbd>K</kbd>
                    <span>quick actions</span>
                </CommandHint>
            </Bottom>
        </Aside>
    );
};

const Aside = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 48px;
    padding-block: 64px 48px;

    ${desktop} {
        position: sticky;
        top: 0;
        height: 100vh;
        max-height: 100vh;
        padding-block: 96px;
    }
`;

const Name = styled.h1`
    font-size: clamp(2.5rem, 6vw, 3.25rem);
    font-weight: 700;
    letter-spacing: -0.035em;
`;

const Role = styled.p`
    margin-top: 12px;
    color: ${p => p.theme.colors.text};
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: -0.01em;
`;

const Lede = styled.p`
    max-width: 34ch;
    margin-top: 16px;
`;

const Resume = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    height: 40px;
    margin-top: 24px;
    padding: 0 16px;
    border: 1px solid ${p => p.theme.colors.line};
    border-radius: 999px;
    color: ${p => p.theme.colors.text};
    font-size: 0.875rem;
    font-weight: 500;
    -webkit-tap-highlight-color: transparent;
    transition:
        border-color 150ms ease,
        transform 160ms ${p => p.theme.ease.out};

    ${hover} {
        &:hover { border-color: ${p => p.theme.colors.accent}; }
    }
    &:active { transform: scale(0.97); }
`;

const Status = styled.p`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    font-family: ${p => p.theme.font.mono};
    font-size: 0.8125rem;
`;

const Pulse = styled.span`
    position: relative;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${p => p.theme.colors.accent};

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: inherit;
        animation: ping 2.4s ${p => p.theme.ease.out} infinite;
    }

    @keyframes ping {
        0% { transform: scale(1); opacity: 0.6; }
        70%, 100% { transform: scale(2.6); opacity: 0; }
    }

    @media (prefers-reduced-motion: reduce) {
        &::after { animation: none; }
    }
`;

const Nav = styled.nav`
    display: none;
    margin-top: 64px;

    ${desktop} {
        display: block;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
`;

const Indicator = styled.span`
    width: 64px;
    height: 1px;
    background: currentColor;
    transform-origin: left center;
    transform: scaleX(0.5);
    transition: transform 250ms ${p => p.theme.ease.out};
`;

const NavLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 16px;
    padding-block: 10px;
    color: ${p => p.theme.colors.faint};
    font-family: ${p => p.theme.font.mono};
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    transition: color 150ms ease;

    ${hover} {
        &:hover { color: ${p => p.theme.colors.text}; }
        &:hover ${Indicator} { transform: scaleX(1); }
    }

    &[aria-current='true'] {
        color: ${p => p.theme.colors.text};
    }
    &[aria-current='true'] ${Indicator} {
        transform: scaleX(1);
    }
`;

const Bottom = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`;

const Socials = styled.ul`
    display: flex;
    gap: 4px;
    margin-left: -10px;
`;

const CommandHint = styled.button`
    display: none;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border: 1px solid ${p => p.theme.colors.line};
    border-radius: 8px;
    background: none;
    color: ${p => p.theme.colors.faint};
    font-family: ${p => p.theme.font.mono};
    font-size: 0.75rem;
    cursor: pointer;
    transition:
        color 150ms ease,
        border-color 150ms ease,
        transform 160ms ${p => p.theme.ease.out};

    ${hover} {
        display: inline-flex;
        &:hover {
            color: ${p => p.theme.colors.text};
            border-color: ${p => p.theme.colors.faint};
        }
    }
    &:active { transform: scale(0.97); }

    kbd {
        min-width: 20px;
        padding: 1px 5px;
        border-radius: 4px;
        background: ${p => p.theme.colors.raised};
        font-family: inherit;
        text-align: center;
    }
    span { margin-left: 4px; }
`;
