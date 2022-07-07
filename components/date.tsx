import { parseISO, format } from 'date-fns';
import classNames from "classnames";

interface DateProps {
    date: string;
    className?: string;
}

export default function Date({ date, className }: DateProps) {
    const d = parseISO(date);
    return <time className={classNames('date', className)} dateTime={date}>
        {format(d, 'LLLL d, yyyy')}
    </time>;
}