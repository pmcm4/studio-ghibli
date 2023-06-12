import styles from './navbar.module.scss';
import classNames from 'classnames';

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
                />
                <div className={styles.menu}>
                    <span className={styles.menu_items}>Menu</span>
                    <span className={styles.menu_items}>Movie List</span>
                    <span className={styles.menu_items}>About Studio Ghibli</span>
                </div>
            </div>
        </div>
    );
};
