import styled from "styled-components";

type TextPProps = {
    borderColor?: string
    padding?: string
    margin?: string
    color?: string
};

export const TextP = styled.p<TextPProps>`
    padding: ${props => props.padding || "0"};
    border-bottom: 1px solid ${props => props.theme.colors[props.borderColor as keyof typeof props.theme.colors] || "none"};
    color: ${props => props.color || "gray"};
    margin: ${props => props.margin || "0"};
`;