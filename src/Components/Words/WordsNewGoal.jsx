import { styled } from 'styled-components';
import { WordsSectionWrapper } from '../../Pages/Words';
import { WordsTitle } from './WordsWorse';

const NewGoalList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
        position: relative;
        width: 66%;
        padding-left: 10%;
        h5 {
            font-size: 1rem;
            padding: 1.25rem 0;
            font-size: 1rem;
            letter-spacing: -0.2px;
            line-height: 2;
        }
        p {
            font-family: var(--font-family-normal);
            padding: 1.25rem 0;
            font-size: 1rem;
            letter-spacing: -0.2px;
        }
        &::before {
            content: '➸';
            font-size: 40px;
            top: 4px;
            left: 0;
            position: absolute;
        }
    }
`;

export default function WordsNewGoal() {
    const newGoalArr = [
        {
            id: 0,
            subTitle: 'BE AUTHENTIC',
            text: 'I am energized by doing work that is unique to me; that takes advantage of my perspective, skills, and personal aesthetics to produce something that could not be created by anyone else. There are moments when our work can be artful in that way; when it is infused with the designer’s self-expression, we can create something surprising and memorable that resonates with its audience in a specific way.',
        },
        {
            id: 0,
            subTitle: 'UPLIFT OTHER DESIGNERS',
            text: 'I am energized by sharing the work of others that lights me up in this way; I want to uplift and highlight people using the medium of web design to tell stories in surprising, beautiful, or powerful ways.',
        },
        {
            id: 0,
            subTitle: 'DO NO HARM',
            text: 'I am passionate about creating work that at a minimum does no harm, meaning it includes and welcomes as many people as possible, and is not insensitive to people’s real lived experiences. I can be an advocate for avoiding practices that cause harm, and incorporating the techniques or lessons that minimize it.',
        },
        {
            id: 0,
            subTitle: 'MAKE WEB DESIGN FUN AGAIN',
            text: 'At the end of the day, I think design (particularly for the web) can be a creative, rewarding, and purely fun pursuit—especially when it’s done outside the context of capitalistic demands. I want to do more projects purely because they give me joy.',
        },
        {
            id: 0,
            subTitle: "GIVE AWAY WHAT YOU'VE GOT",
            text: 'I want to give away what I’ve learned, to share what I know in my own voice, in case my way of telling it helps deepen understanding in someone else, or helps them feel more seen. Not just as it relates to design, but life in general.',
        },
    ];

    return (
        <WordsSectionWrapper>
            <WordsTitle>New career goals</WordsTitle>
            <NewGoalList>
                {newGoalArr.map((item) => {
                    return (
                        <li key={item.id}>
                            <h5>{item.subTitle}</h5>
                            <p>{item.text}</p>
                        </li>
                    );
                })}
            </NewGoalList>
        </WordsSectionWrapper>
    );
}
