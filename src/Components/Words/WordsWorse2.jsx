import React from 'react';
import { WordsSectionWrapper } from '../../Pages/Words';
import { WordsTitle } from './WordsWorse';
import { WordsImages, WordsText } from './WordsIntro';

export default function WordsWorse2() {
    const worse2Images = [
        {
            id: 0,
            image_path:
                'https://owltastic.com/img/article-images/01-reintroduction/twins-9.jpg',
            description: 'Exhausted bliss',
        },
        {
            id: 1,
            image_path:
                'https://owltastic.com/img/article-images/01-reintroduction/twins-8.jpg',
            description: 'Exhausted bliss',
        },
        {
            id: 2,
            image_path:
                'https://owltastic.com/img/article-images/01-reintroduction/twins-floor-4.jpg',
            description: 'Ready to not be trapped on this floor anymore',
        },
    ];

    return (
        <WordsSectionWrapper>
            <WordsTitle>It gets worse again</WordsTitle>
            <WordsText>
                <p>
                    But before I could begin to formulate a plan, life once
                    again intervened—when my twins were just a few weeks old,
                    the pandemic hit. Unable to hire professional childcare,
                    alone in a city where we knew no one, I spent the first year
                    of their lives unemployed. Locked in our tiny Los Angeles
                    apartment with newborn twins and 3 cats, my husband and I
                    struggled to keep our sanity as he worked double overtime on
                    almost no sleep to keep us afloat. I was drowning in an
                    endless cycle of breastfeeding, diaper changes, and trying
                    to comfort two wailing infants while I myself sobbed almost
                    continuously. Helicopters whirled overhead as the National
                    Guard set up tanks in our neighborhood; the Black Lives
                    Matter protesters were being abused just outside our door.
                    At every prenatal appointment, the hospital next to our
                    pediatrician’s office was overflowing with desperate, sick
                    people. Our world felt like one big crisis, inside and out.
                </p>
            </WordsText>
            <WordsText>
                <p>
                    During this time I couldn’t rely on my usual distractions
                    and coping methods to escape the anxiety and depression I’d
                    battled for years, and things finally came to a head. I was
                    forced to admit to myself and my partner how lost I’d felt
                    for so long, from childhood to my early professional life to
                    now, in parenthood.
                </p>
            </WordsText>
            <WordsImages>
                <ul>
                    {worse2Images.map((item) => {
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
                    While early parenthood was in many painful ways my undoing,
                    it was also like a rebirth. My kids gave me the clarity I’d
                    always lacked—I had to face my insecurities and get help for
                    my mental health. I also had to define my values and what I
                    really wanted to get from life, so I could live and work
                    with purpose, and be the kind of parent they deserved. (This
                    is an ongoing and lifelong effort). I got treatment for the
                    issues I had that could be addressed chemically, and began
                    working in earnest on the personal discovery I’d put off for
                    so long.
                </p>
            </WordsText>
            <WordsText>
                <p>
                    As the world gradually reopened, the magical blessing of
                    professional childcare finally came into our lives, and I
                    felt ready to get back to work. It was terrifying to reach
                    out to the community of web designers I’d lost touch
                    with—would anyone even remember me after all these years of
                    being nearly silent? Was there room in the fast-paced world
                    of tech for a new mom who’d been out of the game for a bit?
                </p>
            </WordsText>
        </WordsSectionWrapper>
    );
}
