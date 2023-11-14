import { styled } from 'styled-components';
import telescope from './../../Images/bg-telescope.webp';
import { Link } from 'react-router-dom';

const WorkHomeWrapper = styled.section`
    width: 100%;
    background: #faefdd url(${telescope}) 32px center no-repeat;
    background-size: auto 80%;
    padding: 5rem 2rem;
    div {
        margin-left: 35%;
        h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
        }
        p {
            font-weight: 300;
            font-size: 1rem;
            padding-right: 5rem;
            font-family: var(--font-family-normal);
            a {
                text-decoration: none;
                color: var(--text-100);
                border-bottom: 1px solid #000;
                &:hover {
                    color: var(--primary-200);
                    border-color: var(--primary-200);
                }
            }
        }
    }
`;

export default function WorkHome() {
    return (
        <WorkHomeWrapper>
            <div>
                <h1>Work</h1>
                <p>
                    I’ve been a web designer for nearly 20 years, creating
                    editorial, ecommerce, and marketing websites, as well as
                    digital products, for companies of all sizes and industries.
                    Below is a selection of the work I’ve done in the last few
                    years. To see an overview of all of my recent work, check
                    out my <Link to="/all-the-work">all the work</Link> page.
                </p>
            </div>
        </WorkHomeWrapper>
    );
}
