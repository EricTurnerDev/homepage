import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import {bundleMDX} from 'mdx-bundler';
// @ts-ignore
import remarkGfm from 'remark-gfm';
// @ts-ignore
import rehypePrism from 'rehype-prism';
import {compareAsc, parseISO} from "date-fns";
import {Categories} from "../components/category";

const postsDirectory = path.join(process.cwd(), 'posts');

function getSlug(fileName) {
    return fileName.replace(/\.mdx?$/, '');
}

interface PostVisibilityProps {
    date: string;
    published: boolean;
}

function isVisible(post: PostVisibilityProps) {
    const isPastDate = compareAsc(parseISO(post.date), new Date()) < 0;
    return post.published && isPastDate;
}

interface PublishedPostsProps {
    slug: string;
    date: string;
    published: boolean;
    [x:string]: any;
}

function getPublishedPosts(): PublishedPostsProps[] {
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
            date: matterResult.data.date,
            published: matterResult.data.published,
            ...matterResult.data,
        };
    }).filter(post => isVisible(post));
}

interface FiltersProps {
    maxPosts?: number;
    category?: Categories;
}

export function getSortedPosts(filters: FiltersProps = {}) {
    const {maxPosts = 0, category} = filters;

    let postsData = getPublishedPosts()
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
    const fullPath: string = path.join(postsDirectory, `${slug}.mdx`);
    const source: string = fs.readFileSync(fullPath, 'utf8');

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
    const categoriesSet: Set<Categories> = new Set(categories);
    return Array.from(categoriesSet).sort();
}

export function getAllCategoryPaths() {
    const categories: Categories[] = getAllCategories();
    return categories.map((category: Categories) => ({
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