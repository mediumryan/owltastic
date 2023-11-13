import { styled } from 'styled-components';
import globe from './../../../Images/bg-globe.webp';

const ContactOuter = styled.section`
    background: url(${globe}) 93% center no-repeat;
    background-size: 200px;
    position: relative;
    background-color: var(--primary-100);
`;

const ContactInner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContactContents = styled.div`
    padding: 5% 25%;
    h1 {
        font-size: 64px;
        margin-bottom: 24px;
    }
    div {
        p {
            font-size: 18px;
            font-family: var(--font-family-normal);
            margin-bottom: 12px;
        }
        a {
            font-size: 10px;
            color: var(--black-200);
            text-decoration: none;
            border-bottom: 1px solid var(--black-200);
            padding-bottom: 4px;
        }
    }
`;

export default function Contact() {
    return (
        <ContactOuter>
            <ContactInner>
                <ContactContents>
                    <h1>Contact Me</h1>
                    <div>
                        <p>
                            I’m currently taking on new clients, and would love
                            to hear about your project. Please include as much
                            information as possible about the scope of your
                            project, your timelines, and your budget.
                        </p>
                        <a href="#">EMAIL ME AT HELLO@OWLTASTIC.COM</a>
                    </div>
                </ContactContents>
            </ContactInner>
        </ContactOuter>
    );
}
