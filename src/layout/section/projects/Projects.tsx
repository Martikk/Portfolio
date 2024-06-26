import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SpanStyle} from "../../../components/SpanStyle";
import Icon from "../../../components/icon/Icon";
import {ButtonStyled} from "../../../styles/Button .styled";
import { CgArrowRightR } from "react-icons/cg";
import {SectionTitle} from "../../../components/SectionTitle";
import ProjectList from "../../../components/project/ProjectList";
import {AbsoluteDiv} from "../../../components/AbsoluteDiv";
import {SectionStyled} from "../../../components/SectionStyled";




const Projects = () => {
    return (
        <SectionStyled padding={"106px"} position={"relative"}>
            <FlexWrapper>
                <FlexWrapper direction={"row"} justify={"space-between"} >
                    <FlexWrapper direction={"row"} alignItems={"center"} gap={"16px"} >
                        <SectionTitle><SpanStyle spanColor={"primary"}>#</SpanStyle>projects</SectionTitle>
                        <Icon iconId={'line7'} width="511" height="2" viewBox="0 0 511 2" />
                    </FlexWrapper>
                    <ButtonStyled as="a" href="https://github.com/Martikk?tab=repositories" borderColor="none">View all <CgArrowRightR /></ButtonStyled>
                </FlexWrapper>
            </FlexWrapper>
                <ProjectList />
                <AbsoluteDiv right={"0px"} bottom={"100px"} index={"-1"}>
                    <Icon iconId={'square'} width="82" height="91" viewBox="0 0 82 91" />
                </AbsoluteDiv>
        </SectionStyled>
    );
};

export default Projects;



