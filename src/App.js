import { styled } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import './CSS/index.css';
// pages
import Home from './Pages/Home';
// components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Pages/NotFound';
import Work from './Pages/Work';
import Words from './Pages/Words';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ContactMe from './Components/ContactMe/ContactMe';
import Stay from './Components/Stay/Stay';

const RootWrapper = styled.div`
    background-color: var(--primary-200);
    padding: var(--padding-very-large);
`;

export const PageWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--black-100);
`;

function App() {
    return (
        <RootWrapper>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/words" element={<Words />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ContactMe />
            <Stay />
            <Footer />
        </RootWrapper>
    );
}

export default App;
