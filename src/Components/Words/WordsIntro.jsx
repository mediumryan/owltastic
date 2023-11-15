import { styled } from 'styled-components';
import { WordsSectionWrapper } from '../../Pages/Words';

export const WordsText = styled.div`
    font-family: var(--font-family-normal);
    p {
        padding: 1.25rem 15%;
        font-size: 1rem;
        letter-spacing: -0.2px;
    }
    &:first-child {
        margin: 2rem 0;
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

export const WordsImages = styled.div`
    ul {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 2rem;
        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 1rem;
            background-color: #fff;
            padding: 1rem;
            border: 0.5px solid var(--black-100);
            div {
                width: 285px;
                height: 285px;
                img {
                    width: 100%;
                    height: 100%;
                    border: 0.5px solid var(--black-100);
                }
            }
            p {
                min-height: 26px;
                font-size: 0.55rem;
                font-family: var(--font-family-normal);
                margin-top: 1rem;
                padding: 0 1rem;
                text-align: center;
            }
        }
    }
`;

export default function WordsIntro() {
    const infoImageArr = [
        {
            id: 0,
            image_path:
                'https://owltastic.com/img/article-images/01-reintroduction/simplebits.png',
            description: 'Extremely excited to be in the SimpleBits office',
        },
        {
            id: 1,
            image_path:
                'https://owltastic.com/img/article-images/01-reintroduction/brooklyn-beta.png',
            description: 'My lanyard from the first Brooklyn Beta',
        },
        {
            id: 2,
            image_path:
                'https://owltastic.com/img/article-images/01-reintroduction/brooklyn-bridge.png',
            description:
                'Feeling very philosophical in front of the Brooklyn Bridge',
        },
    ];

    return (
        <WordsSectionWrapper>
            <WordsText>
                <p>
                    If you’ve followed my work at all, you may have noticed that
                    in the last 5 years or so, I've gone pretty quiet. I’d like
                    to say hi, catch you up on where I’ve been, and share a bit
                    about what I hope is coming next.
                </p>
            </WordsText>
            <WordsImages>
                <ul>
                    {infoImageArr.map((item) => {
                        return (
                            <li key={item.id}>
                                <div>
                                    <img
                                        src={item.image_path}
                                        alt={item.description}
                                    />
                                </div>
                                <p>{item.description}</p>
                            </li>
                        );
                    })}
                </ul>
            </WordsImages>
            <WordsText>
                <p>
                    When I began my career in web design nearly 20 years ago, I
                    was full of ambition. I saw myself working with the
                    industry’s best, speaking at prestigious events, and one day
                    moving to New York City.
                </p>
            </WordsText>
            <WordsText>
                <p>
                    Incredibly, each of these dreams came true. By my
                    mid-twenties, I’d moved to New York, I was earning more than
                    I’d ever dreamed possible, and my portfolio boasted
                    impressive brands. I’d worked alongside several of my design
                    heroes, and was traveling the world speaking at conferences.
                    (Don't worry, this post isn't a laundry list of my career
                    achievements. Just wait for it).
                </p>
            </WordsText>
            <WordsText>
                <p>
                    From the outside I may have seemed to be the epitome of
                    success, at least to some, but privately I relentlessly
                    battled with self-doubt, depression, and anxiety. I’d
                    managed to actually get everything I wanted and more, but I
                    was persistently unhappy. Self-sabotage and fear tainted my
                    journey, and I squandered some opportunities that I still
                    regret to this day. While my personal life in New York
                    thrived—I had a beloved group of friends and had recently
                    met my favorite person ever—the angst I felt around my
                    career left me full of doubt about where my life was headed.
                </p>
            </WordsText>
        </WordsSectionWrapper>
    );
}
