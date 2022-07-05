import classNames from "classnames";
import FadeIn from "./fadeIn";
import PostCard from "./postCard";

export default function Posts({postsData, className}) {
    return (
        <ul className={classNames(className)}>
            {postsData.map((postData, i) => (
                <li className="mt-5 first:mt-0 px-5 py-5 rounded-lg bg-gray-200 dark:bg-slate-700" key={postData.slug}>
                    <FadeIn delay={i*100} duration={200}>
                        <PostCard {...postData} />
                    </FadeIn>
                </li>
            ))}
        </ul>
    )
}
