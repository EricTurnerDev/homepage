import classNames from "classnames";
import {ExternalLinkIcon} from "@heroicons/react/outline";

export default function ExternalLink({href, children, className}) {
    return (
        <a className={classNames('external-link', className)}
           target="_blank"
           rel="noopener noreferrer"
           href={href}>
            {children} <ExternalLinkIcon className="inline h-4 w-4 align-text-top" />
        </a>
    )
}
