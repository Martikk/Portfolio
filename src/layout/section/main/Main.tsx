import React from 'react';
import styled  from "styled-components";
import heroimage from '../../../assets/img/hero.webp'
import Icon from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ButtonStyled} from "../../../styles/Button .styled";
import {AbsoluteDiv} from "../../../components/AbsoluteDiv";
import {RelativeDiv} from "../../../components/RelativeDiv";
import {FlexLink} from "../../../components/FlexLink";
import {SectionStyled} from "../../../components/SectionStyled";
import {TextP} from "../../../components/TextP";
import QuoteImage from "../../../assets/img/“.svg"; // Правильный путь к иконке


const Main = () => {
    return (
        <SectionStyled padding={"62px 0 0 0"}>

                <FlexWrapper direction={"row"} justify={"space-between"} gap={"200px"} wrap={"wrap"} alignItems={"center"}>

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

                            <FlexWrapper alignItems={"center"} padding={"8px"} direction={"row"}  gap={"10px"} borderColor={"gray"} width={"402px"} ><Icon iconId={'rectanglecolor'} width="16" height="17" viewBox="0 0 16 17"/>Currently working on <FlexLink href={"https://martikk.github.io/Portfolio/"}>Portfolio</FlexLink></FlexWrapper>
                    </FlexWrapper>

                </FlexWrapper>

            <FlexWrapper alignItems={"flex-end"} padding={"120px 20% 0 0"}>
                <QuoteWrapper>
                    <TextP color={"white"}>With great power comes great electricity bill</TextP>
                </QuoteWrapper>
                <StyleCite>- Dr. Who</StyleCite>
            </FlexWrapper>

        </SectionStyled>
    );
};

export default Main;

const TextH1 = styled.h1`
    color: ${props => props.theme.colors.primary};
`;

const StyleCite= styled.cite`
    padding: 16px;
    border: 1px solid ${props => props.theme.colors.gray};
    margin: 0 0 0 250px;
    border-top: none;
    color: ${props => props.theme.colors.white};
`

const QuoteWrapper = styled.div`
    position: relative;
    padding: 32px;
    gap: 10px;
    border: 1px solid ${props => props.theme.colors.gray};
    width: 512px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 26px; 
        height: 21px; 
        background-image: url(${QuoteImage});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    &::before {
        top: -15px;
        left: 30px;
    }

    &::after {
        bottom: -10px;
        right: 13px;
    }
`;