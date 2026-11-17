import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { myTheme } from './styles/Theme.styled';

const renderApp = () =>
    render(
        <ThemeProvider theme={myTheme}>
            <App />
        </ThemeProvider>
    );

test('renders name and role', () => {
    renderApp();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Alex Martishyn');
    expect(screen.getByText(/^full-stack developer$/i)).toBeInTheDocument();
});

test('every project links to a live site and its source', () => {
    const { container } = renderApp();
    const work = within(container.querySelector('#work') as HTMLElement);
    const live = work.getAllByRole('link', { name: /opens live site/i });
    const source = work.getAllByRole('link', { name: /^source$/i });
    expect(live).toHaveLength(3);
    expect(source).toHaveLength(3);
    [...live, ...source].forEach(a => expect(a.getAttribute('href')).toMatch(/^https:\/\//));
});

test('email CTA uses the correct address', () => {
    renderApp();
    expect(screen.getByRole('link', { name: /say hello/i })).toHaveAttribute('href', 'mailto:alex@martishyn.ca');
});

test('no placeholder "#" links remain', () => {
    renderApp();
    screen.getAllByRole('link').forEach(a => expect(a.getAttribute('href')).not.toBe('#'));
});

test('copy button copies the email and confirms', async () => {
    const writeText = jest.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });
    renderApp();
    fireEvent.click(screen.getByRole('button', { name: /copy alex@martishyn\.ca/i }));
    expect(writeText).toHaveBeenCalledWith('alex@martishyn.ca');
    expect(await screen.findByRole('button', { name: /email copied/i })).toBeInTheDocument();
});
