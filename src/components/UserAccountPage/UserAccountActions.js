import { fetchRequest, fetchSuccess } from '../../services/actions/NetworkActions';

import { EDIT_PROFILE } from '../../constants/constants';

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
