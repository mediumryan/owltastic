import React from 'react';
import { styled } from 'styled-components';
import {
    HeaderMenu,
    HeaderMenuItem,
    HeaderTitle,
    HeaderWrapper,
} from '../../Components/Header/Header';

const FooterWrapper = styled(HeaderWrapper)`
    background-color: var(--primary-100);
    color: var(--black-100);
`;

const FooterTitle = styled(HeaderTitle)``;

const FooterMenu = styled(HeaderMenu)``;

const FooterMenuItem = styled(HeaderMenuItem)`
    &:first-child {
        border-bottom: 1px solid var(--black-100);
    }
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterTitle>owltastic</FooterTitle>
            <FooterMenu>
                <FooterMenuItem>HOME</FooterMenuItem>
                <FooterMenuItem>WORK</FooterMenuItem>
                <FooterMenuItem>WORDS</FooterMenuItem>
                <FooterMenuItem>ABOUT</FooterMenuItem>
                <FooterMenuItem>CONTACT</FooterMenuItem>
            </FooterMenu>
        </FooterWrapper>
    );
}
