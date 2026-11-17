import React from 'react';
import styled from 'styled-components';
import { IconLink, SocialIcon } from '../components/ui';
import { socials } from '../data';

/** Vertical social links pinned to the left edge on wide screens. */
export const SocialRail = () => (
    <Rail aria-label="Social links">
        <Line aria-hidden />
        {socials.map(s => (
            <IconLink key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
                <SocialIcon icon={s.icon} />
            </IconLink>
        ))}
    </Rail>
);

const Rail = styled.aside`
    display: none;
    position: fixed;
    top: 0;
    left: 20px;
    z-index: 40;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    @media (min-width: ${p => p.theme.bp.xl}) {
        display: flex;
    }
`;

const Line = styled.span`
    width: 1px;
    height: 180px;
    margin-bottom: 8px;
    background: ${p => p.theme.colors.gray};
`;
