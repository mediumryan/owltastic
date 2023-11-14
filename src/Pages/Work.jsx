import { PageWrapper } from '../App';
import WorkHome from '../Components/Work/WorkHome';
import WorkList from '../Components/Work/WorkList';

export default function Work() {
    return (
        <PageWrapper>
            <WorkHome />
            <WorkList />
        </PageWrapper>
    );
}
