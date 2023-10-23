import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { aboutState } from '../../atom';
import AboutItem from './AboutItem';
import aboutBg from './../../Images/bg-meteor-shower.webp';

const AboutOuter = styled.section`
    background: url(${aboutBg}) center no-repeat;
    background-size: cover;
    width: 100%;
`;

const AboutInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 24px;
`;

const AboutTitle = styled.h1`
    font-size: 32px;
    color: var(--primary-100);
    margin-bottom: 24px;
`;

const AboutContents = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 1rem;
`;

export default function About() {
    const about = useRecoilValue(aboutState);

    return (
        <AboutOuter>
            <AboutInner>
                <AboutTitle>Recent Interviews & Articles</AboutTitle>
                <AboutContents>
                    {about.map((item) => {
                        return <AboutItem item={item} />;
                    })}
                </AboutContents>
            </AboutInner>
        </AboutOuter>
    );
}
