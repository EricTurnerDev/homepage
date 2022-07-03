import Link from 'next/link';
import Category from "./category";

export default function CategoryLink({children}) {
    return (
        <Link href={`/blog/category/${children}`}>
            <a className="categoryLink">
                <Category>{children}</Category>
            </a>
        </Link>
    )
}
