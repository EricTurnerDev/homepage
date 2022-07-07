import {CalendarIcon, HomeIcon, NewspaperIcon, UserIcon} from "@heroicons/react/solid";
import classNames from "classnames";

const className = "inline h-5 w-5";
const icons = {
    calendar: <CalendarIcon className={className}/>,
    home: <HomeIcon className={className}/>,
    newspaper: <NewspaperIcon className={className} />,
    user: <UserIcon className={className} />
}

export default function Icon({name, className}) {
    const icon = icons[name] ? icons[name] : <span></span>;
    return (<span className={classNames('icon', className)}>{icon}</span>);
}