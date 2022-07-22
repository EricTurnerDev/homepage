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

interface PostsProps {
    slug: string;
    date: string;
    published: boolean;
    [x: string]: any;
}

export function getPosts(): PostsProps[] {
    const fileNames = fs.readdirSync(postsDirectory);

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
    });
}

interface FiltersProps {
    category?: Categories;
    published?: boolean;
    before?: Date;
}

export function filterPosts(posts: PostsProps[], filters: FiltersProps = {}): PostsProps[] {
    const {category, published = false, before} = filters;

    // Filter by category
    let postsData = posts;
    if (category) {
        postsData = postsData.filter(post => post.categories?.includes(category));
    }

    // Filter by published
    if (published) {
        postsData = postsData.filter(post => post.published);
    }

    // Filter by date before
    if (before) {
        postsData = postsData.filter(post => compareAsc(parseISO(post.date), before) < 0);
    }

    return postsData;
}

export function sortPostsByDateDescending(posts: PostsProps[]): PostsProps[] {
    return posts.sort(({date: a}, {date: b}) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
}

export function maxPosts(posts: PostsProps[], max: number): PostsProps[] {
    // Return max requested blog posts, or all of them.
    if (max > 0) {
        return posts.slice(0, max);
    } else {
        return posts;
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

export function getAllCategories(posts: PostsProps[]) {
    const categories = posts.reduce(
        (accumulator, post) => accumulator.concat(post.categories || []),
        []
    );
    const categoriesSet: Set<Categories> = new Set(categories);
    return Array.from(categoriesSet).sort();
}

export function getAllCategoryPaths(posts: PostsProps[]) {
    const categories: Categories[] = getAllCategories(posts);
    return categories.map((category: Categories) => ({
        params: {
            category
        }
    }))
}

export function getAllSlugPaths(posts: PostsProps[]) {
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