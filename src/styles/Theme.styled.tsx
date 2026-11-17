export const myTheme = {
    colors: {
        bg: '#0B0D12',
        surface: '#12151C',
        raised: 'rgba(148, 163, 184, 0.06)',
        line: 'rgba(148, 163, 184, 0.14)',
        text: '#E6E8EE',
        muted: '#8B93A7',
        faint: '#5B6275',
        accent: '#5EEAD4',
        accentSoft: 'rgba(94, 234, 212, 0.12)',
    },
    font: {
        sans: `"Geist", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif`,
        mono: `"Geist Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,
    },
    ease: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
        inOut: 'cubic-bezier(0.77, 0, 0.175, 1)',
    },
    bp: {
        md: '768px',
        lg: '1024px',
    },
};

export type AppTheme = typeof myTheme;

/** Hover effects only for real pointers — touch devices get stuck hover states. */
export const hover = '@media (hover: hover) and (pointer: fine)';
export const desktop = `@media (min-width: ${myTheme.bp.lg})`;
