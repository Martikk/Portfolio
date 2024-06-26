import React from 'react';
import styled, {css} from "styled-components";
import heroimage from '../../../assets/img/hero.webp'
import Icon from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ButtonStyled} from "../../../styles/Button .styled";
import {SpanStyle} from "../../../components/SpanStyle";
import {AbsoluteDiv} from "../../../components/AbsoluteDiv";
import {RelativeDiv} from "../../../components/RelativeDiv";

const Main = () => {
    return (
        <MenuMain>
            <FlexWrapper direction={"row"} justify={"space-between"} gap={"10px"}>
                <FlexWrapper padding={"80px 0 0 122px"} gap={"24px"}>
                    <span>Alex Martishyn is a <h1>front-end developer</h1></span>
                    <span>He crafts responsive websites where technologies meet creativity</span>
                    <ButtonStyled as="a" href="#" borderColor="primary">Contact Me</ButtonStyled>
                </FlexWrapper>
                <FlexWrapper padding={"0 171px 0 0"}>
                    <RelativeDiv width={"457px"} height={"386px"} background={`url(${heroimage}) -130.245px -75.697px / 142.25% 210.523% no-repeat`}>
                        <AbsoluteDiv padding={"84px 0 0 0"} index={"-1"}>
                            <Icon iconId={'logohero'} width="156" height="156" viewBox="0 0 156 156" />
                        </AbsoluteDiv>
                        <AbsoluteDiv padding={"246px 0 0 357px"}>
                            <Icon iconId={'dots'} width="84" height="84" viewBox="0 0 84 84" />
                        </AbsoluteDiv>
                    </RelativeDiv>
                    <FlexWrapper padding={"0 0 0 20px"} >
                        <FlexWrapper padding={"8px"} direction={"row"}  gap={"10px"} borderColor={"gray"} width={"402px"} ><Icon iconId={'rectanglecolor'} width="16" height="17" viewBox="0 0 16 17"/>Currently working on <SpanStyle>Portfolio</SpanStyle></FlexWrapper>
                    </FlexWrapper>
                    </FlexWrapper>
            </FlexWrapper>

            <FlexWrapper direction={"row"} justify={"flex-end"} padding={"120px 0 0 0"} >

                <FlexWrapper alignItems={"flex-end"} padding={"0 20% 0 0"}>

                    <RelativeDiv padding={"32px"} gap={"10px"} borderColor={"gray"} width={"512px"} height={"75px"}>With great power comes great electricity bill
                        <AbsoluteDiv width={"25.472px"} height={"20.704px"} top={"-15px"}>
                            <Icon iconId={'quotes'} width="26" height="21" viewBox="0 0 26 21" />
                        </AbsoluteDiv>
                        <AbsoluteDiv width={"25.472px"} height={"20.704px"} bottom={"-10px"} right={"15px"}>
                            <Icon iconId={'quotes'} width="26" height="21" viewBox="0 0 26 21" />
                        </AbsoluteDiv>
                    </RelativeDiv>
                    <SpanStyle margin={"0 0 0 250px"} borderColor={"gray"} padding={"16px"}  spanColor={"white"}>
                        - Dr. Who
                    </SpanStyle>
                </FlexWrapper>
                <Icon iconId={'square'} width="82" height="91" viewBox="0 0 82 91" />
            </FlexWrapper>
        </MenuMain>
    );
};

export default Main;

const MenuMain = styled.section`
    margin-top: 62px;
    padding-left: 42px;
`


