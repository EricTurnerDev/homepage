import classNames from "classnames";
import FadeIn from "./fadeIn";
import PostCard from "./postCard";
import {Categories} from "./category";

export interface FrontMatterProps {
    title: string;
    subtitle: string;
    thumbnail: string;
    thumbnailDescription: string;
    author: string;
    date: string;
    categories?: Categories[];
}

export interface PostProps extends FrontMatterProps {
    slug: string;
}

interface PostsProps {
    postsData: PostProps[];
    className?: string;
}

export default function Posts({postsData, className}: PostsProps) {
    return (
        <ul className={classNames(className)}>
            {postsData.map((postData, i) => (
                <li className="mt-5 first:mt-0 px-5 py-5 rounded-lg bg-gray-200 dark:bg-slate-700" key={postData.slug}>
                    <FadeIn delay={i*100}>
                        <PostCard {...postData} />
                    </FadeIn>
                </li>
            ))}
        </ul>
    )
}
