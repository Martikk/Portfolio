import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        color-scheme: dark;
        -webkit-text-size-adjust: 100%;
    }

    @media (prefers-reduced-motion: no-preference) {
        html { scroll-behavior: smooth; }
    }

    body {
        background-color: ${p => p.theme.colors.backgroundDark};
        color: ${p => p.theme.colors.gray};
        font-family: ${p => p.theme.font};
        font-size: 16px;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
    }

    h1, h2, h3 {
        color: ${p => p.theme.colors.white};
        font-weight: 600;
        line-height: 1.2;
        text-wrap: balance;
    }

    p { text-wrap: pretty; }

    a { color: inherit; }

    img, svg { display: block; max-width: 100%; }

    ul { list-style: none; }

    button, input, textarea { font: inherit; color: inherit; }

    section[id] { scroll-margin-top: 88px; }

    ::selection {
        background: ${p => p.theme.colors.primary};
        color: ${p => p.theme.colors.backgroundDark};
    }

    :focus-visible {
        outline: 2px solid ${p => p.theme.colors.primary};
        outline-offset: 3px;
    }

    .visually-hidden {
        position: absolute !important;
        width: 1px; height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        white-space: nowrap;
    }

    /* Scroll reveal: one-time, occasional — gentle rise + fade. */
    [data-reveal] {
        opacity: 0;
        transform: translateY(16px);
        transition:
            opacity 600ms ${p => p.theme.ease.out},
            transform 600ms ${p => p.theme.ease.out};
        transition-delay: var(--reveal-delay, 0ms);
    }

    [data-reveal][data-visible='true'] {
        opacity: 1;
        transform: none;
    }

    @media (prefers-reduced-motion: reduce) {
        [data-reveal] {
            transform: none;
            transition: opacity 300ms ease;
        }
    }
`;
