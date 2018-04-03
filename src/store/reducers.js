import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import RegistrationReducer from '../components/RegistrationPage/RegistrationReducer';
import LoginReducer from '../components/LogInPage/LoginReducer';

export default combineReducers({
    registrationReducer: RegistrationReducer,
    loginReducer: LoginReducer,
    form: formReducer
});
