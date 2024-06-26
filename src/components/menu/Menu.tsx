import React from 'react';
import styled, { css } from "styled-components";
import {SpanStyle} from "../SpanStyle";

const Menu = () => {
    return (
        <SteledMenu>
            <ul>
                <li><a href="#"><SpanStyle spanColor={"primary"}>#</SpanStyle>home</a></li>
                <li><a href="#"><SpanStyle spanColor={"primary"}>#</SpanStyle>works</a></li>
                <li><a href="#"><SpanStyle spanColor={"primary"}>#</SpanStyle>about-me</a></li>
                <li><a href="#"><SpanStyle spanColor={"primary"}>#</SpanStyle>contacts</a></li>
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
    color: ${(props) => props.color || "#ABB2BF"};
    
    :hover {
        color: ${(props) => props.color || "#fff"};
        transition: color 0.3s ease;
    }
};
`