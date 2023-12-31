import { keyframes, styled } from 'styled-components';
// import image files
import Orbit from './../../../Images/bg-orbit.webp';
import StarBottom from './../../../Images/bg-star-bottom.webp';
import StarLady from './../../../Images/bg-star-lady.webp';
import StarOwl from './../../../Images/bg-star-owl.webp';
import StarTop from './../../../Images/bg-star-top.webp';

const MainWrapper = styled.section`
    width: 100%;
    height: 100%;
    background-color: var(--primary-100);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
    position: relative;
    overflow: hidden;
`;

const MainTitle = styled.h1`
    padding: 0 20%;
    font-size: 3.5rem;
`;

const MainIntro = styled.p`
    font-family: var(--font-family-normal);
    padding: 0 420px;
    margin-top: 3rem;
    font-size: 1rem;
`;

const GoPortfolio = styled.a`
    padding: 0;
    color: var(--black-200);
    font-style: italic;
    font-family: var(--font-family-round);
    border-bottom: 1px solid var(--black-200);
    letter-spacing: 0.1rem;
    &:hover {
        color: var(--primary-200);
        border-color: var(--primary-200);
    }
`;

const StarTopImg = styled.div`
    position: absolute;
    background: url(${StarTop}) no-repeat;
    background-size: contain;
    z-index: 0;
    top: 0;
    left: 30%;
    width: 45%;
    height: 98px;
`;

const StarBottomImg = styled.div`
    position: absolute;
    background: url(${StarBottom}) no-repeat;
    background-size: contain;
    z-index: 0;
    bottom: 0;
    left: 30%;
    width: 45%;
    height: 98px;
`;
const StarLadyImg = styled.div`
    position: absolute;
    background: url(${StarLady}) no-repeat;
    background-size: contain;
    z-index: 0;
    bottom: -80px;
    left: 0;
    width: 18%;
    height: 375px;
`;
const StarOwlImg = styled.div`
    position: absolute;
    background: url(${StarOwl}) no-repeat;
    background-size: contain;
    z-index: 0;
    top: 0;
    right: 0;
    width: 18%;
    height: 375px;
`;

const rotateRight = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;
const OrbitTopImg = styled.div`
    background: url(${Orbit}) no-repeat;
    background-size: contain;
    height: 300px;
    position: absolute;
    width: 25%;
    top: -100px;
    left: -100px;
    z-index: 1;
    mix-blend-mode: darken;
    animation: rotation 120s infinite linear;
    opacity: 45%;
    animation: ${rotateRight} 120s linear infinite;
`;
const rotateLeft = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-360deg);
    }
`;
const OrbitBottomImg = styled.div`
    background: url(${Orbit}) no-repeat;
    background-size: contain;
    height: 300px;
    position: absolute;
    width: 25%;
    bottom: -100px;
    right: -100px;
    z-index: 1;
    mix-blend-mode: darken;
    animation: rotation 120s infinite linear;
    opacity: 45%;
    animation: ${rotateLeft} 120s linear infinite;
`;

export default function Main() {
    return (
        <MainWrapper>
            <MainTitle>
                Working through the night to bring wise ideas to light.
            </MainTitle>
            <MainIntro>
                Hello! I’m Meagan Fisher Couldwell, and I’ve been designing
                usable and delightful digital experiences—as well as writing and
                speaking about design—for almost 20 years. <br />
                <br />
                <br />
                <GoPortfolio
                    href="https://owltastic.com/work.html"
                    target="blank"
                >
                    PERUSE MY PORTFOLIO →
                </GoPortfolio>
            </MainIntro>
            <StarTopImg />
            <StarBottomImg />
            <StarLadyImg />
            <StarOwlImg />
            <OrbitTopImg />
            <OrbitBottomImg />
        </MainWrapper>
    );
}
