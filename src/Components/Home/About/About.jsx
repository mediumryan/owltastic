import { styled } from 'styled-components';
import aboutBg from './../../../Images/bg-meteor-shower.webp';
import { useRecoilValue } from 'recoil';
import { aboutState } from '../../../atom';
import { HiExternalLink } from 'react-icons/hi';

export const AboutOuter = styled.section`
    background: url(${aboutBg}) center no-repeat;
    background-size: cover;
    width: 100%;
`;

export const AboutInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 24px;
`;

export const AboutTitle = styled.h1`
    font-size: 32px;
    color: var(--primary-100);
    margin-bottom: 24px;
`;

export const AboutContents = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 1rem;
`;

export const AboutItem = styled.li`
    border: 1px solid var(--primary-100);
    padding: 2rem 3rem;
    background-color: var(--brown-100);
    margin: 24px;
    a {
        text-decoration: none;
        color: var(--primary-100);
        p {
            font-size: 12px;
            margin-bottom: 24px;
            svg {
                margin-left: 12px;
            }
        }
        h3 {
            font-size: 16px;
            font-family: var(--font-family-normal);
        }
        &:hover {
            text-decoration: underline;
            color: var(--primary-200);
        }
    }
`;

export default function About() {
    const aboutItem = useRecoilValue(aboutState);

    return (
        <AboutOuter>
            <AboutInner>
                <AboutTitle>Recent Interviews & Articles</AboutTitle>
                <AboutContents>
                    {aboutItem.map((item) => {
                        return (
                            <AboutItem>
                                <a href={item.url}>
                                    <p>
                                        {item.title}
                                        <HiExternalLink />
                                    </p>
                                    <h3>{item.content}</h3>
                                </a>
                            </AboutItem>
                        );
                    })}
                </AboutContents>
            </AboutInner>
        </AboutOuter>
    );
}
