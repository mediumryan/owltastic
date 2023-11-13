import { styled } from 'styled-components';
import moon from './../../../Images/bg-moon-phases.webp';
import NewsLetter from './../Stay/NewsLetter';
import SocialList from './../Stay/SocialList';

const StayOuter = styled.section`
    width: 100%;
    padding: 24px;
    background-color: var(--black-100);
`;

const StayInner = styled.div`
    background: url(${moon}) -30% 50% no-repeat, url(${moon}) 130% 50% no-repeat;
    background-color: #2c2622;
    background-size: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--primary-100);
    padding: 5% 10%;
`;

const StayContents = styled.div`
    padding: 48px;
    h2 {
        color: var(--primary-100);
        font-size: 36px;
        margin-bottom: 36px;
    }
`;

const StayInset = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default function Stay() {
    return (
        <StayOuter>
            <StayInner>
                <StayContents>
                    <h2>Stay in touch</h2>
                    <StayInset>
                        <SocialList />
                        <NewsLetter />
                    </StayInset>
                </StayContents>
            </StayInner>
        </StayOuter>
    );
}
