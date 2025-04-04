import styles from './Header.module.css'

import igniteLogo from '../assets/Ignite-simbol.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="logo do Ignite" />
            <strong>Ignite Feed</strong>
        </header>
    );
}