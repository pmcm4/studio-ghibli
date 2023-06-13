import { useEffect, useState } from 'react';
import { Navbar } from '../navbar/navbar';
import styles from './single-movie.module.scss';

const movies: { [key: string]: { title: string; details: string; description: string; } } = {
    kikisdeliveryservice: {
        title: "Kiki’s Delivery Service",
        details: "1989 | Adventure/Family | 1h 42m",
        description: "\"Kiki's Delivery Service\" is a charming animated film about a young witch named Kiki who starts her own delivery service using her broomstick. Through her adventures, she learns about independence, friendship, and finding her place in the world."
    },
    arrietty: {
        title: "Arrietty",
        details: "2010 | Fantasy/Family | 1h 34m",
        description: "\"Arrietty\" is a charming Japanese animated film based on the novel \"The Borrowers.\" It revolves around a tiny girl named Arrietty and her family, who live secretly beneath the floorboards of a house. Their peaceful existence is disrupted when Arrietty befriends a human boy and they must navigate the challenges of their forbidden friendship while preserving their hidden lifestyle."
    },
    spiritedaway: {
        title: "Spirited Away",
        details: "2001 | Fantasy/Adventure | 2h 5m",
        description: "\"Spirited Away\" is a captivating animated film about a young girl named Chihiro who stumbles upon a mysterious world of spirits while moving to a new town. To save her parents who have been transformed into pigs, Chihiro must work in a bathhouse for spirits and navigate a whimsical and perilous realm. Along the way, she discovers courage, friendship, and the power of resilience."
    },
    fromuponpoppyhill: {
        title: "From Up on Poppy Hill",
        details: "2011 | Family/Romance | 1h 31m",
        description: "\"From Up on Poppy Hill\" is a touching Japanese animated film. It follows the story of a high school girl named Umi, who becomes involved in efforts to save her school's clubhouse from demolition. Along the way, she develops a deep connection with a fellow student named Shun, leading them to uncover a shared past. The film explores themes of love, identity, and the preservation of heritage."
    },
    ponyo: {
        title: "Ponyo",
        details: "2008 | Fantasy/Adventure | 1h 43m",
        description: "\"Ponyo\" is a delightful animated film about a curious goldfish named Ponyo who befriends a young boy named Sosuke. As Ponyo longs to become human, her magical transformation sets off a series of extraordinary events that test their friendship and the balance of nature. It's a heartwarming tale of love, courage, and the enchantment of the ocean."
    },
    whisperoftheheart: {
        title: "Whisper of the Heart",
        details: "1995 | Romance/Family | 1h 51m",
        description: "\"Whisper of the Heart\" revolves around a young girl named Shizuku, who aspires to be a writer. When she discovers a mysterious cat figurine in an antique shop, it leads her on a journey of self-discovery, friendship, and pursuing her dreams. The film beautifully explores the power of passion and the importance of finding one's own voice."
    },
    myneighbourtotoro: {
        title: "My Neighbour Totoro ",
        details: "1988 | Fantasy/Animation | 1h 26m",
        description: "\"Totoro\" is a beloved Japanese animated film by Hayao Miyazaki. It follows the story of two sisters who encounter a friendly forest spirit named Totoro. Together, they embark on whimsical adventures and discover the power of friendship, nature, and imagination."
    },
    graveofthefireflies: {
        title: "Grave of the Fireflies",
        details: "1988 | War/Drama | 1h 29m",
        description: "\"Grave of the Fireflies\" portrays the heartbreaking story of two siblings, Seita and Setsuko, trying to survive during World War II in Japan. The film explores the devastating effects of war on innocent lives, highlighting the resilience, sacrifice, and tragic consequences faced by children caught in the midst of conflict."
    },
    howlsmovingcastle: {
        title: "Howl’s Moving Castle",
        details: "2004 | Fantasy/Adventure | 1h 59m",
        description: "\"Howl's Moving Castle\" tells the tale of a young girl named Sophie, who is cursed by a witch and transformed into an old woman. She seeks refuge in a magical moving castle owned by the enigmatic wizard Howl. As Sophie navigates the castle's mysterious world, she learns about love, self-acceptance, and the consequences of war."
    },
    princessmononoke: {
        title: "Princess Mononoke",
        details: "1997 | Fantasy/Adventure | 2h 13m",
        description: "\"Princess Mononoke\" revolves around a young warrior named Ashitaka who becomes involved in a conflict between humans and the forest spirits. As he strives for peace, he encounters the fierce Princess Mononoke, who fights to protect her home. The film explores the themes of environmentalism, the balance between humans and nature, and the complexity of humanity's relationship with the natural world."
    },
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SingleMovie = () => {
    const [movieTitle, setMovieTitle] = useState('kikisdeliveryservice')
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search).get('movieTitle') || ""

        if (!(urlParams in movies)) {
            window.location.href = '/'
            return
        }
        
        setMovieTitle(urlParams);
    }, []);

    const handleWatchButtonClick = () => {
        setIsPlaying(true)
    }

    const handleOverlayClick = () => {
        setIsPlaying(false)
    }

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.movieContainer} id='movieContainer'>
                <img
                    src={"./singlepage/" + movieTitle + "/" + movieTitle + ".png"}
                    alt=""
                    className={styles.bg}
                />
                <div className={styles.text}>
                    <h1 className={styles.title}>{movies[movieTitle]['title']}</h1>
                    <p className={styles.details}>{movies[movieTitle]['details']}</p>
                    <p className={styles.description}>{movies[movieTitle]['description']}</p>
                    <button className={styles.watchButton} onClick={handleWatchButtonClick}>Watch the Trailer</button>
                </div>
            </div>
            {isPlaying ? 
            <>
                <div className={styles.overlay} onClick={handleOverlayClick}></div>
                <div className={styles.trailerContainer}>
                    <video className={styles.trailerVideoContainer} controls autoPlay src={"./singlepage/" + movieTitle + "/" + movieTitle + ".mp4"}>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </>
            : <></>}
        </div>
    );
};