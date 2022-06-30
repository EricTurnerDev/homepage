import Script from "next/script";

export default function Analytics() {
    const src = 'https://static.cloudflareinsights.com/beacon.min.js';
    const token = "b4d83cf5c97b483594f68da0b953ad70";
    return (
        <Script
            strategy="afterInteractive"
            src={src}
            data-cf-beacon={`{"token": "${token}"}`} />
    )
}