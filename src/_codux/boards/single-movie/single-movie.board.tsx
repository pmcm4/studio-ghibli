import { createBoard } from '@wixc3/react-board';
import { SingleMovie } from '../../../components/single-movie/single-movie';

export default createBoard({
    name: 'SingleMovie',
    Board: () => <SingleMovie />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
