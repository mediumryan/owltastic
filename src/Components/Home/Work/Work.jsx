import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { workState } from '../../../atom';
import WorkItem from './WorkItem';
import workBg from './../../../Images/bg-star-chart-alt.webp';

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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const WorkTitle = styled.h1`
    font-size: 32px;
    margin-top: 48px;
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

const WorkBg = styled.div`
    background: url(${workBg}) center no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: 1;
    opacity: 8%;
`;

export default function Work() {
    const works = useRecoilValue(workState);

    return (
        <WorkWrapper>
            <WorkInnerWrapper>
                <WorkTitle>Featured Work</WorkTitle>
                <Works>
                    {works.map((item) => {
                        return <WorkItem key={item.id} item={item} />;
                    })}
                </Works>
                <WorkBg />
            </WorkInnerWrapper>
        </WorkWrapper>
    );
}
