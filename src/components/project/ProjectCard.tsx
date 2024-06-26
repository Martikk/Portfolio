import React from 'react';
import { FlexWrapper } from "../FlexWrapper";
import { ButtonStyled } from "../../styles/Button .styled";
import { TextP } from "../TextP";
import { TextH3 } from "../TextH3";
import { FaGitSquare } from "react-icons/fa";
import { SiKdenlive } from "react-icons/si";
import {ProjectDivImg} from "./ProjectDivImg";



type ProjectCardProps = {
    background?: string;
    title: string;
    description: string;
    languages: string[];
    linkLiveVersion: string;
    linkGitHub: string;
};

const ProjectCard = ({
                         background,
                         title,
                         description,
                         languages = [],
                         linkLiveVersion,
                         linkGitHub
                     }: ProjectCardProps) => {
    return (
        <FlexWrapper padding={"48px 0 0 100px"}>
            <FlexWrapper width={"250px"} borderColor={"gray"}>
                <ProjectDivImg
                    background={background}
                />
                <TextP borderColor={"gray"} padding={"8px"}>{languages.join(' ')}</TextP>
                <FlexWrapper padding={"16px"}>
                    <TextH3>{title}</TextH3>
                    <TextP padding={"8px 0 0 0"}>{description}</TextP>
                    <FlexWrapper direction={"row"} padding={"16px 42px 0 0"} gap={"16px"}>
                        <ButtonStyled as="a" href={linkLiveVersion} borderColor="primary">Live <SiKdenlive />
                        </ButtonStyled>
                        <ButtonStyled as="a" href={linkGitHub} borderColor="primary">Github <FaGitSquare />
                        </ButtonStyled>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </FlexWrapper>
    );
};

export default ProjectCard;
