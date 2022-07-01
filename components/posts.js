import Link from "next/link";
import Date from "./date";
import classNames from "classnames";
import Photo from "./photo";

export default function Posts({postsData, className}) {
    return (
        <ul className={classNames(className)}>
            {postsData.map(({slug, title, subtitle, thumbnail, author, date}) => (
                <li className="mt-8 first:mt-0 px-5 py-5 rounded-lg bg-gray-200 dark:bg-slate-700" key={slug}>
                    <Link href={`/posts/${slug}`}>
                        <a className='group hover:no-underline'>
                            <div className="flex flex-row items-start">
                                {thumbnail &&
                                    <Photo src={thumbnail} width={150} height={150}/>
                                }
                                <div className="flex flex-col ml-3">
                                    <h3 className="pt-0 my-0 group-hover:underline">
                                        {title}
                                    </h3>

                                    <h4 className="mt-0 font-normal">{subtitle}</h4>
                                    <p className="metadata mt-1">
                                        By {author}, published on <Date dateString={date}/>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
