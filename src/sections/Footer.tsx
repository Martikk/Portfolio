import React from 'react';
import styled from 'styled-components';
import { Container, IconLink, LogoMark, SocialIcon } from '../components/ui';
import { EMAIL, socials } from '../data';

export const Footer = () => (
    <Foot>
        <Inner>
            <div>
                <Brand>
                    <LogoMark />
                    <strong>Alex Martishyn</strong>
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </Brand>
                <p>Full-stack developer</p>
            </div>
            <Media>
                <h2>Media</h2>
                <ul>
                    {socials.map(s => (
                        <li key={s.name}>
                            <IconLink href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
                                <SocialIcon icon={s.icon} />
                            </IconLink>
                        </li>
                    ))}
                </ul>
            </Media>
        </Inner>
        <Copy>© {new Date().getFullYear()}. Made by Alex Martishyn</Copy>
    </Foot>
);

const Foot = styled.footer`
    margin-top: clamp(80px, 12vw, 145px);
    padding-block: 32px;
    border-top: 1px solid ${p => p.theme.colors.gray};
`;

const Inner = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 24px;

    p { margin-top: 12px; color: ${p => p.theme.colors.white}; }
`;

const Brand = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px 16px;
    color: ${p => p.theme.colors.white};

    strong { margin-left: -8px; }

    a {
        color: ${p => p.theme.colors.gray};
        text-decoration: none;
        transition: color 150ms ease;
        @media (hover: hover) and (pointer: fine) {
            &:hover { color: ${p => p.theme.colors.white}; }
        }
    }
`;

const Media = styled.div`
    h2 { font-size: 1.5rem; font-weight: 500; }
    ul { display: flex; gap: 4px; margin: 8px 0 0 -10px; }
`;

const Copy = styled.small`
    display: block;
    margin-top: 48px;
    text-align: center;
    font-size: 0.875rem;
`;
