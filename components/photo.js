import Image from "next/image";
import ExternalLink from "./externalLink";
import classNames from "classnames";

export default function Photo({src, alt, width, height, photographerName, photographerUrl, className}) {
    return (
        <div className={classNames('photo', className)}>
            <Image width={width ? width : 400}
                   height={height ? height : 400}
                   src={src}
                   alt={alt ? alt : 'Missing a description of the photo'}/>
            {
                photographerName &&
                <p className="text-sm font-light text-gray-500">
                    Photo by {photographerUrl ? <ExternalLink href={photographerUrl}>{photographerName}</ExternalLink> : photographerName}
                </p>
            }
        </div>
    )
}