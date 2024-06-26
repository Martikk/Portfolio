import styled from 'styled-components';
import React from 'react';
import { FlexWrapper } from "./FlexWrapper";
import DreamDate from "../assets/img/DreamDate.webp";
import { ButtonStyled } from "../styles/Button .styled";
import { TextP } from "./TextP";
import { TextH3 } from "./TextH3";
import { FaGitSquare } from "react-icons/fa";
import { SiKdenlive } from "react-icons/si";




type ProjectCardProps = {
    width?: string;
    height?: string;
    padding?: string;
    gap?: string;
    borderColor?: string;
    background?: string;
    backgroundPosition?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
    title: string;
    description: string;
    languages: string[];
    linkLiveVersion: string;
    linkGitHub: string;
};

const ProjectCard = ({
                         width = "231px",
                         height = "121px",
                         padding,
                         gap,
                         borderColor = "gray",
                         background = DreamDate,
                         backgroundPosition = "center",
                         backgroundSize = "contain",
                         backgroundRepeat = "no-repeat",
                         title,
                         description,
                         languages = [],
                         linkLiveVersion,
                         linkGitHub
                     }: ProjectCardProps) => {
    return (
        <FlexWrapper padding={"48px 0 0 100px"}>
            <FlexWrapper width={width} borderColor={borderColor}>
                <ProjectCardDiv
                    width={width}
                    height={height}
                    background={background}
                    backgroundPosition={backgroundPosition}
                    backgroundSize={backgroundSize}
                    backgroundRepeat={backgroundRepeat}
                />
                <TextP borderColor={borderColor} padding={"8px"}>{languages.join(' ')}</TextP>
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

type ProjectCardDivProps = {
    width?: string;
    height?: string;
    padding?: string;
    gap?: string;
    borderColor?: string;
    background?: string;
    backgroundPosition?: string;
    backgroundSize?: string;
    backgroundRepeat?: string;
};

const ProjectCardDiv = styled.div<ProjectCardDivProps>`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    border: 1px solid ${props => props.theme.colors[props.borderColor as keyof typeof props.theme.colors] || props.borderColor || "gray"};
    background-image: ${props => `url(${props.background})` || 'none'};
    background-position: ${props => props.backgroundPosition || 'center'};
    background-size: ${props => props.backgroundSize || 'contain'};
    background-repeat: ${props => props.backgroundRepeat || 'no-repeat'};
    :hover {
        box-shadow: 0 0 20px #6fc5ff50;
        transform: scale(1.1);
        transition: box-shadow 0.4s ease-in-out;
    }
`;
