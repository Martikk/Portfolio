import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        color-scheme: dark;
        -webkit-text-size-adjust: 100%;
    }

    @media (prefers-reduced-motion: no-preference) {
        html { scroll-behavior: smooth; }
    }

    body {
        min-height: 100vh;
        background: ${p => p.theme.colors.bg};
        color: ${p => p.theme.colors.muted};
        font-family: ${p => p.theme.font.sans};
        font-size: 16px;
        line-height: 1.65;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-feature-settings: 'ss01', 'cv11';
    }

    h1, h2, h3 {
        color: ${p => p.theme.colors.text};
        line-height: 1.15;
        letter-spacing: -0.02em;
        text-wrap: balance;
    }

    p { text-wrap: pretty; }
    a { color: inherit; text-decoration: none; }
    img, svg { display: block; max-width: 100%; }
    ul, ol { list-style: none; }
    button, input { font: inherit; color: inherit; }

    ::selection {
        background: ${p => p.theme.colors.accent};
        color: ${p => p.theme.colors.bg};
    }

    :focus-visible {
        outline: 2px solid ${p => p.theme.colors.accent};
        outline-offset: 3px;
        border-radius: 4px;
    }

    .visually-hidden {
        position: absolute !important;
        width: 1px; height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        white-space: nowrap;
    }

    /* One-time scroll reveal: occasional, so it can afford a little elegance. */
    [data-reveal] {
        opacity: 0;
        transform: translateY(12px);
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
