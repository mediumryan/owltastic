import { styled } from 'styled-components';
import {
    FaDribbble,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa6';

export const ContentWrapper = styled.section`
    width: 100%;
    background: var(--primary-100);
    display: flex;
    justify-content: space-evenly;
    padding: 0 7.5% 0 15%;
`;

export const ContentTextBox = styled.div`
    width: 72%;
    padding: 5rem 0;
    img {
        max-width: 100%;
        border: 0.5px solid #2c2622;
        float: left;
        margin: 0 40px 24px 0;
        padding: 16px;
        width: 33%;
    }
`;

export const ContentText = styled.div`
    margin-bottom: 2rem;
    p {
        font-family: var(--font-family-normal);
        font-size: 1rem;
        letter-spacing: -0.2px;
        line-height: 2;
    }
    a {
        color: var(--black-100);
        text-decoration: none;
        border-bottom: 0.5px solid var(--black-100);
        &:hover {
            color: var(--primary-200);
            border-color: var(--primary-200);
        }
    }
    &:nth-child(2) {
        p:first-letter {
            font-family: var(--font-family-round);
            float: left;
            font-size: 5em;
            line-height: 0.5;
            margin: 16px 0.15em 32px 0;
        }
    }
`;

export const ContentAside = styled.div`
    width: 16%;
    padding-top: 5rem;
    margin-left: 5rem;
    p {
        font-size: 2rem;
        margin-bottom: 2rem;
    }
    ul {
        li {
            border-bottom: 0.5px solid var(--black-100);
            margin-bottom: 0.5rem;
            transition: 300ms all;
            a {
                display: block;
                text-decoration: none;
                color: var(--black-100);
                font-size: 0.75rem;
                font-family: var(--font-family-normal);
                svg {
                    margin-right: 0.5rem;
                }
            }
            &:hover {
                border-color: var(--primary-200);
                a {
                    color: var(--primary-200);
                }
            }
        }
    }
`;

export default function AboutContent() {
    return (
        <ContentWrapper>
            <ContentTextBox>
                <img
                    src="https://owltastic.com/img/headshot-squared.jpg"
                    alt="A portrait of Meagan Fisher Couldwell"
                />
                <ContentText>
                    <p>
                        Meagan Fisher Couldwell is a web designer, twin mom,
                        world explorer, and over-sharer, currently based in
                        sunny Southern California. She is more comfortable
                        speaking in the first person than third.
                    </p>
                </ContentText>
                <ContentText>
                    <p>
                        I’ve been creating websites for over 15 years. I began
                        my career as the Deputy Designer to the legendary{' '}
                        <a href="https://simplebits.com/">Dan Cederholm</a>, the
                        designer, author, and entrepreneur who founded &nbsp;
                        <a href="https://dribbble.com/">Dribbble</a>. After
                        years of learning from Dan how to grow a company and
                        build a reputation as a highly sought after designer and
                        teacher, I decided to move to New York City and launch
                        my own design business.
                    </p>
                </ContentText>
                <ContentText>
                    <p>
                        As an independent designer I’ve been fortunate to work
                        with brands like Twitter, Change.org, Campaign Monitor,
                        Wordpress, Classpass, the University of Pennsylvania,
                        The Audubon Society, Adobe, and Toyota. I’ve also given
                        workshops and lectures at dozens of industry conferences
                        around the world, on topics ranging from advanced CSS
                        techniques to the design process to user research.
                    </p>
                </ContentText>
                <ContentText>
                    <p>
                        In addition to building my freelance and consulting
                        business, during my time in New York I served as the
                        Creative Director at several startups, where I was
                        responsible for leading the design of the brand,
                        marketing, and product, as well as growing and managing
                        design teams.
                    </p>
                </ContentText>
                <ContentText>
                    <p>
                        For the past several years I’ve worked with Adobe as one
                        of their “Adobe Insiders,” a program where industry
                        leaders across different disciplines are engaged to
                        create work showcasing what Adobe products can do. I
                        also recently co-published{' '}
                        <a href="https://designsystemfoundations.com/">
                            a book about design systems
                        </a>
                        with my partner{' '}
                        <a href="https://roomfive.net/">Andrew Couldwell</a>.
                    </p>
                </ContentText>
                <ContentText>
                    <p>
                        In 2020 I took some time off to move across the country,
                        have and grow twin babies, quarantine, and generally
                        come to grips with several seismic life shifts.
                        Thankfully, I’ve recently returned to doing the work I
                        love—designing and building websites that are both
                        beautiful and purposeful.
                    </p>
                </ContentText>
            </ContentTextBox>
            <ContentAside>
                <p>Elsewhere</p>
                <ul>
                    <li>
                        <a target="blank" href="https://twitter.com/owltastic">
                            <FaTwitter />
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a target="blank" href="https://dribbble.com/owltastic">
                            <FaDribbble />
                            Dribbble
                        </a>
                    </li>
                    <li>
                        <a target="blank" href="https://medium.com/@owltastic">
                            <FaMedium />
                            Medium
                        </a>
                    </li>
                    <li>
                        <a
                            target="blank"
                            href="https://www.instagram.com/owltastic/"
                        >
                            <FaInstagram />
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a
                            target="blank"
                            href="https://www.facebook.com/owltasticdesign"
                        >
                            <FaFacebook />
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a
                            target="blank"
                            href="https://www.linkedin.com/in/owltastic/"
                        >
                            <FaLinkedin />
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </ContentAside>
        </ContentWrapper>
    );
}
