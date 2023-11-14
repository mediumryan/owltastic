import React from 'react';
import { styled } from 'styled-components';
import {
    HeaderLink,
    HeaderMenu,
    HeaderMenuItem,
    HeaderTitle,
    HeaderWrapper,
} from '../../Components/Header/Header';
import { useRecoilState } from 'recoil';
import { headerMenuState } from '../../atom';

const FooterWrapper = styled(HeaderWrapper)`
    background-color: var(--primary-100);
    color: var(--black-100);
`;

const FooterTitle = styled(HeaderTitle)``;

const FooterMenu = styled(HeaderMenu)``;

const FooterMenuItem = styled(HeaderMenuItem)``;

const FooterLink = styled(HeaderLink)`
    color: var(--black-100);
`;

export default function Footer() {
    const [headerMenu, setHeaderMenu] = useRecoilState(headerMenuState);

    const handleActive = (itemId) => {
        const newHeader = headerMenu.map((item) => ({
            ...item,
            isActive: false,
        }));
        newHeader[itemId].isActive = true;
        setHeaderMenu(newHeader);
    };

    return (
        <FooterWrapper>
            <FooterTitle>owltastic</FooterTitle>
            <FooterMenu>
                {headerMenu.map((item) => {
                    return (
                        <FooterMenuItem
                            key={item.id}
                            style={{
                                borderColor: item.isActive
                                    ? '#000'
                                    : 'transparent',
                            }}
                            onClick={() => {
                                handleActive(item.id);
                            }}
                        >
                            <FooterLink to={item.linkTo}>
                                {item.value}
                            </FooterLink>
                        </FooterMenuItem>
                    );
                })}
            </FooterMenu>
        </FooterWrapper>
    );
}
