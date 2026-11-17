import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FiArrowUpRight, FiCheck, FiCopy } from 'react-icons/fi';
import { Reveal, Section } from '../components/ui';
import { EMAIL, socials } from '../data';
import { hover } from '../styles/Theme.styled';

export const copyText = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        return false;
    }
};

export const Contact = () => {
    const [copied, setCopied] = useState(false);
    const timer = useRef<number>();

    useEffect(() => () => window.clearTimeout(timer.current), []);

    const onCopy = async () => {
        if (!(await copyText(EMAIL))) {
            window.location.href = `mailto:${EMAIL}`;
            return;
        }
        setCopied(true);
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setCopied(false), 1800);
    };

    return (
        <Section id="contact" label="Contact">
            <Reveal>
                <Heading>Have a project in mind, or a role you think I’d fit?</Heading>
                <Lead>
                    I’m open to full-time roles and freelance work. The fastest way to reach me is email — I usually
                    reply within a day.
                </Lead>

                <Actions>
                    <Primary href={`mailto:${EMAIL}`}>
                        Say hello <FiArrowUpRight aria-hidden />
                    </Primary>
                    <CopyButton type="button" onClick={onCopy} data-copied={copied} aria-label={copied ? 'Email copied' : `Copy ${EMAIL}`}>
                        {/* Two stacked labels crossfade with a touch of blur so the swap reads as one motion. */}
                        <Label data-show={!copied} aria-hidden>
                            <FiCopy /> {EMAIL}
                        </Label>
                        <Label data-show={copied} aria-hidden>
                            <FiCheck /> Copied to clipboard
                        </Label>
                    </CopyButton>
                </Actions>

                <Elsewhere>
                    {socials.map(s => (
                        <li key={s.name}>
                            <a href={s.href} target="_blank" rel="noreferrer">
                                {s.name} <FiArrowUpRight aria-hidden />
                            </a>
                        </li>
                    ))}
                </Elsewhere>
            </Reveal>

            <Footnote>
                Designed and built by Alex Martishyn with React, TypeScript and styled-components. Set in Geist.
                © {new Date().getFullYear()}
            </Footnote>
        </Section>
    );
};

const Heading = styled.p`
    max-width: 22ch;
    color: ${p => p.theme.colors.text};
    font-size: clamp(1.75rem, 4vw, 2.25rem);
    font-weight: 600;
    line-height: 1.15;
    letter-spacing: -0.03em;
    text-wrap: balance;
`;

const Lead = styled.p`
    max-width: 52ch;
    margin-top: 16px;
`;

const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 32px;
`;

const pressable = `
    align-items: center;
    gap: 8px;
    height: 44px;
    padding: 0 18px;
    border-radius: 999px;
    font-weight: 500;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    &:active { transform: scale(0.97); }
`;

const Primary = styled.a`
    display: inline-flex;
    ${pressable}
    background: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.bg};
    transition:
        transform 160ms ${p => p.theme.ease.out},
        background-color 150ms ease;

    svg { transition: transform 200ms ${p => p.theme.ease.out}; }

    ${hover} {
        &:hover { background: #8ff3e1; }
        &:hover svg { transform: translate(2px, -2px); }
    }
`;

const CopyButton = styled.button`
    display: inline-grid;
    ${pressable}
    border: 1px solid ${p => p.theme.colors.line};
    background: none;
    color: ${p => p.theme.colors.text};
    font-family: ${p => p.theme.font.mono};
    font-size: 0.875rem;
    transition:
        transform 160ms ${p => p.theme.ease.out},
        border-color 150ms ease;

    ${hover} {
        &:hover { border-color: ${p => p.theme.colors.faint}; }
    }

    &[data-copied='true'] {
        border-color: ${p => p.theme.colors.accent};
    }
`;

const Label = styled.span`
    grid-area: 1 / 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition:
        opacity 200ms ease,
        filter 200ms ease,
        transform 200ms ${p => p.theme.ease.out};

    &[data-show='false'] {
        opacity: 0;
        filter: blur(4px);
        transform: scale(0.96);
    }

    &:last-child { color: ${p => p.theme.colors.accent}; }

    @media (prefers-reduced-motion: reduce) {
        &[data-show='false'] { filter: none; transform: none; }
    }
`;

const Elsewhere = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px 24px;
    margin-top: 40px;

    a {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: ${p => p.theme.colors.muted};
        font-size: 0.9375rem;
        transition: color 150ms ease;
    }

    ${hover} {
        a:hover { color: ${p => p.theme.colors.text}; }
    }
`;

const Footnote = styled.p`
    max-width: 44ch;
    margin-top: 96px;
    color: ${p => p.theme.colors.faint};
    font-size: 0.8125rem;
`;
