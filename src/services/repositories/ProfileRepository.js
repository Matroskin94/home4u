import mockUser from './mockUser';

class ProfileRepository {
    login(userName, password) {
        const loginUser = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userName !== 'admin') {
                    reject(new Error('wrong password or userName'));
                } else {
                    this.setToken('mockToken');
                    resolve(mockUser);
                }
            }, 1000);
        });

        return loginUser;
    }

    logout() {
        this.clearSession();
    }

    // eslint-disable-next-line
    clearSession() {
        window.localStorage.removeItem('token');
    }

    // eslint-disable-next-line
    setToken(token) {
        window.localStorage.setItem('token', token);
    }

    // eslint-disable-next-line
    getUserToken() {
        return window.localStorage.getItem('token');
    }
}

export default new ProfileRepository();
