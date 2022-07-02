import {getSortedPostsData} from "../lib/posts";
import Blog from '../components/blog';

export async function getStaticProps() {
    const postsData = getSortedPostsData();
    return {
        props: {
            postsData
        }
    }
}

export default Blog;