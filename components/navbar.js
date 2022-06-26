import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Config from '../lib/config';

export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                <a>
                    <Image width={Config.profileImage.width * 0.15}
                           height={Config.profileImage.height * 0.15}
                           src={Config.profileImage.path}/>
                    <span>EricTurner.dev</span>
                </a>
            </Link>
            <ul>
                <li>
                    <Link href="/blog"><a>Blog</a></Link>
                </li>
                <li>
                    <Link href="/about"><a>About</a></Link>
                </li>
            </ul>
        </nav>
    );
}