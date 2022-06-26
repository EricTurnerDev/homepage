import Head from "next/head";
import Navbar from "../components/navbar";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Not Found - ericturner.dev</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta
                    name="description"
                    content="Eric Turner's website"
                />
                <meta name="og:title" content="Not Found - ericturner.dev"/>
            </Head>
            <header></header>
            <Navbar />
            <main>
                <h1>Page Not Found</h1>
            </main>
        </>
    )
}