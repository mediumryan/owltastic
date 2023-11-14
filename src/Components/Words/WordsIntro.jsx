import { styled } from 'styled-components';
import { WordsSectionWrapper } from '../../Pages/Words';

const IntroText = styled.div`
    font-family: var(--font-family-normal);
    p {
        padding: 2rem 15%;
        font-size: 1rem;
    }
    &:first-child {
        p:first-letter {
            font-family: var(--font-family-round);
            font-weight: 700;
            float: left;
            font-size: 5em;
            line-height: 0.5;
            margin: 5px 0.15em 32px 0;
        }
    }
`;

const IntroImages = styled.div``;

export default function WordsIntro() {
    return (
        <WordsSectionWrapper>
            <IntroText>
                <p>
                    If you’ve followed my work at all, you may have noticed that
                    in the last 5 years or so, I've gone pretty quiet. I’d like
                    to say hi, catch you up on where I’ve been, and share a bit
                    about what I hope is coming next.
                </p>
            </IntroText>
            <IntroImages></IntroImages>
            <IntroText></IntroText>
            <IntroText></IntroText>
            <IntroText></IntroText>
        </WordsSectionWrapper>
    );
}
