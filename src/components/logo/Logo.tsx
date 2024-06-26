import React from 'react';
import Icon from "../icon/Icon";
import styled from "styled-components";
import {FlexLink} from "../FlexLink";
import {SpanStyle} from "../SpanStyle";

const Logo = () => {
    return (
            <FlexLink href='#'>
                <Icon iconId={'logo'}  margin=" 32px 0 0 171px"/>
                <SpanStyle margin={"32px 0 0 0"}>Alex Martishyn</SpanStyle>
            </FlexLink>
    );
};

export default Logo;
