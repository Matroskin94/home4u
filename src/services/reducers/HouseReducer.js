import { ADD_HOUSE } from '../../constants/constants';

const initialState = {
    userHouses: [
        {
            houseName: 'Моя квартира',
            address: 'Витебск, пр.Фрунзе, д.35, кв.23',
            houseDescription: 'Съёмная квартира',
            timezone: '(GMT+3)'
        },
        {
            houseName: 'Дача',
            address: 'Витебск, ул. Дачная, д.15',
            houseDescription: 'Съёмная квартира',
            timezone: '(GMT+3)'
        }
    ]
};

export default function HouseReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_HOUSE: {
            return {
                ...state,
                userHouses: [...state.userHouses, { ...action.payload }]
            };
        }

        default: {
            return { ...state };
        }
    }
}
