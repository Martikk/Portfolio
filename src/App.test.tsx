import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { myTheme } from './styles/Theme.styled';

const renderApp = () =>
    render(
        <ThemeProvider theme={myTheme}>
            <App />
        </ThemeProvider>
    );

test('renders the hero heading', () => {
    renderApp();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/full-stack developer/i);
});

test('every project has working live and GitHub links', () => {
    const { container } = renderApp();
    const works = within(container.querySelector('#works') as HTMLElement);
    const live = works.getAllByRole('link', { name: /^live/i });
    const gh = works.getAllByRole('link', { name: /^github$/i });
    expect(live).toHaveLength(3);
    expect(gh).toHaveLength(3);
    [...live, ...gh].forEach(a => expect(a.getAttribute('href')).toMatch(/^https:\/\//));
});

test('email links use the correct address', () => {
    renderApp();
    screen
        .getAllByRole('link', { name: /alex@martishyn\.ca/i })
        .forEach(a => expect(a).toHaveAttribute('href', 'mailto:alex@martishyn.ca'));
});

test('no placeholder "#" links remain', () => {
    renderApp();
    screen.getAllByRole('link').forEach(a => expect(a.getAttribute('href')).not.toBe('#'));
});
