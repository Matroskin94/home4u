import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import RegistrationReducer from '../components/RegistrationPage/RegistrationReducer';
import ProfileReducer from '../services/reducers/ProfileReducer';
import NetworkReducer from '../services/reducers/NetworkReducer';
import HouseReducer from '../services/reducers/HouseReducer';

export default combineReducers({
    registrationReducer: RegistrationReducer,
    profileReducer: ProfileReducer,
    networkReducer: NetworkReducer,
    houseReducer: HouseReducer,
    form: formReducer
});
