import elasticlunr from 'elasticlunr';
import {getPosts, filterPosts} from "./posts";

export function createSearchIndex() {
    const index = elasticlunr()
    index.addField('title');
    index.addField('subtitle');
    index.addField('excerpt');
    index.setRef('slug');

    const posts = filterPosts(getPosts(), {published: true, before: new Date()});

    posts.forEach((post) => {
        index.addDoc(post);
    })

    return index.toJSON();
}
