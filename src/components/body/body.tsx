import styles from './body.module.scss';
import classNames from 'classnames';
import homevid from '../../assets/homevid.svg';

export interface BodyProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Body = ({ className }: BodyProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <video
                autoPlay={true}
                src="https://res.cloudinary.com/dgb2lnz2i/video/upload/v1686544507/Untitled_design_jmyiq1.mp4"
                className={styles.vide}
                controls={false}
            />
            <div className={styles.containermain}>
                <div className={styles.header}>
                    <span className={styles.MovieList}>Movie List</span>
                    <span className={styles.goto}>Go to Movie List &gt;</span>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544545/images_ceem1q.jpg"
                        alt=""
                        className={styles.movieimg}
                    />
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544532/images_1_hhvcp4.jpg"
                        alt=""
                        className={styles.movieimg}
                    />
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544534/images_2_gzds4b.jpg"
                        alt=""
                        className={styles.movieimg}
                    />
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544538/images_3_xvzbi8.jpg"
                        alt=""
                        className={styles.movieimg}
                    />
                </div>
            </div>
            <h1 className={styles.WATHNOW}>WATCH NOW!</h1>
            <div className={styles.div1}>
                <div className={styles.text}>
                    <h1 className={styles.asdfsafsdaf}>Experience Happiness.</h1>
                    <p className={styles.parpara}>
                        &quot;Ponyo&quot; brings happiness with its <br /> enchanting story, love,
                        and the
                        <br /> wonders of nature.
                    </p>
                </div>
                <div className={styles.img}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544504/wallpaperflare.com_wallpaper_7_tarsun.jpg"
                        alt=""
                        className={styles.divimage}
                    />
                </div>
            </div>
            <div className={styles.div1}>
                <div className={styles.img}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686548646/asdfasdfasdfsadfsdd_ukjlme.png"
                        alt=""
                        className={styles.divimage}
                    />
                </div>
                <div className={styles.text1}>
                    <h1 className={styles.asdfsafsdaf}>Shed Tears.</h1>
                    <p className={styles.parpara}>
                        &quot;Grave of the Fireflies&quot; induces tears <br />
                        with its devastating portrayal of war&apos;s
                        <br />
                        impact on innocent lives.
                    </p>
                </div>
            </div>
            <div className={styles.div1}>
                <div className={styles.text}>
                    <h1 className={styles.asdfsafsdaf}>Discover Love.</h1>
                    <p className={styles.parpara}>
                        &quot;The Wind Rises&quot; evokes love through a <br />
                        passionate love story amidst dreams and <br />
                        the fleeting nature of life.
                    </p>
                </div>
                <div className={styles.img}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544504/wallpaperflare.com_wallpaper_8_bu9ads.jpg"
                        alt=""
                        className={styles.divimage}
                    />
                </div>
            </div>
            <img
                className={classNames(styles.image, styles.footerImg)}
                src={
                    'https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686533996/asdfasfasdf_jyob4x.png'
                }
            />
        </div>
    );
};
