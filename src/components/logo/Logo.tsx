import React from 'react';
import Icon from "../icon/Icon";
import styled from "styled-components";
import {FlexLink} from "../FlexLink";

const Logo = () => {
    return (
            <FlexLink href='#'>
                <Icon iconId={'logo'}  margin=" 32px 0 0 171px"/>
                <StyledtextLogo>Alex Martishyn</StyledtextLogo>
            </FlexLink>
    );
};

export default Logo;

const StyledtextLogo = styled.span`
    color: ${({theme}) => theme.colors.white};
    font-size: 1rem;
    margin-top: 32px;
`
