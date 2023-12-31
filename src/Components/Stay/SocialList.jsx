import { styled } from 'styled-components';
import {
    FaDribbble,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa6';

const SocialListWrapper = styled.div`
    h4 {
        color: var(--primary-100);
        font-size: 14px;
        margin-bottom: 24px;
    }
    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 24px;
        margin-bottom: 48px;
        li {
            a {
                font-size: 14px;
                text-decoration: none;
                color: var(--primary-200);
                border-bottom: 1px solid var(--primary-100);
                svg {
                    margin-right: 8px;
                }
                &:hover {
                    color: var(--primary-100);
                    border-color: var(--primary-200);
                }
            }
        }
    }
`;

export default function SocialList() {
    return (
        <SocialListWrapper>
            <h4>FOLLOW ME ELSEWHERE</h4>
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
        </SocialListWrapper>
    );
}
