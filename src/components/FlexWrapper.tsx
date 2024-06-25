import styled from 'styled-components';

type FlexWrapperProps = {
    direction?: string
    justify?: string
    alignItems?: string
    wrap?: string
    padding?: string
    gap?: string
    border?:string
}


export const FlexWrapper = styled.div<FlexWrapperProps>`
display: flex;
flex-direction: ${props => props.direction || "column"};
    justify-content: ${props => props.justify || "flex-start"};
align-items: ${props => props.alignItems || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    padding: ${props => props.padding || "0"};
    border: ${props => props.border || "none"};
    gap: ${props => props.gap || "0"}
`
