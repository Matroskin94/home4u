import mockUser from './mockUser';

class ProfileRepository {
    login = (userName, password) => {
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

    logout = () => {
        this.clearSession();
    }

    clearSession = () => {
        window.localStorage.removeItem('token');
    };

    setToken = token => {
        window.localStorage.setItem('token', token);
    };

    getUserToken = () => window.localStorage.getItem('token');
}

export default new ProfileRepository();
