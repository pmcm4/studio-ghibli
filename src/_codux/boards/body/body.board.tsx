import { createBoard } from '@wixc3/react-board';
import { HomePage } from '../../../components/homepage/homepage';

export default createBoard({
    name: 'Home',
    Board: () => <HomePage />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasHeight: 5458,
    },
});
