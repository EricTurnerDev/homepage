import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <Main />
                <NextScript />
                {/* Cloudflare Web Analytics */}
                <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "b4d83cf5c97b483594f68da0b953ad70"}'></script>
                {/* End Cloudflare Web Analytics */}
            </body>
        </Html>
    )
}