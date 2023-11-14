import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { headerMenuState } from '../../atom';

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
    border: none;
    border-bottom: 1px solid var(--primary-100);
    &:hover {
        border: none;
    }
`;

export const HeaderLink = styled(Link)`
    color: var(--primary-100);
    text-decoration: none;
    &:hover {
        color: var(--primary-200);
    }
`;

export default function Header() {
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
        <HeaderWrapper>
            <HeaderTitle>owltastic</HeaderTitle>
            <HeaderMenu>
                {headerMenu.map((item) => {
                    return (
                        <HeaderMenuItem
                            key={item.id}
                            style={{
                                borderColor: item.isActive
                                    ? '#faeedd'
                                    : 'transparent',
                            }}
                            onClick={() => {
                                handleActive(item.id);
                            }}
                        >
                            <HeaderLink to={item.linkTo}>
                                {item.value}
                            </HeaderLink>
                        </HeaderMenuItem>
                    );
                })}
            </HeaderMenu>
        </HeaderWrapper>
    );
}
