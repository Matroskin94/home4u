import { FETCH_REQUEST, FETCH_SUCCESS } from '../../constants/constants';

const initialState = {
    isFetching: false
};

export default function NetworkReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_REQUEST: {
            return {
                ...state,
                isFetching: true
            };
        }

        case FETCH_SUCCESS: {
            return {
                ...state,
                isFetching: false
            };
        }

        default: {
            return { ...state };
        }
    }
}
