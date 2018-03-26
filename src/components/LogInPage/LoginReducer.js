import { USER_CHECK } from '../../constants/constants';

const initialState = {
    userLogin: '',
    isUserEntered: false
};

export default function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case USER_CHECK: {
            return {
                ...state,
                userLogin: action.payload.userLogin
            };
        }

        default: {
            return { ...state };
        }
    }
}
