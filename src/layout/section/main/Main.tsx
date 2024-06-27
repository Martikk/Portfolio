import React from 'react';
import styled  from "styled-components";
import heroimage from '../../../assets/img/hero.webp'
import Icon from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ButtonStyled} from "../../../styles/Button .styled";
import {SpanStyle} from "../../../components/SpanStyle";
import {AbsoluteDiv} from "../../../components/AbsoluteDiv";
import {RelativeDiv} from "../../../components/RelativeDiv";
import {FlexLink} from "../../../components/FlexLink";
import {SectionStyled} from "../../../components/SectionStyled";
import {TextP} from "../../../components/TextP";

const Main = () => {
    return (
        <SectionStyled margin={"62px 0 0 0"}>
            <FlexWrapper alignItems={"center"}>

            <FlexWrapper direction={"row"} justify={"space-between"} gap={"10px"}>
                <FlexWrapper gap={"24px"} justify={"center"}>
                    <TextP color={"white"}>Alex Martishyn is a <TextH1>front-end developer</TextH1></TextP>
                    <TextP>He crafts responsive websites where technologies<br/> meet creativity</TextP>
                    <ButtonStyled as="a" href="#" borderColor="primary">Contact Me</ButtonStyled>
                </FlexWrapper>
                <FlexWrapper>
                    <RelativeDiv width={"457px"} height={"386px"} background={`url(${heroimage}) -130.245px -75.697px / 142.25% 210.523% no-repeat`}>
                        <AbsoluteDiv padding={"84px 0 0 0"} index={"-1"}>
                            <Icon iconId={'logohero'} width="156" height="156" viewBox="0 0 156 156" />
                        </AbsoluteDiv>
                        <AbsoluteDiv padding={"246px 0 0 357px"}>
                            <Icon iconId={'dots'} width="84" height="84" viewBox="0 0 84 84" />
                        </AbsoluteDiv>
                    </RelativeDiv>
                    <FlexWrapper alignItems={"center"} >
                        <FlexWrapper alignItems={"center"} padding={"8px"} direction={"row"}  gap={"10px"} borderColor={"gray"} width={"402px"} ><Icon iconId={'rectanglecolor'} width="16" height="17" viewBox="0 0 16 17"/>Currently working on <FlexLink href={"https://martikk.github.io/Portfolio/"}>Portfolio</FlexLink></FlexWrapper>
                    </FlexWrapper>
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
                <AbsoluteDiv width={"25.472px"} height={"20.704px"} bottom={"-100px"} right={"55px"}>
                    <Icon iconId={'square'} width="82" height="91" viewBox="0 0 82 91" />
                </AbsoluteDiv>

            </FlexWrapper>
        </SectionStyled>
    );
};

export default Main;

const TextH1 = styled.h1`
    color: ${props => props.theme.colors.primary};
`;
