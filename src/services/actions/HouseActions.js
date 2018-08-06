import { fetchRequest, fetchSuccess } from './NetworkActions';

import { ADD_HOUSE } from '../../constants/constants';

export function addHouse(houseInfo) {
    return ({
        type: ADD_HOUSE,
        payload: houseInfo
    });
}

export function addHouseRequest(houseInfo) {
    const editProfile = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(houseInfo);
        }, 500);
    });

    return dispatch => {
        dispatch(fetchRequest());

        return editProfile.then(result => {
            dispatch(fetchSuccess());
            dispatch(addHouse(result));
        });
    };
}