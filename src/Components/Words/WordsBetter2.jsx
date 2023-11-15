import React from 'react';
import { WordsSectionWrapper } from '../../Pages/Words';
import { WordsTitle } from './WordsWorse';
import { WordsImages, WordsText } from './WordsIntro';

export default function WordsBetter2() {
    const better2Images = [
        {
            id: 0,
            image_path:
                'https://owltastic.com/img/article-images/01-reintroduction/grandma.jpg',
            description: 'Mom cuddling my son',
        },
        {
            id: 0,
            image_path:
                'https://owltastic.com/img/article-images/01-reintroduction/family.jpg',
            description: 'My everything',
        },
        {
            id: 0,
            image_path:
                'https://owltastic.com/img/article-images/01-reintroduction/desk.jpg',
            description: 'My current desk in our new home office',
        },
    ];

    return (
        <WordsSectionWrapper>
            <WordsTitle>It gets better again</WordsTitle>
            <WordsText>
                <p>
                    Thankfully, life is almost always kinder in reality than it
                    is in my head. Generous friends in the industry were eager
                    to help me get back into the working world, and I’ve been
                    lucky to work on projects that made my welcome back to web
                    design a relatively smooth one.
                </p>
            </WordsText>
            <WordsImages>
                <ul>
                    {better2Images.map((item) => {
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
                    My children are now 3.5 years old, and recently have gone
                    from being home with me and a part-time nanny to starting
                    preschool full time. It was hard for them at first,
                    especially for my daughter. Many mornings she cried “no
                    school!” and would hang back, refusing to let go of my leg,
                    her blankie or her stuffed cat. As an introvert learning to
                    cope with social anxiety, I sympathized mightily, but I
                    encouraged her to call on the bravery and capability I know
                    she has in her. I told her to trust that she would meet kind
                    people who welcomed her, and to know that we would always
                    return, and she’d always be safe.
                </p>
            </WordsText>
            <WordsText>
                <p>
                    I thought about this advice as I continued to quietly do
                    work behind the scenes—always doing enough to finish a
                    project well, but without the energy and drive I’d felt
                    before. I felt instinctively that it was time for me to be
                    brave too, to throw myself with more passion into my work,
                    and to trust that I could find a more authentic way forward
                    in my career.
                </p>
            </WordsText>
        </WordsSectionWrapper>
    );
}
