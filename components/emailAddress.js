import {MailIcon} from "@heroicons/react/outline";

export default function EmailAddress({username, domain}) {
    const emailAddress = `${username}@${domain}`;
    return (
        <a href={`mailto:${emailAddress}`}>{emailAddress} <MailIcon className="inline h-4 w-4 align-text-top" /></a>
    )
}