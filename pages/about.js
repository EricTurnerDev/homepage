import {getSortedPostsData} from "../lib/posts";
import About from '../components/about';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}

export default About;