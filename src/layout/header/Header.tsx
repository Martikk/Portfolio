import React from 'react';
import Logo from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import SteledLinkIconHeader from "./StyledLinkIconHeader";
import {FlexWrapper} from "../../components/FlexWrapper";

const items = [
    { name: "home", href: "#home" },
    { name: "works", href: "#works" },
    { name: "about-me", href: "#about-me" },
    { name: "contacts", href: "#contacts" }
];

export const Header = () => {
    return (
        <FlexWrapper direction={"row"} justify={"space-between"}>
                <SteledLinkIconHeader/>
                <Logo/>
            <Menu menuItems={items} />
            </FlexWrapper>
    );
};

