import { OPEN_CARD_MODAL } from '../../constants/constants';

const initialState = {
    cardType: '',
    activeCard: {}
};

export default function HouseReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_CARD_MODAL: {
            return {
                ...state,
                activeCard: action.payload
            };
        }

        default: {
            return { ...state };
        }
    }
}
