import { styled } from 'styled-components';
import aboutGreetingBg from './../../Images/bg-stars.webp';

const GreetingWrapper = styled.section`
    width: 100%;
    background: url(${aboutGreetingBg}) -200px -370px no-repeat,
        url(${aboutGreetingBg}) 105% bottom no-repeat;
    background-size: 500px;
    background-color: #2f2824;
    padding: 5rem;
    border-top: 1px solid var(--primary-100);
    h1 {
        color: var(--primary-100);
        font-size: 3.5rem;
        margin-left: 15%;
    }
`;

export default function AboutGreeting() {
    return (
        <GreetingWrapper>
            <h1>
                Hello! It’s very nice to <br /> meet you.
            </h1>
        </GreetingWrapper>
    );
}
