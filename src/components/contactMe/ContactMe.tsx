import React from 'react';
import styled from "styled-components";
import {ButtonStyled} from "../../styles/Button .styled";
import {FlexWrapper} from "../FlexWrapper";
import { BiMailSend } from "react-icons/bi";

type ContactMeProps = {
    onSendClick:() => void;
};
export const ContactMe: React.FC<ContactMeProps> = ({onSendClick}) => {
    return (
        <StyledContact>
<StyledForm>
    <FlexWrapper direction={"row"} gap={"10px"}>
        <Field placeholder={"name"}/>
        <Field placeholder={"email"}/>
    </FlexWrapper>

    <Field placeholder={"subject"}/>
    <Field placeholder={"message"} as={"textarea"}/>
    <ButtonStyled  as="a" onClick={onSendClick} href="#" borderColor="primary" width={"100px"}>Send <BiMailSend /></ButtonStyled>
</StyledForm>
        </StyledContact>
    );
};


const StyledContact = styled.section`
    min-height: 50vh;
    border-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledForm = styled.form`
    max-width: 295px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${props => props.theme.colors.gray};

`

const Field = styled.input`
    background-color: ${props => props.theme.colors.backgroundDark};
    border-color: ${props => props.theme.colors.gray};
    border: 1px solid ${props => props.theme.colors.gray};
    border-radius: 1px;
    box-shadow: none;
    text-indent: 15px;
    padding: 4px 0 4px 0;
    resize: none;
`








