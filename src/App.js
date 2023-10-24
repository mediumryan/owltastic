import { styled } from 'styled-components';
import './CSS/index.css';
import Header from './Components/Header/Header';
import Stay from './Components/Stay/Stay';
import Footer from './Footer/Footer';
import Home from './Components/Home/Home';
import Work from './Components/Work/Work';
import Words from './Components/Words/Words';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

const OuterWrapper = styled.div`
    background-color: var(--primary-200);
    padding: var(--padding-very-large);
`;

const InnerWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--black-100);
`;

function App() {
    return (
        <OuterWrapper>
            <InnerWrapper>
                <Header />
                <Home />
                <Work />
                <Words />
                <About />
                <Contact />
                <Stay />
                <Footer />
            </InnerWrapper>
        </OuterWrapper>
    );
}

export default App;
