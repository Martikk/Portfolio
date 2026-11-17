import React from 'react';
import styled from 'styled-components';
import { Container, Dots, LogoMark, Reveal, Section, SectionTitle, Square } from '../components/ui';
import { skills } from '../data';

export const Skills = () => (
    <Section id="skills">
        <Container>
            <SectionTitle>skills</SectionTitle>

            <Layout>
                <Art aria-hidden>
                    <Dots $cols={4} $rows={4} $top="8%" $left="4%" />
                    <Dots $cols={4} $rows={4} $top="42%" $left="46%" />
                    <Square $size={86} $top="2%" $left="56%" />
                    <Square $size={86} $top="58%" $left="74%" />
                    <Mark>
                        <LogoMark size={113} />
                    </Mark>
                </Art>

                <Cards>
                    {skills.map((group, i) => (
                        <Reveal as="li" key={group.title} delay={i * 50}>
                            <h3>{group.title}</h3>
                            <p>
                                {group.items.map(item => (
                                    <span key={item}>{item}</span>
                                ))}
                            </p>
                        </Reveal>
                    ))}
                </Cards>
            </Layout>
        </Container>
    </Section>
);

const Layout = styled.div`
    display: grid;
    gap: 32px;
    align-items: center;

    @media (min-width: ${p => p.theme.bp.lg}) {
        grid-template-columns: 340px 1fr;
        gap: 48px;
    }
`;

const Art = styled.div`
    position: relative;
    display: none;
    height: 320px;

    @media (min-width: ${p => p.theme.bp.lg}) {
        display: block;
    }
`;

const Mark = styled.div`
    position: absolute;
    top: 52%;
    left: 8%;
    color: transparent;

    svg path {
        stroke: ${p => p.theme.colors.primary};
        stroke-width: 0.15;
    }
`;

const Cards = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 200px), 1fr));
    gap: 16px;
    align-items: start;

    li {
        border: 1px solid ${p => p.theme.colors.border};
    }

    h3 {
        padding: 8px 12px;
        border-bottom: 1px solid ${p => p.theme.colors.border};
        font-size: 1rem;
    }

    p {
        display: flex;
        flex-wrap: wrap;
        gap: 2px 12px;
        padding: 8px 12px 12px;
    }

    span { white-space: nowrap; }
`;
