import React from 'react';
import { styled } from 'styled-components';
import { HiExternalLink } from 'react-icons/hi';

const AboutItemWrapper = styled.li`
    border: 1px solid var(--primary-100);
    padding: 2rem 3rem;
    background-color: var(--brown-100);
    margin: 24px;
    a {
        text-decoration: none;
        color: var(--primary-100);
        p {
            font-size: 12px;
            margin-bottom: 24px;
            svg {
                margin-left: 12px;
            }
        }
        h3 {
            font-size: 16px;
            font-family: var(--font-family-normal);
        }
        &:hover {
            text-decoration: underline;
            color: var(--primary-200);
        }
    }
`;

export default function AboutItem({ item }) {
    return (
        <AboutItemWrapper>
            <a href={item.url}>
                <p>
                    {item.title}
                    <HiExternalLink />
                </p>
                <h3>{item.content}</h3>
            </a>
        </AboutItemWrapper>
    );
}
