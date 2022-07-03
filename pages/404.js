import Layout from '../components/layout';
import Photo from "../components/photo";
import Link from "next/link";

export default function Custom404() {
    return (
        <Layout siteTitle="Not Found - ericturner.dev">
            <section className="flex flex-col items-center py-5">
                <h1>404 - Page Not Found</h1>
            </section>

            <section className="flex flex-col-reverse md:flex-row items-center md:justify-center px-5">
                <Photo
                    className="mx-2"
                    src="https://i.imgur.com/pwVMz37.jpg"
                    width={600 / 2}
                    height={799 / 2}
                    alt="Person walking in desert"
                    photographerName="Dan Grinwis"
                    photographerUrl="https://unsplash.com/@finding_dan"
                />
                <div className="flex flex-col mb-5 md:mb-auto">
                    <h2 className="pt-0 mx-auto md:mx-5">You seem to be lost!</h2>
                    <p className="md:mx-5 text-center md:text-left">
                        It appears that you have wandered off the beaten path.
                        Retrace your steps, or <Link href="/">get rescued</Link>.
                    </p>
                </div>
            </section>
        </Layout>
    )
}