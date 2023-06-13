import { useEffect, useState } from 'react';
import { Navbar } from '../navbar/navbar';
import styles from './single-movie.module.scss';

const movies = {
    kikisdeliveryservice: {
        title: "Kiki’s Delivery Service",
        details: "1989 | Adventure/Family | 1h 42m",
        description: "\"Kiki's Delivery Service\" is a charming animated film about a young witch named Kiki who starts her own delivery service using her broomstick. Through her adventures, she learns about independence, friendship, and finding her place in the world."
    }
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SingleMovie = () => {
    const [movieTitle, setMovieTitle] = useState("")

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search).get('movieTitle') || ""
        setMovieTitle(urlParams.toString());
        console.log(Object.keys(movies));
        console.log(movieTitle);
        console.log(movieTitle in Object.keys(movies));

        if (!(movieTitle in movies)) {
            console.log(movieTitle in movies)
            //window.location.href = '/'
        }
      }, []);

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.movieContainer}>
                <img
                    src={"./singlepage/" + movieTitle + "/" + movieTitle + ".png"}
                    alt=""
                    className={styles.bg}
                />
                <div className={styles.text}>
                    <h1 className={styles.title}>Kiki’s Delivery Service</h1>
                    <p className={styles.details}>1989 | Adventure/Family | 1h 42m</p>
                    <p className={styles.description}>
                        "Kiki's Delivery Service" is a charming animated film about a young witch named Kiki who starts her own delivery service using her broomstick. Through her adventures, she learns about independence, friendship, and finding her place in the world.
                    </p>
                    <button className={styles.watchButton}>Watch the Trailer</button>
                </div>

            </div>
        </div>
    );
};