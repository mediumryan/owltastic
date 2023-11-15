import { WordsSectionWrapper } from '../../Pages/Words';
import { WordsText } from './WordsIntro';
import { WordsTitle } from './WordsWorse';

export default function WordsInteresting() {
    return (
        <WordsSectionWrapper>
            <WordsTitle>It gets... interesting?</WordsTitle>
            <WordsText>
                <p>
                    As I began to think about what comes next, I thought about
                    what had been missing before. I realized I’d lacked a true
                    sense of purpose around my work. In my earlier years I was
                    driven by a desire for external reward—for admiration and
                    affluence. Now, having gone down that road, I knew that
                    these achievements alone were not enough to make the work
                    fulfilling.
                </p>
            </WordsText>
            <WordsText>
                <p>
                    I started to ask myself what good I could really hope to do
                    by making websites; the things we create are often trivial
                    and ultimately temporary. So I dug in and evaluated my
                    skills, what still excited me, and what my values are, and
                    here are the notes I made for myself:
                </p>
            </WordsText>
        </WordsSectionWrapper>
    );
}
