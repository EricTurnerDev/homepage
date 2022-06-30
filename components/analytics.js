import Script from "next/script"
import Config from '../lib/config';

export default function Analytics() {
    const src = 'https://static.cloudflareinsights.com/beacon.min.js';
    return (
        <Script
            strategy="afterInteractive"
            src={src}
            data-cf-beacon={`{"token": "${Config.analytics.token}"}`} />
    )
}