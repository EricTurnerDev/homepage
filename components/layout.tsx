import classNames from "classnames";
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

interface LayoutProps {
    siteTitle: string;
    className?: string;
    children?: JSX.Element | JSX.Element[];
}

export default function Layout({siteTitle, className, children}: LayoutProps) {
    return (
        <div className={classNames('layout', className)}>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta
                    name="description"
                    content="Eric Turner's website"
                />
                <meta name="og:title" content={siteTitle}/>
            </Head>

            <Navbar/>

            {children}

            <Footer />
        </div>
    )
}