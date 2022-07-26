import classNames from "classnames";
import Config from '../lib/config';

interface FooterProps {
    className?: string,
}

export default function Footer({className}: FooterProps) {
    const startYear = 2022;
    const currentYear = new Date().getFullYear();

    return (
        <footer className={classNames("footer mt-10", className)}>
            <div className="flex flex-col items-center">
                <p>Copyright &copy; {currentYear > startYear ? `${startYear}-${currentYear}` : startYear}, {Config.user.firstName} {Config.user.surname}</p>
            </div>
        </footer>
    )
}