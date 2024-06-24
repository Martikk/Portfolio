import React from 'react';
import styled, { css } from "styled-components";
import Logo from "../../components/logo/Logo";
import Menu from "../../components/menu/Menu";
import SteledLinkIconHeader from "../../components/steledLinkIconHeader/SteledLinkIconHeader";

export const Header = () => {
    return (
        <Styledheader>
            <SteledLinkIconHeader/>
<Logo/>
<Menu/>
        </Styledheader>
    );
};

const Styledheader = styled.header `
    background-color: ${({theme}) => theme.colors.backgroundDark} ;
    display: flex;
    justify-content: space-between;
`
