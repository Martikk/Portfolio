import React from 'react';
import styled  from "styled-components";
import {SpanStyle} from "../SpanStyle";

type MenuItem = {
    name: string;
    href: string;
};

export const Menu = (props: { menuItems: Array<MenuItem> }) => {
    return (
        <SteledMenu>
            <ul>
                {props.menuItems.map((item, index) => (
                    <li key={index}>
                        <SpanStyle spanColor="primary">#</SpanStyle>
                        <a href={item.href}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </SteledMenu>
    );
};


const SteledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: flex-end;
        padding-right: 171px;
        list-style: none;
        margin-top: 32px;
    }

    a {
        text-decoration: none;
        color: ${(props) => props.color || "#ABB2BF"};

        :hover {
            color: ${(props) => props.color || "#fff"};
        transition: color 0.3s ease;
    }
};
`