import React from 'react';
import styled from "styled-components";
import Logo from "../../../components/logo/Logo";
import {FlexLink} from "../../../components/FlexLink";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {TextP} from "../../../components/TextP";
import {ButtonStyled} from "../../../styles/Button .styled";
import {PiTelegramLogoLight} from "react-icons/pi";
import {MdOutlineMailOutline} from "react-icons/md";
import Icon from "../../../components/icon/Icon";
import {TextH3} from "../../../components/TextH3";

const Footer = () => {
    return (
        <StyledFootr>
        <StyledFootrDiv>
            <FlexWrapper direction={"column"} >
                <FlexWrapper direction={"row"} alignItems={"center"} gap={"2rem"}>
                    <Logo/>
                    <FlexLink href={"alex@martishyn.ca"} padding={"4px 0 0 0"} color={"white"}>alex@martishyn.ca</FlexLink>
                </FlexWrapper>
                <TextP padding={"0 0 20px 170px"} color={"white"}>Web designer and front-end developer</TextP>
            </FlexWrapper>

<FlexWrapper padding={"20px 200px 0 0 "} alignItems={"center"} gap={"1rem"}>
    <TextH3 color={"white"}>Media</TextH3>
    <FlexWrapper direction={"row"} gap={"10px"} >
        <FlexLink href={"https://www.linkedin.com/in/martishyn"}>
            <Icon iconId={'linkedin'} width="32" height="32" viewBox="0 0 32 32" />
        </FlexLink>
        <FlexLink href={"https://t.me/alexinis"}>
            <Icon iconId={'telegrram'} width="32" height="32" viewBox="0 0 32 32" />
        </FlexLink>
        <FlexLink href={"https://github.com/Martikk"}>
            <Icon iconId={'github'} width="32" height="32" viewBox="0 0 32 32" />
        </FlexLink>
    </FlexWrapper>
</FlexWrapper>
        </StyledFootrDiv>
    <Copyright>© Copyright 2022. Made by Alex Martishyn</Copyright>
        </StyledFootr>
    );
};

export default Footer;

const StyledFootrDiv = styled.div`
display: flex;
    justify-content: space-between;
`


const Copyright = styled.small`
    margin: 0 auto;
    color: ${props => props.theme.colors.gray};
`

const StyledFootr = styled.footer`
    margin-top: 145px;
    padding-bottom: 32px;
    border-top: 1px solid ${props => props.theme.colors.gray};
    display: flex;
    flex-direction: column;
`