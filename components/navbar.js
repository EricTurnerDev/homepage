import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Config from '../lib/config';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/">
                    <a className={styles.brand}>
                        <Image width={Config.profileImage.width * 0.15}
                               height={Config.profileImage.height * 0.15}
                               src={Config.profileImage.path}/>
                        <span className={styles.brandName}>EricTurner.dev</span>
                    </a>
                </Link>
                <button className={styles.toggle}>
                    <span className={styles.toggleIcon}></span>
                </button>
                <div className={styles.collapse}>
                    <div className={styles.nav}>
                        {/*<Link href="/blog"><a className={styles.navLink}>Blog</a></Link>*/}
                        {/*<Link href="/about"><a className={styles.navLink}>About</a></Link>*/}
                    </div>
                </div>
            </div>
        </nav>
    );
}