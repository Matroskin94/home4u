import { REGISTRATION_REQUEST } from '../../constants/constants';

const initialState = {
    userLogin: ''
};

export default function ProfileReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTRATION_REQUEST: {
            return {
                ...state
            };
        }

        default: {
            return { ...state };
        }
    }
}
