import React from 'react';
import styled, {css} from "styled-components";
import heroimage from '../../../assets/img/hero.webp'
import Icon from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Main = () => {
    return (
        <MenuMain>
            <FlexWrapper direction={"row"} justify={"space-between"}>
                <FlexWrapper padding={"0 0 0 122px"}>
                    <span>Alex Martishyn is a <h1>front-end developer</h1></span>
                    <span>He crafts responsive websites where technologies meet creativity</span>
                    <button>Contact Me</button>
                </FlexWrapper>
                <FlexWrapper padding={"0 171px 0 0"}>
                    <MainImage/>
                    <Icon iconId={'dots'} width="84" height="84" viewBox="0 0 84 84" />
                    <Icon iconId={'logohero'} width="156" height="156" viewBox="0 0 156 156" />
                    <FlexWrapper padding={"10px"} direction={"row"}  gap={"10px"} border={"1px solid gray"}><Icon iconId={'rectanglecolor'} width="16" height="17" viewBox="0 0 16 17"/>Currently working on Portfolio</FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper direction={"row"} justify={"flex-end"} >
                <FlexWrapper padding={"0 33% 0 0 "}>
                    <FlexWrapper padding={"10px"} gap={"10px"} border={"1px solid gray"}>With great power comes great electricity bill </FlexWrapper>
                    <span>- Dr. Who</span>
                </FlexWrapper>
                <Icon iconId={'square'} width="82" height="91" viewBox="0 0 82 91" />
            </FlexWrapper>
        </MenuMain>
    );
};

export default Main;

const MainImage = styled.div`
    width: 457px;
    height: 386px;
    flex-shrink: 0;
    background: url(${heroimage}) -130.245px -75.697px / 142.25% 210.523% no-repeat;
`;

const MenuMain = styled.div`
    margin-top: 62px;
    padding-left: 42px;
`