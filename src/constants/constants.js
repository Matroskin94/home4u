export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const EDIT_PROFILE = 'EDIT_PROFILE';
export const EDIT_PROFILE_REQUEST = 'EDIT_PROFILE_REQUEST';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const ADD_HOUSE = 'ADD_HOUSE';

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
