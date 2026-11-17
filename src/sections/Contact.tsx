import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FiMail, FiSend, FiX, FiLinkedin } from 'react-icons/fi';
import { ButtonEl, Container, Dots, Reveal, Section, SectionTitle } from '../components/ui';
import { EMAIL } from '../data';
import { hover } from '../styles/Theme.styled';

const EXIT_MS = 150;

// The project's TS lib predates HTMLDialogElement's methods.
type DialogEl = HTMLElement & { open: boolean; showModal: () => void; close: () => void };

export const Contact = () => {
    const [open, setOpen] = useState(false);

    return (
        <Section id="contacts">
            <Container>
                <SectionTitle>contacts</SectionTitle>
                <Layout>
                    <Intro>
                        <GutterDots $cols={4} $rows={4} $left="-104px" $top="-8px" aria-hidden />
                        <Reveal as="p">
                            I’m open to freelance and full-time opportunities. If you have a project, a question
                            or just want to say hi — don’t hesitate to reach out.
                        </Reveal>
                        <Reveal delay={60}>
                            <ButtonEl type="button" onClick={() => setOpen(true)} aria-haspopup="dialog">
                                Message me <FiSend aria-hidden />
                            </ButtonEl>
                        </Reveal>
                    </Intro>

                    <Reveal delay={100}>
                        <Card>
                            <h3>Message me here</h3>
                            <a href="https://t.me/alexinis" target="_blank" rel="noreferrer">
                                <FiSend aria-hidden /> @alexinis
                            </a>
                            <a href={`mailto:${EMAIL}`}>
                                <FiMail aria-hidden /> {EMAIL}
                            </a>
                            <a href="https://www.linkedin.com/in/martishyn/" target="_blank" rel="noreferrer">
                                <FiLinkedin aria-hidden /> in/martishyn
                            </a>
                        </Card>
                    </Reveal>
                </Layout>
            </Container>

            <ContactDialog open={open} onClose={() => setOpen(false)} />
        </Section>
    );
};

/**
 * Native <dialog>: focus trapping, Escape and the backdrop come for free.
 * Enter: scale(0.96)+fade over 200ms ease-out. Exit: faster, 150ms.
 */
const ContactDialog = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
    const ref = useRef<DialogEl>(null);

    // Escape fires "cancel": route it through our exit animation instead.
    useEffect(() => {
        const d = ref.current;
        if (!d) return;
        const onCancel = (e: Event) => {
            e.preventDefault();
            onClose();
        };
        d.addEventListener('cancel', onCancel);
        return () => d.removeEventListener('cancel', onCancel);
    }, [onClose]);

    useEffect(() => {
        const d = ref.current;
        if (!d || typeof d.showModal !== 'function') return;
        if (open && !d.open) {
            d.showModal();
            requestAnimationFrame(() => d.setAttribute('data-shown', 'true'));
        } else if (!open && d.open) {
            d.removeAttribute('data-shown');
            const t = window.setTimeout(() => d.close(), EXIT_MS);
            return () => window.clearTimeout(t);
        }
    }, [open]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        const name = String(f.get('name') || '');
        const email = String(f.get('email') || '');
        const subject = String(f.get('subject') || '') || `Hello from ${name}`;
        const body = `${f.get('message') || ''}\n\n— ${name}${email ? ` (${email})` : ''}`;
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        onClose();
    };

    return (
        <Dialog
            ref={ref}
            aria-labelledby="contact-title"
            onClick={e => {
                // Click on the backdrop (the dialog element itself) closes it.
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <Form onSubmit={handleSubmit}>
                <DialogHead>
                    <h2 id="contact-title">Send a message</h2>
                    <Close type="button" aria-label="Close" onClick={onClose}>
                        <FiX size={20} aria-hidden />
                    </Close>
                </DialogHead>
                <Row>
                    <Field>
                        <span>Name</span>
                        <input name="name" autoComplete="name" required autoFocus />
                    </Field>
                    <Field>
                        <span>Email</span>
                        <input name="email" type="email" autoComplete="email" required />
                    </Field>
                </Row>
                <Field>
                    <span>Subject</span>
                    <input name="subject" />
                </Field>
                <Field>
                    <span>Message</span>
                    <textarea name="message" rows={5} required />
                </Field>
                <ButtonEl type="submit" style={{ alignSelf: 'flex-start' }}>
                    Send <FiSend aria-hidden />
                </ButtonEl>
                <Hint>Opens your email app with the message ready to send.</Hint>
            </Form>
        </Dialog>
    );
};

const GutterDots = styled(Dots)`
    display: none;
    @media (min-width: ${p => p.theme.bp.xl}) {
        display: block;
    }
`;

const Layout = styled.div`
    display: grid;
    gap: 40px;
    align-items: start;

    @media (min-width: ${p => p.theme.bp.md}) {
        grid-template-columns: 1fr auto;
        gap: 64px;
    }
`;

const Intro = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    max-width: 52ch;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 16px;
    border: 1px solid ${p => p.theme.colors.gray};
    min-width: 240px;

    h3 {
        margin-bottom: 8px;
        font-size: 1rem;
    }

    a {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding-block: 6px;
        color: ${p => p.theme.colors.gray};
        text-decoration: none;
        transition: color 150ms ease;

        ${hover} {
            &:hover { color: ${p => p.theme.colors.white}; }
        }
    }
`;

const Dialog = styled.dialog<{ ref?: React.Ref<DialogEl> }>`
    width: min(520px, calc(100% - 32px));
    max-height: calc(100% - 32px);
    margin: auto;
    padding: 0;
    border: 1px solid ${p => p.theme.colors.border};
    background: ${p => p.theme.colors.backgroundDark};
    color: ${p => p.theme.colors.gray};
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);

    /* Modals stay centered: transform-origin center is correct here. */
    opacity: 0;
    transform: scale(0.96);
    transition:
        opacity ${EXIT_MS}ms ease,
        transform ${EXIT_MS}ms ${p => p.theme.ease.out};

    &::backdrop {
        background: rgba(20, 22, 26, 0);
        transition: background-color ${EXIT_MS}ms ease;
    }

    &[data-shown='true'] {
        opacity: 1;
        transform: none;
        transition:
            opacity 200ms ease,
            transform 200ms ${p => p.theme.ease.out};
    }

    &[data-shown='true']::backdrop {
        background: rgba(20, 22, 26, 0.7);
    }

    @media (prefers-reduced-motion: reduce) {
        transform: none;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
`;

const DialogHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 { font-size: 1.25rem; }
`;

const Close = styled.button`
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    margin-right: -8px;
    background: none;
    border: 0;
    color: ${p => p.theme.colors.gray};
    cursor: pointer;
    transition: color 150ms ease, transform 160ms ${p => p.theme.ease.out};

    ${hover} {
        &:hover { color: ${p => p.theme.colors.white}; }
    }
    &:active { transform: scale(0.92); }
`;

const Row = styled.div`
    display: grid;
    gap: 16px;

    @media (min-width: 480px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const Field = styled.label`
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 0.875rem;

    input,
    textarea {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid ${p => p.theme.colors.border};
        background: ${p => p.theme.colors.surface};
        color: ${p => p.theme.colors.white};
        font-size: 1rem;
        resize: vertical;
        transition: border-color 150ms ease;

        &:focus {
            outline: none;
            border-color: ${p => p.theme.colors.primary};
        }
    }
`;

const Hint = styled.p`
    font-size: 0.8125rem;
    opacity: 0.8;
`;
