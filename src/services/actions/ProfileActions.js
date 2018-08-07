import { fetchRequest, fetchSuccess } from '../../services/actions/NetworkActions';
import ProfileService from '../common/ProfileService';

import { LOGIN_SUCCESS, LOGIN_FAILURE, EDIT_PROFILE } from '../../constants/constants';

export function loginSuccessAction(userData) {
    const userState = {
        isAuthenticated: true,
        ...userData
    };

    return ({
        type: LOGIN_SUCCESS,
        payload: userState
    });
}

export function loginFailureAction() {
    const userState = {
        isAuthenticated: false
    };

    return ({
        type: LOGIN_FAILURE,
        payload: userState
    });
}


export function loginRequestAction({ userName, password }) {
    return dispatch => {
        dispatch(fetchRequest());

        return ProfileService.login(userName, password).then(response => {
            dispatch(fetchSuccess());
            dispatch(loginSuccessAction(response));
        }).catch(error => {
            dispatch(fetchSuccess());

            throw (new Error(error));
        });
    };
}

export function editProfileAction(userData) {
    return ({
        type: EDIT_PROFILE,
        payload: userData
    });
}

export function editProfileRequest(userData) {
    const editProfile = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(userData);
        }, 1000);
    });

    return dispatch => {
        dispatch(fetchRequest());

        return editProfile.then(result => {
            dispatch(fetchSuccess());
            dispatch(editProfileAction(result));
        });
    };
}
