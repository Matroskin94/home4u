import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    PARTIAL_FETCH_REQUEST,
    PARTIAL_FETCH_SUCCESS
} from '../../constants/constants';

export function fetchRequest() {
    return ({
        type: FETCH_REQUEST
    });
}

export function fetchSuccess() {
    return ({
        type: FETCH_SUCCESS
    });
}

export function fetchPartialRequest() {
    return ({
        type: PARTIAL_FETCH_REQUEST
    });
}

export function fetchPartialSuccess() {
    return ({
        type: PARTIAL_FETCH_SUCCESS
    });
}
