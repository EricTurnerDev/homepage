import classNames from "classnames";
import Config from '../lib/config';

interface FooterProps {
    className?: string,
}

export default function Footer({className}: FooterProps) {
    return (
        <footer className={classNames("footer mt-10", className)}>
            <div className="flex flex-col items-center">
                <p>Copyright &copy; {new Date().getFullYear()}, {Config.user.firstName} {Config.user.surname}</p>
            </div>
        </footer>
    )
}