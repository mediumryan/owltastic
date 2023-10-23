import { keyframes, styled } from 'styled-components';

const WorkItemWrapper = styled.li`
    width: 392px;
    height: 248px;
    overflow: hidden;
    margin: 24px;
    border: 1px solid var(--primary-100);
    padding: 24px;
    z-index: 2;
    cursor: pointer;
`;

const WorkAnchor = styled.a`
    width: 100%;
`;

const WorkImageContainer = styled.div`
    width: 100%;
    position: relative;
`;

const upImage = keyframes`
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-100%);
    }
`;

const WorkImage = styled.img`
    position: absolute;
    display: block;
    filter: grayscale(100%) invert(10%) sepia(8%) saturate(350%)
        hue-rotate(351deg) brightness(105%) contrast(95%);
    margin-bottom: 32px;
    transition: transform 8s;
    height: auto;
    width: 100%;
    aspect-ratio: auto 392 / 248;
    overflow: clip;
    &:hover {
        animation: ${upImage} 8s linear;
        filter: none;
    }
`;

export default function WorkItem({ item }) {
    return (
        <WorkItemWrapper>
            <WorkAnchor>
                <WorkImageContainer>
                    <WorkImage src={item.image_path} />
                </WorkImageContainer>
            </WorkAnchor>
        </WorkItemWrapper>
    );
}
