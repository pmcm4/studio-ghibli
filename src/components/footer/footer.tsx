import styles from './footer.module.scss';
import classNames from 'classnames';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={styles.footerContainer}>
            <img
                className={styles.footerImg}
                src={
                    'https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686533996/asdfasfasdf_jyob4x.png'
                }
            />
            <div className={styles.footer}>
                <div className={styles.footerText}>
                    <img className={styles.footerTextImg} src='./footer/logo.png'/>
                    <p className={styles.footerTextTagline}>Discover the Finest Selection of Films Now!</p>
                </div>
                <div className={styles.footerContactUs}>
                    <p className={styles.footerContactUsText}>Contact Us</p>
                    <input 
                        className={styles.footerContactUsEmail} 
                        placeholder='Email'
                    />
                    <input 
                        className={styles.footerContactUsMessage} 
                        placeholder='Message'
                    />
                    <button>Send</button>
                </div>
                <div className={styles.footerFollowUs}>
                    <p className={styles.footerFollowUsText}>Follow Us</p>
                    <img className={styles.footerFollowUsButtons}></img>
                </div>
                <div className={styles.footerCallUs}>
                    <p className={styles.footerCallUsText}>Call Us</p>
                    <p className={styles.footerCallUsNumber}>01 2345 6789</p>
                </div>
            </div>
        </div>);
};
