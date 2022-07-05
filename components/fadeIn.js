import {useState, useEffect} from "react";
import classNames from "classnames";

export default function FadeIn({className, children}) {
    const [opacity, setOpacity] = useState(`opacity-0`);

    useEffect(() => {
        setOpacity('opacity-100');
    }, [opacity]);

    return (
        <div className={classNames('fader transition-opacity ease-in duration-1000', opacity, className)}>
            {children}
        </div>
    )
}