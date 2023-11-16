import { PageWrapper } from '../App';
import ContactGreeting from '../Components/Contact/ContactGreeting';
import ContactContent from '../Components/Contact/ContactContent';

export default function Contact() {
    return (
        <PageWrapper>
            <ContactGreeting />
            <ContactContent />
        </PageWrapper>
    );
}
