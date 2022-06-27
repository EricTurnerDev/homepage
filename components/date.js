import { parseISO, format } from 'date-fns';
import classNames from "classnames";

export default function Date({ dateString, className }) {
    const date = parseISO(dateString);
    return <time className={classNames(className)} dateTime={dateString}>
        {format(date, 'LLLL d, yyyy')}
    </time>;
}