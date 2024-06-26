import styled from "styled-components";

 type SectionStyledProps = {
     align?: string
     direction?: string
     padding?: string
     position?: string
     margin?: string
 }

export const SectionStyled = styled.section<SectionStyledProps>`
    display: flex;
    align-items: ${props=> props.align || "center"};
    flex-direction: ${props => props.direction || "column"};
    position: ${props => props.position || "static"};
    padding: ${props => props.padding || "o"};
    margin: ${props => props.margin || "0"};
`;