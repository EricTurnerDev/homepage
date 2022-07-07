import classNames from 'classnames';
import {ExternalLinkIcon} from '@heroicons/react/outline';

interface ExternalLinkProps {
    href: string;
    rel?: string;
    className?: string;
    children: JSX.Element | JSX.Element[] | string;
}

export default function ExternalLink({href, rel='', className, children}: ExternalLinkProps) {
    return (
        <a className={classNames('external-link', className)}
           target="_blank"
           rel={`noopener noreferrer ${rel}`}
           href={href}>
            {children} <ExternalLinkIcon className="inline h-4 w-4 align-text-top" />
        </a>
    )
}