import { styled } from 'styled-components';

const GreetingWrapper = styled.section`
    color: var(--primary-100);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 3rem 0;
    div {
        h1 {
            font-size: 3.5rem;
            margin-bottom: 2rem;
        }
        span {
            font-size: 0.6rem;
            font-family: var(--font-family-normal);
        }
    }
`;

export default function WordsGreeting() {
    return (
        <GreetingWrapper>
            <div>
                <h1>
                    Hello! Let me <br /> reintroduce myself.
                </h1>
                <span>FILED OCTOBER 9, 2023</span>
            </div>
        </GreetingWrapper>
    );
}
