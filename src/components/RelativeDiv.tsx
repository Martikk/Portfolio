import styled from 'styled-components';

type RelativeDivProps = {
    width?: string;
    height?: string;
    background?: string;
    padding?: string;
    gap?: string;
    borderColor?: string;
};

export const RelativeDiv = styled.div<RelativeDivProps>`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    flex-shrink: 0;
    background: ${props => props.background || "none"};
    position: relative;
    padding: ${props => props.padding || "0"};
    gap: ${props => props.gap || "0"};
    border: 1px solid ${props => props.theme.colors[props.borderColor as keyof typeof props.theme.colors] || props.borderColor || "none"};
`;