import {getPosts, sortPostsByDateDescending, filterPosts, getAllCategories} from "../lib/posts";
import Blog from '../components/pages/blog';

export async function getStaticProps() {
    const postsData = sortPostsByDateDescending(filterPosts(getPosts(), {published: true, before: new Date()}));
    const categories = getAllCategories(postsData);
    return {
        props: {
            postsData,
            categories,
        }
    }
}

export default Blog;