import {useState, useEffect} from "react";
import classNames from "classnames";

export default function FadeIn({delay=0, duration=500, className, children}) {
    const [opacity, setOpacity] = useState(`opacity-0`);
    const [dur, setDur] = useState(`duration-${duration}`);

    useEffect(() => {
        setTimeout(() => {
            setOpacity('opacity-100');
        }, delay)
    }, [opacity]);

    useEffect(() => {
        setDur(`duration-${duration}`);
    }, [duration])

    return (
        <div className={classNames('fader transition-opacity ease-in', dur, opacity, className)}>
            {children}
        </div>
    )
}