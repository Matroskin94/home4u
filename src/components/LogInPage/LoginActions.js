import { fetchRequest, fetchSuccess } from '../../services/actions/NetworkActions';

import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../../constants/constants';

import mockUser from './mockUser';

export function loginSuccessAction(userData) {
    const userState = {
        isAuthenticated: true,
        ...mockUser
    };

    return ({
        type: LOGIN_SUCCESS,
        payload: userState
    });
}

export function loginFailureAction(userData) {
    const userState = {
        isFetching: false,
        isAuthenticated: false,
        ...userData
    };

    return ({
        type: LOGIN_FAILURE,
        payload: userState
    });
}


export function loginRequestAction(userData) {
    const checkUser = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(userData);
        }, 1000);
    });

    return dispatch => {
        dispatch(fetchRequest());

        return checkUser.then(response => {
            dispatch(fetchSuccess());
            dispatch(loginSuccessAction(response));
        });
    };
}
