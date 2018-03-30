import { LOGIN_REQUEST, LOGIN_SUCCESS } from '../../constants/constants';

const initialState = {
    isFetching: false,
    isAuthenticated: false,
    userPassword: '',
    userLogin: ''
};

export default function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return {
                ...state,
                userLogin: action.payload.userLogin
            };
        }

        case LOGIN_SUCCESS: {
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
