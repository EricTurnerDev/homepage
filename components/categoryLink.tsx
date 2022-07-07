import Link from 'next/link';
import Category, { CategoryProps } from "./category";

export default function CategoryLink({children}: CategoryProps) {
    return (
        <Link href={`/blog/category/${children}`}>
            <a className="categoryLink">
                <Category>{children}</Category>
            </a>
        </Link>
    )
}
