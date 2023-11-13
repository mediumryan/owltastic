import { styled } from 'styled-components';
import owl from './../../../Images/bg-owl-moon-flipped.webp';

const WordsOuter = styled.section`
    background-color: var(--primary-100);
`;

const WordsInner = styled.div`
    background-image: url(${owl});
    background-position: right;
    background-repeat: no-repeat, repeat;
    background-size: 18%;
    mix-blend-mode: darken;
`;

const WordsContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5% 20%;
`;

const WordsTitle = styled.h1`
    font-size: 64px;
    text-align: center;
`;

const WordsInset = styled.p`
    padding: 0 10%;
    margin: 32px 0 32px 32px;
    font-family: var(--font-family-normal);
    font-size: 14px;
`;

const WordsMore = styled.a`
    width: 20%;
    font-size: 10px;
    margin-left: 15%;
    padding-bottom: 4px;
    border-bottom: 1px solid var(--black-100);
    cursor: pointer;
    color: var(--black-100);
    text-decoration: none;
    &:hover {
        color: var(--primary-200);
        border-color: var(--primary-200);
    }
`;

export default function Words() {
    return (
        <WordsOuter>
            <WordsInner>
                <WordsContent>
                    <WordsTitle>
                        Hello, I’m Meagan <br /> Fisher Couldwell.
                    </WordsTitle>
                    <WordsInset>
                        As an independent designer I’ve been fortunate to work
                        with brands like Twitter, Change.org, Wordpress,
                        Classpass, the University of Pennsylvania, The Audubon
                        Society, Adobe, and Toyota. I’ve also given workshops
                        and lectures at dozens of industry conferences around
                        the world, on topics ranging from advanced CSS
                        techniques to the design process to user research.
                    </WordsInset>
                    <WordsMore
                        href="https://owltastic.com/about.html"
                        target="blank"
                    >
                        MORE ABOUT ME →
                    </WordsMore>
                </WordsContent>
            </WordsInner>
        </WordsOuter>
    );
}
