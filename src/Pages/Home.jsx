import { PageWrapper } from '../App';
import About from './../Components/Home/About/About';
import Main from '../Components/Home/Main/Main';
import Words from '../Components/Home/Words/Words';
import Work from '../Components/Home/Work/Work';

export default function Home() {
    return (
        <PageWrapper>
            <Main />
            <Work />
            <Words />
            <About />
        </PageWrapper>
    );
}
