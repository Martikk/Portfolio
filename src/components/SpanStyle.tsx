import styled from 'styled-components';

type SpanStyleProps = {
    padding?: string;
    borderColor?: string;
    width?: string;
    height?: string;
    spanColor?: string;
    margin?: string;
    borderTop?: string;
};

export const SpanStyle = styled.span<SpanStyleProps>`
    padding: ${props => props.padding || "0"};
    border: 1px solid ${props => props.theme.colors[props.borderColor as keyof typeof props.theme.colors] || props.borderColor || "none"};
    width: ${props => props.width || "auto"};
    height: ${props => props.height || "auto"};
    margin: ${props => props.margin || "0"};
    border-top: ${props => props.borderTop || 'none'};
    && {
        color: ${props => props.theme.colors[props.spanColor as keyof typeof props.theme.colors] || props.spanColor || "#FFFFFF"};
    }
`;
