import React from 'react';
import Logo from "../../components/logo/Logo";
import Menu from "../../components/menu/Menu";
import SteledLinkIconHeader from "./SteledLinkIconHeader";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Header = () => {
    return (
        <FlexWrapper direction={"row"} justify={"space-between"}>
                <SteledLinkIconHeader/>
                <Logo/>
                <Menu/>
            </FlexWrapper>
    );
};

