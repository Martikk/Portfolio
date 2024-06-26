import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {RelativeDiv} from "../../../components/RelativeDiv";
import {AbsoluteDiv} from "../../../components/AbsoluteDiv";
import Icon from "../../../components/icon/Icon";
import {SpanStyle} from "../../../components/SpanStyle";
import SkillsData from "../../../components/skills/SkillsData";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";


const Skills = () => {
    return (
        <SkillsSection>

            <FlexWrapper direction={"row"}  padding={"106px 100px 0 100px"} alignItems={"center"}>
                <FlexWrapper>

                    <FlexWrapper direction={"row"} alignItems={"center"} gap={"16px"}>
                        <SectionTitle><SpanStyle spanColor={"primary"}>#</SpanStyle>skills</SectionTitle>
                        <Icon iconId={'line7'}  width="239" height="2" viewBox="0 0 239 2"  />
                    </FlexWrapper>

                    <FlexWrapper>
                        <RelativeDiv width={"380px"} height={"386px"}>
                            <AbsoluteDiv padding={"181px 0 0 27px"} index={"-1"}>
                                <Icon iconId={'logoSkills'} width="113" height="113" viewBox="0 0 114 114" />
                            </AbsoluteDiv>
                            <AbsoluteDiv padding={"50px 0 0 17px"}>
                                <Icon iconId={'dots'} width="63" height="63" viewBox="0 0 84 84" />
                            </AbsoluteDiv>
                            <AbsoluteDiv padding={"152px 0 0 170px"}>
                                <Icon iconId={'dots'} width="63" height="63" viewBox="0 0 84 84" />
                            </AbsoluteDiv>
                            <AbsoluteDiv padding={"12px 0 0 200px"}>
                                <Icon iconId={'rectangle24'} width="86" height="86" viewBox="0 0 86 86" />
                            </AbsoluteDiv>
                            <AbsoluteDiv padding={"210px 0 0 260px"}>
                                <Icon iconId={'rectangle23'} width="86" height="86" viewBox="0 0 86 86" />
                            </AbsoluteDiv>
                        </RelativeDiv>
                    </FlexWrapper>

                </FlexWrapper>
                <FlexWrapper justify={"flex-end"} gap={"10px"} wrap={"wrap"} direction={"row"} alignItems={"flex-start"}>
                    <SkillsData/>
                </FlexWrapper>

            </FlexWrapper>
        </SkillsSection>
    );
};

export default Skills;

const SkillsSection = styled.section`
`