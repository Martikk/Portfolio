import React from 'react';
import styled, { css } from "styled-components";

const Menu = () => {
    return (
        <SteledMenu>
            <ul>
                <li><a href="#">#home</a></li>
                <li><a href="#">#works</a></li>
                <li><a href="#">#about-me</a></li>
                <li><a href="#">#contacts</a></li>
            </ul>
        </SteledMenu>
    );
};

export default Menu;

const SteledMenu = styled.nav`
ul {
    display: flex;
    gap: 30px;
    justify-content: flex-end;
    padding-right: 171px;
    list-style: none;
    margin-top: 32px;
}
a{
    text-decoration: none;
    color: ${({theme})=>theme.colors.gray};
    :hover {
        color: ${({theme})=>theme.colors.white};
        transition: color 0.3s ease;
    }
};
`