import classNames from "classnames";
import ExternalLink from "./externalLink";
import Back from "./back";
import Photo from './photo';
import EmailAddress from "./emailAddress";
import Layout from './layout';

export default function About({ className }) {
    const siteTitle = 'About - ericturner.dev';

    const numYearsExperience = () => {
        const currentYear = new Date().getFullYear();
        return (currentYear-2001)+1;
    };

    return (
        <Layout siteTitle={siteTitle} className={classNames('about', className)}>
            <section className="mt-4 px-6 md:mt-8 md:px-10">
                <Photo src="/images/kayak-sailing.jpg"
                       alt="Eric Turner kayak sailing"
                       width={400}
                       height={425}
                       photographerName="Alicia Fyfe"
                       photographerUrl="https://www.instagram.com/alicia.fyfe.1/" />

                <h2 className="mt-2">About Me</h2>
                <p>I am an independent/freelance software developer with {numYearsExperience()} years of experience,
                    currently living near Annapolis, Maryland.️</p>

                <h2 className="mt-2">Professional Background</h2>
                <p>
                    I have worked as a Software Engineer since 2001, starting at Boeing and later working at Entegra Systems (recently acquired by Acclaim Technical Services).
                    In 2021 I created Turner Software Development LLC to work as an independent contractor with a company developing a VR (Virtual Reality) product.
                </p>

                <p>Prior to 2001 I was the Production Systems Technician at <ExternalLink href="https://www.bellinghamherald.com/">The Bellingham Herald</ExternalLink> newspaper in my hometown of <ExternalLink href="https://www.bellingham.org/">Bellingham, Washington</ExternalLink>.</p>

                <h2 className="mt-2">Education</h2>
                <p>I hold B.S. Computer Science and B.A. Spanish degrees from <ExternalLink href="https://www.wwu.edu/">Western Washington University</ExternalLink>.</p>

                <h2 className="mt-2">Interests</h2>
                <p>3D printing, amateur radio (callsign KC3SVJ), kayak sailing, hiking, camping, off-roading, reading, and drawing.</p>

                <h2 className="mt-2">Contact Information</h2>
                <p>You can email me at <EmailAddress username="eric" domain="ericturner.dev" /> .</p>
            </section>

            <Back href="/" label="home" />

            <footer className="mb-10">
            </footer>
        </Layout>
    )
}