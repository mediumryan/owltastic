import { styled } from 'styled-components';
import './CSS/index.css';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Feature from './Components/Feature/Feature';
import Greeting from './Components/Greeting/Greeting';
import Recent from './Components/Recent/Recent';
import Contact from './Contact/Contact';
import Stay from './Stay/Stay';
import Footer from './Footer/Footer';

const OuterWrapper = styled.div`
    background-color: var(--primary-200);
`;

const InnerWrapper = styled.div`
    height: 100vh;
    padding: var(--padding-medium-large);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function App() {
    return (
        <OuterWrapper>
            <InnerWrapper>
                <Header />
                <Intro />
                <Feature />
                <Greeting />
                <Recent />
                <Contact />
                <Stay />
                <Footer />
            </InnerWrapper>
        </OuterWrapper>
    );
}

export default App;
