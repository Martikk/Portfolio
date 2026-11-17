import React from 'react';
import styled from 'styled-components';
import { Reveal, Section } from '../components/ui';
import { stack } from '../data';

export const Skills = () => (
    <Section id="stack" label="Stack">
        <Grid>
            {stack.map((group, i) => (
                <Reveal as="li" key={group.title} delay={i * 50}>
                    <h3>{group.title}</h3>
                    <ul>
                        {group.items.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </Reveal>
            ))}
        </Grid>
    </Section>
);

const Grid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 220px), 1fr));
    gap: 1px;
    overflow: hidden;
    border: 1px solid ${p => p.theme.colors.line};
    border-radius: 12px;
    background: ${p => p.theme.colors.line};

    > li {
        padding: 20px;
        background: ${p => p.theme.colors.bg};
    }

    h3 {
        margin-bottom: 12px;
        color: ${p => p.theme.colors.faint};
        font-family: ${p => p.theme.font.mono};
        font-size: 0.75rem;
        font-weight: 500;
        letter-spacing: 0.14em;
        text-transform: uppercase;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 6px 14px;
        color: ${p => p.theme.colors.text};
        font-size: 0.9375rem;
    }

    ul li { white-space: nowrap; }
`;
