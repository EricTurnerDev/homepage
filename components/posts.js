import Link from "next/link";
import Date from "./date";
import classNames from "classnames";

export default function Posts({postsData, className}) {
    return (
        <ul className={classNames(className)}>
            {postsData.map(({slug, title, subtitle, author, date, excerpt}) => (
                <li className="mt-8 first:mt-0 px-5 py-1 rounded-lg bg-gray-200 dark:bg-slate-700" key={slug}>
                    <Link href={`/posts/${slug}`}>
                        <a className='group hover:no-underline'>
                            <h3 className="mb-0 group-hover:underline">
                                {title}
                            </h3>

                            <h4 className="mt-0 font-normal">{subtitle}</h4>
                            <p className="metadata mt-1">
                                By {author}, published on <Date dateString={date}/>
                            </p>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
