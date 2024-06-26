import React from 'react';
import Icon from "../../components/icon/Icon";
import styled from "styled-components";

const SteledLinkIconHeader = () => {
    return (
        <SteledLinkIcon>
            <Icon iconId={'line10'}  width= "2px" height= "191px" viewBox="0 0 2 191"  />
            <Icon iconId={'github'} width="32" height="32" viewBox="0 0 32 32" />
            <Icon iconId={'linkedin'} width="32" height="32" viewBox="0 0 32 32" />
            <Icon iconId={'telegrram'} width="32" height="32" viewBox="0 0 32 32" />
        </SteledLinkIcon>
    );
};

export default SteledLinkIconHeader;

const SteledLinkIcon = styled.a`
display: flex;
flex-direction: column;
align-items: center;
    margin-left: 17px;
    position: absolute;
`