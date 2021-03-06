import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.nav}>
                    <a href="" className={styles.link}>Main</a>
                    <a href="" className={styles.link}>Skills</a>
                    <a href="" className={styles.link}>Works</a>
                    <a href="" className={styles.link}>Contacts</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
