import {Html, Head, Main, NextScript} from 'next/document'
import Config from '../lib/config';

const isProduction = process.env.NODE_ENV === "production";

export default function Document() {
    return (
        <Html>
            <Head/>
            <body>
            <Main/>
            <NextScript/>

            {isProduction &&
                <script
                    defer
                    src='https://static.cloudflareinsights.com/beacon.min.js'
                    data-cf-beacon={`{"token": "${Config.analytics.token}", "spa": true}`}/>
            }

            </body>
        </Html>
    )
}