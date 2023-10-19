import React from 'react';
import { styled } from 'styled-components';

const HeaderWrapper = styled.div`
    background-color: var(--black-100);
    color: var(--primary-100);
    width: 100%;
    padding: 20px 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const HeaderTitle = styled.h1`
    font-style: italic;
    font-size: var(--font-size-medium-large);
`;

const HeaderMenu = styled.ul`
    display: flex;
`;

const HeaderMenuItem = styled.li`
    font-size: var(--font-size-small);
    margin: 0 var(--margin-medium-large);
    padding-bottom: var(--padding-micro);
    cursor: pointer;
    border-bottom: 1px solid var(--primary-100);
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <HeaderTitle>owltastic</HeaderTitle>
            <HeaderMenu>
                <HeaderMenuItem>HOME</HeaderMenuItem>
                <HeaderMenuItem>WORK</HeaderMenuItem>
                <HeaderMenuItem>WORDS</HeaderMenuItem>
                <HeaderMenuItem>ABOUT</HeaderMenuItem>
                <HeaderMenuItem>CONTACT</HeaderMenuItem>
            </HeaderMenu>
        </HeaderWrapper>
    );
}
