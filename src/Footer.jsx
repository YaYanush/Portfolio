import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.name}>
                    <span>Yegor Yanushkevich</span>
                </div>
                <div className={styles.social}>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                </div>
                <div className={styles.rules}>
                    2020 all rights reserved
                </div>
            </div>
        </div>
    );
}

export default Footer;
