import styled from "styled-components";

type ProjectImgProps = {
    width?: string;
    height?: string;
    padding?: string;
    gap?: string;
    borderColor?: string;
    backgroundSize?: string;
    src?: string;
    alt: string;
};

export const ProjectImg = styled.img<ProjectImgProps>`
    width: ${props => props.width || '310px'};
    height: ${props => props.height || '200px'};
    border: 1px solid ${props => props.theme.colors[props.borderColor as keyof typeof props.theme.colors] || props.borderColor || "gray"};
    src: ${props => props.src || ""};
    background-size: ${props => props.backgroundSize || 'cover'};
    transition: transform 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    :hover {
        box-shadow: 0 0 20px #6fc5ff50;
        transform: scale(1.1);
    }
`;
