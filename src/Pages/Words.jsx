import React from 'react';
import { PageWrapper } from '../App';
import { styled } from 'styled-components';
import wordsBg from './../Images/bg-meteor-shower.webp';
import WordsGreeting from '../Components/Words/WordsGreeting';
import WordsBetter from '../Components/Words/WordsBetter';
import WordsWorse from '../Components/Words/WordsWorse';
import WordsWorse2 from '../Components/Words/WordsWorse2';
import WordsBetter2 from '../Components/Words/WordsBetter2';
import WordsInteresting from '../Components/Words/WordsInteresting';
import WordsNewGoal from '../Components/Words/WordsNewGoal';
import WordsConclusion from '../Components/Words/WordsConclusion';

const WordsPageWrapper = styled.div`
    padding-bottom: 3rem;
    background: var(--brown-100) url(${wordsBg}) top no-repeat;
    background-size: 100%;
    border-top: 0.5px solid var(--primary-100);
`;

const WordsInnerWrapper = styled.div`
    background-color: var(--primary-100);
`;

export const sectionWrapper = styled.section`
    background-color: red;
`;

export default function Words() {
    return (
        <WordsPageWrapper>
            <WordsGreeting />
            <WordsInnerWrapper>
                <WordsWorse />
                <WordsBetter />
                <WordsWorse2 />
                <WordsBetter2 />
                <WordsInteresting />
                <WordsNewGoal />
                <WordsConclusion />
            </WordsInnerWrapper>
        </WordsPageWrapper>
    );
}
