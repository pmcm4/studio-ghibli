import styles from './movie-list.module.scss';
import classNames from 'classnames';

export interface MovieListProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const MovieList = ({ className }: MovieListProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles.headerMov}>Movie List</h1>
            <div className={styles.container}>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544533/images_15_u4heoz.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>Spirited Away</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544532/images_1_hhvcp4.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>Ponyo</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544534/images_2_gzds4b.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>My Neighbor Totoro</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544538/images_3_xvzbi8.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>Howl’s Moving Castle</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544534/images_16_p73hyj.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>Kiki’s Delivery Service</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544540/images_5_qhlkef.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>Castle In The Sky</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544541/images_6_zmkmsf.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>Only Yesterday</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544543/images_7_v32obo.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>When Marnie Was There</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544544/images_8_uzqiop.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>Tales From Earthsea</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544545/images_9_reqkvu.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>Nausicaa Of The Valley Of The Wind</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544532/images_10_qrdmnh.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>Whisper of the Heart</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544532/images_11_sew596.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>The Wind Rises</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544533/images_14_kp9v8j.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>Ocean Waves</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544545/images_ceem1q.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>Princess Mononoke</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544540/images_4_ftxozo.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>Porco Rosso</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544534/images_18_bewwis.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>The Cat Returns</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544535/images_19_ww6ln9.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>Pom Poko</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544537/images_22_p154et.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>The Red Turtle</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544533/images_12_znacg2.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>Arrietty</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544535/images_20_msiopr.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>From Up On Poppy Hill</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544534/images_17_mnqh67.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>Grave of the Fireflies</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544535/images_21_bc4dsl.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>The Tale of Princess Kaguya</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544533/images_13_k6ywo5.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>My Neighbors The Yamada</h1>
                </div>
                <div className={styles.movies}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686544538/images_23_dig4jz.jpg"
                        alt=""
                        className={styles.moviePoster}
                    />
                    <h1 className={styles.text}>Eartwig and the Witch</h1>
                </div>
            </div>
            <img
                src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686533996/asdfasfasdf_jyob4x.png"
                alt=""
                className={styles.footerimg}
            />
        </div>
    );
};
