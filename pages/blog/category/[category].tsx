import {filterPosts, getAllCategoryPaths, getPosts, sortPostsByDateDescending} from "../../../lib/posts";
import Blog from '../../../components/pages/blog';

export async function getStaticProps({params}) {
    const postsData = sortPostsByDateDescending(filterPosts(getPosts(), {category: params.category, published: true, before: new Date()}));
    return {
        props: {
            postsData,
        },
    };
}

/**
 * Used by nextjs for dynamic routes, so it knows all possible values for the path parameter.
 */
export async function getStaticPaths() {
    const posts = filterPosts(getPosts(), {published: true, before: new Date()});
    const paths = getAllCategoryPaths(posts);
    return {
        paths,
        fallback: false,
    };
}

export default Blog;