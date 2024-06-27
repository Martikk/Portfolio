import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {RelativeDiv} from "../../../components/RelativeDiv";
import {AbsoluteDiv} from "../../../components/AbsoluteDiv";
import Icon from "../../../components/icon/Icon";
import {SpanStyle} from "../../../components/SpanStyle";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {ButtonStyled} from "../../../styles/Button .styled";
import heroimage from "../../../assets/img/hero2.webp";
import {TextP} from "../../../components/TextP";
import { LiaReadme } from "react-icons/lia";



const About = () => {
    return (
        <SkillsSection>
            <FlexWrapper alignItems={"flex-start"}>
                    <FlexWrapper direction={"row"} alignItems={"center"} gap={"16px"} padding={"0 0 16px 0 "} >
                        <SectionTitle><SpanStyle spanColor={"primary"}>#</SpanStyle>about-me</SectionTitle>
                        <Icon iconId={'line7'}  width="239" height="2" viewBox="0 0 239 2"  />
                    </FlexWrapper>

                <FlexWrapper width={"515px"} gap={"24px"} justify={"center"} >
                    <TextP>Hello, i’m Alex!</TextP>
                        <TextP>
                            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                        </TextP>
                        <TextP>
                            Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                        </TextP>
                        <ButtonStyled as="a" href="#" borderColor="primary">Read more <LiaReadme /></ButtonStyled>
                    <AbsoluteDiv left={"-30px"}>`
                        <Icon iconId={'square'} width="155" height="155" viewBox="0 0 239 2" />
                    </AbsoluteDiv>
                </FlexWrapper>


            </FlexWrapper>

                    <FlexWrapper>
                        <RelativeDiv width={"343px"} height={"507px"} background={`url(${heroimage})  50% / cover no-repeat`}>
                            <AbsoluteDiv padding={"84px 0 0 0"}>`
                                <Icon iconId={'dots'} width="84" height="84" viewBox="0 0 84 84" />
                            </AbsoluteDiv>

                            <AbsoluteDiv right={"18px"} bottom={"170px"}>`
                                <Icon iconId={'dotes30'} width="84" height="84" viewBox="0 0 84 84" />
                            </AbsoluteDiv>

                            <AbsoluteDiv right={"-90px"} bottom={"100px"}>`
                                <Icon iconId={'dotes31'} width="84" height="84" viewBox="0 0 84 84" />
                            </AbsoluteDiv>
                            <AbsoluteDiv right={"35px"} bottom={"-4px"}>
                                <Icon iconId={'line7'}  width="239" height="2" viewBox="0 0 239 2" />
                            </AbsoluteDiv>
                        </RelativeDiv>
                    </FlexWrapper>

        </SkillsSection>
    );
};

export default About;

const SkillsSection = styled.section`
    display: flex;
    justify-content: space-around;
    padding: 112px 0 0 0;
`