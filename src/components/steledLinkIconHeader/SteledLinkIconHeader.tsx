import React from 'react';
import Icon from "../icon/Icon";
import styled from "styled-components";

const SteledLinkIconHeader = () => {
    return (
        <SteledLinkIcon>
            <Icon iconId={'line10'}  width= "2px" height= "191px" viewBox="0 0 2 191"  />
            <Icon iconId={'github'}/>
            <Icon iconId={'linkedin'}/>
            <Icon iconId={'telegrram'}/>
        </SteledLinkIcon>
    );
};

export default SteledLinkIconHeader;

const SteledLinkIcon = styled.a`
display: flex;
flex-direction: column;
align-items: center;
    margin-left: 17px;
`