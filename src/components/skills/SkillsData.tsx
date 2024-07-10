import React from 'react';
import styled from "styled-components";

const SkillsData = () => {
    return (
        <>
            {data.map((category, index) => (
                <Card key={index}>
                    <Title>{category.title}</Title>
                    <Content>{category.items.join(' ')}</Content>
                </Card>
            ))}
        </>
    );
};

export default SkillsData;



const data = [
    {
        title: 'Languages',
        items: ['TypeScript', 'Lua', 'Python', 'JavaScript'],
    },
    {
        title: 'Databases',
        items: ['SQLite', 'PostgreSQL', 'Mongo'],
    },
    {
        title: 'Tools',
        items: ['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font Awesome'],
    },
    {
        title: 'Other',
        items: ['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja'],
    },
    {
        title: 'Frameworks',
        items: ['React', 'Vue', 'Disnake', 'Discord.js', 'Flask', 'Express.js'],
    },
];

const Card = styled.li`
    border: 1px solid ${props => props.theme.colors.border || "gray"};
    width: 178px;
`;

const Title = styled.h3`
    padding: 8px;
    margin-bottom: 10px;
    color: ${props => props.theme.colors.text || "white"};
    border-bottom: 1px solid ${props => props.theme.colors.border || "gray"};
    font-family: "Fira Code";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const Content = styled.p`
    color: ${props => props.theme.colors.text || "gray"};
    padding: 8px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family: "Fira Code";
`;