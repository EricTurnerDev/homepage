import Head from 'next/head';
import Navbar from "./navbar";
import classNames from "classnames";
import Image from "next/image";
import ExternalLink from "./externalLink";
import Back from "./back";

export default function About({ className }) {
    const siteTitle = 'About - ericturner.dev';

    return (
        <div className={classNames(className)}>
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

            <Navbar />

            <section className="mt-4 px-6 md:mt-8 md:px-10">
                <Image width={400} height={425} src="/images/profile.jpg" />
                <p className="text-sm font-light text-gray-500">
                    Photo by <ExternalLink href="https://www.instagram.com/alicia.fyfe.1/">Alicia Fyfe</ExternalLink>
                </p>

                <h2 className="font-semibold mt-6 text-xl">About Me</h2>
                <p className="pt-4">I am a sporadically-retired ☺️ software developer living near Annapolis, Maryland.️</p>

                <h2 className="font-semibold mt-6 text-xl">Professional Background</h2>
                <p className="pt-4">I have worked as a Software Engineer since 2001 on projects for Entegra Systems (recently acquired by Acclaim Technical Services), Boeing, and Microsoft.</p>

                <p className="pt-4">Recently I started Turner Software Development LLC to work as an independent contractor with a company developing a VR (Virtual Reality) product.</p>

                <p className="pt-4">Prior to 2001 I worked as the Production Systems Technician at <ExternalLink href="https://www.bellinghamherald.com/">The Bellingham Herald</ExternalLink> newspaper in my hometown of <ExternalLink href="https://www.bellingham.org/">Bellingham, Washington</ExternalLink>.</p>

                <h2 className="font-semibold mt-6 text-xl">Education</h2>
                <p className="pt-4">I hold B.S. Computer Science and B.A. Spanish degrees from <ExternalLink href="https://www.wwu.edu/">Western Washington University</ExternalLink>.</p>

                <h2 className="font-semibold mt-6 text-xl">Interests</h2>
                <p className="pt-4">3D printing, amateur radio (callsign KC3SVJ), kayak sailing, hiking, camping, off-roading, reading, and drawing.</p>

                <h2 className="font-semibold mt-6 text-xl">Contact Information</h2>
                <p className="pt-4">You can email me at eric@ericturner.dev .</p>
            </section>

            <Back href="/" label="home" />

            <footer className="mb-10">
            </footer>
        </div>
    )
}