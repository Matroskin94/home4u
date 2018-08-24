import profileRepository from '../repositories/ProfileRepository';

class ProfileService {
    static login(userName, password) {
        return profileRepository.login(userName, password);
    }

    static logout() {
        return profileRepository.logout();
    }

    static getUserToken() {
        return profileRepository.getUserToken();
    }
}

export default ProfileService;
