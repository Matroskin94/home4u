import { ADD_HOUSE, SET_HOUSES } from '../../constants/constants';

const initialState = {
    userHouses: []
};

export default function HouseReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_HOUSE: {
            return {
                ...state,
                userHouses: [...state.userHouses, { ...action.payload }]
            };
        }

        case SET_HOUSES: {
            return {
                ...state,
                userHouses: [...action.payload]
            };
        }

        default: {
            return { ...state };
        }
    }
}
