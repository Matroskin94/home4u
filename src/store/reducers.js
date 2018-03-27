import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import RegistrationReducer from '../components/RegistrationPage/RegistrationReducer';

export default combineReducers({
    registrationReducer: RegistrationReducer,
    form: formReducer
});
