import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import {bundleMDX} from 'mdx-bundler';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism';

const postsDirectory = path.join(process.cwd(), 'posts');

function getSlug(fileName) {
    return fileName.replace(/\.mdx?$/, '');
}

export function getSortedPostsData(maxPosts = 0) {
    const fileNames = fs.readdirSync(postsDirectory);

    // Get published posts sorted in date descending order.
    const allPostsData = fileNames.map((fileName) => {
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
    })
        .filter(post => post.published)
        .sort(({date: a}, {date: b}) => {
            if (a < b) {
                return 1;
            } else if (a > b) {
                return -1;
            } else {
                return 0;
            }
        });

    // Return max requested posts, or all of them.
    if (maxPosts && maxPosts > 0) {
        return allPostsData.slice(0, maxPosts);
    } else {
        return allPostsData;
    }
}

export function getAllPostSlugs() {
    const posts = getSortedPostsData();

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