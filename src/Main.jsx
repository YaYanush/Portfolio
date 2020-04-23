import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Hi!</span>
                    <span>My name is Yegor Yanushkevich</span>
                    <span>and I'm React developer.</span>
                </div>
                <div className={styles.photo}>
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Main;
