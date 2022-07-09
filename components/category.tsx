export type Categories =
    "3D Printing" |
    "Announcements" |
    "Automotive" |
    "Cooking" |
    "Ham Radio" |
    "Hiking" |
    "Nature" |
    "Programming";

export interface CategoryProps {
    children: Categories;
}

export default function Category({children}: CategoryProps) {
    return (
        <span className="category text-slate-100 px-3 mr-2 rounded bg-blue-500">{children}</span>
    )
}