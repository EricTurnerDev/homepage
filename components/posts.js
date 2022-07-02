import classNames from "classnames";
import PostCard from "./postCard";

export default function Posts({postsData, className}) {
    return (
        <ul className={classNames(className)}>
            {postsData.map((postData) => (
                <li className="mt-5 first:mt-0 px-5 py-5 rounded-lg bg-gray-200 dark:bg-slate-700" key={postData.slug}>
                    <PostCard {...postData} />
                </li>
            ))}
        </ul>
    )
}
