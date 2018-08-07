import profileRepository from '../repositories/ProfileRepository';

class ProfileService {
    constructor() {
        this.profile = profileRepository;
    }

    login(userName, password) {
        return this.profile.login(userName, password);
    }

    logout() {
        return this.profile.logout();
    }

    getUserToken() {
        return this.profile.getUserToken();
    }
}

export default new ProfileService();
