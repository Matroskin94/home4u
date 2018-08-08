import {
    fetchRequest,
    fetchSuccess,
    fetchPartialRequest,
    fetchPartialSuccess
} from './NetworkActions';

import { ADD_HOUSE, SET_HOUSES } from '../../constants/constants';

const userHouses = [
    {
        houseName: 'Моя квартира',
        address: 'Витебск, пр.Фрунзе, д.35, кв.23',
        houseDescription: 'Съёмная квартира',
        timezone: '(GMT+3)',
        id: 1
    },
    {
        houseName: 'Дача',
        address: 'Витебск, ул. Дачная, д.15',
        houseDescription: 'Съёмная квартира',
        timezone: '(GMT+3)',
        id: 2
    }
];

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

export function setHouses(houses) {
    return ({
        type: SET_HOUSES,
        payload: houses
    });
}

export function getHousesRequest() {
    const getHouses = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(userHouses);
        }, 500);
    });

    return dispatch => {
        dispatch(fetchPartialRequest());

        return getHouses.then(result => {
            dispatch(fetchPartialSuccess());
            dispatch(setHouses(result));
        });
    };
}
