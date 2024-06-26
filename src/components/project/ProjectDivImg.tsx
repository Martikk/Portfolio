import styled from "styled-components";

type ProjectDivImgProps = {
    width?: string;
    height?: string;
    padding?: string;
    gap?: string;
    borderColor?: string;
    background?: string;
    backgroundSize?: string;
};

export const ProjectDivImg = styled.div<ProjectDivImgProps>`
    width: ${props => props.width || '250px'};
    height: ${props => props.height || '121px'};
    border: 1px solid ${props => props.theme.colors[props.borderColor as keyof typeof props.theme.colors] || props.borderColor || "gray"};
    background-image: ${props => `url(${props.background})` || 'none'};
    background-size: ${props => props.backgroundSize || 'cover'};
    transition: transform 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    :hover {
        box-shadow: 0 0 20px #6fc5ff50;
        transform: scale(1.1);
    }
`;