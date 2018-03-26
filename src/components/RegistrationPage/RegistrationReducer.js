import { USER_REGISTRATION } from '../../constants/constants';

const initialState = {
    userLogin: ''
};

export default function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case USER_REGISTRATION: {
            return {
                userLogin: action.payload.userLogin,
                ...state
            };
        }

        default: {
            return { ...state };
        }
    }
}
