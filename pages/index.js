import Home from '../components/home';
import {getSortedPostsData} from "../lib/posts";

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
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default Home;
