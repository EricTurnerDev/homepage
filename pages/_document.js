import {Html, Head, Main, NextScript} from 'next/document'
import Config from '../lib/config';

export default function Document() {
    return (
        <Html>
            <Head/>
            <body>
            <Main/>
            <NextScript/>
            <script
                defer
                src='https://static.cloudflareinsights.com/beacon.min.js'
                data-cf-beacon={`{"token": "${Config.analytics.token}"}`}/>
            </body>
        </Html>
    )
}