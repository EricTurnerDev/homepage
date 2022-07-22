import {filterPosts, getAllSlugPaths, getPostData, getPosts} from '../../lib/posts';
import Post from '../../components/pages/post';

/**
 * Used by nextjs for pre-rendering dynamic routes, so it knows what to construct.
 * Passes the postData to the Post component.
 */
export async function getStaticProps({params}) {
    const postData = await getPostData(params.slug);
    return {
        props: {
            ...postData,
        },
    };
}

/**
 * Used by nextjs for dynamic routes, so it knows all possible values for the path parameter.
 */
export async function getStaticPaths() {
    const posts = filterPosts(getPosts(), {published: true, before: new Date()});
    const paths = getAllSlugPaths(posts);
    return {
        paths,
        fallback: false,
    };
}

export default Post;