import classNames from "classnames";
export default function Footer({className}) {
    return (
        <footer className={classNames("footer mt-10", className)}>
            <div className="flex flex-col items-center">
                <p>Copyright &copy; {new Date().getFullYear()}, Eric Turner</p>
            </div>
        </footer>
    )
}