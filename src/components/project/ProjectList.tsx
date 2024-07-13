import React from 'react';
import ProjectCard from './ProjectCard';
import DreamDate from '../../assets/img/DreamDate.webp';
import Todo from "../../assets/img/Todo.webp";
import Video from "../../assets/img/Video.webp";
import {FlexUl} from "../FlexUl";

const data = [
    {
        languages: ['TypeScript','SCCS', 'Reactjs', 'JavaScript','Nodejs','Express','AWS','NPN Library',],
        title: 'Dream Date',
        description: 'Ecommerce project',
        linkLiveVersion: 'https://dreamydates.ca',
        linkGitHub: 'https://github.com/Martikk/DreamyDates',
        src: DreamDate,
        altForImg: 'Home screenshot for project Dream Date '
    },
    {
        languages: ['TypeScript','SCCS', 'Reactjs', 'JavaScript','Nodejs','Express','AWS','NPN Library',],
        title: 'Video Platform',
        description: 'BranFlex Video Sharing Platform Enhancement',
        linkLiveVersion: 'https://master.d3hz3i03c78cd3.amplifyapp.com/',
        linkGitHub: 'https://github.com/Martikk/BrainFlix',
        src: Video,
        altForImg: 'Home screenshot for project Dream Date '
    },
    {
        languages: ['TypeScript','SCCS', 'Reactjs', 'JavaScript','Nodejs','Express','AWS','NPN Library',],
        title: 'To-Do List',
        description: 'Todo List project',
        linkLiveVersion: 'https://main.d3sufhpecf7yrr.amplifyapp.com/',
        linkGitHub: 'https://github.com/Martikk/todo-frontend',
        src: Todo,
        altForImg: 'Home screenshot for project Dream Date '
    },
];

const ProjectList = () => {
    return (
<FlexUl direction={"row"} wrap={"wrap"} gap={"90px"} padding={"48px 0 0 0px"} >

            {data.map((project, index) => (
                <ProjectCard
                    key={index}
                    src={project.src}
                    title={project.title}
                    description={project.description}
                    languages={project.languages}
                    linkLiveVersion={project.linkLiveVersion}
                    linkGitHub={project.linkGitHub}
                    altForImg={project.altForImg}
                />
            ))}
</FlexUl>
    );
};

export default ProjectList;

