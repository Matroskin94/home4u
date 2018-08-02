import { LOGIN_SUCCESS, EDIT_PROFILE } from '../../constants/constants';

const initialState = {
    isFetching: false,
    isAuthenticated: true,
    password: '',
    userLogin: 'not authorized',
    name: 'not authorized',
    surname: 'not authorized',
    phone: '102',
    email: 'lol@mail.ru'
};

export default function ProfileReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                ...action.payload
            };
        }

        case EDIT_PROFILE: {
            return {
                ...state,
                ...action.payload
            };
        }

        default: {
            return { ...state };
        }
    }
}
