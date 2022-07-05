import {useState, useEffect} from "react";
import classNames from "classnames";

export default function FadeIn({delay=0, className, children}) {
    const [opacity, setOpacity] = useState(`opacity-0`);

    useEffect(() => {
        setTimeout(() => {
            setOpacity('opacity-100');
        }, delay)
    }, [opacity]);

    return (
        <div className={classNames('fader transition-opacity ease-in duration-1000', opacity, className)}>
            {children}
        </div>
    )
}