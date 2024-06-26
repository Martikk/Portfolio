import styled from "styled-components";

type SectionTitlePropsType ={
    fontSize?: string;
}

export const SectionTitle = styled.h2 <SectionTitlePropsType>`
    font-size: ${(props) =>props.fontSize || "2rem"};
`
