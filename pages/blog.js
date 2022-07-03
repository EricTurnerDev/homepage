import {getSortedPosts, getAllCategories} from "../lib/posts";
import Blog from '../components/blog';

export async function getStaticProps() {
    const postsData = getSortedPosts();
    const categories = getAllCategories();
    return {
        props: {
            postsData,
            categories,
        }
    }
}

export default Blog;