import { createBoard } from '@wixc3/react-board';
import { MovieList } from '../../../components/movie-list/movie-list';

export default createBoard({
    name: 'MovieList',
    Board: () => <MovieList />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
