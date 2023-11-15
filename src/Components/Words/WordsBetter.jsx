import { WordsSectionWrapper } from '../../Pages/Words';
import { WordsImages, WordsText } from './WordsIntro';
import { WordsTitle } from './WordsWorse';

export default function WordsBetter() {
    const betterImages = [
        {
            id: 0,
            image_path:
                'https://owltastic.com/img/article-images/01-reintroduction/mom.jpg',
            description: 'Celebrating Thanksgiving with Mom in the hospital',
        },
        {
            id: 1,
            image_path:
                'https://owltastic.com/img/article-images/01-reintroduction/andrew-and-i.png',
            description: 'Andrew and I',
        },
        {
            id: 2,
            image_path:
                'https://owltastic.com/img/article-images/01-reintroduction/pregnant.jpg',
            description: 'Me and my very round twin-filled belly',
        },
    ];

    return (
        <WordsSectionWrapper>
            <WordsTitle>It gets better</WordsTitle>
            <WordsText>
                <p>
                    Amazingly, these dreams came true too. My mom’s treatment
                    worked. I got married, pregnant with twins, and we moved
                    across the country to Southern California. I was thrilled,
                    grateful, and scared; and in the back of my mind, the larger
                    questions around my career still lingered.
                </p>
            </WordsText>
            <WordsImages>
                <ul>
                    {betterImages.map((item) => {
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
                    I yearned to do fulfilling work again, but was haunted by
                    the memory of the anxiety and self-doubt that had always
                    come with any professional successes I had. I started to
                    weigh the question—now that I was becoming a mother, and
                    taking on a new identity in a new place—what would come next
                    for my career?
                </p>
            </WordsText>
        </WordsSectionWrapper>
    );
}
