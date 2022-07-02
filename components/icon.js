import {CalendarIcon, HomeIcon, NewspaperIcon, UserIcon} from "@heroicons/react/outline";

const className = "inline h-4 w-4";
const icons = {
    calendar: <CalendarIcon className={className}/>,
    home: <HomeIcon className={className}/>,
    newspaper: <NewspaperIcon className={className} />,
    user: <UserIcon className={className} />
}
export default function Icon({name}) {
    const icon = icons[name] ? icons[name] : <span></span>;
    return (icon);
}