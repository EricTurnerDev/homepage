import PageLayout from '../components/pageLayout';
import utilStyles from '../styles/utils.module.css';

export default function Custom404() {
    return (
        <PageLayout>
            <main>
                <h1 className={utilStyles.headingLg}>404 - Page Not Found</h1>
            </main>
        </PageLayout>
    )
}