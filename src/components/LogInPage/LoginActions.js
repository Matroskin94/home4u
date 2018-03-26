import { USER_CHECK } from '../../constants/constants';

export default function checkUserAction(userData) {
    return ({
        type: USER_CHECK,
        payload: userData
    });
}
