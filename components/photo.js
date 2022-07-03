import Image from "next/image";
import ExternalLink from "./externalLink";
import classNames from "classnames";

export default function Photo({src, alt, width, height, photographerName, photographerUrl, className}) {
    return (
        <div className={classNames(`photo`, className)}>
            <div className="relative">
                <Image width={width ? width : 400}
                       height={height ? height : 400}
                       src={src}
                       alt={alt ? alt : 'Missing a description of the photo'}
                       className="rounded-lg"/>
                {
                    photographerName &&
                    <p className="text-sm absolute bottom-0 pl-2">
                        Photo by {photographerUrl ? <ExternalLink className="text-slate-800 dark:text-slate-300 font-semibold"
                                                                  href={photographerUrl}>{photographerName}</ExternalLink> : photographerName}
                    </p>
                }
            </div>
        </div>
    )
}