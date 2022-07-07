import Link from 'next/link';
import Photo from "./photo";
import Icon from "./icon";
import Date from "./date";
import Category from "./category";

const defaultThumbnailUrl = "https://i.imgur.com/eNqj5kc.jpg";

export default function PostCard(postData) {
    return (
        <Link href={`/blog/${postData.slug}`}>
            <a className='postcard group hover:no-underline'>
                {/* Only visible when breakpoint is small */}
                <SmallPostCard {...postData} />

                {/* Only visible when breakpoint is medium or larger */}
                <MediumPostCard {...postData} />
            </a>
        </Link>
    )
}

function Categories({categories}) {
    return (
        <div className="categories flex flex-row">
            {categories && categories.map(category => (
                <Category key={category}>{category}</Category>))}
        </div>
    )
}

function Metadata({date, author}) {
    return (
        <div className="metadata flex flex-row">
            <p className="mr-3">
                <Icon className="mr-1" name="calendar"/> <Date dateString={date}/>
            </p>
            <p>
                <Icon className="mr-1" name="user"/>{author}
            </p>
        </div>
    )
}

function Title({title}) {
    return (
        <h3 className="title group-hover:underline py-0 my-0">
            {title}
        </h3>
    )
}

function Thumbnail({thumbnail, width, height, alt}) {
    return (
        <div className="thumbnail">
            {thumbnail &&
                <Photo src={thumbnail} width={width} height={height} alt={alt}/>
            }
            {!thumbnail &&
                <Photo
                    src={defaultThumbnailUrl}
                    width={width}
                    height={width}
                    alt="Eric kayak sailing"
                />
            }
        </div>
    )
}

function SmallPostCard({title, subtitle, thumbnail, thumbnailDescription, author, date}) {
    return (
        <div className="md:invisible flex flex-col my-auto py-0 md:w-0 md:h-0">
            <div className="flex flex-row mb-1">
                <Thumbnail thumbnail={thumbnail} alt={thumbnailDescription} width={150} height={150}/>
                <div className="flex flex-col justify-around pl-5 w-3/4">
                    <Title title={title}/>
                </div>
            </div>
            <div className="flex flex-col">
                <Metadata date={date} author={author}/>
                {/*<Categories categories={categories}/>*/}
                <p className="h4">{subtitle}</p>
            </div>
        </div>
    )
}

function MediumPostCard({title, subtitle, thumbnail, thumbnailDescription, author, date, categories}) {
    return (
        <div className="invisible md:visible h-0 w-0 flex flex-row md:my-auto md:py-0 md:h-auto md:w-auto">
            <Thumbnail thumbnail={thumbnail} alt={thumbnailDescription} width={150} height={150} />
            <div className="flex flex-col ml-5 w-3/4 justify-evenly">
                <Title title={title}/>
                <Metadata date={date} author={author}/>
                <Categories categories={categories}/>
                <p className="h4">{subtitle}</p>
            </div>
        </div>
    )
}
