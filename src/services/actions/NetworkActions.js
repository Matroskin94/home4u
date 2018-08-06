import { FETCH_REQUEST, FETCH_SUCCESS } from '../../constants/constants';

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
