import styles from './single-movie.module.scss';
import classNames from 'classnames';

export interface SingleMovieProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SingleMovie = ({ className }: SingleMovieProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.text}>
                <h1 className={styles.Title}>Kiki’s Delivery Service</h1>
                <p className={styles.asdgasdf}>1989 | Adventure/Family | 1h 42m</p>
                <p className={styles.desc}>
                    &quot;Kiki&apos;s Delivery Service&quot; is a charming animated film about a
                    young witch named Kiki who starts her own delivery service using her broomstick.
                    Through her adventures, she learns about independence, friendship, and finding
                    her place in the world.
                </p>
                <button className={styles.watchtr}>Watch the Trailer</button>
            </div>
            <img
                src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1686548727/kikis-delivery-service-510353d0e522c_lsejth.jpg"
                alt=""
                className={styles.bg}
            />
        </div>
    );
};
