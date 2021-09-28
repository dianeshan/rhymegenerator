//import Navstyles from '../styles/Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css';
import Link from 'next/link'

export function Nav() {
    return (
        <Link href="/">
            <a className={styles.icon}><FontAwesomeIcon icon={faHome} size="xs" /></a>
        </Link>
        // <nav >
        //     <div className={Navstyles.navigation}>
        //         <Link href="\">
        //             <a>Home</a>
        //         </Link>
        //         <Link href="\rhyme">
        //             <a>Rhyme</a>
        //         </Link>
        //         <Link href="\background">
        //             <a>Background</a>
        //         </Link>
        //     </div>
        // </nav>
    );
}