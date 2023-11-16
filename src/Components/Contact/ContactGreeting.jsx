import { styled } from 'styled-components';
import ContactGreetingBg from './../../Images/bg-stars.webp';
import ContactGreetingBg2 from './../../Images/bg-moon-lady.webp';

const GreetingWrapper = styled.section`
    width: 100%;
    background: url(${ContactGreetingBg}) -250px -400px no-repeat;
    background-size: 500px;
    background-color: var(--brown-100);
    position: relative;
    padding: 5rem 7.5rem;
    border-top: 1px solid var(--primary-100);
    color: var(--primary-100);
    h1 {
        color: var(--primary-100);
        font-size: 3.5rem;
        margin-left: 15%;
    }
    div {
        background: url(${ContactGreetingBg2}) center right no-repeat;
        background-size: auto 90%;
        mix-blend-mode: screen;
        position: absolute;
        height: 100%;
        width: 95%;
        top: 0;
        right: 5%;
        opacity: 90%;
    }
`;

export default function ContactGreeting() {
    return (
        <GreetingWrapper>
            <h1>
                Want to work <br /> together? Let’s chat!
            </h1>
            <div></div>
        </GreetingWrapper>
    );
}
