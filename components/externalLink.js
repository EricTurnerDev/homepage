import classNames from "classnames";

export default function ExternalLink({href, children, className}) {
    return (
        <a className={classNames('external-link', className)} target="_blank" rel="noopener noreferrer" href={href}>{children}</a>
    )
}