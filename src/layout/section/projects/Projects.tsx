import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SpanStyle} from "../../../components/SpanStyle";
import Icon from "../../../components/icon/Icon";
import {ButtonStyled} from "../../../styles/Button .styled";
import styled from "styled-components";
import { CgArrowRightR } from "react-icons/cg";
import {SectionTitle} from "../../../components/SectionTitle";
import ProjectList from "../../../components/project/ProjectList";
import {RelativeDiv} from "../../../components/RelativeDiv";
import {AbsoluteDiv} from "../../../components/AbsoluteDiv";




const Projects = () => {
    return (
        <ProjectSection>
            <FlexWrapper padding={"106px 100px 0 100px"} >
                <FlexWrapper direction={"row"} justify={"space-between"} >
                    <FlexWrapper direction={"row"} alignItems={"center"} gap={"16px"} >
                        <SectionTitle><SpanStyle spanColor={"primary"}>#</SpanStyle>projects</SectionTitle>
                        <Icon iconId={'line7'} width="511" height="2" viewBox="0 0 511 2" />
                    </FlexWrapper>
                    <ButtonStyled as="a" href="https://github.com/Martikk?tab=repositories" borderColor="none">View all <CgArrowRightR /></ButtonStyled>
                </FlexWrapper>
            </FlexWrapper>
            <RelativeDiv>
                <ProjectList />
                <AbsoluteDiv right={"0px"} bottom={"100px"}>
                    <Icon iconId={'square'} width="82" height="91" viewBox="0 0 82 91" />
                </AbsoluteDiv>
            </RelativeDiv>
        </ProjectSection>
    );
};

export default Projects;

const ProjectSection = styled.section`
`

