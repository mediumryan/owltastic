import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const HeaderWrapper = styled.div`
    background-color: var(--black-100);
    color: var(--primary-100);
    width: 100%;
    padding: 20px 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
    font-style: italic;
    font-size: var(--font-size-medium-large);
`;

export const HeaderMenu = styled.ul`
    display: flex;
`;

export const HeaderMenuItem = styled.li`
    font-size: var(--font-size-small);
    margin: 0 var(--margin-medium-large);
    padding-bottom: var(--padding-micro);
    cursor: pointer;
    &:first-child {
        border-bottom: 1px solid var(--primary-100);
        &:hover {
            border-color: transparent;
        }
    }
    &:hover {
        color: var(--primary-200);
    }
`;

export const HeaderLink = styled(Link)`
    color: var(--primary-100);
    &:hover {
        color: var(--primary-200);
    }
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <HeaderTitle>owltastic</HeaderTitle>
            <HeaderMenu>
                <HeaderMenuItem>
                    <HeaderLink to="/">HOME</HeaderLink>
                </HeaderMenuItem>
                <HeaderMenuItem>
                    <HeaderLink to="/work">WORK</HeaderLink>
                </HeaderMenuItem>
                <HeaderMenuItem>
                    <HeaderLink to="/words">WORDS</HeaderLink>
                </HeaderMenuItem>
                <HeaderMenuItem>
                    <HeaderLink to="/about">ABOUT</HeaderLink>
                </HeaderMenuItem>
                <HeaderMenuItem>
                    <HeaderLink to="contact">CONTACT</HeaderLink>
                </HeaderMenuItem>
            </HeaderMenu>
        </HeaderWrapper>
    );
}
