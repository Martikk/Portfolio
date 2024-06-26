import styled from "styled-components";

type AbsoluteDivProps = {
    padding?: string;
    index?: string;
    width?: string;
    height?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
};

export const AbsoluteDiv = styled.div<AbsoluteDivProps>`
    position: absolute;
    padding: ${props => props.padding || '0'};
    z-index: ${props => props.index || '0'};
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    top: ${props => props.top || 'auto'};
    left: ${props => props.left || 'auto'};
    right: ${props => props.right || 'auto'};
    bottom: ${props => props.bottom || 'auto'};
`;