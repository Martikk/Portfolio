import styled from 'styled-components';

type FlexLiProps = {
    direction?: string
    justify?: string
    alignItems?: string
    wrap?: string
    padding?: string
    gap?: string
    border?:string
    borderColor?: string;
    width?: string
    height?: string
    spanColor?: string
}


export const FlexLi = styled.li<FlexLiProps>`
display: flex;
flex-direction: ${props => props.direction || "column"};
    justify-content: ${props => props.justify || "flex-start"};
align-items: ${props => props.alignItems || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    padding: ${props => props.padding || "0"};
    gap: ${props => props.gap || "0"};
    border: 1px solid ${(props)=> props.theme.colors[props.borderColor as keyof typeof props.theme.colors] || props.borderColor ||"none"};
    width: ${props => props.width || "auto"};
    height: ${props => props.height || "auto"};
    list-style-type: none;
    span {
        color: ${props=> props.theme.colors[props.spanColor as keyof typeof props.theme.colors] ||props.spanColor || "#FFFFFF"}; ;
    }
`
