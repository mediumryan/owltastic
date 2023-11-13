import React from 'react';
import { styled } from 'styled-components';
import {
    HeaderLink,
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

const FooterLink = styled(HeaderLink)`
    color: var(--black-100);
    &:hover {
        color: var(--primary-200);
    }
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterTitle>owltastic</FooterTitle>
            <FooterMenu>
                <FooterMenuItem>
                    <FooterLink>Home</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                    <FooterLink>WORK</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                    <FooterLink>WORDS</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                    <FooterLink>ABOUT</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                    <FooterLink>CONTACT</FooterLink>
                </FooterMenuItem>
            </FooterMenu>
        </FooterWrapper>
    );
}
