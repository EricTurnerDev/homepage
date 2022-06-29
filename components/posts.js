import Link from "next/link";
import Date from "./date";
import classNames from "classnames";
import {CalendarIcon} from "@heroicons/react/outline";
import {UserIcon} from "@heroicons/react/outline";

export default function Posts({postsData, className}) {
    return (
        <ul className={classNames(className)}>
            {postsData.map(({slug, title, subtitle, author, date, excerpt}) => (
                <li className="mt-8 first:mt-0" key={slug}>
                    <h3 className="mb-0">
                        <Link href={`/posts/${slug}`}>
                            <a>{title}</a>
                        </Link>
                    </h3>
                    <h4 className="mt-0">{subtitle}</h4>
                    <div className="pl-3">
                        <div className="metadata font-light mt-1">
                            <p>
                                <UserIcon className="inline h-4 w-4" /> {author}
                            </p>
                            <p>
                                <CalendarIcon className="inline h-4 w-4" /> Published on <Date dateString={date}/>
                            </p>
                        </div>
                        <p className="mt-3">
                            {excerpt}

                            <Link href={`/posts/${slug}`}>
                                <a className="inline mt-4 ml-3 font-semibold">Read more ...</a>
                            </Link>
                        </p>
                    </div>

                </li>
            ))}
        </ul>
    )
}
