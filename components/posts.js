import Link from "next/link";
import Date from "./date";
import classNames from "classnames";
import Photo from "./photo";
import Category from "./category";
import Icon from "./icon";

export default function Posts({postsData, className}) {
    return (
        <ul className={classNames(className)}>
            {postsData.map(({slug, title, subtitle, thumbnail, author, date, categories}) => (
                <li className="mt-5 first:mt-0 px-5 py-5 rounded-lg bg-gray-200 dark:bg-slate-700" key={slug}>
                    <Link href={`/blog/${slug}`}>
                        <a className='group hover:no-underline'>
                            {/* Only visible when breakpoint is small */}
                            <div className="md:invisible flex flex-col my-auto py-0 md:w-0 md:h-0">
                                <div className="flex flex-row">
                                    {thumbnail &&
                                        <Photo src={thumbnail} width={100} height={100}/>
                                    }
                                    {!thumbnail &&
                                        <Photo
                                            src="https://i.imgur.com/eNqj5kc.jpg"
                                            width={100}
                                            height={100}
                                            alt="Eric kayak sailing"
                                        />
                                    }
                                    <div className="flex flex-col justify-around pt-0 my-0 pl-5 w-3/4">
                                        <h3 className="group-hover:underline py-0">
                                            {title}
                                        </h3>
                                        <div className="metadata flex flex-row">
                                            <p className="mr-2"><Icon name="user" /> {author}</p>
                                            <p className="mx-2"><Icon name="calendar" /> <Date dateString={date}/></p>
                                        </div>
                                        <div className="flex flex-row">
                                            {categories && categories.map(category => (<Category key={category}>{category}</Category>))}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="mt-0 font-normal">{subtitle}</h4>
                                </div>
                            </div>

                            {/* Only visible when breakpoint is medium or larger */}
                            <div
                                className="invisible h-0 w-0 flex flex-row md:my-auto md:py-0 md:visible md:h-auto md:w-auto">
                                {thumbnail &&
                                    <Photo src={thumbnail} width={150} height={150}/>
                                }
                                {!thumbnail &&
                                    <Photo
                                        src="https://i.imgur.com/eNqj5kc.jpg"
                                        width={150}
                                        height={150}
                                        alt="Eric kayak sailing"
                                    />
                                }
                                <div className="flex flex-col ml-5 w-3/4 justify-evenly">
                                    <h3 className="pt-0 my-0 group-hover:underline">
                                        {title}
                                    </h3>

                                    <h4 className="font-normal">{subtitle}</h4>

                                    <div className="metadata flex flex-row">
                                        <p className="mr-2"><Icon name="user" /> {author}</p>
                                        <p className="mx-2"><Icon name="calendar" /> <Date dateString={date}/></p>
                                    </div>

                                    <div className="categories">{categories && categories.map(category => (<Category key={category}>{category}</Category>))}</div>
                                </div>
                            </div>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
