import { PageWrapper } from '../App';
import About from './../Components/Home/About/About';
import Contact from '../Components/Home/Contact/Contact';
import Main from '../Components/Home/Main/Main';
import Stay from '../Components/Home/Stay/Stay';
import Words from '../Components/Home/Words/Words';
import Work from '../Components/Home/Work/Work';

export default function Home() {
    return (
        <PageWrapper>
            <Main />
            <Work />
            <Words />
            <About />
            <Contact />
            <Stay />
        </PageWrapper>
    );
}
