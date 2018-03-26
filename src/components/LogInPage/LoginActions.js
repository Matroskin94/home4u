import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../../constants/constants';

export function loginUserAction(userData) {
    const userState = {
        isFetching: true,
        isAuthenticated: false,
        ...userData
    };

    return ({
        type: LOGIN_REQUEST,
        payload: userState
    });
}

export function loginRequestAction(userData) {
    const checkUser = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 1000);
    });

    return dispatch => {
        dispatch(loginUserAction(userData));
        return checkUser;
    };
}

export function loginSuccessAction(userData) {
    const userState = {
        isFetching: false,
        isAuthenticated: true,
        ...userData
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
