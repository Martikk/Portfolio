import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {AbsoluteDiv} from "../../../components/AbsoluteDiv";
import Icon from "../../../components/icon/Icon";
import {SpanStyle} from "../../../components/SpanStyle";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {ButtonStyled} from "../../../styles/Button .styled";
import {TextP} from "../../../components/TextP";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiTelegramLogoLight } from "react-icons/pi";




const Contact = () => {
    return (
        <SkillsSection>
            <FlexWrapper alignItems={"flex-start"}>
                <FlexWrapper direction={"row"} alignItems={"center"} gap={"16px"} padding={"0 0 16px 0 "} >
                    <SectionTitle><SpanStyle spanColor={"primary"}>#</SpanStyle>contacts</SectionTitle>
                    <Icon iconId={'line7'}  width="239" height="2" viewBox="0 0 239 2"  />
                </FlexWrapper>

                <FlexWrapper width={"515px"} gap={"24px"} justify={"center"} >
                    <TextP>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</TextP>
                    <ButtonStyled as="a" href="#" borderColor="primary">Messege Me</ButtonStyled>
                    <AbsoluteDiv left={"-30px"}>`
                        <Icon iconId={'dotes31'} width="155" height="155" viewBox="0 0 239 2" />
                    </AbsoluteDiv>
                </FlexWrapper>

            </FlexWrapper>

<FlexWrapper padding={"80px 0 0 0"}>

    <FlexWrapper borderColor={"gray"} padding={"10px"}>
        <TextP>Message me here</TextP>
        <ButtonStyled as="a" href="https://t.me/alexinis" borderColor="none" width="auto">
            <PiTelegramLogoLight /> @alexinis
        </ButtonStyled>
        <ButtonStyled as="a" href="mailto:ale@martishyn.ca" borderColor="none" width="auto">
            <MdOutlineMailOutline /> ale@martishyn.ca
        </ButtonStyled>
    </FlexWrapper>

</FlexWrapper>


        </SkillsSection>
    );
};

export default Contact;

const SkillsSection = styled.section`
    display: flex;
    justify-content: space-around;
    padding: 112px 0 0 0;
`