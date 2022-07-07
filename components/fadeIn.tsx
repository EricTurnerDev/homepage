import {useState, useEffect} from "react";
import classNames from "classnames";

interface FadeInProps {
    delay?: number;
    duration?: number;
    className?: string,
    children?: JSX.Element | JSX.Element[];
}

export default function FadeIn({delay=0, duration=500, className, children}: FadeInProps) {
    const [opacity, setOpacity] = useState(`opacity-0`);
    const [dur, setDur] = useState(`duration-${duration}`);

    useEffect(() => {
        setTimeout(() => {
            setOpacity('opacity-100');
        }, delay)
    }, [opacity]);

    useEffect(() => {
        const tailwindDurations = [75, 100, 150, 200, 300, 500, 700, 1000];
        if (tailwindDurations.includes(duration)) {
            setDur(`duration-${duration}`);
        } else {
            setDur(`duration-[${duration}]`);
        }
    }, [duration])

    return (
        <div className={classNames('fader transition-opacity ease-in', dur, opacity, className)}>
            {children}
        </div>
    )
}