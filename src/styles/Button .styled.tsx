import styled from "styled-components";


type ButtonStyledPropsType = {
    fontSize?: string;
    borderColor?: string;
    padding?: string
    width?: string
    height?: string
};

export const ButtonStyled = styled.button<ButtonStyledPropsType>`
    
    border: 1px solid ${(props)=> props.theme.colors[props.borderColor as keyof typeof props.theme.colors] || props.borderColor ||"#FFFFFF"};
    color: ${(props)=>props.color|| "#FFFFFF"};
    font-size: ${(props)=>props.fontSize || "1rem"};
    padding: ${props => props.padding || "8px 16px"};
    width: ${props => props.width || "148px"};
    height: ${props => props.height || "37px"};
    
    gap: 10px;
    text-decoration: none;
    display: flex;
    align-items: center;
    
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }
`