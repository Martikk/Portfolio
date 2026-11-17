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
    expect(screen.getByText(/^project manager who builds software$/i)).toBeInTheDocument();
});

test('every project links to a live site and its source', () => {
    const { container } = renderApp();
    const work = within(container.querySelector('#work') as HTMLElement);
    const live = work.getAllByRole('link', { name: /\(opens live (site|demo|app)\)/i });
    const source = work.getAllByRole('link', { name: /^source$/i });
    expect(live).toHaveLength(4);
    expect(source).toHaveLength(3); // Held's repository is private
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

test('experience lists every role, newest first', () => {
    const { container } = renderApp();
    const exp = within(container.querySelector('#experience') as HTMLElement);
    const headings = exp.getAllByRole('heading', { level: 3 }).map(h => h.textContent).filter(t => !/education/i.test(t || ''));
    expect(headings).toHaveLength(5);
    expect(headings[0]).toMatch(/Allied Plumbing/);
    expect(headings[4]).toMatch(/Plumber/);
});

test('résumé links point at the PDF', () => {
    renderApp();
    const links = screen.getAllByRole('link', { name: /résumé/i });
    expect(links.length).toBeGreaterThanOrEqual(2);
    links.forEach(a => expect(a.getAttribute('href')).toMatch(/Alex-Martishyn-Technical-Project-Manager\.pdf$/));
});
