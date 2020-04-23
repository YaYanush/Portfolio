import React from 'react';
import styles from './Myworks.module.css';
import MyProject from "./components/myworks/myprojects/MyProject";


function Myworks() {
    return (
        <div className={styles.myworks}>
            <div className={styles.container}>
                <div className={styles.works}>
                    <span>My works:</span>
                </div>
                <div className={styles.projects}>
                    <MyProject/>
                    <MyProject/>
                </div>
            </div>
        </div>
    );
}

export default Myworks;
