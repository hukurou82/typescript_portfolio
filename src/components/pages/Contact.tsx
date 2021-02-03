import React from 'react'
import GenericTemplate  from '../templates/GenericTemplate';
import styles from './styles/Contact.module.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

const Contact: React.FC = () => {
    return (
        <GenericTemplate title="コンタクト">
            <div className={styles.box}>
                <div className={styles.github_box}>
                    <a href='https://github.com/hukurou82' target="_blank">
                        <GitHubIcon fontSize='large'/>
                        <div className={styles.github_text}>:Github</div>
                    </a>
                </div>

                <div className={styles.instagram_box}>
                    <a href = 'https://www.instagram.com/hukurou82/?hl=ja' target="_blank">
                        <InstagramIcon fontSize='large'/>
                        <div className={styles.instagram_text}>:Instagram</div>
                    </a>
                </div>

                <div className={styles.mail_box}>
                    <EmailIcon fontSize='large'/>
                    <div className={styles.mail_text}>:Sanple_M.J@Sanple.com</div>
                </div>
            </div>
        </GenericTemplate>
    )
}

export default Contact;
