import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    PARTIAL_FETCH_REQUEST,
    PARTIAL_FETCH_SUCCESS
} from '../../constants/constants';

const initialState = {
    isFetching: false,
    isPartialFetching: false
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

        case PARTIAL_FETCH_REQUEST: {
            return {
                ...state,
                isPartialFetching: true
            };
        }

        case PARTIAL_FETCH_SUCCESS: {
            return {
                ...state,
                isPartialFetching: false
            };
        }

        default: {
            return { ...state };
        }
    }
}
