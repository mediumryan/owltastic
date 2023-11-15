import { PageWrapper } from '../App';
import AboutGreeting from '../Components/About/AboutGreeting';
import AboutContent from '../Components/About/AboutContent';
import AboutInterview from '../Components/About/AboutInterview';

export default function About() {
    return (
        <PageWrapper>
            <AboutGreeting />
            <AboutContent />
            <AboutInterview />
        </PageWrapper>
    );
}
