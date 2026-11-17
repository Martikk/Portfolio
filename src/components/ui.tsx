import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { desktop, hover } from '../styles/Theme.styled';

/* ---------- Section shell ---------- */

/**
 * On mobile each section gets a sticky label (so you always know where you
 * are). On desktop the sidebar nav does that job, so the label is visually
 * hidden but stays for screen readers.
 */
export const Section = ({
    id,
    label,
    children,
}: {
    id: string;
    label: string;
    children: React.ReactNode;
}) => (
    <SectionEl id={id} aria-label={label}>
        <StickyLabel>{label}</StickyLabel>
        {children}
    </SectionEl>
);

const SectionEl = styled.section`
    scroll-margin-top: 24px;
    margin-bottom: 96px;

    ${desktop} {
        scroll-margin-top: 96px;
        margin-bottom: 144px;
    }
`;

const StickyLabel = styled.h2`
    position: sticky;
    top: 0;
    z-index: 10;
    margin: 0 -24px 20px;
    padding: 16px 24px;
    background: rgba(11, 13, 18, 0.78);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    font-family: ${p => p.theme.font.mono};
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;

    ${desktop} {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: 0;
        padding: 0;
        overflow: hidden;
        clip: rect(0 0 0 0);
    }
`;

/* ---------- Small pieces ---------- */

export const Tag = styled.li`
    padding: 2px 10px;
    border-radius: 999px;
    background: ${p => p.theme.colors.accentSoft};
    color: ${p => p.theme.colors.accent};
    font-family: ${p => p.theme.font.mono};
    font-size: 0.75rem;
    line-height: 1.6;
    white-space: nowrap;
`;

export const TagList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const SocialIcon = ({ icon, size = 22 }: { icon: 'github' | 'linkedin' | 'telegram'; size?: number }) => {
    const props = { size, 'aria-hidden': true } as const;
    if (icon === 'github') return <FiGithub {...props} />;
    if (icon === 'linkedin') return <FiLinkedin {...props} />;
    return <FiSend {...props} />;
};

export const IconLink = styled.a`
    display: inline-grid;
    place-items: center;
    width: 40px;
    height: 40px;
    color: ${p => p.theme.colors.muted};
    transition:
        color 150ms ease,
        transform 160ms ${p => p.theme.ease.out};

    ${hover} {
        &:hover { color: ${p => p.theme.colors.text}; }
    }
    &:active { transform: scale(0.92); }
`;

export const TextLink = styled.a`
    color: ${p => p.theme.colors.text};
    font-weight: 500;
    background-image: linear-gradient(currentColor, currentColor);
    background-size: 100% 1px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: color 150ms ease;

    ${hover} {
        &:hover { color: ${p => p.theme.colors.accent}; }
    }
`;

/* ---------- Spotlight ---------- */

/**
 * A soft glow that trails the cursor. Purely decorative, so it's only on
 * fine pointers and skipped for reduced motion. We move the layer with
 * transform (GPU, no layout) instead of updating a CSS variable on a parent,
 * which would restyle every child on each mousemove.
 */
export const Spotlight = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el || typeof window.matchMedia !== 'function') return;
        const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!fine || reduce) return;

        let frame = 0;
        let x = 0;
        let y = 0;
        const onMove = (e: PointerEvent) => {
            x = e.clientX;
            y = e.clientY;
            if (frame) return;
            frame = requestAnimationFrame(() => {
                frame = 0;
                el.style.transform = `translate3d(${x - 400}px, ${y - 400}px, 0)`;
                el.style.opacity = '1';
            });
        };
        const onLeave = () => (el.style.opacity = '0');

        window.addEventListener('pointermove', onMove, { passive: true });
        document.documentElement.addEventListener('pointerleave', onLeave);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('pointermove', onMove);
            document.documentElement.removeEventListener('pointerleave', onLeave);
        };
    }, []);

    return <Glow ref={ref} aria-hidden />;
};

const Glow = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    width: 800px;
    height: 800px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(94, 234, 212, 0.07), transparent 60%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 300ms ease;
    will-change: transform;
`;

/* ---------- Scroll reveal ---------- */

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
            { rootMargin: '0px 0px -60px 0px' }
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
