import React from 'react';
import styles from './MyProject.module.css';

function MyProject() {
    return (
        <div className={styles.project}>
            <div className={styles.photo}>
                <img src="" alt=""/>
                <div className={styles.check}>Check</div>
            </div>
            <div className={styles.about}>
                <div className={styles.wrapper}>
                    <div className={styles.name}>
                        <span>Name of project</span>
                    </div>
                    <div className={styles.aboutProject}>
                        <span>About project </span>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default  MyProject;
