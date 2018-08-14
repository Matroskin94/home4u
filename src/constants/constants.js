export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const EDIT_PROFILE = 'EDIT_PROFILE';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const PARTIAL_FETCH_REQUEST = 'PARTIAL_FETCH_REQUEST';
export const PARTIAL_FETCH_SUCCESS = 'PARTIAL_FETCH_SUCCESS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const ADD_HOUSE = 'ADD_HOUSE';
export const SET_HOUSES = 'SET_HOUSES';
export const OPEN_CARD_MODAL = 'OPEN_CARD_MODAL';

export const FORM_TYPES = {
    [EDIT_PROFILE]: {
        FORM_NAME: 'editUser',
        DIALOG_TITLE: 'Редактирование профиля',
        ACTION: 'Сохранить'
    },
    [ADD_HOUSE]: {
        FORM_NAME: 'addHouse',
        DIALOG_TITLE: 'Добавление нового дома',
        ACTION: 'Добавить'
    }
};

export const STATE_FIELDS = {
    FLOORS_MENU_OPEN: 'FLOORS_MENU_OPEN',
    FULL_SCREEN_MODAL_OPEN: 'FULL_SCREEN_MODAL_OPEN'
};

export const UNIT_TYPES = {
    CAMERA: 'CAMERA',
    THERMOMETER: 'THERMOMETER',
    LIGHT_BULB: 'LIGHT_BULB'
};
