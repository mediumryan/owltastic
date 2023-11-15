import { WordsSectionWrapper } from '../../Pages/Words';
import { WordsText } from './WordsIntro';
import { WordsTitle } from './WordsWorse';

export default function WordsConclusion() {
    return (
        <WordsSectionWrapper>
            <WordsTitle></WordsTitle>
            <WordsText>
                <p>
                    With these goals in mind, I’m (to borrow a phrase from Brene
                    Brown) stepping back into the arena, but with a different
                    energy. Less grasping, more giving.
                </p>
            </WordsText>
            <WordsText>
                <p>
                    Along these lines, I’ve redesigned my site to include a blog
                    again (a feature I’ve dropped in previous iterations). Here
                    I plan to feature the work of designers I admire, so I can
                    uplift people doing great things, and inspire others. I also
                    plan to share what I’ve learned in the form of easily
                    digestible tutorials. And I hope to include side projects,
                    experiments, and work created purely for the purpose of fun,
                    mostly to remind myself why I first started designing for
                    the web to begin with.
                </p>
            </WordsText>
            <WordsText>
                <p>
                    If that sounds interesting to you, I’d love for you to
                    follow along. You can subscribe to my newsletter via the
                    form below this post, or follow me on one of the dozen
                    social networks where I cross post what I’m up to. I hope by
                    connecting, we can build a community focused around the good
                    we can do through our work, and life each other up.
                </p>
            </WordsText>
            <WordsText>
                <p>
                    Here’s to lessons learned, second chances, and winding,
                    rambling paths. If your career or life also hasn’t always
                    been a linear climb to the top (and whose is?), I’m here
                    with you. Keep your head up, we got this.
                </p>
            </WordsText>
        </WordsSectionWrapper>
    );
}
