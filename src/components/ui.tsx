import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { hover } from '../styles/Theme.styled';

/* ---------- Layout ---------- */

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    margin-inline: auto;
    padding-inline: clamp(16px, 5vw, 40px);
`;

export const Section = styled.section`
    padding-block: clamp(64px, 10vw, 112px) 0;
`;

/* ---------- Typography ---------- */

const TitleRow = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: clamp(24px, 4vw, 48px);
`;

const Title = styled.h2`
    font-size: clamp(1.75rem, 4vw, 2rem);
    font-weight: 500;
    white-space: nowrap;
`;

const Rule = styled.span`
    flex: 0 1 ${(p: { $width?: string }) => p.$width || '240px'};
    height: 1px;
    background: ${p => p.theme.colors.primary};
`;

export const Accent = styled.span`
    color: ${p => p.theme.colors.primary};
`;

export const SectionTitle = ({
    children,
    ruleWidth,
    aside,
}: {
    children: React.ReactNode;
    ruleWidth?: string;
    aside?: React.ReactNode;
}) => (
    <TitleRow>
        <Title>
            <Accent>#</Accent>
            {children}
        </Title>
        <Rule $width={ruleWidth} aria-hidden />
        {aside && <AsideSlot>{aside}</AsideSlot>}
    </TitleRow>
);

const AsideSlot = styled.div`
    margin-left: auto;
`;

/* ---------- Buttons ---------- */

type ButtonVariant = 'primary' | 'ghost';

const buttonStyles = css<{ $variant?: ButtonVariant }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 40px;
    padding: 8px 16px;
    border: 1px solid ${p => (p.$variant === 'ghost' ? 'transparent' : p.theme.colors.primary)};
    background: transparent;
    color: ${p => p.theme.colors.white};
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition:
        transform 160ms ${p => p.theme.ease.out},
        background-color 150ms ease,
        color 150ms ease;

    svg {
        flex-shrink: 0;
        transition: transform 200ms ${p => p.theme.ease.out};
    }

    ${hover} {
        &:hover {
            background-color: ${p =>
                p.$variant === 'ghost' ? 'rgba(255,255,255,0.04)' : 'rgba(199,120,221,0.14)'};
        }
        &:hover svg {
            transform: translateX(2px);
        }
    }

    /* Press feedback: the interface heard you. */
    &:active {
        transform: scale(0.97);
    }
`;

export const Button = styled.a<{ $variant?: ButtonVariant }>`
    ${buttonStyles}
`;

export const ButtonEl = styled.button<{ $variant?: ButtonVariant }>`
    ${buttonStyles}
`;

/* ---------- Decorations (pure CSS, no sprite) ---------- */

export const Dots = styled.span<{ $cols?: number; $rows?: number; $top?: string; $left?: string; $right?: string; $bottom?: string }>`
    position: absolute;
    top: ${p => p.$top || 'auto'};
    left: ${p => p.$left || 'auto'};
    right: ${p => p.$right || 'auto'};
    bottom: ${p => p.$bottom || 'auto'};
    width: ${p => (p.$cols || 5) * 16}px;
    height: ${p => (p.$rows || 5) * 16}px;
    background-image: radial-gradient(${p => p.theme.colors.gray} 1.5px, transparent 1.6px);
    background-size: 16px 16px;
    opacity: 0.55;
    pointer-events: none;
`;

export const Square = styled.span<{ $size?: number; $top?: string; $left?: string; $right?: string; $bottom?: string; $accent?: boolean }>`
    position: absolute;
    top: ${p => p.$top || 'auto'};
    left: ${p => p.$left || 'auto'};
    right: ${p => p.$right || 'auto'};
    bottom: ${p => p.$bottom || 'auto'};
    width: ${p => p.$size || 86}px;
    height: ${p => p.$size || 86}px;
    border: 1px solid ${p => (p.$accent ? p.theme.colors.primary : p.theme.colors.gray)};
    opacity: ${p => (p.$accent ? 0.9 : 0.5)};
    pointer-events: none;
`;

export const LogoMark = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size + 1} viewBox="0 0 16 17" fill="none" aria-hidden>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z"
            fill="currentColor"
        />
    </svg>
);

export const SocialIcon = ({ icon }: { icon: 'github' | 'linkedin' | 'telegram' }) => {
    const props = { size: 22, 'aria-hidden': true } as const;
    if (icon === 'github') return <FiGithub {...props} />;
    if (icon === 'linkedin') return <FiLinkedin {...props} />;
    return <FiSend {...props} />;
};

export const IconLink = styled.a`
    display: inline-grid;
    place-items: center;
    width: 40px;
    height: 40px;
    color: ${p => p.theme.colors.gray};
    transition:
        color 150ms ease,
        transform 160ms ${p => p.theme.ease.out};

    ${hover} {
        &:hover { color: ${p => p.theme.colors.white}; }
    }
    &:active { transform: scale(0.94); }
`;

/* ---------- Scroll reveal ---------- */

/**
 * Fades + rises children into view once. Runs off the main thread (CSS
 * transitions), never blocks interaction, and degrades to "always visible"
 * when IntersectionObserver isn't available.
 */
export const Reveal = ({
    children,
    delay = 0,
    as: Tag = 'div',
    className,
    ...rest
}: {
    children: React.ReactNode;
    delay?: number;
    as?: keyof JSX.IntrinsicElements;
    className?: string;
} & React.HTMLAttributes<HTMLElement>) => {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (typeof IntersectionObserver === 'undefined') {
            el.dataset.visible = 'true';
            return;
        }
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.dataset.visible = 'true';
                    io.disconnect();
                }
            },
            { rootMargin: '0px 0px -80px 0px' }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const Component = Tag as any;
    return (
        <Component
            ref={ref}
            data-reveal=""
            className={className}
            style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
            {...rest}
        >
            {children}
        </Component>
    );
};
