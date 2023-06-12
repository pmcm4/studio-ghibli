import styles from './about.module.scss';
import classNames from 'classnames';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

export interface AboutProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const About = ({ className }: AboutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Navbar />
            <div className={styles.text}>
                <h1 className={styles.Header}>Studio Ghibli</h1>
                <p className={styles.desc}>
                    Studio Ghibli is a renowned Japanese animation studio known for creating
                    captivating and imaginative films. It was co-founded by Hayao Miyazaki and Isao
                    Takahata in 1985. Studio Ghibli has produced numerous critically acclaimed and
                    internationally beloved animated movies, captivating audiences with their unique
                    storytelling, stunning animation, and deep themes.
                </p>
            </div>
            <img
                src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544405/wallpaperflare.com_wallpaper_1_nlgn0e.jpg"
                alt=""
                className={styles.bg}
            />
            <Footer />
        </div>
    );
};
