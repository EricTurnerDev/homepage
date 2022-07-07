import {MailIcon} from "@heroicons/react/outline";

interface EmailProps {
    username: string;
    domain: string;
}

export default function EmailAddress({username, domain}: EmailProps) {
    const emailAddress = `${username}@${domain}`;
    return (
        <a href={`mailto:${emailAddress}`}>{emailAddress} <MailIcon className="inline h-4 w-4 align-text-top" /></a>
    )
}