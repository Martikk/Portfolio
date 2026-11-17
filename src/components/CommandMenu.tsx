import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { FiArrowRight, FiCheck, FiCopy, FiExternalLink, FiFileText, FiHash, FiMail } from 'react-icons/fi';
import { EMAIL, projects, RESUME, sections, socials } from '../data';
import { copyText } from '../sections/Contact';

type DialogEl = HTMLElement & { open: boolean; showModal: () => void; close: () => void };

type Item = {
    id: string;
    group: string;
    label: string;
    icon: React.ReactNode;
    run: () => void | Promise<boolean | void>;
    keepOpen?: boolean;
};

/**
 * ⌘K / Ctrl+K quick actions. Opened by keyboard and used repeatedly, so —
 * deliberately — it has no open/close animation. It should feel instant.
 */
export const CommandMenu = ({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) => {
    const ref = useRef<DialogEl>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState('');
    const [index, setIndex] = useState(0);
    const [copied, setCopied] = useState(false);

    const items: Item[] = useMemo(() => {
        const go = (id: string) => () => document.getElementById(id)?.scrollIntoView({ block: 'start' });
        const open = (href: string) => () => {
            window.open(href, '_blank', 'noreferrer');
        };
        return [
            ...sections.map(s => ({
                id: `go-${s.id}`,
                group: 'Navigate',
                label: s.label,
                icon: <FiHash />,
                run: go(s.id),
            })),
            {
                id: 'copy',
                group: 'Contact',
                label: 'Copy email address',
                icon: <FiCopy />,
                keepOpen: true,
                run: async () => {
                    if (await copyText(EMAIL)) {
                        setCopied(true);
                        window.setTimeout(() => setOpen(false), 700);
                    }
                },
            },
            {
                id: 'resume',
                group: 'Contact',
                label: 'Open résumé (PDF)',
                icon: <FiFileText />,
                run: open(RESUME),
            },
            {
                id: 'mail',
                group: 'Contact',
                label: 'Send an email',
                icon: <FiMail />,
                run: () => (window.location.href = `mailto:${EMAIL}`),
            },
            ...socials.map(s => ({
                id: s.name,
                group: 'Contact',
                label: `Open ${s.name}`,
                icon: <FiExternalLink />,
                run: open(s.href),
            })),
            ...projects.map(p => ({
                id: p.title,
                group: 'Projects',
                label: `${p.title} — ${p.liveLabel}`,
                icon: <FiArrowRight />,
                run: open(p.live),
            })),
        ];
    }, [setOpen]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return q ? items.filter(i => `${i.group} ${i.label}`.toLowerCase().includes(q)) : items;
    }, [items, query]);

    // Global shortcut.
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setOpen(!open);
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open, setOpen]);

    // Sync the native dialog with state.
    useEffect(() => {
        const d = ref.current;
        if (!d || typeof d.showModal !== 'function') return;
        if (open && !d.open) {
            setQuery('');
            setIndex(0);
            setCopied(false);
            d.showModal();
            inputRef.current?.focus();
        } else if (!open && d.open) {
            d.close();
        }
    }, [open]);

    useEffect(() => {
        const d = ref.current;
        if (!d) return;
        const onClose = () => setOpen(false);
        d.addEventListener('close', onClose);
        return () => d.removeEventListener('close', onClose);
    }, [setOpen]);

    useEffect(() => setIndex(0), [query]);

    const run = (item: Item) => {
        item.run();
        if (!item.keepOpen) setOpen(false);
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setIndex(i => (i + 1) % Math.max(filtered.length, 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setIndex(i => (i - 1 + filtered.length) % Math.max(filtered.length, 1));
        } else if (e.key === 'Enter' && filtered[index]) {
            e.preventDefault();
            run(filtered[index]);
        }
    };

    // Keep the highlighted row in view while arrowing through the list.
    useEffect(() => {
        if (!open) return;
        const row = ref.current?.querySelector<HTMLElement>('[data-active="true"]');
        row?.scrollIntoView?.({ block: 'nearest' });
    }, [index, open]);

    let lastGroup = '';

    return (
        <Dialog
            ref={ref as any}
            aria-label="Command menu"
            onClick={e => e.target === e.currentTarget && setOpen(false)}
        >
            <Panel onKeyDown={onKeyDown}>
                <Search
                    ref={inputRef}
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Type a command or search…"
                    aria-label="Search commands"
                    role="combobox"
                    aria-expanded="true"
                    aria-controls="command-list"
                    aria-activedescendant={filtered[index] ? `cmd-${filtered[index].id}` : undefined}
                    autoComplete="off"
                    spellCheck={false}
                />
                <List id="command-list" role="listbox">
                    {filtered.length === 0 && <Empty>No results for “{query}”</Empty>}
                    {filtered.map((item, i) => {
                        const header = item.group !== lastGroup ? item.group : null;
                        lastGroup = item.group;
                        const isCopy = item.id === 'copy' && copied;
                        return (
                            <React.Fragment key={item.id}>
                                {header && <Group role="presentation">{header}</Group>}
                                <Row
                                    id={`cmd-${item.id}`}
                                    role="option"
                                    aria-selected={i === index}
                                    data-active={i === index}
                                    onMouseMove={() => setIndex(i)}
                                    onClick={() => run(item)}
                                >
                                    <span aria-hidden>{isCopy ? <FiCheck /> : item.icon}</span>
                                    {isCopy ? 'Copied!' : item.label}
                                </Row>
                            </React.Fragment>
                        );
                    })}
                </List>
                <Hints aria-hidden>
                    <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
                    <span><kbd>↵</kbd> select</span>
                    <span><kbd>esc</kbd> close</span>
                </Hints>
            </Panel>
        </Dialog>
    );
};

const Dialog = styled.dialog`
    width: min(560px, calc(100% - 32px));
    margin: 12vh auto auto;
    padding: 0;
    border: 1px solid ${p => p.theme.colors.line};
    border-radius: 14px;
    background: ${p => p.theme.colors.surface};
    color: ${p => p.theme.colors.muted};
    box-shadow: 0 32px 80px rgba(0, 0, 0, 0.55);

    &::backdrop {
        background: rgba(5, 6, 9, 0.6);
    }
`;

const Panel = styled.div`
    display: flex;
    flex-direction: column;
    max-height: min(480px, 70vh);
`;

const Search = styled.input`
    width: 100%;
    padding: 18px 20px;
    border: 0;
    border-bottom: 1px solid ${p => p.theme.colors.line};
    background: none;
    color: ${p => p.theme.colors.text};
    font-size: 1rem;

    &::placeholder { color: ${p => p.theme.colors.faint}; }
    &:focus { outline: none; }
`;

const List = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 8px;
    overscroll-behavior: contain;
`;

const Group = styled.div`
    padding: 10px 12px 6px;
    color: ${p => p.theme.colors.faint};
    font-family: ${p => p.theme.font.mono};
    font-size: 0.6875rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    border-radius: 8px;
    color: ${p => p.theme.colors.muted};
    font-size: 0.9375rem;
    cursor: pointer;

    &[data-active='true'] {
        background: ${p => p.theme.colors.raised};
        color: ${p => p.theme.colors.text};
    }

    span { display: inline-grid; color: ${p => p.theme.colors.faint}; }
    &[data-active='true'] span { color: ${p => p.theme.colors.accent}; }
`;

const Empty = styled.p`
    padding: 24px 12px;
    text-align: center;
    font-size: 0.9375rem;
`;

const Hints = styled.div`
    display: flex;
    gap: 16px;
    padding: 10px 16px;
    border-top: 1px solid ${p => p.theme.colors.line};
    color: ${p => p.theme.colors.faint};
    font-family: ${p => p.theme.font.mono};
    font-size: 0.6875rem;

    kbd {
        margin-right: 4px;
        padding: 0 4px;
        border-radius: 4px;
        background: ${p => p.theme.colors.raised};
        font-family: inherit;
    }

    @media (hover: none) { display: none; }
`;
