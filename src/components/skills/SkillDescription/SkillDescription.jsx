import React from 'react';
import styles from './SkillDescription.module.css';

function SkillDescription() {
    return (
        <div className={styles.skills}>
            <div className={styles.react}>
                <div className={styles.photo}>
                    <img src="" alt=""/>
                </div>
                <div className={styles.logo}>
                    React
                </div>
            </div>
            <div className={styles.description}>
                <span>Description of my skills</span>
            </div>
        </div>
    );
}

export default SkillDescription;
