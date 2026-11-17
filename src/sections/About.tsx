import React from 'react';
import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';
import aboutImage from '../assets/img/hero2.webp';
import { Button, Container, Dots, Reveal, Section, SectionTitle } from '../components/ui';

export const About = () => (
    <Section id="about-me">
        <Container>
            <Layout>
                <div>
                    <SectionTitle>about-me</SectionTitle>
                    <Copy>
                        <Reveal as="p">Hello, I’m Alex!</Reveal>
                        <Reveal as="p" delay={60}>
                            I’m a full-stack developer based in Vancouver, Canada. I build responsive web apps
                            from scratch and turn them into modern, user-friendly experiences.
                        </Reveal>
                        <Reveal as="p" delay={120}>
                            Turning ideas into working products is what I enjoy most. I’ve shipped e-commerce,
                            video and productivity apps with React and Node.js, and I’m always learning the
                            newest tools and frameworks.
                        </Reveal>
                        <Reveal delay={180}>
                            <Button href="https://www.linkedin.com/in/martishyn/" target="_blank" rel="noreferrer">
                                Read more <FiArrowRight aria-hidden />
                            </Button>
                        </Reveal>
                    </Copy>
                </div>

                <Reveal delay={80}>
                    <Figure>
                        <Dots $cols={5} $rows={5} $top="16%" $left="-4%" />
                        <img src={aboutImage} alt="Alex Martishyn" width={408} height={611} loading="lazy" />
                        <Dots $cols={4} $rows={4} $right="-2%" $bottom="30%" />
                    </Figure>
                </Reveal>
            </Layout>
        </Container>
    </Section>
);

const Layout = styled.div`
    display: grid;
    gap: 40px;
    align-items: center;

    @media (min-width: ${p => p.theme.bp.md}) {
        grid-template-columns: 1.2fr 1fr;
        gap: 48px;
    }
`;

const Copy = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    max-width: 56ch;
`;

const Figure = styled.div`
    position: relative;
    max-width: 340px;
    margin-inline: auto;
    border-bottom: 1px solid ${p => p.theme.colors.primary};

    img {
        width: 100%;
        height: auto;
        aspect-ratio: 408 / 520;
        object-fit: cover;
        object-position: top;
    }
`;
