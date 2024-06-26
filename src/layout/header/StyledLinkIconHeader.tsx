import React from 'react';
import Icon from "../../components/icon/Icon";
import styled from "styled-components";
import {FlexLink} from "../../components/FlexLink";

const StyledLinkIconHeader = () => {
    return (
        <StyledLinkIconSection>
                <Icon iconId={'line10'}  width= "2px" height= "191px" viewBox="0 0 2 191"  />
            <FlexLink href={"https://github.com/Martikk"}>
    <Icon iconId={'github'} width="32" height="32" viewBox="0 0 32 32" />
</FlexLink>
            <FlexLink href={"https://www.linkedin.com/in/martishyn"}>
                <Icon iconId={'linkedin'} width="32" height="32" viewBox="0 0 32 32" />
            </FlexLink>
            <FlexLink href={"https://t.me/alexinis"}>
                <Icon iconId={'telegrram'} width="32" height="32" viewBox="0 0 32 32" />
            </FlexLink>

        </StyledLinkIconSection>
    );
};

export default StyledLinkIconHeader;

const StyledLinkIconSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
    margin-left: 17px;
    position: absolute;
`