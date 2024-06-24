import React from 'react';
import Icon from "../icon/Icon";
import styled from "styled-components";

const Logo = () => {
    return (

        <SteledLink href='#'>
            <Icon iconId={'logo'} marginTop="32px" />
            <StyledtextLogo>Alex Martishyn</StyledtextLogo>
        </SteledLink>
    );
};

export default Logo;

const StyledtextLogo = styled.p`
    color: ${({theme}) => theme.colors.white};
    font-size: 1rem;
    margin-top: 32px;
`
const SteledLink = styled.a`
    
display: flex;
    align-content: center;
    text-decoration: none;
`
