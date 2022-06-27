import Link from "next/link";
import Date from "./date";
import classNames from "classnames";

export default function Posts({postsData, className}) {
    return (
        <ul className={classNames(className)}>
            {postsData.map(({slug, title, subtitle, date, excerpt}) => (
                <li className="mt-8 first:mt-0" key={slug}>
                    <h3 className="text-lg font-semibold">
                        <Link href={`/posts/${slug}`}>
                            <a>{title}</a>
                        </Link>
                    </h3>
                    <div className="metadata font-light text-gray-800">
                        <h4>{subtitle}</h4>
                        <p>Published <Date dateString={date}/></p>
                    </div>
                    <p className="mt-4">{excerpt}</p>
                    <Link href={`/posts/${slug}`}>
                        <a className="block mt-4 font-semibold">Read more</a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
