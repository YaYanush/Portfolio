import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <span>I'm open to freelance</span>
                </div>
                <div className={styles.findMe}>
                    <a href="">Hire me</a>
                </div>
            </div>
        </div>
    );
}

export default Slogan;
