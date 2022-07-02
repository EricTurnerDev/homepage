import Link from 'next/link';
import {useState} from "react";
import classNames from "classnames";
import {HomeIcon} from "@heroicons/react/outline";
import {NewspaperIcon} from "@heroicons/react/outline";
import {UserIcon} from "@heroicons/react/outline";

export default function Navbar({ className }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={classNames('navbar sticky top-0 bg-gray-200 dark:bg-gray-900/90 px-6 py-1 z-10', className)}>
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link href="/">
                    <a className="flex items-center">
                        <span className="text-xl font-semibold whitespace-nowrap text-black dark:text-white">ericturner.dev</span>
                    </a>
                </Link>

                <button type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="hamburger inline-flex items-center p-2 ml-3 text-sm text-black dark:text-white rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
                        aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"></path>
                    </svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>

                <div className={`${isOpen ? '' : 'hidden'} w-full md:block md:w-auto`}>
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium">
                        <li>
                            <Link href="/">
                                <a className="block py-2 pr-4 pl-3 rounded hover:bg-slate-300 dark:hover:bg-slate-700 md:hover:bg-transparent md:p-0">
                                    <HomeIcon className="inline h-4 w-4" /> Home
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a className="block py-2 pr-4 pl-3 rounded hover:bg-slate-300 dark:hover:bg-slate-700 md:hover:bg-transparent md:border-0 md:p-0">
                                    <NewspaperIcon className="inline h-4 w-4" /> Blog
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a className="block py-2 pr-4 pl-3 rounded hover:bg-slate-300 dark:hover:bg-slate-700 md:hover:bg-transparent md:p-0">
                                    <UserIcon className="inline h-4 w-4" /> About
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
    );
}