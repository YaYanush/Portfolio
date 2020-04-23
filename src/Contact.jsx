import React from 'react';
import styles from './Contact.module.css';

function Contact() {
    return (
        <div className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.contacts}>
                    <span>Contacts</span>
                </div>
                <div className={styles.sendForm}>
                    <form action="URL">
                        <input type="text"/>
                        <input type="text"/>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </form>
                </div>
                <div className={styles.button}>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
