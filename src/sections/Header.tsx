import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Accent, Container, IconLink, LogoMark, SocialIcon } from '../components/ui';
import { navItems, socials } from '../data';
import { hover } from '../styles/Theme.styled';

export const Header = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);

    return (
        <Bar data-scrolled={scrolled || open}>
            <Inner>
                <Brand href="#home" aria-label="Alex Martishyn — home">
                    <LogoMark />
                    <span>Alex Martishyn</span>
                </Brand>

                <DesktopNav aria-label="Primary">
                    {navItems.map(item => (
                        <NavLink key={item.href} href={item.href}>
                            <Accent>#</Accent>
                            {item.name}
                        </NavLink>
                    ))}
                </DesktopNav>

                <MenuButton
                    type="button"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    onClick={() => setOpen(o => !o)}
                >
                    <Burger data-open={open} aria-hidden>
                        <span />
                        <span />
                    </Burger>
                </MenuButton>
            </Inner>

            <MobilePanel id="mobile-menu" data-open={open} aria-hidden={!open}>
                <Container as="nav" aria-label="Mobile">
                    {navItems.map(item => (
                        <MobileLink
                            key={item.href}
                            href={item.href}
                            tabIndex={open ? 0 : -1}
                            onClick={() => setOpen(false)}
                        >
                            <Accent>#</Accent>
                            {item.name}
                        </MobileLink>
                    ))}
                    <MobileSocials>
                        {socials.map(s => (
                            <IconLink
                                key={s.name}
                                href={s.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={s.name}
                                tabIndex={open ? 0 : -1}
                            >
                                <SocialIcon icon={s.icon} />
                            </IconLink>
                        ))}
                    </MobileSocials>
                </Container>
            </MobilePanel>
        </Bar>
    );
};

const Bar = styled.header`
    position: sticky;
    top: 0;
    z-index: 50;
    border-bottom: 1px solid transparent;
    transition:
        background-color 200ms ease,
        border-color 200ms ease;

    &[data-scrolled='true'] {
        background-color: rgba(40, 44, 51, 0.82);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-bottom-color: rgba(171, 178, 191, 0.12);
    }
`;

const Inner = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
`;

const Brand = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: ${p => p.theme.colors.white};
    font-weight: 700;
    text-decoration: none;
`;

const DesktopNav = styled.nav`
    display: none;
    gap: 32px;

    @media (min-width: ${p => p.theme.bp.md}) {
        display: flex;
    }
`;

const NavLink = styled.a`
    color: ${p => p.theme.colors.gray};
    text-decoration: none;
    transition: color 150ms ease;

    ${hover} {
        &:hover { color: ${p => p.theme.colors.white}; }
    }
`;

const MenuButton = styled.button`
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    margin-right: -10px;
    background: none;
    border: 0;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    @media (min-width: ${p => p.theme.bp.md}) {
        display: none;
    }
`;

const Burger = styled.span`
    position: relative;
    width: 22px;
    height: 12px;

    span {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background: ${p => p.theme.colors.white};
        transition: transform 250ms ${p => p.theme.ease.inOut};
    }
    span:first-child { top: 0; }
    span:last-child { bottom: 0; }

    &[data-open='true'] span:first-child { transform: translateY(5px) rotate(45deg); }
    &[data-open='true'] span:last-child { transform: translateY(-5px) rotate(-45deg); }
`;

const MobilePanel = styled.div`
    position: absolute;
    inset: 100% 0 auto 0;
    padding-block: 16px 32px;
    background: ${p => p.theme.colors.backgroundDark};
    border-bottom: 1px solid rgba(171, 178, 191, 0.12);
    transform-origin: top center;
    opacity: 0;
    transform: translateY(-8px);
    visibility: hidden;
    /* Exit is quicker than enter. */
    transition:
        opacity 150ms ease,
        transform 150ms ${p => p.theme.ease.out},
        visibility 0s linear 150ms;

    &[data-open='true'] {
        opacity: 1;
        transform: none;
        visibility: visible;
        transition:
            opacity 220ms ease,
            transform 220ms ${p => p.theme.ease.out},
            visibility 0s;
    }

    nav {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: ${p => p.theme.bp.md}) {
        display: none;
    }
`;

const MobileLink = styled.a`
    padding-block: 12px;
    font-size: 1.5rem;
    color: ${p => p.theme.colors.white};
    text-decoration: none;
`;

const MobileSocials = styled.div`
    display: flex;
    gap: 8px;
    margin: 16px 0 0 -10px;
`;
