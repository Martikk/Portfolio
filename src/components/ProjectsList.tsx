import React from 'react';
import ProjectCard from './ProjectCard';
import DreamDate from '../assets/img/DreamDate.webp';
import {FlexWrapper} from "./FlexWrapper";
import Todo from "../assets/img/Todo.webp";
import Video from "../assets/img/Video.webp";

const data = [
    {
        languages: ['TypeScript','SCCS', 'Reactjs', 'JavaScript','Nodejs','Express','AWS','NPN Library',],
        title: 'Dream Date',
        description: 'Ecommerce project',
        linkLiveVersion: 'https://dreamydates.ca',
        linkGitHub: 'https://github.com/Martikk/DreamyDates',
        background: DreamDate,
    },
    {
        languages: ['TypeScript','SCCS', 'Reactjs', 'JavaScript','Nodejs','Express','AWS','NPN Library',],
        title: 'Video Platform',
        description: 'BranFlex Video Sharing Platform Enhancement',
        linkLiveVersion: 'https://master.d3hz3i03c78cd3.amplifyapp.com/',
        linkGitHub: 'https://github.com/Martikk/BrainFlix',
        background: Video,
    },
    {
        languages: ['TypeScript','SCCS', 'Reactjs', 'JavaScript','Nodejs','Express','AWS','NPN Library',],
        title: 'To-Do List',
        description: 'Todo List project',
        linkLiveVersion: 'https://main.d3sufhpecf7yrr.amplifyapp.com/',
        linkGitHub: 'https://github.com/Martikk/todo-frontend',
        background: Todo,
    },
];

const ProjectsList = () => {
    return (
<FlexWrapper direction={"row"} wrap={"wrap"} justify={"space-between"}>

            {data.map((project, index) => (
                <ProjectCard
                    key={index}
                    width="234px"
                    height="160px"
                    borderColor="gray"
                    background={project.background}
                    title={project.title}
                    description={project.description}
                    languages={project.languages}
                    linkLiveVersion={project.linkLiveVersion}
                    linkGitHub={project.linkGitHub}
                />
            ))}
</FlexWrapper>
    );
};

export default ProjectsList;
