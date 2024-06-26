import styled from 'styled-components';

type FlexLinkProps = {
    direction?: string
    justify?: string
    alignItems?: string
    wrap?: string
    padding?: string
    gap?: string
    border?:string
    decoration?: string
    content?: string
    width?: string
    height?: string
    borderColor?: string;
}


export const FlexLink = styled.a<FlexLinkProps>`
display: flex;
flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
align-items: ${props => props.alignItems || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    padding: ${props => props.padding || "0"};
    border: ${props => props.border || "none"};
    gap: ${props => props.gap || "0"};
    text-decoration: ${props => props.decoration || "none"};
    align-content: ${props => props.alignItems || "center"};
    width: ${props => props.width || "auto"};
    height:${props => props.height || "auto"};
    border: 1px solid ${(props)=> props.theme.colors[props.borderColor as keyof typeof props.theme.colors] || props.borderColor ||"none"};
`
