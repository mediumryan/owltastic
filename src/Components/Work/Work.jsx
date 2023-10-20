import React from 'react';
import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { workState } from '../../atom';
import WorkItem from './WorkItem';

const WorkWrapper = styled.section`
    background-color: var(--black-100);
    color: var(--primary-100);
    width: 100%;
    padding: 24px;
`;

const WorkInnerWrapper = styled.div`
    width: 100%;
    border: 1px solid var(--primary-100);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Works = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 24px;
`;

export default function Work() {
    const works = useRecoilValue(workState);

    return (
        <WorkWrapper>
            <WorkInnerWrapper>
                <Works>
                    {works.map((item) => {
                        return <WorkItem key={item.id} item={item} />;
                    })}
                </Works>
            </WorkInnerWrapper>
        </WorkWrapper>
    );
}
