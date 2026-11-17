export const myTheme = {
    colors: {
        backgroundDark: '#282C33',
        surface: '#2E333B',
        primary: '#C778DD',
        gray: '#ABB2BF',
        border: '#4A505A',
        white: '#FFFFFF',
    },
    font: `"Fira Code", ui-monospace, SFMono-Regular, Menlo, monospace`,
    ease: {
        // Strong ease-out for UI feedback and entrances
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
        // On-screen movement
        inOut: 'cubic-bezier(0.77, 0, 0.175, 1)',
    },
    bp: {
        md: '768px',
        lg: '1024px',
        xl: '1280px',
    },
};

export type AppTheme = typeof myTheme;

/** Gate hover effects so touch devices don't get stuck hover states. */
export const hover = '@media (hover: hover) and (pointer: fine)';
export const reducedMotion = '@media (prefers-reduced-motion: reduce)';
