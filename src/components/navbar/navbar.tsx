import styles from './navbar.module.scss';
import classNames from 'classnames';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.container}>
                <img
                    className={styles.logo}
                    src={
                        'https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686530644/ghibli_brxrmz.png'
                    }
                    onClick={() => { window.location.href = '/' }}
                />
                <div className={styles.menu}>
                    <Link style={{ textDecoration: 'none', color: "black" }} to={'/'} className={styles.name}>
                        <span className={styles.menu_items}>Home</span> </Link>
                    <Link style={{ textDecoration: 'none', color: "black" }} to={'/movielist'} className={styles.name}>
                        <span className={styles.menu_items}>Movie List</span></Link>
                    <Link style={{ textDecoration: 'none', color: "black" }} to={'/about'} className={styles.name}>
                        <span className={styles.menu_items}>About Studio Ghibli</span></Link>
                </div>
            </div>
        </div>
    );
};
