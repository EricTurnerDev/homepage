import Script from "next/script"
import Config from '../lib/config';

export default function Analytics() {
    // Note: It appears that Cloudflare is only recording visits (i.e. when someone navigates to your
    // website directly or from an external referrer). Navigation within a site is not being tracked.
    const src = 'https://static.cloudflareinsights.com/beacon.min.js';
    return (
        <Script
            strategy="afterInteractive"
            src={src}
            data-cf-beacon={`{"token": "${Config.analytics.token}"}`} />
    )
}