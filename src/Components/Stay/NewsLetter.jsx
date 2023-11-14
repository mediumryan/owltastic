import { styled } from 'styled-components';

const NewsLetterWrapper = styled.div`
    h4 {
        color: var(--primary-100);
        font-size: 14px;
        margin-bottom: 24px;
    }
`;

const FormBox = styled.form`
    div {
        div {
            label {
                font-size: 10px;
                color: var(--primary-100);
            }
        }
    }
`;

const InputButton = styled.div`
    margin-top: 12px;
    display: flex;
    align-items: center;
    input {
        font-size: 18px;
        width: 75%;
        padding: 2px 8px;
    }
    button {
        font-size: 18px;
        width: 25;
        background-color: var(--primary-100);
        padding: 3px 8px;
        margin-left: 4px;
    }
`;

export default function NewsLetter() {
    return (
        <NewsLetterWrapper>
            <h4>SUBSCRIBE FOR UPDATES</h4>
            <div>
                <FormBox>
                    <div>
                        <div>
                            <label>EMAIL ADDRESS</label>
                            <InputButton>
                                <input placeholder="name@example.com" />
                                <button>SUBSCRIBE</button>
                            </InputButton>
                        </div>
                    </div>
                </FormBox>
            </div>
        </NewsLetterWrapper>
    );
}
