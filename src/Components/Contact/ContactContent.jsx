import React from 'react';
import {
    ContentAside,
    ContentText,
    ContentTextBox,
    ContentWrapper,
} from '../About/AboutContent';
import {
    FaDribbble,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaMedium,
    FaTwitter,
} from 'react-icons/fa';
import { styled } from 'styled-components';

const ContactEmailLink = styled.a`
    font-size: 0.6rem;
    border-bottom: 0.5px solid var(--black-200);
    color: var(--black-200);
    padding-bottom: 0.25rem;
    transition: 150ms all;
    text-decoration: none;
    &:hover {
        color: var(--primary-200);
        border-color: var(--primary-200);
    }
`;

export default function ContactContent() {
    return (
        <ContentWrapper>
            <ContentTextBox style={{ paddingRight: '3rem' }}>
                <ContentText>
                    <p>
                        Thank you for your interest in working together, I would
                        love to hear about your project. In order to ensure
                        efficient communication, please include as much
                        information as possible about the scope of your project,
                        your timelines, and your budget, so I can quickly let
                        you know if we’re a good fit!
                    </p>
                </ContentText>
                <ContactEmailLink
                    href="https://owltastic.com/mailto@hello@owltastic.com"
                    target="blank"
                >
                    EMAIL ME AT HELLO@OWLTASTIC.COM
                </ContactEmailLink>
            </ContentTextBox>
            <ContentAside>
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
