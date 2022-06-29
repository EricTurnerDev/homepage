import Link from "next/link";
import {ArrowNarrowLeftIcon} from "@heroicons/react/outline";

export default function Back({href, label}) {
    return (
        <Link href={href}>
            <a className="back block font-semibold text-black dark:text-white mt-6 px-6 md:mt-10 md:px-10">
                <ArrowNarrowLeftIcon className="inline h-4 w-4 align-text-bottom" /> Back to {label}
            </a>
        </Link>
    )
}