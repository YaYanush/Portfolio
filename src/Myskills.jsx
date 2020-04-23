import React from 'react';
import styles from './Myskills.module.css';
import SkillDescription from "./components/skills/SkillDescription/SkillDescription";

function Myskills() {
    return (
        <div className={styles.myskills}>
            <div className={styles.container}>
                <div className={styles.description}>
                    <span>My skills:</span>
                </div>
                <div className={styles.skills}>
                    <SkillDescription/>
                    <SkillDescription/>
                    <SkillDescription/>
                </div>
            </div>
        </div>
    );
}

export default Myskills;
