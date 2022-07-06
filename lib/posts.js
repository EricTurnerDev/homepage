import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import {bundleMDX} from 'mdx-bundler';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism';
import {compareAsc, parseISO} from "date-fns";

const postsDirectory = path.join(process.cwd(), 'posts');

function getSlug(fileName) {
    return fileName.replace(/\.mdx?$/, '');
}

function isVisible(post) {
    const isPastDate = compareAsc(parseISO(post.date), new Date()) < 0;
    return post.published && isPastDate;
}

function getPublishedPosts() {
    const fileNames = fs.readdirSync(postsDirectory);

    // Get published blog posts
    return fileNames.map((fileName) => {
        // Remove ".md" from file name to get slug
        const slug = getSlug(fileName);

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the slug
        return {
            slug,
            ...matterResult.data,
        };
    }).filter(post => isVisible(post));
}

export function getSortedPosts(filters = {}) {
    const {maxPosts = 0, category} = filters;

    let postsData = getPublishedPosts(filters)
        .sort(({date: a}, {date: b}) => {
            if (a < b) {
                return 1;
            } else if (a > b) {
                return -1;
            } else {
                return 0;
            }
        });

    // Filter by category
    if (category) {
        postsData = postsData.filter(post => post.categories?.includes(category));
    }

    // Return max requested blog posts, or all of them.
    if (maxPosts && maxPosts > 0) {
        return postsData.slice(0, maxPosts);
    } else {
        return postsData;
    }
}

export async function getPostData(slug) {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const source = fs.readFileSync(fullPath, 'utf8');

    const {code, frontmatter} = await bundleMDX({
        source,
        mdxOptions(options) {
            options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
            options.rehypePlugins = [...(options?.rehypePlugins ?? []), rehypePrism];
            return options;
        },
    });

    return {
        slug,
        frontmatter,
        code,
    };
}

export function getAllCategories() {
    const posts = getPublishedPosts();
    const categories = posts.reduce(
        (accumulator, post) => accumulator.concat(post.categories || []),
        []
    );
    return [...new Set(categories)].sort();
}

export function getAllCategoryPaths() {
    const categories = getAllCategories();
    return categories.map(category => ({
        params: {
            category
        }
    }))
}

export function getAllSlugPaths() {
    const posts = getSortedPosts();

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       slug: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       slug: 'pre-rendering'
    //     }
    //   }
    // ]
    return posts.map(post => ({
        params: {
            slug: post.slug
        }
    }))
}