import { OPEN_CARD_MODAL } from '../../constants/constants';

export default function fetchRequest(activeUnit) {
    return ({
        type: OPEN_CARD_MODAL,
        payload: activeUnit
    });
}
