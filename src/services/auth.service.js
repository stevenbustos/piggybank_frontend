import axios from 'axios';

class AuthService {
    async login(user) {
        return await axios
        .post('auth/login', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            return response.data
        })
    }
    async register(user) {
        return await axios
        .post('auth/signup', {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password
        })
        .then(response => {
            return response.data
        })
    }
    async tokenVerify() {
        return await axios
        .get('auth/token')
        .then(response => {
            return response.data
        })
    }
}


export default new AuthService();
