import { combineReducers } from 'redux';
import LoginReducer from '../components/LogInPage/LoginReducer';
import RegistrationReducer from '../components/RegistrationPage/RegistrationReducer';

export default combineReducers({
    loginReducer: LoginReducer,
    registrationReducer: RegistrationReducer
});
