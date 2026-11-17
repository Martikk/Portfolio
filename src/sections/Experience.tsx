import React from 'react';
import styled from 'styled-components';
import { FiArrowUpRight, FiFileText } from 'react-icons/fi';
import { Reveal, Section, Tag, TagList } from '../components/ui';
import { education, experience, RESUME } from '../data';
import { hover } from '../styles/Theme.styled';

export const Experience = () => (
    <Section id="experience" label="Experience">
        <List>
            {experience.map((role, i) => (
                <Reveal as="li" key={role.period} delay={i * 60}>
                    <Row>
                        <Period>{role.period}</Period>
                        <div>
                            <h3>
                                {role.title}
                                <Org> · {role.org}</Org>
                            </h3>
                            <Place>{role.place}</Place>
                            <p>{role.summary}</p>
                            <TagList aria-label="Focus">
                                {role.tags.map(t => (
                                    <Tag key={t}>{t}</Tag>
                                ))}
                            </TagList>
                        </div>
                    </Row>
                </Reveal>
            ))}
        </List>

        <Reveal>
            <EduTitle>Education &amp; certifications</EduTitle>
            <Edu>
                {education.map(e => (
                    <li key={e.title}>
                        <span>{e.year}</span>
                        <div>
                            <b>{e.title}</b>
                            <em>{e.org}</em>
                        </div>
                    </li>
                ))}
            </Edu>
        </Reveal>

        <ResumeLink href={RESUME} target="_blank" rel="noreferrer">
            <FiFileText aria-hidden /> View full résumé <FiArrowUpRight aria-hidden />
        </ResumeLink>
    </Section>
);

const List = styled.ol`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const Row = styled.article`
    display: grid;
    gap: 6px;

    @media (min-width: 560px) {
        grid-template-columns: 120px 1fr;
        gap: 24px;
    }

    h3 {
        font-size: 1.0625rem;
        font-weight: 600;
        letter-spacing: -0.01em;
    }

    p {
        margin: 8px 0 12px;
        font-size: 0.9375rem;
    }
`;

const Period = styled.span`
    padding-top: 3px;
    color: ${p => p.theme.colors.faint};
    font-family: ${p => p.theme.font.mono};
    font-size: 0.75rem;
    letter-spacing: 0.04em;
    white-space: nowrap;
`;

const Org = styled.span`
    color: ${p => p.theme.colors.muted};
    font-weight: 500;
`;

const Place = styled.span`
    display: block;
    margin-top: 2px;
    color: ${p => p.theme.colors.faint};
    font-size: 0.8125rem;
`;

const EduTitle = styled.h3`
    margin: 56px 0 16px;
    color: ${p => p.theme.colors.faint};
    font-family: ${p => p.theme.font.mono};
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
`;

const Edu = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
        display: grid;
        gap: 2px;
        @media (min-width: 560px) {
            grid-template-columns: 120px 1fr;
            gap: 24px;
        }
    }

    span {
        color: ${p => p.theme.colors.faint};
        font-family: ${p => p.theme.font.mono};
        font-size: 0.75rem;
        padding-top: 3px;
    }

    b {
        display: block;
        color: ${p => p.theme.colors.text};
        font-size: 0.9375rem;
        font-weight: 500;
    }

    em {
        font-style: normal;
        font-size: 0.875rem;
    }
`;

const ResumeLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 40px;
    color: ${p => p.theme.colors.text};
    font-weight: 500;

    svg:last-child {
        transition: transform 200ms ${p => p.theme.ease.out};
    }

    ${hover} {
        &:hover { color: ${p => p.theme.colors.accent}; }
        &:hover svg:last-child { transform: translate(2px, -2px); }
    }
`;
