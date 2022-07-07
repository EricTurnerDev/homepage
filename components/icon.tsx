import {CalendarIcon, HomeIcon, NewspaperIcon, UserIcon} from "@heroicons/react/solid";
import classNames from "classnames";

type IconNames =
    "calendar" |
    "home" |
    "newspaper" |
    "user";

type Icons = {
    [N in IconNames]?: JSX.Element
}

const iconClassName: string = "inline h-5 w-5";

const icons: Icons = {
    calendar: <CalendarIcon className={iconClassName}/>,
    home: <HomeIcon className={iconClassName}/>,
    newspaper: <NewspaperIcon className={iconClassName} />,
    user: <UserIcon className={iconClassName} />,
}

interface IconProps {
    name: IconNames;
    className?: string;
}

export default function Icon({name, className}: IconProps) {
    return (<span className={classNames('icon', className)}>{icons[name]}</span>);
}