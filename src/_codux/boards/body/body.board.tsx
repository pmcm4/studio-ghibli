import { createBoard } from '@wixc3/react-board';
import { Body } from '../../../components/body/body';

export default createBoard({
    name: 'Home',
    Board: () => <Body />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasHeight: 5458,
    },
});
