import {getAllCategoryPaths, getSortedPosts} from "../../../lib/posts";
import Blog from '../../../components/pages/blog';

export async function getStaticProps({params}) {
    const postsData = await getSortedPosts({category: params.category})
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
    const paths = getAllCategoryPaths();
    return {
        paths,
        fallback: false,
    };
}

export default Blog;