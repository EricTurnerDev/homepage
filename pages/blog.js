import {getSortedPostsData} from "../lib/posts";
import Blog from '../components/blog';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}

export default Blog;