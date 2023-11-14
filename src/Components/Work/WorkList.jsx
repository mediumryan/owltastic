import { useRecoilValue } from 'recoil';
import { keyframes, styled } from 'styled-components';
import { workListState } from '../../atom';

const WorkListOuter = styled.section``;

const scrollAnimation = keyframes`
    from{
        transform: translateY(0);
    }
    to{
        transform: translateY(-85%);
    }
`;

const WorkListInner = styled.div`
    background-color: var(--brown-100);
    padding: 8rem;
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
            background: var(--brown-100);
            box-sizing: border-box;
            border: 0.5px solid var(--primary-100);
            padding: 24px;
            margin-bottom: 32px;
            width: 46%;
            a {
                color: var(--primary-100);
                text-decoration: none;
                div:first-child {
                    height: 364px;
                    margin-bottom: 24px;
                    overflow: hidden;
                    img {
                        width: 100%;
                        border: 0.5px solid var(--primary-100);
                        filter: grayscale(100%) invert(10%) sepia(8%)
                            saturate(350%) hue-rotate(351deg) brightness(105%)
                            contrast(95%);
                        &:hover {
                            filter: none;
                            animation: ${scrollAnimation} 8s ease;
                        }
                    }
                }
                div:last-child {
                    font-family: var(--font-family-normal);
                    font-size: 0.8rem;
                    letter-spacing: -0.2px;
                    line-height: 2;
                    display: flex;
                    align-items: center;
                    h4 {
                        flex-basis: 70%;
                        padding-right: 2rem;
                    }
                }
            }
            &:hover {
                a {
                    color: var(--primary-200);
                }
            }
        }
    }
`;

const SeeMore = styled.span`
    font-family: var(--font-family-round);
    display: flex;
    justify-content: center;
    padding: 0.25rem 0;
    flex-basis: 30%;
    border-radius: 16px;
    border: 0.5px solid var(--primary-100);
`;

export default function WorkList() {
    const workList = useRecoilValue(workListState);

    return (
        <WorkListOuter>
            <WorkListInner>
                <ul>
                    {workList.map((item) => {
                        return (
                            <li key={item.id}>
                                <a href={item.url}>
                                    <div>
                                        <img
                                            src={item.image_path}
                                            alt="Project Poster"
                                        />
                                    </div>
                                    <div>
                                        <h4>
                                            <span>
                                                <strong>Client: </strong>
                                                {item.client}
                                                <br />
                                                <strong>Project: </strong>
                                                {item.content}
                                            </span>
                                        </h4>
                                        <SeeMore>See more →</SeeMore>
                                    </div>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </WorkListInner>
        </WorkListOuter>
    );
}
