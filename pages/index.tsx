import Home from '../components/pages/home';
import {filterPosts, getPosts, sortPostsByDateDescending, maxPosts} from "../lib/posts";
import Config from "../lib/config";
import {createSearchIndex} from "../lib/search";

/**
 * Causes next.js to fetch data before static (build time) pre-rendering.
 * Passes the allPostsData to the Home component.
 * Only runs server-side, so you could write code such as direct database queries.
 * Can only be exported from a page.
 * Can't use data that's only available at request time (e.g. query parameters).
 *
 * @returns {Promise<{props: {allPostsData}}>}
 */
export async function getStaticProps() {
    const postsData = maxPosts(sortPostsByDateDescending(filterPosts(getPosts(), {
        published: true,
        before: new Date()
    })), Config.maxHomePagePosts);

    const searchIndex = createSearchIndex();

    return {
        props: {
            postsData,
            searchIndex,
        },
    };
}

export default Home;
