import React from 'react';
import styled from 'styled-components';
import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import { Button, Container, Reveal, Section, SectionTitle } from '../components/ui';
import { projects } from '../data';
import { hover } from '../styles/Theme.styled';

export const Projects = () => (
    <Section id="works">
        <Container>
            <SectionTitle
                ruleWidth="480px"
                aside={
                    <ViewAll href="https://github.com/Martikk?tab=repositories" target="_blank" rel="noreferrer" $variant="ghost">
                        View all <FiArrowRight aria-hidden />
                    </ViewAll>
                }
            >
                projects
            </SectionTitle>

            <Grid>
                {projects.map((p, i) => (
                    <Reveal as="li" key={p.title} delay={i * 70}>
                        <Card>
                            <Media>
                                <img src={p.image} alt={p.alt} loading="lazy" decoding="async" />
                            </Media>
                            <Tags>
                                {p.tags.map(t => (
                                    <li key={t}>{t}</li>
                                ))}
                            </Tags>
                            <Body>
                                <h3>{p.title}</h3>
                                <p>{p.description}</p>
                                <Links>
                                    <Button href={p.live} target="_blank" rel="noreferrer">
                                        Live <FiExternalLink aria-hidden />
                                    </Button>
                                    <Button href={p.github} target="_blank" rel="noreferrer" $variant="ghost">
                                        GitHub <FiGithub aria-hidden />
                                    </Button>
                                </Links>
                            </Body>
                        </Card>
                    </Reveal>
                ))}
            </Grid>
        </Container>
    </Section>
);

const ViewAll = styled(Button)`
    padding-inline: 8px;
    margin-right: -8px;
`;

const Grid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
    gap: 24px;
`;

const Card = styled.article`
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 1px solid ${p => p.theme.colors.border};
    background: ${p => p.theme.colors.backgroundDark};
    transition:
        transform 250ms ${p => p.theme.ease.out},
        border-color 200ms ease;

    ${hover} {
        &:hover {
            transform: translateY(-4px);
            border-color: ${p => p.theme.colors.gray};
        }
        &:hover img {
            transform: scale(1.03);
        }
    }
`;

const Media = styled.div`
    aspect-ratio: 16 / 10;
    overflow: hidden;
    border-bottom: 1px solid ${p => p.theme.colors.border};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        transition: transform 400ms ${p => p.theme.ease.out};
    }
`;

const Tags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 4px 12px;
    padding: 8px 12px;
    border-bottom: 1px solid ${p => p.theme.colors.border};
    font-size: 0.875rem;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 12px;
    padding: 16px;

    h3 {
        font-size: 1.5rem;
        font-weight: 500;
    }
`;

const Links = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: auto;
    padding-top: 4px;
`;
