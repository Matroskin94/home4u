import { REGISTRATION_REQUEST } from '../../constants/constants';

const initialState = {
    userLogin: ''
};

export default function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTRATION_REQUEST: {
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
