import React from 'react';
import { WordsSectionWrapper } from '../../Pages/Words';
import { styled } from 'styled-components';
import { WordsText } from './WordsIntro';

export const WordsTitle = styled.h3`
    font-size: 1.25rem;
    align-self: flex-start;
    padding-left: 15%;
    margin: 1.5rem 0;
`;

export default function WordsWorse() {
    return (
        <WordsSectionWrapper>
            <WordsTitle>It gets worse</WordsTitle>
            <WordsText>
                <p>
                    In 2016, things took an unexpected and terrifying turn. My
                    mom was diagnosed with a rare form of late-stage leukemia,
                    and we were told even with a risky and immediate treatment,
                    she likely had little time left. I made the agonizing
                    decision to return to my home state to help my family,
                    saying goodbye to friends, my relationship, and the city I
                    loved.
                </p>
            </WordsText>
            <WordsText>
                <p>
                    In 2016, things took an unexpected and terrifying turn. My
                    mom was diagnosed with a rare form of late-stage leukemia,
                    and we were told even with a risky and immediate treatment,
                    she likely had little time left. I made the agonizing
                    decision to return to my home state to help my family,
                    saying goodbye to friends, my relationship, and the city I
                    loved.
                </p>
            </WordsText>
        </WordsSectionWrapper>
    );
}
